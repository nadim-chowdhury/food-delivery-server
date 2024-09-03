import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';

@Controller('admin/orders')
@UseGuards(JwtAuthGuard) // Uncomment and use RolesGuard if role-based access is needed
// @UseGuards(JwtAuthGuard, RolesGuard)
// @Roles('admin')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  @Get()
  async getAllOrders() {
    return this.orderService.getAllOrders();
  }

  @Get(':id')
  async getOrderById(@Param('id') orderId: string) {
    return this.orderService.getOrderById(orderId);
  }

  @Put(':id/status')
  async updateOrderStatus(
    @Param('id') orderId: string,
    @Body() updateOrderStatusDto: UpdateOrderStatusDto,
  ) {
    return this.orderService.updateOrderStatus(orderId, updateOrderStatusDto);
  }

  @Get('restaurant/:id')
  async findAllByRestaurant(@Param('id') restaurantId: string) {
    return this.orderService.findAllByRestaurant(restaurantId);
  }

  @Get('reports/sales/:id')
  async getSalesReport(@Param('id') restaurantId: string) {
    return this.orderService.getSalesReport(restaurantId);
  }

  @Put(':id/accept')
  async acceptOrder(
    @Param('id') orderId: string,
    @Body('riderId') riderId: string,
  ) {
    return this.orderService.acceptOrder(riderId, orderId);
  }
}
