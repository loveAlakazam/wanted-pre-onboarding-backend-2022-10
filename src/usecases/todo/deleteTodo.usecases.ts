import { ILogger } from 'src/domain/logger/logger.interface';
import { TodoRepository } from 'src/domain/repositories/todoRepository.interface';

export class DeleteTodoUsecases {
  constructor(
    private readonly logger: ILogger,
    private readonly todoRepository: TodoRepository,
  ) {}

  async execute(id: number): Promise<void> {
    const result = await this.todoRepository.deleteById(id);
    this.logger.log(
      'deleteTodoUseCases execute',
      `#${id} Todo have been deleted!`,
    );
    return result;
  }
}
