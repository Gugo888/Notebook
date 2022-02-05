import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from 'src/app/contacts.service';
import { Contact } from 'src/app/type';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  contactDetails: Contact;

  constructor(private activeRoute: ActivatedRoute, private contactsService: ContactsService) { }

  ngOnInit(): void {

    // vercnumenq es pahi route-i :id parametry
    const id = this.activeRoute.snapshot.paramMap.get('id');

    // vercratz id-ov stanumenq contact-y u veragrum mer contactDetails popoxakanin
    this.contactDetails = this.contactsService.getById(id);
  }

}
