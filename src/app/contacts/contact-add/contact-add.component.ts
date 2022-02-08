import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/contacts.service';
import { Contact } from 'src/app/type';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.scss']
})
export class ContactAddComponent {
  
  constructor(private contactsService: ContactsService, private routes: Router) { }

  newContact: Contact = {
    firstName:'',
    lastName:'',
    number:'',
    id: null
  }

  save() {
    this.contactsService.getNewUser(this.newContact);
    this.routes.navigate(['contacts'])
  }  

}
