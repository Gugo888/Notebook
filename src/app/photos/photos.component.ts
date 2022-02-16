import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';
import { Photo } from '../type';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  fotoInfo: Partial<Photo>[];

  constructor(private photosService: PhotosService) {}

  ngOnInit(): void {
      this.photosService.getAll().subscribe(photo => this.fotoInfo = photo)
  }
}
