import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from 'src/app/contacts.service';
import { Contact } from 'src/app/type';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  contactDetails: Contact;

  constructor(private activeRoute: ActivatedRoute, private contactsService: ContactsService, private routes: Router) { }

  ngOnInit(): void {

    // vercnumenq es pahi route-i :id parametry
    const id = this.activeRoute.snapshot.paramMap.get('id');
    const contact = this.contactsService.getById(id);
    if (contact) {
       // vercratz id-ov stanumenq contact-y u veragrum mer contactDetails popoxakanin
       this.contactDetails = contact;
    } else {
      this.routes.navigate(['notedata']);
    }

  }

}