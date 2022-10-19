import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import configs from './configs';
import connectDB from './configs/database';
import { exit } from 'process';
import router from './routers';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));

// routers
app.use(router);

// app
const port = configs.port;
app
  .listen(port, async () => {
    // mysql connect
    if (process.env.NODE_ENV !== 'test') {
      await connectDB
        .initialize()
        .then(() => {
          console.log('✅ Connect Database Successfully');
        })
        .catch((err) => {
          console.log('❌ Connect Database Failed');
          console.error(err);
          exit(1);
        });
    }
    console.log(`Server listening on port at ${port}`);
  })
  .on('error', (err) => {
    console.error(err);
    process.exit(1);
  });
