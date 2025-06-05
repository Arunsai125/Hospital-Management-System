import Appointment, { AppointmentAttributes } from '../models/Appointment';

export class AppointmentRepository {
  async create(appointmentData: Partial<AppointmentAttributes>): Promise<Appointment> {
    return await Appointment.create(appointmentData);
  }

  async findById(id: number): Promise<Appointment | null> {
    return await Appointment.findByPk(id);
  }

  async update(id: number, appointmentData: Partial<AppointmentAttributes>): Promise<Appointment | null> {
    const appointment = await Appointment.findByPk(id);
    if (!appointment) return null;
    return await appointment.update(appointmentData);
  }

  async delete(id: number): Promise<boolean> {
    const appointment = await Appointment.findByPk(id);
    if (!appointment) return false;
    await appointment.destroy();
    return true;
  }

  async findAll(): Promise<Appointment[]> {
    return await Appointment.findAll();
  }
} 