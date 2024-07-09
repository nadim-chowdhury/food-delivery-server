import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../user/user.schema';

@Injectable()
export class UserManagementService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async getAllUsers() {
    return this.userModel.find().exec();
  }

  async updateUserStatus(userId: string, isActive: boolean) {
    const user = await this.userModel
      .findByIdAndUpdate(userId, { isActive }, { new: true })
      .exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
}
