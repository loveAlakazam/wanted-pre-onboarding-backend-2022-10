import { Recruit } from '../models/Recruit.entity';
import { Company } from '../models/Company.entity';
import dataSource from '../configs/database';

import { updateRecruitReq } from './repoParams/updateRecruitReq';
import { createNewRecruitReq } from './repoParams/createNewRecruitReq';

const recruits = dataSource.getRepository(Recruit);
const companies = dataSource.getRepository(Company);

export const createNewRecruit = async (param: createNewRecruitReq) => {
  const r = new Recruit();
  r.position = param.position; //채용포지션
  r.bonusMoney = param.bonusMoney; //채용보상금
  r.content = param.content; // 채용내용
  r.technique = param.technique; //사용기술

  // 회사 id 에 해당하는 회사 찾기.
  const _company = await companies.findOneBy({ id: param.cmp_id });
  if (!_company) {
    throw new Error('해당 id의 회사가 존재하지 않습니다.');
  }

  r.company = _company;

  // 채용공고 등록
  const result = recruits.save(r);
  return result;
};

export const updateRecruit = async (
  updated: updateRecruitReq,
  r_id: number,
) => {
  // 수정할 채용공고
  await recruits
    .createQueryBuilder()
    .update()
    .set(updated)
    .where({ id: r_id })
    .execute();
};

export const findOneRecruit = async (cmp_id: number, r_id: number) => {
  // 수정이전 채용공고
  const before = await recruits
    .createQueryBuilder('recruit')
    .innerJoinAndSelect('recruit.company', 'company')
    .where('company.id = :cmp_id', { cmp_id: cmp_id })
    .andWhere('recruit.id = :r_id', { r_id: r_id })
    .getOne();

  return before;
};

export const findOneRecruitById = async (r_id: number) => {
  const result = await recruits.findOneBy({ id: r_id });
  return result;
};

export const allRecruits = async () => {
  const result = await recruits
    .createQueryBuilder('recruit')
    .innerJoinAndSelect('recruit.company', 'company')
    .getMany();
  return result;
};

export const detailRecruit = async (r_id: number) => {
  const result = await recruits
    .createQueryBuilder('recruit')
    .innerJoinAndSelect('recruit.company', 'company')
    .where('recruit.id = :id', { id: r_id })
    .getOne();
  return result;
};

export const getOtherRecruits = async (cmp_id: number, r_id: number) => {
  //현재 공고를 제외한 나머지 공고를 구한다.
  const result = await recruits
    .createQueryBuilder('recruit')
    .innerJoinAndSelect('recruit.company', 'company')
    .where('company.id = :cmp_id', { cmp_id: cmp_id })
    .andWhere('recruit.id != :r_id', { r_id: r_id })
    .getMany();

  return result;
};

export const deleteRecruit = async (r_id: number) => {
  return await recruits
    .createQueryBuilder()
    .delete()
    .from(Recruit)
    .where('id = :r_id', { r_id: r_id })
    .execute();
};

export const searchRecruits = async (searchKey: string) => {
  const result = await recruits
    .createQueryBuilder('recruit')
    .innerJoinAndSelect('recruit.company', 'company')
    .where('company.name like :key', { key: `%${searchKey}%` }) //회사명
    .orWhere('company.country like :key', { key: `%${searchKey}%` }) //국가
    .orWhere('company.location like :key', { key: `%${searchKey}%` }) //지역
    .orWhere('technique like :key', { key: `%${searchKey}%` }) //사용기술
    .orWhere('position like :key', { key: `%${searchKey}%` }) //채용포지션
    .getMany();

  return result;
};
