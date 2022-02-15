import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { TodosService } from 'src/app/todos.service';
import { Todo } from 'src/app/type';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todos-add',
  templateUrl: './todos-add.component.html',
  styleUrls: ['./todos-add.component.scss']
})
export class TodosAddComponent {
  todoList = new FormGroup({
    name: new FormControl('', [Validators.required]),
    deadline: new FormControl('', [Validators.required]),
    priority: new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
  })



  constructor(private todoService: TodosService, private routes: Router, private http: HttpClient) { }
  get name() {
    return this.todoList.get('name')
  }
  get deadline() {
    return this.todoList.get('deadline')
  }
  get priority() {
    return this.todoList.get('priority')
  }
  todoUnTouch() {
    for(let control of Object.values(this.todoList.controls)) {
      control.markAsUntouched();
    }
  }
  
  save() {
    let result: Todo = {
      name: this.name.value,
      deadline: this.deadline.value,
      priority: this.priority.value,
      id: null
    }

    this.todoService.add(result);
    this.routes.navigate(['/todos'])
  }
  setValue(value: number) {
    this.todoList.get('priority').setValue(value);
  }

}
