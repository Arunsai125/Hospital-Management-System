import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { auth, authorize } from '../middleware/auth';

const router = Router();
const userController = new UserController();

// Public routes
router.post('/register', userController.register);
router.post('/login', userController.login);

// Protected routes
router.get('/profile', auth, userController.getProfile);
router.put('/profile', auth, userController.updateProfile);
router.put('/change-password', auth, userController.changePassword);

// Admin only routes
router.get('/users', auth, authorize('ADMIN'), userController.getAllUsers);
router.delete('/users/:id', auth, authorize('ADMIN'), userController.deleteUser);

export default router; 