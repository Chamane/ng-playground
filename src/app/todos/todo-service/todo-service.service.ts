import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
  private todos: string[] = [];

  constructor() { }

  add(item: string){
    this.todos.push(item);
  }

  delete(item: string){
    this.todos = this.todos.filter(todo => todo !== item)
  }

  getTodos(): string[]{
    return this.todos;
  }
}
