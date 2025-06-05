import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import User from './User';

export interface DoctorAttributes {
  id?: number;
  userId: number;
  specialization: string;
  licenseNumber: string;
  yearsOfExperience: number;
  education: string;
  consultationFee: number;
  availability?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

class Doctor extends Model<DoctorAttributes> implements DoctorAttributes {
  public id!: number;
  public userId!: number;
  public specialization!: string;
  public licenseNumber!: string;
  public yearsOfExperience!: number;
  public education!: string;
  public consultationFee!: number;
  public availability!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Doctor.init(
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
    specialization: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    licenseNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    yearsOfExperience: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    education: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    consultationFee: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    availability: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Doctor',
  }
);

Doctor.belongsTo(User, { foreignKey: 'userId' });
User.hasOne(Doctor, { foreignKey: 'userId' });

export default Doctor; 