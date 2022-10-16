import { Sequelize } from 'sequelize';
import config from '../configs';

const dbHost = config.dbHost;
const dbPort = config.dbPort;
const dbName = config.dbName;
const dbUser = config.dbUser;
const dbPwd = config.dbPwd;

const connectDB = new Sequelize(dbName, dbUser, dbPwd, {
  host: dbHost,
  dialect: 'mysql',
  port: dbPort,
  define: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
    freezeTableName: true,
  },
  logQueryParameters: process.env.NODE_ENV === 'development',
  logging: (query) => {
    console.log(query);
  },
  pool: {
    max: 30,
    min: 0,
    acquire: 30000, // 30초 동안 db연결 실패시 에러발생
    idle: 10000,
  },
});

export default connectDB;
