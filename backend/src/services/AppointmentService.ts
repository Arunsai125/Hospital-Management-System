import Appointment, { AppointmentAttributes } from '../models/Appointment';
import { AppointmentRepository } from '../repositories/AppointmentRepository';

export class AppointmentService {
  private appointmentRepository: AppointmentRepository;

  constructor() {
    this.appointmentRepository = new AppointmentRepository();
  }

  async createAppointment(appointmentData: Partial<AppointmentAttributes>): Promise<Appointment> {
    return await this.appointmentRepository.create(appointmentData);
  }

  async getAppointmentById(id: number): Promise<Appointment | null> {
    return await this.appointmentRepository.findById(id);
  }

  async updateAppointment(id: number, appointmentData: Partial<AppointmentAttributes>): Promise<Appointment | null> {
    return await this.appointmentRepository.update(id, appointmentData);
  }

  async deleteAppointment(id: number): Promise<boolean> {
    return await this.appointmentRepository.delete(id);
  }

  async getAllAppointments(): Promise<Appointment[]> {
    return await this.appointmentRepository.findAll();
  }
} 