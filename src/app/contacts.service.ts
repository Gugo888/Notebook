import { Injectable, OnInit } from '@angular/core';
import { Contact } from './type';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }



  getAll() {
    return this.http.get<Contact[]>('http://localhost:3000/contacts')
  }



  getById(id: string){
    return this.http.get<Contact>(`http://localhost:3000/contacts/${id}`)
  }













  add(newContact: Contact) {

  }

  update(result: Contact) {

  }
}
