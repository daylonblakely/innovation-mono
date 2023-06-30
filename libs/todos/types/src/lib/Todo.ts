import { Types } from 'mongoose';

export interface Todo {
  _id: Types.ObjectId;
  title: string;
  description: string;
  completed: boolean;
}
