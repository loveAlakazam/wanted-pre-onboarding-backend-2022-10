import {
  createUser,
  getAllUser,
  getUserById,
} from '../repositories/userRepository';

export const createUserService = async (name: any) => {
  if (typeof name === 'string') {
    return await createUser(name);
  }
};

export const getAllUserService = async () => {
  return await getAllUser();
};

export const getUserByIdService = async (id: any) => {
  if (typeof id === 'number' && id !== 0) {
    return await getUserById(id);
  }
  throw new Error('Not Number & Empty');
};
