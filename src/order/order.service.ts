import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from './order.schema';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
  ) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const createdOrder = new this.orderModel(createOrderDto);
    return createdOrder.save();
  }

  async findAll(): Promise<Order[]> {
    return this.orderModel.find().exec();
  }

  async findOne(id: string): Promise<Order> {
    return this.orderModel.findById(id).exec();
  }

  async updateStatus(id: string, status: string): Promise<Order> {
    return this.orderModel
      .findByIdAndUpdate(id, { status }, { new: true })
      .exec();
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from './order.schema';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
  ) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const createdOrder = new this.orderModel(createOrderDto);
    return createdOrder.save();
  }

  async findAllByRestaurant(restaurantId: string): Promise<Order[]> {
    return this.orderModel.find({ restaurantId }).exec();
  }

  async updateStatus(
    orderId: string,
    updateOrderStatusDto: UpdateOrderStatusDto,
  ): Promise<Order> {
    const updatedOrder = await this.orderModel.findByIdAndUpdate(
      orderId,
      updateOrderStatusDto,
      { new: true },
    );
    if (!updatedOrder) {
      throw new NotFoundException('Order not found');
    }
    return updatedOrder;
  }
}

import { Aggregate } from 'mongoose';

@Injectable()
export class OrderService {
  // ... existing methods

  async getSalesReport(restaurantId: string): Promise<any> {
    return this.orderModel
      .aggregate([
        { $match: { restaurantId } },
        {
          $group: {
            _id: null,
            totalSales: { $sum: '$totalAmount' },
            totalOrders: { $sum: 1 },
            averageOrderValue: { $avg: '$totalAmount' },
          },
        },
      ])
      .exec();
  }
}


@Injectable()
export class OrderService {
  // ... existing methods

  async acceptOrder(riderId: string, orderId: string): Promise<Order> {
    const order = await this.orderModel.findById(orderId);
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    order.riderId = riderId;
    return order.save();
  }
}

@Injectable()
export class OrderService {
  // ... existing methods

  async updateOrderStatus(orderId: string, status: string): Promise<Order> {
    const order = await this.orderModel.findById(orderId);
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    order.status = status;
    return order.save();
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from './order.schema';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
  ) {}

  async getAllOrders(): Promise<Order[]> {
    return this.orderModel.find().exec();
  }

  async getOrderById(orderId: string): Promise<Order> {
    const order = await this.orderModel.findById(orderId).exec();
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    return order;
  }

  async updateOrderStatus(orderId: string, status: string): Promise<Order> {
    const order = await this.orderModel
      .findByIdAndUpdate(orderId, { status }, { new: true })
      .exec();
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    return order;
  }
}
