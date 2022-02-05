import { Injectable } from '@angular/core';
import { TODOS } from './data';
import { Todo } from './type';
@Injectable({
  providedIn: 'root'
})
export class TodosService {

  getAll(): Partial<Todo>[] {

    return TODOS.map(todo => {
      const { deadline, priority, ...rest } = todo;
      return rest;
    })
  }

  getById(id: string): Todo | undefined {
    return TODOS.find(todo => todo.id === id);
  }
}
