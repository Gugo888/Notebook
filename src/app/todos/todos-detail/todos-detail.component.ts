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
  // 1
  // name: FormControl;
  // deadline: FormControl;
  // priority: FormControl;

  // 2
  name = new FormControl('', Validators.required);
  deadline = new FormControl('', Validators.required);
  priority = new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]);

  constructor(private todosService: TodosService, private activeRoute: ActivatedRoute, private route: Router) { }
  id:string
  ngOnInit(): void {
     this.id = this.activeRoute.snapshot.paramMap.get('id');
    // 2

    this.todosService.getById(this.id).subscribe((todo) => {
      if(todo) {
        this.todosDetails = todo;
        this.name.setValue(this.todosDetails.name);
        this.deadline.setValue(this.todosDetails.deadline);
        this.priority.setValue(this.todosDetails.priority)
      } else {
        this.route.navigate(['notedata'])
      }
    })
    // 1
    // this.todosService.getById(id).subscribe((todos) => {
    //   if (todos) {
    //     this.todosDetails = todos;
    //     this.name = new FormControl(this.todosDetails.name, Validators.required);
    //     this.deadline = new FormControl(this.todosDetails.deadline, Validators.required);
    //     this.priority = new FormControl(this.todosDetails.priority, [Validators.required, Validators.min(1), Validators.max(5)]);
    //   } else {
    //     this.route.navigate(['notedata'])
    //   }
    // })
  }


  save(): void {
    let result: Todo = {
      name: this.name.value,
      deadline: this.deadline.value,
      priority: +this.priority.value,
      id: this.todosDetails.id
    };
    this.todosService.update(this.id, result);
    this.route.navigateByUrl('/todos');
  }

}
