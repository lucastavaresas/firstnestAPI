/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';
export interface player extends Document {
  phone?: string;
  email?: string;
  name: string;
  password: string;
}
