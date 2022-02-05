import { Injectable } from '@angular/core';
import { CONTACTS } from './data';
import { Contact } from './type';
@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  getAll(): Partial<Contact>[] {

    return CONTACTS.map(contact => {
      const { number, ...rest } = contact;
      return rest;
    })
  }

  getById(id: string): Contact | undefined {
    return CONTACTS.find(contact => contact.id === id);
  }

 
}
