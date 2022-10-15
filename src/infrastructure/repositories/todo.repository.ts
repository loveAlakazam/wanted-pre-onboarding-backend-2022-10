import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoModel } from 'src/domain/models/todo';
import { TodoRepository } from 'src/domain/repositories/todoRepository.interface';
import { Repository } from 'typeorm';
import { Todo } from '../entities/todo.entity';

@Injectable()
export class DatabaseTodoRepository implements TodoRepository {
  constructor(
    @InjectRepository(Todo) // Todo 엔티티를 불러온다.
    private readonly todoEntityRepository: Repository<Todo>,
  ) {}

  // 엔티티 (데이터베이스의 Todo 테이블의 한개의 레코드)
  // 객체 -> 엔티티(레코드)
  private toTodoEntity(todo: TodoModel): Todo {
    const todoEntity: Todo = new Todo();

    todoEntity.id = todo.id;
    todoEntity.content = todo.content;
    todoEntity.isDone = todo.isDone;

    return todoEntity;
  }

  // 객체
  // 엔티티(레코드) -> 객체
  private toTodo(todoEntity: Todo): TodoModel {
    const todo: Todo = new TodoModel();

    todo.id = todoEntity.id;
    todo.content = todoEntity.content;
    todo.isDone = todoEntity.isDone;
    todo.created_date = todoEntity.created_date;
    todo.updated_date = todoEntity.updated_date;

    return todo;
  }

  async insert(todo: TodoModel): Promise<void> {
    // 객체 -> 엔티티 로 전환
    const todoEntity = this.toTodoEntity(todo);

    // 디비에 새로운 엔티티 저장.
    await this.todoEntityRepository.insert(todoEntity);
  }

  async findAll(): Promise<TodoModel[]> {
    // 디비에서 모든 엔티티들을 조회.
    const todosEntity = await this.todoEntityRepository.find();

    // 데이터베이스 엔티티 -> 객체 로 전환.
    return todosEntity.map((todoEntity) => this.toTodo(todoEntity));
  }

  async findById(id: number): Promise<TodoModel> {
    // 디비에서 조건에 부합한 엔티티를 검색
    const todoEntity = await this.todoEntityRepository.findOneByOrFail({
      id: id,
    });

    // 엔티티 -> 객체로 전환
    return this.toTodo(todoEntity);
  }

  async updateContent(id: number, content: string): Promise<void> {
    // 디비에서 id에 해당하는 엔티티 찾고 -> 수정
    await this.todoEntityRepository.update({ id: id }, { content: content });
  }
  async deleteById(id: number): Promise<void> {
    // 디비에서 id에 해당하는 엔티티 찾고 -> 삭제
    await this.todoEntityRepository.delete({ id: id });
  }
}
