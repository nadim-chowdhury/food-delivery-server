import {
  Controller,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { CreateMenuItemDto } from './dto/create-menu-item.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('restaurants')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Post('register')
  async register(@Body() createRestaurantDto: CreateRestaurantDto) {
    return this.restaurantService.register(createRestaurantDto);
  }

  @Post('login')
  async login(
    @Body() { email, password }: { email: string; password: string },
  ) {
    return this.restaurantService.login(email, password);
  }

  @UseGuards(JwtAuthGuard)
  @Put('profile')
  async updateProfile(
    @Request() req,
    @Body() updateRestaurantDto: UpdateRestaurantDto,
  ) {
    return this.restaurantService.updateProfile(
      req.user.userId,
      updateRestaurantDto,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Post('menu')
  async addMenuItem(
    @Request() req,
    @Body() createMenuItemDto: CreateMenuItemDto,
  ) {
    return this.restaurantService.addMenuItem(
      req.user.userId,
      createMenuItemDto,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Put('menu/:itemId')
  async updateMenuItem(
    @Request() req,
    @Param('itemId') itemId: string,
    @Body() createMenuItemDto: CreateMenuItemDto,
  ) {
    return this.restaurantService.updateMenuItem(
      req.user.userId,
      itemId,
      createMenuItemDto,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Delete('menu/:itemId')
  async deleteMenuItem(@Request() req, @Param('itemId') itemId: string) {
    return this.restaurantService.deleteMenuItem(req.user.userId, itemId);
  }

  @UseGuards(JwtAuthGuard)
  @Put('reviews/:id/respond')
  async respondToReview(
    @Param('id') reviewId: string,
    @Body() { response }: { response: string },
  ) {
    return this.restaurantService.respondToReview(reviewId, response);
  }
}
