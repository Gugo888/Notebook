import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service'
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent  {

  constructor(private contacts: ContactsService) { }

  infoContacts = this.contacts.all;


}
