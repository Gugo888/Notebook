import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { Todo } from '../type';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  infoTodo: Partial<Todo>[];
  filteredInfoTodo: Partial<Todo>[];

  x = 1;

  search = new FormControl('')
  constructor(private todosService: TodosService) { }
  ngOnInit(): void {

    this.search.valueChanges.subscribe(val => {
        this.filteredInfoTodo = this.infoTodo.filter(todo => todo.name.toLowerCase().startsWith(val.toLowerCase()))
    });

    this.todosService.getAll().subscribe(todos => {
      this.infoTodo = todos
      this.filteredInfoTodo = todos
    });
  }

  onchange(id: string): void {
    let index = this.infoTodo.findIndex(todo => todo.id === id);
    this.infoTodo.splice(index, 1)
  }

}

