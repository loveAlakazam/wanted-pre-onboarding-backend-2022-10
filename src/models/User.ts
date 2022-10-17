import {
  Table,
  Column,
  Model,
  AllowNull,
  AutoIncrement,
  PrimaryKey,
  HasMany,
} from 'sequelize-typescript';
import Recruit from './Recruit';

@Table({ timestamps: false, tableName: 'users' })
class User extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column
  @AllowNull(false)
  name: string; // 지원자 이름

  // 지원한 채용공고
  @HasMany(() => Recruit)
  recruits: Recruit[];
}

export default User;
