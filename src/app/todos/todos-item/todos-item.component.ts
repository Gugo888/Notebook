import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/type';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.scss']
})
export class TodosItemComponent {
constructor(private todoService: TodosService) {}
getInfoId(id:string){
  this.todoService.delete(id).subscribe((): void => {
    this.elementId.emit(id)
  })
 
 }

  @Input() 
  info!: Partial<Todo>

  @Output()
  elementId = new EventEmitter()
}
