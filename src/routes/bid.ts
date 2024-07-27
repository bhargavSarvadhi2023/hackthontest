import express from 'express';
import { submitBid } from '../controllers/bidController';
import { authenticateUser } from '../middlewares/auth';

const router = express.Router();

router.post('/', authenticateUser, submitBid);

export default router;