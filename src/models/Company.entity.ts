import {
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Recruit } from './Recruit.entity';

@Entity()
export class Company {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false })
  name: string; // 회사명

  @Column({ nullable: false, default: '대한민국' })
  country: string; // 국가

  @Column()
  location: string; //지역

  // 회사가 올린 채용공고
  @OneToMany((type) => Recruit, (recruit) => recruit.company, {
    cascade: true, // 회사 삭제시 - 등록한 채용공고도 같이삭제.
  })
  recruits: Recruit[];
}
