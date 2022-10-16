import { Router } from 'express';
import userRouter from './user';
import recruitRouter from './recruit';
import companyRouter from './company';

const router = Router();
router.use('/user', userRouter);
router.use('/recruit', companyRouter);
router.use('/job', recruitRouter);

export default router;
