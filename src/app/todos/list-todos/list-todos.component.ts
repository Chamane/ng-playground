import { Component, EventEmitter, OnInit } from '@angular/core';
import { TodoService } from '../todo-service/todo-service.service';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
  providers: [TodoService]
})
export class ListTodosComponent implements OnInit {

  constructor(private todoService: TodoService){}

  ngOnInit(): void {}

  onDeleteItem(title: string){
    this.todoService.delete(title);
  }

  onAddItem(item: string){
    this.todoService.add(item);
  }

  getTodos(): string[]{
    return this.todoService.getTodos();
  }
}
