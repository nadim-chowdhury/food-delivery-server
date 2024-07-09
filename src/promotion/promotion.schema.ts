import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PromotionDocument = Promotion & Document;

@Schema()
export class Promotion {
  @Prop({ required: true })
  restaurantId: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  discountPercentage: number;

  @Prop({ required: true })
  startDate: Date;

  @Prop({ required: true })
  endDate: Date;
}

export const PromotionSchema = SchemaFactory.createForClass(Promotion);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PromotionDocument = Promotion & Document;

@Schema()
export class Promotion {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ type: Date, required: true })
  startDate: Date;

  @Prop({ type: Date, required: true })
  endDate: Date;

  @Prop({ required: true })
  discount: number; // in percentage

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const PromotionSchema = SchemaFactory.createForClass(Promotion);
