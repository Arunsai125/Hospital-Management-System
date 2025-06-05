import sequelize from './database';
import { User, Patient, Doctor, Appointment } from '../models';
import { UserRole } from '../models/User';

export const initializeDatabase = async () => {
  try {
    // Sync all models with the database
    await sequelize.sync({ alter: true });
    console.log('Database synchronized successfully');

    // Create admin user if it doesn't exist
    const adminExists = await User.findOne({
      where: { email: 'admin@hospital.com' }
    });

    if (!adminExists) {
      await User.create({
        email: 'admin@hospital.com',
        password: 'admin123',
        firstName: 'Admin',
        lastName: 'User',
        role: UserRole.ADMIN
      });
      console.log('Admin user created successfully');
    }
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  }
}; 