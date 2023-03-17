import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() title: string = 'Todo title';
  @Output() deleteItem: EventEmitter<any> = new EventEmitter();

  constructor(){}

  onClick(){
    this.deleteItem.emit(this.title);
  }
}
