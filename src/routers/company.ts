import {
  createCompany,
  getAllCompanies,
  getCompanyById,
  deleteCompany,
} from '../controllers/companyController';
import { Router } from 'express';

const router = Router();

router.post('/', createCompany);
router.get('/', getAllCompanies);
router.get('/:id', getCompanyById);
router.delete('/:id', deleteCompany);

export default router;
