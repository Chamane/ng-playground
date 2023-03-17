import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs';
import { TodoInterface } from '../interface/todos';
import { TodoService } from '../todo-service/todo-service.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  todo?: TodoInterface;

  constructor(private route:ActivatedRoute, private todoService:TodoService){}
  ngOnInit(): void {
      this.route.paramMap.pipe(
        switchMap(
          (params) => this.todoService.getTodo(this.params.name)
        ),
      );
  }
}
