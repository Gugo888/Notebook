import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/contacts.service';
import { Contact } from 'src/app/type';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.scss']
})
export class ContactAddComponent {
  newContact = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    number: new FormControl('', [Validators.required]),
  })
  
  constructor(private contactsService: ContactsService, private routes: Router) { }

  get firstName() {
    return this.newContact.get('firstName')
  }
  get lastName() {
    return this.newContact.get('lastName')
  }
  get number() {
    return this.newContact.get('number')
  }
  save() {
    let infoTheNewContact: Contact = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      number: this.number.value,
      id: null
    }
    this.contactsService.add(infoTheNewContact);
    this.routes.navigate(['contacts'])
  }  

}
