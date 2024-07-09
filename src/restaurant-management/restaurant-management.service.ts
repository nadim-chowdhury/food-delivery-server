import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Restaurant } from '../restaurant/restaurant.schema';

@Injectable()
export class RestaurantManagementService {
  constructor(
    @InjectModel(Restaurant.name) private restaurantModel: Model<Restaurant>,
  ) {}

  async getAllRestaurants() {
    return this.restaurantModel.find().exec();
  }

  async updateRestaurantStatus(restaurantId: string, isActive: boolean) {
    const restaurant = await this.restaurantModel
      .findByIdAndUpdate(restaurantId, { isActive }, { new: true })
      .exec();
    if (!restaurant) {
      throw new NotFoundException('Restaurant not found');
    }
    return restaurant;
  }
}
