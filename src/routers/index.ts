import { Router } from 'express';
import userRouter from './user';
import jobRouter from './job';
import companyRouter from './company';

const router = Router();
router.use('/user', userRouter);
router.use('/company', companyRouter);
router.use('/job', jobRouter);

export default router;
