import { Controller, Get, Put, Param, Body, UseGuards } from '@nestjs/common';
import { RestaurantManagementService } from './restaurant-management.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
// import { RolesGuard } from '../auth/roles.guard';
// import { Roles } from '../auth/roles.decorator';

@Controller('admin/restaurants')
// @UseGuards(JwtAuthGuard, RolesGuard)
// @Roles('admin')
export class RestaurantManagementController {
  constructor(
    private readonly restaurantManagementService: RestaurantManagementService,
  ) {}

  @Get()
  async getAllRestaurants() {
    return this.restaurantManagementService.getAllRestaurants();
  }

  @Put(':id/status')
  async updateRestaurantStatus(
    @Param('id') restaurantId: string,
    @Body('isActive') isActive: boolean,
  ) {
    return this.restaurantManagementService.updateRestaurantStatus(
      restaurantId,
      isActive,
    );
  }
}
