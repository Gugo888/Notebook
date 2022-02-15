import { Injectable } from '@angular/core';
import { Contact } from './type';
@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  

  getAll(): Partial<Contact>[] {
    return []
  }

  getById(id: string): Contact | undefined {
    return {firstName: 'First name', lastName: 'Last name', number: '11111111', id}
  }













  

  add(newContact:Contact) {
    
  }

  update(result:Contact) {
    
  }
}
