import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Rating, RatingDocument } from './rating.schema';
import { CreateRatingDto } from './dto/create-rating.dto';

@Injectable()
export class RatingService {
  constructor(
    @InjectModel(Rating.name) private ratingModel: Model<RatingDocument>,
  ) {}

  async create(createRatingDto: CreateRatingDto): Promise<Rating> {
    const createdRating = new this.ratingModel(createRatingDto);
    return createdRating.save();
  }

  async findAll(): Promise<Rating[]> {
    return this.ratingModel.find().exec();
  }

  async findByRestaurant(restaurantId: string): Promise<Rating[]> {
    return this.ratingModel.find({ restaurantId }).exec();
  }
}
