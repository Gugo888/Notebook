import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {

  constructor(private todo: TodosService) { }

  infoTodo = this.todo.all
  

}
