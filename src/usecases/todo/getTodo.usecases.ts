import { TodoModel } from 'src/domain/models/todo';
import { TodoRepository } from 'src/domain/repositories/todoRepository.interface';

export class GetTodoUseCases {
  constructor(private readonly todoRepository: TodoRepository) {}

  async execute(id: number): Promise<TodoModel> {
    // 객체를 리턴
    return await this.todoRepository.findById(id);
  }
}
