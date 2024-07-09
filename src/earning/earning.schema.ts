import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EarningDocument = Earning & Document;

@Schema()
export class Earning {
  @Prop({ required: true })
  riderId: string;

  @Prop({ required: true })
  amount: number;

  @Prop({ default: Date.now })
  date: Date;
}

export const EarningSchema = SchemaFactory.createForClass(Earning);
