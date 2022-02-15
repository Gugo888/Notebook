import { Injectable } from '@angular/core';
import { Photo } from './type';
@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  

  getAll(): Partial<Photo>[] {
    return []
  }

  getById(id: string): Photo | undefined {
    return {name: 'Name', url: 'URL', size: 100, id}
  }

  add(newPhoto:Photo) {
    
  }

  update(result:Photo) {
    
  }
}
