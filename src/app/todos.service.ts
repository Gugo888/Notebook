import { Injectable } from '@angular/core';
import { Todo } from './type';
@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private items: Todo[] = [
    {
        "name": "bake",
        "deadline": "2022-07-30T10:31:18.209Z",
        "priority": 1,
        "id": "1"
    },
    {
        "name": "lollop",
        "deadline": "2022-08-23T14:20:44.901Z",
        "priority": 1,
        "id": "2"
    },
    {
        "name": "evangelize",
        "deadline": "2022-08-12T01:39:06.539Z",
        "priority": 5,
        "id": "3"
    },
    {
        "name": "uncoil",
        "deadline": "2022-07-19T09:40:40.133Z",
        "priority": 4,
        "id": "4"
    },
    {
        "name": "spin",
        "deadline": "2022-05-01T06:20:01.196Z",
        "priority": 3,
        "id": "5"
    },
  ]

  getAll(): Partial<Todo>[] {

    return this.items.map(todo => {
      const { deadline, priority, ...rest } = todo;
      return rest;
    })
  }

  getById(id: string): Todo | undefined {
    return this.items.find(todo => todo.id === id);
  }

  add(newTodo:Todo) {
    let index = this.items[this.items.length - 1].id + 1;
    newTodo.id = index;
    this.items.push(newTodo);
  }

  update(result:Todo) {
    let index = this.items.findIndex(item => item.id == result.id);
    this.items[index] = result;
  }
}
