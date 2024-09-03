import { Controller, Get, Put, Param, Body, UseGuards } from '@nestjs/common';
import { RiderManagementService } from './rider-management.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
// import { RolesGuard } from '../auth/roles.guard';
// import { Roles } from '../auth/roles.decorator';

@Controller('admin/riders')
// @UseGuards(JwtAuthGuard, RolesGuard)
// @Roles('admin')
export class RiderManagementController {
  constructor(
    private readonly riderManagementService: RiderManagementService,
  ) {}

  @Get()
  async getAllRiders() {
    return this.riderManagementService.getAllRiders();
  }

  @Put(':id/status')
  async updateRiderStatus(
    @Param('id') riderId: string,
    @Body('isAvailable') isAvailable: boolean,
  ) {
    return this.riderManagementService.updateRiderStatus(riderId, isAvailable);
  }
}
