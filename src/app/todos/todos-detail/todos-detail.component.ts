import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodosService } from 'src/app/todos.service';
import { Todo } from 'src/app/type';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-todos-detail',
  templateUrl: './todos-detail.component.html',
  styleUrls: ['./todos-detail.component.scss']
})
export class TodosDetailComponent implements OnInit {

  todosDetails: Todo
  name: FormControl;
  deadline: FormControl;
  priority: FormControl;


  constructor(private todosService: TodosService, private activeRoute: ActivatedRoute, private route: Router) { }
  ngOnInit(): void {
    let id = this.activeRoute.snapshot.paramMap.get('id');
    let todo = this.todosService.getById(id);

    if (todo) {
      this.todosDetails = todo;
    } else {
      this.route.navigate(['notedata'])
    }
    this.name = new FormControl(this.todosDetails.name, Validators.required);
    this.deadline = new FormControl(this.todosDetails.deadline, Validators.required);
    this.priority = new FormControl(this.todosDetails.priority, [Validators.required, Validators.min(1), Validators.max(5)]);
  }

  save() {
    let result: Todo = {
      name: this.name.value,
      deadline: this.deadline.value,
      priority: +this.priority.value,
      id: this.todosDetails.id
    };
    this.todosService.update(result);
    this.route.navigateByUrl('/todos');
  }

}
// export type Todo = {
//   id: string,
//   name: string,
//   deadline: string,
//   priority: number,
// }
