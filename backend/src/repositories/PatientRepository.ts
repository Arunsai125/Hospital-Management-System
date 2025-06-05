import Patient, { PatientAttributes } from '../models/Patient';

export class PatientRepository {
  async create(patientData: Partial<PatientAttributes>): Promise<Patient> {
    return await Patient.create(patientData);
  }

  async findById(id: number): Promise<Patient | null> {
    return await Patient.findByPk(id);
  }

  async update(id: number, patientData: Partial<PatientAttributes>): Promise<Patient | null> {
    const patient = await Patient.findByPk(id);
    if (!patient) return null;
    return await patient.update(patientData);
  }

  async delete(id: number): Promise<boolean> {
    const patient = await Patient.findByPk(id);
    if (!patient) return false;
    await patient.destroy();
    return true;
  }

  async findAll(): Promise<Patient[]> {
    return await Patient.findAll();
  }
} 