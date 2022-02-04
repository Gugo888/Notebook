import { Injectable } from '@angular/core';
import { TODOS } from './data';
@Injectable({
  providedIn: 'root'
})
export class TodosService {

  all = TODOS
}
