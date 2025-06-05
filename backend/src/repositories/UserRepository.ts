import { User, UserAttributes } from '../models/User';

export class UserRepository {
  async create(userData: Partial<UserAttributes>): Promise<User> {
    return await User.create(userData);
  }

  async findById(id: number): Promise<User | null> {
    return await User.findByPk(id);
  }

  async findByEmail(email: string): Promise<User | null> {
    return await User.findOne({ where: { email } });
  }

  async update(id: number, userData: Partial<UserAttributes>): Promise<User | null> {
    const user = await User.findByPk(id);
    if (!user) {
      return null;
    }
    return await user.update(userData);
  }

  async delete(id: number): Promise<boolean> {
    const user = await User.findByPk(id);
    if (!user) {
      return false;
    }
    await user.destroy();
    return true;
  }

  async findAll(): Promise<User[]> {
    return await User.findAll();
  }
} 