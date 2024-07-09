import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Rider, RiderDocument } from './rider.schema';
import { CreateRiderDto } from './dto/create-rider.dto';
import { UpdateRiderDto } from './dto/update-rider.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class RiderService {
  constructor(
    @InjectModel(Rider.name) private riderModel: Model<RiderDocument>,
  ) {}

  async create(createRiderDto: CreateRiderDto): Promise<Rider> {
    const hashedPassword = await bcrypt.hash(createRiderDto.password, 10);
    const createdRider = new this.riderModel({
      ...createRiderDto,
      password: hashedPassword,
    });
    return createdRider.save();
  }

  async findOneByEmail(email: string): Promise<Rider | undefined> {
    return this.riderModel.findOne({ email }).exec();
  }

  async findOneById(riderId: string): Promise<Rider> {
    const rider = await this.riderModel.findById(riderId).exec();
    if (!rider) {
      throw new NotFoundException('Rider not found');
    }
    return rider;
  }

  async update(
    riderId: string,
    updateRiderDto: UpdateRiderDto,
  ): Promise<Rider> {
    const updatedRider = await this.riderModel.findByIdAndUpdate(
      riderId,
      updateRiderDto,
      { new: true },
    );
    if (!updatedRider) {
      throw new NotFoundException('Rider not found');
    }
    return updatedRider;
  }
}
