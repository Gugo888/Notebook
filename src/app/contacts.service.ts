import { Injectable } from '@angular/core';
import { CONTACTS } from './data';
@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  all = CONTACTS;

 
}
