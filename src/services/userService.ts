import {
  createUser,
  getAllUser,
  getUserById,
  checkApplyRecruit,
  applyRecruit,
  getUserAppliedList,
} from '../repositories/userRepository';

import {
  IllegalArgumentException,
  DataAlreadyExistsException,
} from '../commons/exceptions';

export const createUserService = async (name: any) => {
  if (typeof name === 'string') {
    return await createUser(name);
  }
  throw new IllegalArgumentException('Not Correct Type');
};

export const getAllUserService = async () => {
  return await getAllUser();
};

export const getUserByIdService = async (id: any) => {
  if (typeof id === 'number' && id !== 0) {
    return await getUserById(id);
  }
  throw new IllegalArgumentException('Not Correct Type');
};

export const applyRecruitService = async (uid: number, rid: number) => {
  if (isNaN(rid) || isNaN(uid)) {
    throw new IllegalArgumentException('rid or uid is NaN');
  }

  // 지원 신청이 되었는지 확인
  const isApply = await checkApplyRecruit(uid, rid);
  if (isApply) {
    throw new DataAlreadyExistsException('이미 지원하셨습니다.');
  }

  // 지원
  await applyRecruit(uid, rid);

  // 지원자가 지원한 공고들을 모두 뿌려준다.
  const result = await getUserAppliedList(uid);
  return result;
};
