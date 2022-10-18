import { Router } from 'express';
import {
  createNewRecruit,
  updateRecruit,
  allRecruits,
  detailRecruit,
  deleteRecruit,
} from '../controllers/recruitController';

const router = Router();

router.post('/', createNewRecruit); // 채용공고 생성
router.get('/', allRecruits); // 모든 채용공고 조회
router.get('/:id', detailRecruit); // 상세페이지 조회
router.put('/:id', updateRecruit); // 채용공고 수정
router.delete('/:id', deleteRecruit); //채용공고 삭제

export default router;
