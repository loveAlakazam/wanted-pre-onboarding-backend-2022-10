import { Request, Response, NextFunction } from 'express';
import {
  createUserService,
  getAllUserService,
  getUserByIdService,
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
