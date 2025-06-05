import Patient, { PatientAttributes } from '../models/Patient';
import { PatientRepository } from '../repositories/PatientRepository';

export class PatientService {
  private patientRepository: PatientRepository;

  constructor() {
    this.patientRepository = new PatientRepository();
  }

  async createPatient(patientData: Partial<PatientAttributes>): Promise<Patient> {
    return await this.patientRepository.create(patientData);
  }

  async getPatientById(id: number): Promise<Patient | null> {
    return await this.patientRepository.findById(id);
  }

  async updatePatient(id: number, patientData: Partial<PatientAttributes>): Promise<Patient | null> {
    return await this.patientRepository.update(id, patientData);
  }

  async deletePatient(id: number): Promise<boolean> {
    return await this.patientRepository.delete(id);
  }

  async getAllPatients(): Promise<Patient[]> {
 