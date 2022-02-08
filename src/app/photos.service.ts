import { Injectable } from '@angular/core';
import { Photo } from './type';
@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  private items: Photo[] = [
    {
      "url": "http://placeimg.com/640/480/people",
      "size": 195,
      "id": "1",
      "name": "Picture 1"
    },
    {
      "url": "http://placeimg.com/640/480/city",
      "size": 446,
      "id": "2",
      "name": "Picture 2"
    },
    {
      "url": "http://placeimg.com/640/480/city",
      "size": 412,
      "id": "3",
      "name": "Picture 3"
    },
    {
      "url": "http://placeimg.com/640/480/animals",
      "size": 393,
      "id": "4",
      "name": "Picture 4"
    },
    {
      "url": "http://placeimg.com/640/480/business",
      "size": 243,
      "id": "5",
      "name": "Picture 5"
    },
  ]

  getAll(): Partial<Photo>[] {

    return this.items.map(photo => {
      const { name, size, ...rest } = photo;
      return rest;
    })
  }

  getById(id: string): Photo | undefined {
    return this.items.find(photo => photo.id === id);
  }
}
