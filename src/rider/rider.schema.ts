import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RiderDocument = Rider & Document;

@Schema()
export class Rider {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  phoneNumber: string;

  @Prop({ default: false })
  isAvailable: boolean;
}

export const RiderSchema = SchemaFactory.createForClass(Rider);
