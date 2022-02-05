import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/type';
@Component({
  selector: 'app-contacts-item',
  templateUrl: './contacts-item.component.html',
  styleUrls: ['./contacts-item.component.scss']
})
export class ContactsItemComponent  {

  @Input()
  info!: Partial<Contact>;

}

