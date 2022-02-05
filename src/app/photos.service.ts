import { Injectable } from '@angular/core';
import { PHOTOS } from './data';
import { Photo } from './type';
@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  getAll(): Partial<Photo>[] {

    return PHOTOS.map(photo => {
      const { name, size, ...rest } = photo;
      return rest;
    })
  }

  getById(id: string): Photo | undefined {
    return PHOTOS.find(photo => photo.id === id);
  }
}
