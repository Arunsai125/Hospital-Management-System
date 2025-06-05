import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import User from './User';
import Doctor from './Doctor';
import Patient from './Patient';

export enum AppointmentStatus {
  SCHEDULED = 'SCHEDULED',
  CONFIRMED = 'CONFIRMED',
  CANCELLED = 'CANCELLED',
  COMPLETED = 'COMPLETED'
}

export interface AppointmentAttributes {
  id?: number;
  patientId: number;
  doctorId: number;
  appointmentDate: Date;
  status: AppointmentStatus;
  reason: string;
  notes?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

class Appointment extends Model<AppointmentAttributes> implements AppointmentAttributes {
  public id!: number;
  public patientId!: number;
  public doctorId!: number;
  public appointmentDate!: Date;
  public status!: AppointmentStatus;
  public reason!: string;
  public notes!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Appointment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    patientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Patient,
        key: 'id',
      },
    },
    doctorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Doctor,
        key: 'id',
      },
    },
    appointmentDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM(...Object.values(AppointmentStatus)),
      allowNull: false,
      defaultValue: AppointmentStatus.SCHEDULED,
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Appointment',
  }
);

Appointment.belongsTo(Patient, { foreignKey: 'patientId' });
Patient.hasMany(Appointment, { foreignKey: 'patientId' });

Appointment.belongsTo(Doctor, { foreignKey: 'doctorId' });
Doctor.hasMany(Appointment, { foreignKey: 'doctorId' });

export default Appointment; 