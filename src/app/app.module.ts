import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TodosComponent } from './todos/todos.component';
import { PhotosComponent } from './photos/photos.component';
import { HeaderComponent } from './header/header.component';
import { ContactsItemComponent } from './contacts/contacts-item/contacts-item.component';
import { PhotosItemComponent } from './photos/photos-item/photos-item.component';
import { TodosItemComponent } from './todos/todos-item/todos-item.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    TodosComponent,
    PhotosComponent,
    HeaderComponent,
    ContactsItemComponent,
    PhotosItemComponent,
    TodosItemComponent,
    ContactDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
