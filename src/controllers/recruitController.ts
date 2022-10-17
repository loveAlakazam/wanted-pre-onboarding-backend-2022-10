import { Request, Response, NextFunction, response } from 'express';
import {
  createNewRecruitService,
  updateRecruitService,
  allRecruitsService,
  detailRecruitService,
} from '../services/recruitService';
export const createNewRecruit = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { position, bonusMoney, content, technique, cmp_id } = req.body;
    const result = await createNewRecruitService(
      cmp_id,
      content,
      position,
      technique,
      bonusMoney,
    );

    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

export const allRecruits = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await allRecruitsService();
    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

export const detailRecruit = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await detailRecruitService(parseInt(id, 10));
    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

export const updateRecruit = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { position, bonusMoney, content, technique, cmp_id } = req.body;
    const result = await updateRecruitService(
      cmp_id,
      content,
      position,
      technique,
      bonusMoney,
    );
    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};
