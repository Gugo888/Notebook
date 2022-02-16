import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/type';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.scss']
})
export class TodosItemComponent {
constructor(private todoService: TodosService) {}
 deleted(q:string){
  this.todoService.delete(q);
  setTimeout(() => this.todoService.getAll(),1000)
 }
 all()  {
   let all = this.todoService.all()
   console.log(all);
   
 }
  @Input() 
  info!: Partial<Todo>

}
