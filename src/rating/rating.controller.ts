import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { RatingService } from './rating.service';
import { CreateRatingDto } from './dto/create-rating.dto';

@Controller('ratings')
export class RatingController {
  constructor(private readonly ratingService: RatingService) {}

  @Post()
  async create(@Body() createRatingDto: CreateRatingDto) {
    return this.ratingService.create(createRatingDto);
  }

  @Get()
  async findAll() {
    return this.ratingService.findAll();
  }

  @Get('restaurant/:id')
  async findByRestaurant(@Param('id') restaurantId: string) {
    return this.ratingService.findByRestaurant(restaurantId);
  }
}
