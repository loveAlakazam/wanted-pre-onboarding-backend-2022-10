import { TodoModel } from '../models/todo';

export interface TodoRepository {
  insert(todo: TodoModel): Promise<void>;
  findAll(): Promise<TodoModel[]>;
  findById(id: number): Promise<TodoModel>;
  updateIsDone(id: number, isDone: boolean): Promise<void>;
  deleteById(id: number): Promise<void>;
}
