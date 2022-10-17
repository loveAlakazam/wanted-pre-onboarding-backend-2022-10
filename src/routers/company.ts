import {
  createCompany,
  getAllCompanies,
  getCompanyById,
} from '../controllers/companyController';
import { Router } from 'express';

const router = Router();

router.post('/', createCompany);
router.get('/', getAllCompanies);
router.get('/:id', getCompanyById);

export default router;
