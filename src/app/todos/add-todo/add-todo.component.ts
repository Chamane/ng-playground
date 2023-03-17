import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  entry: string = '';
  @Output() addItem: EventEmitter<string> = new EventEmitter();

  onClick(){
    this.addItem.emit(this.entry);
  }

  onKeyup(e: any){
    this.entry = e.target.value;
  }
}
