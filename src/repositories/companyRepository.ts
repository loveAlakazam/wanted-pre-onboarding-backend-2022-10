import dataSource from '../configs/database';
import { Company } from '../models/Company.entity';
import { createNewCompanyReq } from './repoParams/createNewCompanyReq';

const companies = dataSource.getRepository(Company);
export const createCompany = async (param: createNewCompanyReq) => {
  const nc = new Company();
  nc.name = param.name;
  nc.country = param.country;
  nc.location = param.location;

  const result = await companies.save(nc);
  return result;
};

export const getAllCompanies = async () => {
  const _companies = await companies.find();
  return _companies;
};

export const getCompanyById = async (cmp_id: number) => {
  const _company = await companies.findOneBy({ id: cmp_id });
  return _company;
};

export const deleteCompany = async (cmp_id: number) => {
  return await companies
    .createQueryBuilder()
    .delete()
    .from(Company)
    .where('id = :cmp_id', { cmp_id: cmp_id })
    .execute();
};
