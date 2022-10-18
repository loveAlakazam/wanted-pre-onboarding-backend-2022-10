import { Recruit } from '../Recruit.entity';

/**
 * [GET] /recruit/
 */
export class RecruitmentData {
  r_id: number; // 채용공고_id
  cmp_name: string; // 회사명
  country: string; // 국가
  location: string; // 지역
  position: string; // 채용포지션
  bonus_money: number; // 채용보상금
  technique: string; // 사용기술

  constructor(
    r_id: number,
    cmp_name: string,
    country: string,
    location: string,
    position: string,
    bonus_money: number,
    technique: string,
  ) {
    this.r_id = r_id;
    this.cmp_name = cmp_name;
    this.country = country;
    this.location = location;
    this.position = position;
    this.bonus_money = bonus_money;
    this.technique = technique;
  }
}

/**
 * [GET] /recruit/:id
 */
export class RecruitmentDetail {
  r_id: number; // 채용공고_id
  cmp_name: string; // 회사명
  country: string; // 국가
  location: string; // 지역
  position: string; // 채용포지션
  bonus_money: number; // 채용보상금
  technique: string; // 사용기술
  content?: string; // 채용내용
  other_rids?: number[]; //회사가 올린 다른 채용공고 id

  constructor(
    r_id: number,
    cmp_name: string,
    country: string,
    location: string,
    position: string,
    bonus_money: number,
    technique: string,
    content?: string,
    other_rids?: number[],
  ) {
    this.r_id = r_id;
    this.cmp_name = cmp_name;
    this.country = country;
    this.location = location;
    this.position = position;
    this.bonus_money = bonus_money;
    this.technique = technique;
    this.content = content;
    this.other_rids = other_rids;
  }
}
