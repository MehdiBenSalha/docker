import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes, Types } from 'mongoose';

export type CoffeeDocument = HydratedDocument<Coffee>;

@Schema()
export class Coffee {
  @Prop({ type: SchemaTypes.ObjectId })
  id: Types.ObjectId;

  @Prop()
  type: string;

  @Prop()
  brand: string;

  @Prop()
  price: number;
}

export const CoffeeSchema = SchemaFactory.createForClass(Coffee);
