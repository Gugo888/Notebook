import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { Todo } from '../type';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {

  infoTodo: Partial<Todo>[] = this.todosService.getAll()

  constructor(private todosService: TodosService) { }

  

}
