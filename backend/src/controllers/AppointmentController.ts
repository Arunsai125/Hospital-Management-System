import { Request, Response } from 'express';
import { AppointmentService } from '../services/AppointmentService';

export class AppointmentController {
  private appointmentService: AppointmentService;

  constructor() {
    this.appointmentService = new AppointmentService();
  }

  createAppointment = async (req: Request, res: Response): Promise<void> => {
    try {
      const appointment = await this.appointmentService.createAppointment(req.body);
      res.status(201).json({ message: 'Appointment created successfully', appointment });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };

  getAppointmentById = async (req: Request, res: Response): Promise<void> => {
    try {
      const appointment = await this.appointmentService.getAppointmentById(Number(req.params.id));
      if (!appointment) {
        res.status(404).json({ message: 'Appointment not found' });
        return;
      }
      res.json({ appointment });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };

  updateAppointment = async (req: Request, res: Response): Promise<void> => {
    try {
      const appointment = await this.appointmentService.updateAppointment(Number(req.params.id), req.body);
      if (!appointment) {
        res.status(404).json({ message: 'Appointment not found' });
        return;
      }
      res.json({ message: 'Appointment updated successfully', appointment });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };

  deleteAppointment = async (req: Request, res: Response): Promise<void> => {
    try {
      const success = await this.appointmentService.deleteAppointment(Number(req.params.id));
      if (!success) {
        res.status(404).json({ message: 'Appointment not found' });
        return;
      }
      res.json({ message: 'Appointment deleted successfully' });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };

  getAllAppointments = async (_req: Request, res: Response): Promise<void> => {
    try {
      const appointments = await this.appointmentService.getAllAppointments();
      res.json({ appointments });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
} 