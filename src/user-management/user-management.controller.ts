import { Controller, Get, Put, Param, Body, UseGuards } from '@nestjs/common';
import { UserManagementService } from './user-management.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
// import { RolesGuard } from '../auth/roles.guard';
// import { Roles } from '../auth/roles.decorator';

@Controller('admin/users')
// @UseGuards(JwtAuthGuard, RolesGuard)
// @Roles('admin')
export class UserManagementController {
  constructor(private readonly userManagementService: UserManagementService) {}

  @Get()
  async getAllUsers() {
    return this.userManagementService.getAllUsers();
  }

  @Put(':id/status')
  async updateUserStatus(
    @Param('id') userId: string,
    @Body('isActive') isActive: boolean,
  ) {
    return this.userManagementService.updateUserStatus(userId, isActive);
  }
}
