import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos: string[] = [];

  ngOnInit(): void {}

  onDeleteItem(title: string){
    this.todos = this.todos.filter(todo => todo !== title);
  }

  onAddItem(item: string){
    this.todos.push(item);
  }
}
