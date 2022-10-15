import { ILogger } from 'src/domain/logger/logger.interface';
import { TodoModel } from 'src/domain/models/todo';
import { TodoRepository } from 'src/domain/repositories/todoRepository.interface';

export class AddTodoUsecases {
  constructor(
    private readonly logger: ILogger,
    private readonly todoRepository: TodoRepository,
  ) {}

  async execute(content: string): Promise<void> {
    const todo = new TodoModel();
    todo.content = content;
    todo.isDone = false;
    const result = await this.todoRepository.insert(todo); // 추가

    this.logger.log('addTodoUseCases execute', 'New todo have been inserted!');
    return result;
  }
}
