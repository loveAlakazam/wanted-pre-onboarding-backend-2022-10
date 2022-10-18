import { User } from '../models/User.entity';
import dataSource from '../configs/database';

const users = dataSource.getRepository(User);
export const createUser = async (_name: string) => {
  const newbie = new User();
  newbie.name = _name;
  const result = await users.save(newbie);
  return result;
};

export const getAllUser = async () => {
  const _users = await users.find();
  return _users;
};

export const getUserById = async (_id: number) => {
  const user = await users.findOneBy({ id: _id });
  return user;
};
