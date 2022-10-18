import {
  createCompany,
  deleteCompany,
  getAllCompanies,
  getCompanyById,
} from '../repositories/companyRepository';

import { createNewCompanyReq } from '../repositories/repoParams/createNewCompanyReq';

export const createCompanyService = async (
  name: string,
  location: string,
  country?: string,
) => {
  const param = new createNewCompanyReq();
  param.name = name;
  param.location = location;
  if (country) {
    param.country = country;
  }

  return await createCompany(param);
};

export const getAllCompaniesService = async () => {
  return await getAllCompanies();
};

export const getCompanyByIdService = async (id: number) => {
  if (typeof id === 'number') {
    return await getCompanyById(id);
  }
  throw new Error('Not Correct Type');
};

export const deleteCompanyService = async (id: number) => {
  return await deleteCompany(id);
};
