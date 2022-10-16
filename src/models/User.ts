import {
  Table,
  Column,
  Model,
  AllowNull,
  AutoIncrement,
  PrimaryKey,
} from 'sequelize-typescript';

@Table
class User extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column
  @AllowNull(false)
  name: string; // 지원자 이름
}

export default User;
