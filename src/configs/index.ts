import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const envFound = dotenv.config();
if (envFound.error) {
  throw new Error('❌ Could not find .env file');
}

export default {
  port: parseInt(process.env.SERVER_PORT as string, 10),
  dbPort: parseInt(process.env.DB_PORT as string, 10),
  dbHost: process.env.DB_HOST as string,
  dbUser: process.env.DB_USER as string,
  dbPwd: process.env.DB_PWD as string,
  dbName: process.env.DB_NAME as string,
};
