export class updateRecruitReq {
  position?: string;
  bonusMoney?: number;
  content?: string;
  technique?: string;

  constructor(
    position?: string,
    bonusMoney?: number,
    content?: string,
    technique?: string,
  ) {
    this.position = position;
    this.bonusMoney = bonusMoney;
    this.content = content;
    this.technique = technique;
  }
}
