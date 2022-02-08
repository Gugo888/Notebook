import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NoDataComponent } from './no-data/no-data.component';
import { NoutFoundComponent } from './nout-found/nout-found.component';
import { PhotosDetailComponent } from './photos/photos-detail/photos-detail.component';
import { PhotosComponent } from './photos/photos.component';
import { TodosDetailComponent } from './todos/todos-detail/todos-detail.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [

  { path: '', redirectTo: 'contacts', pathMatch: 'full' },
  { path: 'contacts', component: ContactsComponent },
  { path: 'contacts/:id', component: ContactDetailComponent },
  { path: 'notedata', component: NoDataComponent},
  { path: 'photos', component: PhotosComponent },
  { path: 'photos/:id', component: PhotosDetailComponent},
  { path: 'todos', component: TodosComponent },
  { path: 'todos/:id', component: TodosDetailComponent},
  { path: '**', component: NoutFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
