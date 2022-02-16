import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { Todo } from '../type';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit{

  infoTodo: Partial<Todo>[];
 
  constructor(private todosService: TodosService) { }
  ngOnInit(): void {
     this.todosService.getAll().subscribe(todos => this.infoTodo = todos);
  }
}

