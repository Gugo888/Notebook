import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TodosService } from 'src/app/todos.service';
import { Todo } from 'src/app/type';
import { Router } from '@angular/router';
@Component({
  selector: 'app-todos-add',
  templateUrl: './todos-add.component.html',
  styleUrls: ['./todos-add.component.scss']
})
export class TodosAddComponent {
  name = new FormControl();
  deadline = new FormControl();
  priority = new FormControl();
  constructor(private todoService:TodosService, private routes: Router) { }
  save() {
    let result:Todo = {
      name: this.name.value,
      deadline: this.deadline.value,
      priority: this.priority.value,
      id:null
    }
    this.todoService.add(result);
    this.routes.navigateByUrl("/todos");
  }

}
// export type Todo = {
//   id: string,
//   name: string,
//   deadline: string,
//   priority: number,
// } 