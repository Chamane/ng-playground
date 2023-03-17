import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoItemComponent } from './todo-item/todo-item.component';


@NgModule({
  declarations: [
    TodoItemComponent,
    AddTodoComponent,
    ListTodosComponent,
  ],
  imports: [
    CommonModule,
    TodosRoutingModule
  ]
})
export class TodosModule { }
