import { createUser, getAllUser, getUserById } from '../userRepository';
import { User } from '../../models/User.entity';
import { Company } from '../../models/Company.entity';
import { Recruit } from '../../models/Recruit.entity';
import { DataSource } from 'typeorm';

describe('userRepositoryTest', () => {
  beforeAll(async () => {
    await new DataSource({
      type: 'mysql',
      host: process.env.SERVER_HOST,
      port: parseInt(process.env.SERVER_PORT, 10),
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PWD,
      synchronize: true,
      entities: [User, Company, Recruit],
      logging: false,
    })
      .initialize()
      .then(() => {
        console.log('✅ Connect Database Successfully');
      })
      .catch((err) => {
        console.log('❌ Connect Database Failed');
        console.error(err);
      });
  });

  test('getAllUser()', async () => {
    const result = await getAllUser();
    expect(result).toBeDefined();
  });

  test('createUser()', async () => {
    const name = '테스트유저1';
    try {
      await createUser(name);
    } catch (error) {
      expect(createUser(name)).toThrow();
    }
  });
});
