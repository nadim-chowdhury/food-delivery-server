import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ComplaintDocument = Complaint & Document;

@Schema()
export class Complaint {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  type: string; // customer, restaurant, rider

  @Prop({ required: true })
  description: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const ComplaintSchema = SchemaFactory.createForClass(Complaint);
