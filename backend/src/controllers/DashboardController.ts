import { Request, Response } from 'express';
import Patient from '../models/Patient';
import Doctor from '../models/Doctor';
import Appointment from '../models/Appointment';
import { Op } from 'sequelize';

export class DashboardController {
  static async getStats(req: Request, res: Response) {
    try {
      const [totalPatients, totalDoctors, totalAppointments, todayAppointments] = await Promise.all([
        Patient.count(),
        Doctor.count(),
        Appointment.count(),
        Appointment.count({
          where: {
            appointmentDate: {
              [Op.gte]: new Date(new Date().setHours(0, 0, 0, 0)),
              [Op.lt]: new Date(new Date().setHours(23, 59, 59, 999)),
            },
          },
        }),
      ]);
      res.json({
        totalPatients,
        totalDoctors,
        totalAppointments,
        todayAppointments,
      });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
} 