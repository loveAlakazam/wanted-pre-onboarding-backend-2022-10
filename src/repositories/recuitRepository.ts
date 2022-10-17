import { Recruit } from '../models/Recruit.entity';
import { Company } from '../models/Company.entity';
import dataSource from '../configs/database';
import { createNewRecruitRequestParam } from './repoParams/createNewRecruitReq';

const recruits = dataSource.getRepository(Recruit);
const companies = dataSource.getRepository(Company);
export const createNewRecruit = async (param: createNewRecruitRequestParam) => {
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
