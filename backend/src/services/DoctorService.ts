import Doctor, { DoctorAttributes } from '../models/Doctor';
import { DoctorRepository } from '../repositories/DoctorRepository';

export class DoctorService {
  private doctorRepository: DoctorRepository;

  constructor() {
    this.doctorRepository = new DoctorRepository();
  }

  async createDoctor(doctorData: Partial<DoctorAttributes>): Promise<Doctor> {
    return await this.doctorRepository.create(doctorData);
  }

  async getDoctorById(id: number): Promise<Doctor | null> {
    return await this.doctorRepository.findById(id);
  }

  async updateDoctor(id: number, doctorData: Partial<DoctorAttributes>): Promise<Doctor | null> {
    return await this.doctorRepository.update(id, doctorData);
  }

  async deleteDoctor(id: number): Promise<boolean> {
    return await this.doctorRepository.delete(id);
  }

  async getAllDoctors(): Promise<Doctor[]> {
    return await this.doctorRepository.findAll();
  }
} 