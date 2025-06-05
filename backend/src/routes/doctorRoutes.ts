import { Router } from 'express';
import { DoctorController } from '../controllers/DoctorController';
import { auth, authorize } from '../middleware/auth';

const router = Router();
const doctorController = new DoctorController();

// Authenticated
router.get('/', auth, doctorController.getAllDoctors);
router.get('/:id', auth, doctorController.getDoctorById);
router.post('/', auth, doctorController.createDoctor);
router.put('/:id', auth, doctorController.updateDoctor);
// Admin only
router.delete('/:id', auth, authorize('ADMIN'), doctorController.deleteDoctor);

export default router; 