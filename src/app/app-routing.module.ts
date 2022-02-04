import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'contacts', component: ContactsComponent},
  {path:'photos', component: PhotosComponent},
  {path:'todos', component: TodosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
