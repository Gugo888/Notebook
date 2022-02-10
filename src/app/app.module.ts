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
import { TodosDetailComponent } from './todos/todos-detail/todos-detail.component';
import { PhotosDetailComponent } from './photos/photos-detail/photos-detail.component';
import { NoutFoundComponent } from './nout-found/nout-found.component';
import { NoDataComponent } from './no-data/no-data.component';
import { ContactAddComponent } from './contacts/contact-add/contact-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodosAddComponent } from './todos/todos-add/todos-add.component';

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
    ContactDetailComponent,
    TodosDetailComponent,
    PhotosDetailComponent,
    NoutFoundComponent,
    NoDataComponent,
    ContactAddComponent,
    TodosAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
