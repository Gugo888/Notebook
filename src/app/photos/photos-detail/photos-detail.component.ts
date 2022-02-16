import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotosService } from 'src/app/photos.service';
import { Photo } from 'src/app/type';

@Component({
  selector: 'app-photos-detail',
  templateUrl: './photos-detail.component.html',
  styleUrls: ['./photos-detail.component.scss']
})
export class PhotosDetailComponent implements OnInit {

  photosDetail: Photo
  constructor(private photosService: PhotosService, private avtiveRoute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    const id = this.avtiveRoute.snapshot.paramMap.get('id');
    this.photosService.getById(id).subscribe(photo => {
      if(photo) {
        this.photosDetail = photo
      } else {
        this.route.navigate(['notedata'])
      }
    })

  }

}
