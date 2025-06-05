import { Router } from 'express';
import { AppointmentController } from '../controllers/AppointmentController';
import { auth, authorize } from '../middleware/auth';

const router = Router();
const appointmentController = new AppointmentController();

// Authenticated
router.get('/', auth, appointmentController.getAllAppointments);
router.get('/:id', auth, appointmentController.getAppointmentById);
router.post('/', auth, appointmentController.createAppointment);
router.put('/:id', auth, appointmentController.updateAppointment);
// Admin only
router.delete('/:id', auth, authorize('ADMIN'), appointmentController.deleteAppointment);

export default router; 