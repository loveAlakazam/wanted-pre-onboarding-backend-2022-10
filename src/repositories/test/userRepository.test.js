import sequelize from '../../configs/database';
import { createUser, getAllUser, getUserById } from '../userRepository';
import { User } from '../../models/User.entity';
import dotenv from 'dotenv';
dotenv.config();

describe('userRepositoryTest', () => {
  beforeAll(async () => {
    await sequelize
      .authenticate()
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
