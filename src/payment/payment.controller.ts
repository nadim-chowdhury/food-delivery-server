import { Controller, Get, Post, Param, Body, UseGuards } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
// import { RolesGuard } from '../auth/roles.guard';
// import { Roles } from '../auth/roles.decorator';

@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('create-intent')
  async createPaymentIntent(
    @Body('amount') amount: number,
    @Body('currency') currency: string,
  ) {
    return this.paymentService.createPaymentIntent(amount, currency);
  }

  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles('admin')
  @Get()
  async getAllPayments() {
    return this.paymentService.getAllPayments();
  }

  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles('admin')
  @Get('order/:orderId')
  async getPaymentsByOrderId(@Param('orderId') orderId: string) {
    return this.paymentService.getPaymentsByOrderId(orderId);
  }

  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles('admin')
  @Post()
  async createPayment(
    @Body()
    createPaymentDto: {
      orderId: string;
      amount: number;
      paymentMethod: string;
    },
  ) {
    return this.paymentService.createPayment(
      createPaymentDto.orderId,
      createPaymentDto.amount,
      createPaymentDto.paymentMethod,
    );
  }
}
