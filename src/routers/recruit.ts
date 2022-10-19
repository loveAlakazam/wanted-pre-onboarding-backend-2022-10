import { Router } from 'express';
import errorHandlers from '../middlewares/errorHandler';
import {
  createNewRecruit,
  updateRecruit,
  allRecruits,
  detailRecruit,
  deleteRecruit,
  searchRecruits,
} from '../controllers/recruitController';

const router = Router();

router.post('/', createNewRecruit, errorHandlers); // 채용공고 생성
router.get('/', allRecruits, errorHandlers); // 모든 채용공고 조회
router.get('/url', searchRecruits, errorHandlers); //채용공고 검색
router.get('/:id', detailRecruit, errorHandlers); // 상세페이지 조회
router.put('/:id', updateRecruit, errorHandlers); // 채용공고 수정
router.delete('/:id', deleteRecruit, errorHandlers); //채용공고 삭제

export default router;
