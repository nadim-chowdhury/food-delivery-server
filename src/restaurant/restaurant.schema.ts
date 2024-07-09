import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RestaurantDocument = Restaurant & Document;

@Schema()
export class Restaurant {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  cuisine: string;

  @Prop()
  rating: number;

  @Prop()
  distance: number;

  @Prop()
  priceRange: string;

  @Prop([String])
  menu: string[];

  @Prop()
  details: string;
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RestaurantDocument = Restaurant & Document;

@Schema()
export class Restaurant {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  contact: string;

  @Prop()
  operatingHours: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop([
    {
      name: String,
      description: String,
      price: Number,
      availability: Boolean,
      image: String,
    },
  ])
  menu: {
    name: string;
    description: string;
    price: number;
    availability: boolean;
    image: string;
  }[];
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
