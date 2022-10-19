import { Router } from 'express';
import errorHandlers from '../middlewares/errorHandler';
import {
  getUserById,
  getAllUser,
  createUser,
  applyRecruit,
} from '../controllers/userController';

const router = Router();

router.get('/', getAllUser, errorHandlers);
router.post('/', createUser, errorHandlers);
router.post('/apply', applyRecruit, errorHandlers); // 채용공고 지원
router.get('/:id', getUserById, errorHandlers);

export default router;
