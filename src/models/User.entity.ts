import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Recruit } from './Recruit.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar', { length: 30, nullable: false })
  name!: string; // 지원자 이름

  // 지원한 채용공고
  @ManyToMany(() => Recruit)
  @JoinTable()
  recruits: Recruit[];
}
