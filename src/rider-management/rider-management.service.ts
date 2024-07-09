import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Rider } from '../rider/rider.schema';

@Injectable()
export class RiderManagementService {
  constructor(@InjectModel(Rider.name) private riderModel: Model<Rider>) {}

  async getAllRiders() {
    return this.riderModel.find().exec();
  }

  async updateRiderStatus(riderId: string, isAvailable: boolean) {
    const rider = await this.riderModel
      .findByIdAndUpdate(riderId, { isAvailable }, { new: true })
      .exec();
    if (!rider) {
      throw new NotFoundException('Rider not found');
    }
    return rider;
  }
}
