import { Request, Response } from 'express';
import { PatientService } from '../services/PatientService';

export class PatientController {
  private patientService: PatientService;

  constructor() {
    this.patientService = new PatientService();
  }

  createPatient = async (req: Request, res: Response): Promise<void> => {
    try {
      const patient = await this.patientService.createPatient(req.body);
      res.status(201).json({ message: 'Patient created successfully', patient });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };

  getPatientById = async (req: Request, res: Response): Promise<void> => {
    try {
      const patient = await this.patientService.getPatientById(Number(req.params.id));
      if (!patient) {
        res.status(404).json({ message: 'Patient not found' });
        return;
      }
      res.json({ patient });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };

  updatePatient = async (req: Request, res: Response): Promise<void> => {
    try {
      const patient = await this.patientService.updatePatient(Number(req.params.id), req.body);
      if (!patient) {
        res.status(404).json({ message: 'Patient not found' });
        return;
      }
      res.json({ message: 'Patient updated successfully', patient });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };

  deletePatient = async (req: Request, res: Response): Promise<void> => {
    try {
      const success = await this.patientService.deletePatient(Number(req.params.id));
      if (!success) {
        res.status(404).json({ message: 'Patient not found' });
        return;
      }
      res.json({ message: 'Patient deleted successfully' });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };

  getAllPatients = async (_req: Request, res: Response): Promise<void> => {
    try {
      const patients = await this.patientService.getAllPatients();
      res.json({ patients });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
} 