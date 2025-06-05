import { Router } from 'express';
import { PatientController } from '../controllers/PatientController';
import { auth, authorize } from '../middleware/auth';

const router = Router();
const patientController = new PatientController();

// Public: none
// Authenticated
router.get('/', auth, patientController.getAllPatients);
router.get('/:id', auth, patientController.getPatientById);
router.post('/', auth, patientController.createPatient);
router.put('/:id', auth, patientController.updatePatient);
// Admin only
router.delete('/:id', auth, authorize('ADMIN'), patientController.deletePatient);

export default router; 