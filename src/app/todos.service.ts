import { Injectable } from '@angular/core';
import { Todo } from './type';
@Injectable({
  providedIn: 'root'
})
export class TodosService {

  getAll(): Partial<Todo>[] {
    return []
  }

  getById(id: string): Todo | undefined {
    return {name: 'Name', priority: 1, deadline: 'Deadline', id}
  }

















  

  add(newTodo:Todo) {
    
  }

  update(result:Todo) {
    
  }
}
