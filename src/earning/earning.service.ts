import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Earning, EarningDocument } from './earning.schema';

@Injectable()
export class EarningService {
  constructor(
    @InjectModel(Earning.name) private earningModel: Model<EarningDocument>,
  ) {}

  async getEarningsByRider(riderId: string): Promise<Earning[]> {
    return this.earningModel.find({ riderId }).exec();
  }
}
