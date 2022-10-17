import { DataSource } from 'typeorm';
import config from '../configs';
import { User } from '../models/User.entity';
import { Recruit } from '../models/Recruit.entity';
import { Company } from '../models/Company.entity';

const dbHost = config.dbHost;
const dbPort = config.dbPort;
const dbName = config.dbName;
const dbUser = config.dbUser;
const dbPwd = config.dbPwd;

const connectDB = new DataSource({
  type: 'mysql',
  host: dbHost,
  port: dbPort,
  database: dbName,
  username: dbUser,
  password: dbPwd,
  synchronize: true,
  // entities: [__dirname + '/../**/*.entity.{.js,.ts}'],
  entities: [User, Recruit, Company],
  logging: true,
});

export default connectDB;
