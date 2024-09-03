// import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { Promotion, PromotionDocument } from './promotion.schema';
// import { CreatePromotionDto } from './dto/create-promotion.dto';

// @Injectable()
// export class PromotionService {
//   constructor(
//     @InjectModel(Promotion.name)
//     private promotionModel: Model<PromotionDocument>,
//   ) {}

//   async create(createPromotionDto: CreatePromotionDto): Promise<Promotion> {
//     const createdPromotion = new this.promotionModel(createPromotionDto);
//     return createdPromotion.save();
//   }

//   async findAllByRestaurant(restaurantId: string): Promise<Promotion[]> {
//     return this.promotionModel.find({ restaurantId }).exec();
//   }

//   async delete(promotionId: string): Promise<void> {
//     const result = await this.promotionModel.findByIdAndDelete(promotionId);
//     if (!result) {
//       throw new NotFoundException('Promotion not found');
//     }
//   }
// }

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Promotion, PromotionDocument } from './promotion.schema';

@Injectable()
export class PromotionService {
  constructor(
    @InjectModel(Promotion.name)
    private promotionModel: Model<PromotionDocument>,
  ) {}

  async getAllPromotions(): Promise<Promotion[]> {
    return this.promotionModel.find().exec();
  }

  async createPromotion(promotion: Promotion): Promise<Promotion> {
    const newPromotion = new this.promotionModel(promotion);
    return newPromotion.save();
  }

  async deletePromotion(promotionId: string): Promise<void> {
    const result = await this.promotionModel
      .deleteOne({ _id: promotionId })
      .exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Promotion not found');
    }
  }
}
