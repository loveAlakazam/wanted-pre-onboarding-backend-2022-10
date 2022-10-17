import { createNewRecruitReq } from '../repositories/repoParams/createNewRecruitReq';
import {
  createNewRecruit,
  findRecruitByCmpId,
  updateRecruit,
  allRecruits,
  detailRecruit,
  getOtherRecruits,
} from '../repositories/recuitRepository';
import { updateRecruitReq } from '../repositories/repoParams/updateRecruitReq';
import {
  RecruitmentData,
  RecruitmentDetail,
} from '../models/responseData/recruitResponse';

export const createNewRecruitService = async (
  cmp_id: number,
  content: string,
  position: string,
  technique: string,
  bonusMoney?: number,
) => {
  const param = new createNewRecruitReq();
  param.position = position;
  param.bonusMoney = bonusMoney;
  param.content = content;
  param.technique = technique;
  param.cmp_id = cmp_id;

  const _result = await createNewRecruit(param);
  const result = new RecruitmentData(
    _result.id,
    _result.company.name,
    _result.company.country,
    _result.company.location,
    _result.position,
    _result.bonusMoney,
    _result.technique,
  );

  return result;
};

export const allRecruitsService = async () => {
  const _result = await allRecruits();

  const result = await Promise.all(
    _result.map((r) => {
      const recruit = new RecruitmentData(
        r.id,
        r.company.name,
        r.company.country,
        r.company.location,
        r.position,
        r.bonusMoney,
        r.technique,
      );
      return recruit;
    }),
  );

  return result;
};

export const detailRecruitService = async (id: number) => {
  const _result = await detailRecruit(id);
  if (!_result) {
    throw new Error('id에 맞는 회사가 존재하지 않습니다.');
  }

  // 회사가 올린 다른 채용공고를 구한다.
  const cmp_id = _result.company.id;
  const otherRecs = await getOtherRecruits(cmp_id, id);

  const result = new RecruitmentDetail(
    _result.id,
    _result.company.name,
    _result.company.country,
    _result.company.location,
    _result.position,
    _result.bonusMoney,
    _result.technique,
  );

  // 회사가 올린 다른 채용공고의 아이디들을 구한다.
  if (otherRecs.length) {
    const rIds = await Promise.all(
      otherRecs.map((r) => {
        return r.id;
      }),
    );

    result.other_rids = rIds;
  }

  return result;
};

export const updateRecruitService = async (
  cmp_id: number,
  content?: string,
  position?: string,
  technique?: string,
  bonusMoney?: number,
) => {
  const param = new updateRecruitReq();
  param.position = position;
  param.bonusMoney = bonusMoney;
  param.content = content;
  param.technique = technique;
  param.cmp_id = cmp_id;

  // 수정이전 채용공고 찾기
  const result = await findRecruitByCmpId(cmp_id);
  //   const result = await updateRecruit(param);
  return result;
};
