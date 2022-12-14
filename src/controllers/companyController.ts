import { Request, Response, NextFunction } from 'express';
import {
  createCompanyService,
  getAllCompaniesService,
  getCompanyByIdService,
  deleteCompanyService,
} from '../services/companyService';

/**
 * POST /users/
 */
export const createCompany = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { name, location, country } = req.body;

    const result = await createCompanyService(name, location, country);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const getAllCompanies = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await getAllCompaniesService();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const getCompanyById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await getCompanyByIdService(parseInt(id, 10));
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const deleteCompany = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    await deleteCompanyService(parseInt(id, 10));
    return res.status(203).json();
  } catch (error) {
    next(error);
  }
};
