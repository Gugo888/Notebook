import { Component } from '@angular/core';
import { ContactsService } from '../contacts.service'
import { Contact } from '../type';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent  {

  infoContacts: Partial<Contact>[] = this.contactsService.getAll();

  constructor(private contactsService: ContactsService) {}
}
