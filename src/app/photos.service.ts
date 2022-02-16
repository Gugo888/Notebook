import { Injectable } from '@angular/core';
import { Photo } from './type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http:  HttpClient) {}

  getAll() {
    return this.http.get<Photo[]>('http://localhost:3000/photos')
  }

  getById(id: string) {
    return this.http.get<Photo>(`http://localhost:3000/photos/${id}`)
  }

  add(newPhoto:Photo) {
    
  }

  update(result:Photo) {
    
  }
}
