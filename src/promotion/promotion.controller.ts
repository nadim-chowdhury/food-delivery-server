// import {
//   Controller,
//   Post,
//   Body,
//   Get,
//   Param,
//   Delete,
//   UseGuards,
//   Request,
// } from '@nestjs/common';
// import { PromotionService } from './promotion.service';
// import { CreatePromotionDto } from './dto/create-promotion.dto';
// import { JwtAuthGuard } from '../auth/jwt-auth.guard';

// @Controller('promotions')
// export class PromotionController {
//   constructor(private readonly promotionService: PromotionService) {}

//   @UseGuards(JwtAuthGuard)
//   @Post()
//   async create(@Body() createPromotionDto: CreatePromotionDto) {
//     return this.promotionService.create(createPromotionDto);
//   }

//   @UseGuards(JwtAuthGuard)
//   @Get('restaurant/:id')
//   async findAllByRestaurant(@Param('id') restaurantId: string) {
//     return this.promotionService.findAllByRestaurant(restaurantId);
//   }

//   @UseGuards(JwtAuthGuard)
//   @Delete(':id')
//   async delete(@Param('id') promotionId: string) {
//     return this.promotionService.delete(promotionId);
//   }
// }

import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { PromotionService } from './promotion.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Promotion } from './promotion.schema';
// import { RolesGuard } from '../auth/roles.guard';
// import { Roles } from '../auth/roles.decorator';

@Controller('admin/promotions')
// @UseGuards(JwtAuthGuard, RolesGuard)
// @Roles('admin')
export class PromotionController {
  constructor(private readonly promotionService: PromotionService) {}

  @Get()
  async getAllPromotions() {
    return this.promotionService.getAllPromotions();
  }

  @Post()
  async createPromotion(@Body() promotion: Promotion) {
    return this.promotionService.createPromotion(promotion);
  }

  @Delete(':id')
  async deletePromotion(@Param('id') promotionId: string) {
    return this.promotionService.deletePromotion(promotionId);
  }
}
