import { Component, Input, OnInit } from '@angular/core';
import { Photo } from 'src/app/type';

@Component({
  selector: 'app-photos-item',
  templateUrl: './photos-item.component.html',
  styleUrls: ['./photos-item.component.scss']
})
export class PhotosItemComponent  {

  @Input() info!:Photo
}
