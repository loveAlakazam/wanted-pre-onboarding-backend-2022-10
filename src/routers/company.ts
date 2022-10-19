import {
  createCompany,
  getAllCompanies,
  getCompanyById,
  deleteCompany,
} from '../controllers/companyController';
import { Router } from 'express';
import errorHandlers from '../middlewares/errorHandler';

const router = Router();

router.post('/', createCompany, errorHandlers);
router.get('/', getAllCompanies, errorHandlers);
router.get('/:id', getCompanyById, errorHandlers);
router.delete('/:id', deleteCompany, errorHandlers);

export default router;
