import configs from '../configs';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToMany,
} from 'typeorm';
import { Company } from './Company.entity';
import { User } from './User.entity';

// 채용공고 모델
@Entity()
export class Recruit {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  position: string; //채용포지션

  @Column()
  bonusMoney: number; //채용보상금

  @Column()
  content: string; //채용내용

  @Column()
  technique: string; // 사용기술

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;

  // 회사 아이디 (FK)
  @ManyToOne((type) => Company, (company) => company.recruits, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  company: Company;

  // // 지원한 유저 아이디 (FK)
  // @ManyToMany((type) => User, (user) => user.recruits, { onDelete: 'CASCADE' })
  // user: User;
}
