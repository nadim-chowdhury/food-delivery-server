import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../user/user.schema';
import { Restaurant } from '../restaurant/restaurant.schema';
import { Rider } from '../rider/rider.schema';
import { Order } from '../order/order.schema';

@Injectable()
export class DashboardService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(Restaurant.name) private restaurantModel: Model<Restaurant>,
    @InjectModel(Rider.name) private riderModel: Model<Rider>,
    @InjectModel(Order.name) private orderModel: Model<Order>,
  ) {}

  async getOverview() {
    const activeUsers = await this.userModel
      .countDocuments({ isActive: true })
      .exec();
    const totalOrders = await this.orderModel.countDocuments().exec();
    const activeRestaurants = await this.restaurantModel
      .countDocuments({ isActive: true })
      .exec();
    const activeRiders = await this.riderModel
      .countDocuments({ isAvailable: true })
      .exec();

    return {
      activeUsers,
      totalOrders,
      activeRestaurants,
      activeRiders,
    };
  }
}
