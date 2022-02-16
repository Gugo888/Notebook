import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './type';
@Injectable({
  providedIn: 'root'
})
export class TodosService {
  constructor(private http:HttpClient) {}
  all() {
    return this.http.get<Todo[]>('http://localhost:3000/todos').subscribe(elem => console.log(elem))
  }
  getAll() {
    return this.http.get<Todo[]>('http://localhost:3000/todos')
  }

  getById(id: string) {
    return this.http.get<Todo>(`http://localhost:3000/todos/${id}`)
  }

  
  add(newTodo:Todo) {
    return this.http.post('http://localhost:3000/todos', newTodo).subscribe(todo => console.log(todo))
  }

  update(id:string, result:Todo) {
    return this.http.put(`http://localhost:3000/todos/${id}`, result).subscribe(todo => console.log(todo))
  }
  delete(id:string) {
    return this.http.delete(`http://localhost:3000/todos/${id}`).subscribe(todo => console.log(todo))
  }
}
