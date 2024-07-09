import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { EarningService } from './earning.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('earnings')
export class EarningController {
  constructor(private readonly earningService: EarningService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':riderId')
  async getEarningsByRider(@Param('riderId') riderId: string) {
    return this.earningService.getEarningsByRider(riderId);
  }
}
