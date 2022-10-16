import {
  Table,
  Column,
  Model,
  HasMany,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';
import Recruit from './Recruit';

@Table
class Company extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column
  name: string; // 회사명

  @Column
  country: string; // 국가

  @Column
  location: string; //지역

  @HasMany(() => Recruit)
  recruits: Recruit[]; // 회사가 올린 채용공고
}

export default Company;
