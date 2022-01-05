/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { player } from './interfaces/player.interface';

export type PlayerDocument = player & Document;

@Schema()
export class Player {
  @Prop()
  name: string;
  @Prop()
  email: string;
  @Prop()
  password: string;
}

export const PlayerSchema = SchemaFactory.createForClass(Player);
