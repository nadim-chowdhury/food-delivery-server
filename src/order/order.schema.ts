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

  @Prop({ required: true })
  totalAmount: number;

  @Prop({ required: true, default: 'pending' })
  status: string; // e.g., pending, preparing, ready for pickup, out for delivery, delivered

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Prop({ required: false })
  riderId?: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
