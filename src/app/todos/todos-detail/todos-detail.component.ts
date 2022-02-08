import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodosService } from 'src/app/todos.service';
import { Todo } from 'src/app/type';
@Component({
  selector: 'app-todos-detail',
  templateUrl: './todos-detail.component.html',
  styleUrls: ['./todos-detail.component.scss']
})
export class TodosDetailComponent implements OnInit {

  todosDetails: Todo

  constructor(private todosService: TodosService, private activeRoute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    let id = this.activeRoute.snapshot.paramMap.get('id');
    let todo = this.todosService.getById(id);

    if (todo) {
      this.todosDetails = todo;
    } else {
      this.route.navigate(['notedata'])
    }
  }

}
