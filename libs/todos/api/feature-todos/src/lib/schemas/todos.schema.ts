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

  // adding constructor to get rid of
  // Property 'title' has no initializer and is not definitely assigned in the constructor
  constructor(title: string, description: string, completed: boolean) {
    this.title = title;
    this.description = description;
    this.completed = completed;
  }
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
