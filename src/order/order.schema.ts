import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  restaurantId: string;

  @Prop([{ itemId: String, quantity: Number }])
  items: { itemId: string; quantity: number }[];

  @Prop({ required: true })
  totalPrice: number;

  @Prop()
  promoCode?: string;

  @Prop({ required: true })
  deliveryType: string;

  @Prop()
  scheduleTime?: Date;

  @Prop({ default: 'Pending' })
  status: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop({ required: true })
  customerId: string;

  @Prop({ required: true })
  restaurantId: string;

  @Prop([{ itemId: String, quantity: Number, price: Number }])
  items: { itemId: string; quantity: number; price: number }[];

  @Prop({ required: true })
  totalAmount: number;

  @Prop({ required: true })
  status: string; // e.g., "preparing", "ready for pickup", "out for delivery"

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);

@Schema()
export class Order {
  // ... existing properties

  @Prop({ required: false })
  riderId?: string;
}

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop({ required: true })
  customerId: string;

  @Prop({ required: true })
  restaurantId: string;

  @Prop({ required: true })
  items: { name: string; quantity: number }[];

  @Prop({ required: true, default: 'pending' })
  status: string; // pending, preparing, ready for pickup, out for delivery, delivered

  @Prop({ required: true })
  totalAmount: number;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
