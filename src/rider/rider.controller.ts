import {
  Controller,
  Post,
  Body,
  Put,
  Param,
  Get,
  UseGuards,
  Query,
} from '@nestjs/common';
import { RiderService } from './rider.service';
import { CreateRiderDto } from './dto/create-rider.dto';
import { UpdateRiderDto } from './dto/update-rider.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AcceptOrderDto } from './dto/accept-order.dto';
import { GoogleMapsService } from 'src/google-maps/google-maps.service';
// import { GoogleMapsService } from './google-maps.service';
// import { UpdateOrderStatusDto } from './dto/update-order-status.dto';

@Controller('riders')
export class RiderController {
  constructor(
    private readonly riderService: RiderService,
    private readonly googleMapsService: GoogleMapsService,
  ) {}

  @Post('register')
  async create(@Body() createRiderDto: CreateRiderDto) {
    return this.riderService.create(createRiderDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') riderId: string) {
    return this.riderService.findOneById(riderId);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(
    @Param('id') riderId: string,
    @Body() updateRiderDto: UpdateRiderDto,
  ) {
    return this.riderService.update(riderId, updateRiderDto);
  }

  @UseGuards(JwtAuthGuard)
  @Put('accept-order')
  async acceptOrder(@Body() acceptOrderDto: AcceptOrderDto) {
    return this.riderService.acceptOrder(
      acceptOrderDto.riderId,
      acceptOrderDto.orderId,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get('navigation')
  async getNavigation(
    @Query('origin') origin: string,
    @Query('destination') destination: string,
  ) {
    // return this.googleMapsService.getDirections(origin, destination);
  }

  @UseGuards(JwtAuthGuard)
  @Put('order-status/:orderId')
  async updateOrderStatus(
    @Param('orderId') orderId: string,
    // @Body() updateOrderStatusDto: UpdateOrderStatusDto,
  ) {
    // return this.riderService.updateOrderStatus(
    //   orderId,
    // updateOrderStatusDto.status,
    // );
  }
}
