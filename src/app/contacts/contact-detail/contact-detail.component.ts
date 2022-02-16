import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from 'src/app/contacts.service';
import { Contact } from 'src/app/type';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  contactDetails = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    number: new FormControl('', [Validators.required]),
  })


  constructor(private activeRoute: ActivatedRoute, private contactsService: ContactsService, private routes: Router) { }
  get firstName() {
    return this.contactDetails.get('firstName')
  }
  get lastName() {
    return this.contactDetails.get('lastName')
  }
  get number() {
    return this.contactDetails.get('number')
  }
  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.contactsService.getById(id).subscribe(elem => {
      if(elem) {
        this.firstName.setValue(elem.firstName);
        this.lastName.setValue(elem.lastName);
        this.number.setValue(elem.number)
      } else {
        this.routes.navigate(['notedata']);
      }
    });
  }
  
  save() {
    // this.contactsService.update(this.contactDetails);
    this.routes.navigate(['/contacts']);
  }
  
}