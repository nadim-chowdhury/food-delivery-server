import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Payment, PaymentDocument } from './payment.schema';

@Injectable()
export class PaymentService {
  private stripe: Stripe;

  constructor(
    @InjectModel(Payment.name) private paymentModel: Model<PaymentDocument>,
  ) {
    this.stripe = new Stripe('your-stripe-secret-key', {
      apiVersion: '2024-06-20',
    });
  }

  async createPaymentIntent(
    amount: number,
    currency: string,
  ): Promise<Stripe.PaymentIntent> {
    return this.stripe.paymentIntents.create({
      amount,
      currency,
    });
  }

  async getAllPayments(): Promise<Payment[]> {
    return this.paymentModel.find().exec();
  }

  async getPaymentsByOrderId(orderId: string): Promise<Payment[]> {
    return this.paymentModel.find({ orderId }).exec();
  }

  async createPayment(
    orderId: string,
    amount: number,
    paymentMethod: string,
  ): Promise<Payment> {
    const newPayment = new this.paymentModel({
      orderId,
      amount,
      paymentMethod,
    });
    return newPayment.save();
  }
}
