import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PhotosComponent } from './photos/photos.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [

  { path: '', redirectTo: 'contacts', pathMatch: 'full' },
  { path: 'contacts', component: ContactsComponent },
  { path: 'contacts/:id', component: ContactDetailComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'todos', component: TodosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
