import { Router } from 'express';
import {
  getUserById,
  getAllUser,
  createUser,
  applyRecruit,
} from '../controllers/userController';

const router = Router();

router.get('/', getAllUser);
router.post('/', createUser);
router.post('/apply', applyRecruit); // 채용공고 지원
router.get('/:id', getUserById);

export default router;
