import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Restaurant, RestaurantDocument } from './restaurant.schema';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectModel(Restaurant.name)
    private restaurantModel: Model<RestaurantDocument>,
  ) {}

  async create(createRestaurantDto: CreateRestaurantDto): Promise<Restaurant> {
    const createdRestaurant = new this.restaurantModel(createRestaurantDto);
    return createdRestaurant.save();
  }

  async findAll(): Promise<Restaurant[]> {
    return this.restaurantModel.find().exec();
  }

  async findOne(id: string): Promise<Restaurant> {
    return this.restaurantModel.findById(id).exec();
  }

  async filterBy(criteria: any): Promise<Restaurant[]> {
    return this.restaurantModel.find(criteria).exec();
  }
}

import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Restaurant, RestaurantDocument } from './restaurant.schema';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { CreateMenuItemDto } from './dto/create-menu-item.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectModel(Restaurant.name)
    private restaurantModel: Model<RestaurantDocument>,
    private jwtService: JwtService,
  ) {}

  async register(
    createRestaurantDto: CreateRestaurantDto,
  ): Promise<Restaurant> {
    const hashedPassword = await bcrypt.hash(createRestaurantDto.password, 10);
    const createdRestaurant = new this.restaurantModel({
      ...createRestaurantDto,
      password: hashedPassword,
    });
    return createdRestaurant.save();
  }

  async login(
    email: string,
    password: string,
  ): Promise<{ accessToken: string }> {
    const restaurant = await this.restaurantModel.findOne({ email });
    if (!restaurant) {
      throw new NotFoundException('Restaurant not found');
    }
    const isPasswordValid = await bcrypt.compare(password, restaurant.password);
    if (!isPasswordValid) {
      throw new BadRequestException('Invalid credentials');
    }
    const payload = { email: restaurant.email, sub: restaurant._id };
    const accessToken = this.jwtService.sign(payload);
    return { accessToken };
  }

  async updateProfile(
    id: string,
    updateRestaurantDto: UpdateRestaurantDto,
  ): Promise<Restaurant> {
    const updatedRestaurant = await this.restaurantModel.findByIdAndUpdate(
      id,
      updateRestaurantDto,
      { new: true },
    );
    if (!updatedRestaurant) {
      throw new NotFoundException('Restaurant not found');
    }
    return updatedRestaurant;
  }

  async addMenuItem(
    id: string,
    createMenuItemDto: CreateMenuItemDto,
  ): Promise<Restaurant> {
    const restaurant = await this.restaurantModel.findById(id);
    if (!restaurant) {
      throw new NotFoundException('Restaurant not found');
    }
    restaurant.menu.push(createMenuItemDto);
    return restaurant.save();
  }

  async updateMenuItem(
    restaurantId: string,
    itemId: string,
    createMenuItemDto: CreateMenuItemDto,
  ): Promise<Restaurant> {
    const restaurant = await this.restaurantModel.findById(restaurantId);
    if (!restaurant) {
      throw new NotFoundException('Restaurant not found');
    }
    const itemIndex = restaurant.menu.findIndex((item) => item._id == itemId);
    if (itemIndex === -1) {
      throw new NotFoundException('Menu item not found');
    }
    restaurant.menu[itemIndex] = {
      ...restaurant.menu[itemIndex],
      ...createMenuItemDto,
    };
    return restaurant.save();
  }

  async deleteMenuItem(
    restaurantId: string,
    itemId: string,
  ): Promise<Restaurant> {
    const restaurant = await this.restaurantModel.findById(restaurantId);
    if (!restaurant) {
      throw new NotFoundException('Restaurant not found');
    }
    restaurant.menu = restaurant.menu.filter((item) => item._id != itemId);
    return restaurant.save();
  }
}

@Injectable()
export class RestaurantService {
  // ... existing methods

  async respondToReview(reviewId: string, response: string): Promise<Review> {
    const review = await this.reviewModel.findById(reviewId);
    if (!review) {
      throw new NotFoundException('Review not found');
    }
    review.response = response;
    return review.save();
  }
}
