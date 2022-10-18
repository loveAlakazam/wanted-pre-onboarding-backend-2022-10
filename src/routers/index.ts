import { Router } from 'express';
import userRouter from './user';
import recruitRouter from './recruit';
import companyRouter from './company';

const router = Router();
router.use('/user', userRouter);
router.use('/company', companyRouter);
router.use('/recruit', recruitRouter);

export default router;
