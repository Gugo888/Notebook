import { Component, OnInit } from '@angular/core';
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
    // for(let key of Object.keys(this.todoList.controls)) {
    //   this.todoList.get(key).markAsUntouched();
    // }
    for(let key of Object.values(this.todoList.controls)) {
      key.markAsUntouched();
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
  setValue(value) {
    this.todoList.get('priority').setValue(value);
  }


 

  f1() {
    console.log(`name pristine- ${this.name.untouched}`);
    // console.log(`name dirty- ${this.todoList.get('name').dirty}`);
    // console.log(`deadline -${this.todoList.get('deadline').touched}`)
  }



}











// name = new FormControl('', [Validators.required]);
// deadline = new FormControl('', [Validators.required]);
// priority = new FormControl('', [Validators.required, Validators.min(1), Validators.max(7)]);

// save(): void {

//   let result: Todo = {
//     name: this.name.value,
//     deadline: this.deadline.value,
//     priority: this.priority.value,
//     id: null
//   }
// this.todoService.add(result);
// this.routes.navigateByUrl("/todos");
// }
// set(asd): void {
//   this.priority.setValue(asd)
// }
// f(): void {
//   console.log(this.priority.value)
  // console.log(typeof(this.priority.value))
  // console.log(`valid  ${this.deadline.valid}`);
  // console.log(`pristine  ${this.deadline.pristine}`);

// }