import { Router } from 'express';
import {
  createNewRecruit,
  updateRecruit,
  allRecruits,
  detailRecruit,
} from '../controllers/recruitController';

const router = Router();

router.post('/', createNewRecruit); // 채용공고 생성
router.put('/', updateRecruit); // 채용공고 수정 (아직)
// router.delete("/", deleteRecruit); //채용공고 삭제 (아직)
router.get('/', allRecruits); // 모든 채용공고 조회
router.get('/:id', detailRecruit); // 상세페이지 조회

export default router;
