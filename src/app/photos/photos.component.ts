import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent  {

  constructor(private photo: PhotosService) { }

  fotoInfo = this.photo.all
}
