import { Injectable } from '@angular/core';
import { Contact } from './type';
@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private items: Contact[] = [
    {
      "firstName": "Maximus",
      "lastName": "Hansen",
      "number": "467-213-5778",
      "id": "1"
    },
    {
      "firstName": "Leda",
      "lastName": "Barton",
      "number": "(965) 765-7743 x501",
      "id": "2"
    },
    {
      "firstName": "Dimitri",
      "lastName": "Kulas",
      "number": "(845) 485-0881",
      "id": "3"
    },
    {
      "firstName": "Orpha",
      "lastName": "MacGyver",
      "number": "723.767.4026",
      "id": "4"
    },
    {
      "firstName": "Fatima",
      "lastName": "Schamberger",
      "number": "633.440.8470 x93967",
      "id": "5"
    },
  ]

  getAll(): Partial<Contact>[] {

    return this.items.map(contact => {
      const { number, ...rest } = contact;
      return rest;
    })
  }

  getById(id: string): Contact | undefined {
    return this.items.find(contact => contact.id === id);
  }

  add(newContact: Contact) {
    const nextId = this.items[this.items.length - 1].id + 1;
    newContact.id = nextId.toString();
    this.items.push(newContact);
  }

  update(contact: Contact) {
    let index = this.items.findIndex(item => item.id == contact.id);
    this.items[index] = contact;
  }
}
