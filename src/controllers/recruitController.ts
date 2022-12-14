import { Request, Response, NextFunction } from 'express';
import {
  createNewRecruitService,
  updateRecruitService,
  allRecruitsService,
  detailRecruitService,
  deleteRecruitService,
  searchRecruitsService,
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
    next(error);
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
    next(error);
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
    next(error);
  }
};

export const updateRecruit = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;

    const { position, bonusMoney, content, technique, cmp_id } = req.body;
    await updateRecruitService(
      parseInt(id, 10),
      cmp_id,
      content,
      position,
      technique,
      bonusMoney,
    );
    return res.status(203).json();
  } catch (error) {
    next(error);
  }
};

export const deleteRecruit = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    await deleteRecruitService(parseInt(id, 10));
    return res.status(203).json();
  } catch (error) {
    next(error);
  }
};

export const searchRecruits = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { search } = req.query;
    const result = await searchRecruitsService(search);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
