import { Request, Response } from 'express';
import { DoctorService } from '../services/DoctorService';

export class DoctorController {
  private doctorService: DoctorService;

  constructor() {
    this.doctorService = new DoctorService();
  }

  createDoctor = async (req: Request, res: Response): Promise<void> => {
    try {
      const doctor = await this.doctorService.createDoctor(req.body);
      res.status(201).json({ message: 'Doctor created successfully', doctor });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };

  getDoctorById = async (req: Request, res: Response): Promise<void> => {
    try {
      const doctor = await this.doctorService.getDoctorById(Number(req.params.id));
      if (!doctor) {
        res.status(404).json({ message: 'Doctor not found' });
        return;
      }
      res.json({ doctor });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };

  updateDoctor = async (req: Request, res: Response): Promise<void> => {
    try {
      const doctor = await this.doctorService.updateDoctor(Number(req.params.id), req.body);
      if (!doctor) {
        res.status(404).json({ message: 'Doctor not found' });
        return;
      }
      res.json({ message: 'Doctor updated successfully', doctor });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };

  deleteDoctor = async (req: Request, res: Response): Promise<void> => {
    try {
      const success = await this.doctorService.deleteDoctor(Number(req.params.id));
      if (!success) {
        res.status(404).json({ message: 'Doctor not found' });
        return;
      }
      res.json({ message: 'Doctor deleted successfully' });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };

  getAllDoctors = async (_req: Request, res: Response): Promise<void> => {
    try {
      const doctors = await this.doctorService.getAllDoctors();
      res.json({ doctors });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
} 