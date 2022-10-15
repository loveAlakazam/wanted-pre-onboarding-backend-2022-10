import { TodoModel } from '../models/todo';

export interface TodoRepository {
  insert(todo: TodoModel): Promise<void>;
  findAll(): Promise<TodoModel[]>;
  findById(id: number): Promise<TodoModel>;
  updateContent(id: number, content: string): Promise<void>;
  deleteById(id: number): Promise<void>;
}
