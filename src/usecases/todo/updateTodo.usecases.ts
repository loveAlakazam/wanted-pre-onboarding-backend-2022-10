import { ILogger } from 'src/domain/logger/logger.interface';
import { TodoRepository } from 'src/domain/repositories/todoRepository.interface';

export class UpdateTodoUsecases {
  constructor(
    private readonly logger: ILogger,
    private readonly todoRepository: TodoRepository,
  ) {}

  async execute(id: number, content: string): Promise<void> {
    const result = await this.todoRepository.updateContent(id, content);
    this.logger.log(
      'updateTodoUseCases execute',
      `#${id} Todo's content have been updated!`,
    );
    return result;
  }
}
