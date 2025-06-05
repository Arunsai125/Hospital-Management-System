import { Router } from 'express';
import { DashboardController } from '../controllers/DashboardController';
import { auth } from '../middleware/auth';

const router = Router();

router.get('/stats', auth, DashboardController.getStats);

export default router; 