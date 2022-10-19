import { User } from '../models/User.entity';
import { Recruit } from '../models/Recruit.entity';
import dataSource from '../configs/database';
import { findOneRecruitById } from './recruitRepository';

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

export const checkApplyRecruit = async (uid: number, rid: number) => {
  const result = await users
    .createQueryBuilder('user')
    .leftJoinAndSelect('user.recruits', 'recruit')
    .where('user.id = :uid', { uid: uid })
    .andWhere('recruit.id = :rid', { rid: rid })
    .getOne();

  return result;
};

export const applyRecruit = async (uid: number, rid: number) => {
  // 유저정보
  const _user = await getUserById(uid);

  // 지원한 채용공고 정보 구하기
  const _recruit = await findOneRecruitById(rid);

  // 유저가 지원한 기업 추가.
  await dataSource
    .createQueryBuilder()
    .relation(User, 'recruits')
    .of(_user)
    .add(_recruit);
};

export const getUserAppliedList = async (uid: number) => {
  const _user = await getUserById(uid);
  const result = await dataSource
    .createQueryBuilder()
    .relation(User, 'recruits')
    .of(_user)
    .loadMany();

  return result;
};
