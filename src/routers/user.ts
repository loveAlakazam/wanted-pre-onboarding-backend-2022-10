import { Router } from 'express';
import {
  getUserById,
  getAllUser,
  createUser,
} from '../controllers/userController';

const router = Router();

router.get('/', getAllUser);
router.post('/', createUser);
router.get('/:id', getUserById);

export default router;
