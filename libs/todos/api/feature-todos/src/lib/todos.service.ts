import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo } from './schemas/todos.schema';

@Injectable()
export class TodosService {
  constructor(
    @InjectModel(Todo.name) private readonly todoModel: Model<Todo>
  ) {}

  async findAll(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }

  async findById(id: string): Promise<Todo | null> {
    const foundTodo = await this.todoModel.findById(id).exec();
    return foundTodo ? foundTodo.toObject() : null;
  }

  async create(todo: Todo): Promise<Todo> {
    const newTodo = new this.todoModel(todo);
    return newTodo.save();
  }

  async update(id: string, todo: Todo): Promise<Todo | null> {
    const updatedTodo = await this.todoModel
      .findByIdAndUpdate(id, todo, { new: true })
      .exec();
    return updatedTodo ? updatedTodo.toObject() : null;
  }

  async delete(id: string): Promise<Todo | null> {
    const deletedTodo = await this.todoModel.findByIdAndRemove(id).exec();
    return deletedTodo ? deletedTodo.toObject() : null;
  }
}
