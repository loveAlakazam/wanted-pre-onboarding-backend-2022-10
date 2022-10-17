import { Router } from 'express';
import {
  getUserById,
  getAllUser,
  createUser,
} from '../controllers/userController';

const router = Router();

router.get('/', getAllUser);
router.get('/:id', getUserById);

router.post('/', createUser);

export default router;
