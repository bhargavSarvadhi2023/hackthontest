import express from 'express';
import { getTenderApplicants } from '../controllers/adminController';
import { authenticateUser, authorizeAdmin } from '../middlewares/auth';

const router = express.Router();

router.get('/tenders/:id/applicants', authenticateUser, authorizeAdmin, getTenderApplicants);

export default router;
