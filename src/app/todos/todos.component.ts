import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { Todos } from '../type';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {

  constructor(private todo: TodosService) { }

  infoTodo:Todos[] = this.todo.all
  

}
