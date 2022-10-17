import {
  Table,
  Column,
  Model,
  HasMany,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  ForeignKey,
  BelongsTo,
  CreatedAt,
  UpdatedAt,
  Default,
} from 'sequelize-typescript';
import Company from './Company';
import User from './User';

// 채용공고 모델
@Table({ timestamps: true, tableName: 'recruits' })
class Recruit extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column
  @AllowNull(false)
  position: string; //채용포지션

  @Column
  @Default(0)
  bonusMoney: number; //채용보상금

  @Column
  @AllowNull(false)
  content: string; //채용내용

  @Column
  technique: string; // 사용기술

  @CreatedAt
  created: Date;

  @UpdatedAt
  updated: Date;

  // 회사 아이디 (FK)
  @ForeignKey(() => Company)
  @Column
  cmpId!: number;

  @BelongsTo(() => Company)
  company: Company;

  // 지원한 유저 아이디 (FK)
  @ForeignKey(() => User)
  @Column
  userId!: number;

  @BelongsTo(() => User)
  user: User;
}

export default Recruit;
