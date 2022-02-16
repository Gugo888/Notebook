import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service'
import { Contact } from '../type';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  infoContacts: Partial<Contact>[];

  constructor(private contactsService: ContactsService) {}

  ngOnInit(): void {
      this.contactsService.getAll().subscribe(contacts => this.infoContacts = contacts)
  }
}
