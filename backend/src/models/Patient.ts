import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import User from './User';

export interface PatientAttributes {
  id?: number;
  userId: number;
  dateOfBirth: Date;
  gender: 'MALE' | 'FEMALE' | 'OTHER';
  bloodGroup?: string;
  medicalHistory?: string;
  allergies?: string;
  emergencyContactName?: string;
  emergencyContactPhone?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

class Patient extends Model<PatientAttributes> implements PatientAttributes {
  public id!: number;
  public userId!: number;
  public dateOfBirth!: Date;
  public gender!: 'MALE' | 'FEMALE' | 'OTHER';
  public bloodGroup!: string;
  public medicalHistory!: string;
  public allergies!: string;
  public emergencyContactName!: string;
  public emergencyContactPhone!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Patient.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      },
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM('MALE', 'FEMALE', 'OTHER'),
      allowNull: false,
    },
    bloodGroup: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    medicalHistory: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    allergies: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    emergencyContactName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    emergencyContactPhone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Patient',
  }
);

Patient.belongsTo(User, { foreignKey: 'userId' });
User.hasOne(Patient, { foreignKey: 'userId' });

export default Patient; 