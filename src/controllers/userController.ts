import { Request, Response, NextFunction } from 'express';
import {
  createUserService,
  getAllUserService,
  getUserByIdService,
  applyRecruitService,
} from '../services/userService';

/**
 * GET /users/
 */
export const getAllUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const users = await getAllUserService();
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

/**
 * GET /users/:id
 */
export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params;
    const user = await getUserByIdService(id);
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

/**
 * POST /users/
 */
export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { name } = req.body;
    console.log(name);
    const result = await createUserService(name);
    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

export const applyRecruit = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // u_id: 사용자 아이디
    // r_id: 채용공고 아이디
    const { r_id, u_id } = req.body;

    const result = await applyRecruitService(
      parseInt(u_id),
      parseInt(r_id, 10),
    );
    return res.status(200).json(result); //사용자가 지원한 공고리스트를 리턴한다.
  } catch (error) {
    console.error(error);
    return res.status(400).send(error);
  }
};
