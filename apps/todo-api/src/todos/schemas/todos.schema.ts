import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { Todo as ITodo } from '@innovation-mono/todos/types';

export type TodoDocument = Todo & Document;

@Schema()
export class Todo implements ITodo {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop({ default: false })
  completed: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
