import { Component, Input, OnInit } from '@angular/core';
import { Todos } from 'src/app/type';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.scss']
})
export class TodosItemComponent {

  @Input() info!:Todos

}
