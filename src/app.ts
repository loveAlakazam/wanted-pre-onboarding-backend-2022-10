import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import configs from './configs';
import connectDB from './configs/database';
import { exit } from 'process';
import router from './routers';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));

// mysql connect
const connectDBHandler = async () => {
  try {
    await connectDB.authenticate();
    console.log('✅ Connect Database Successfully');
  } catch (error) {
    console.log('❌ Connect Database Failed');
    console.error(error);
    exit(1);
  }
};

connectDBHandler();

// routers
app.use(router);

// app
const port = configs.port;
app
  .listen(port, () => {
    console.log(`Server listening on port at ${port}`);
  })
  .on('error', (err) => {
    console.error(err);
    process.exit(1);
  });