import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';

@Injectable()
export class PaymentService {
  private stripe: Stripe;

  constructor() {
    this.stripe = new Stripe('your-stripe-secret-key', {
      apiVersion: '2020-08-27',
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
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Payment, PaymentDocument } from './payment.schema';

@Injectable()
export class PaymentService {
  constructor(
    @InjectModel(Payment.name) private paymentModel: Model<PaymentDocument>,
  ) {}

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
