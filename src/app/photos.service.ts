import { Injectable } from '@angular/core';
import { PHOTOS } from './data';
@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  all = PHOTOS
}
