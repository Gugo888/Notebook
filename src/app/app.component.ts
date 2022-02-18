import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { elementAt, Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'notebook';

// n = new FormControl('');

constructor(private http: HttpClient) { }



ngOnInit() {

  // this.n.valueChanges.subscribe(number => {
  //   number * 2;
  // })
}

  
}



//       http://localhost:3000/square/:n






// let observable = new Observable(observer => {

//   button.addEventListener('click', () => {
//     observer.next('clicked')
//   })
// })

// let promise = new Promise(resolve => {
//   button.addEventListener('click', () => {
//     resolve(1)
//   })
// })


// promise.then((param) => {
//   console.log(param);
// })


// observable.subscribe(param => {
//   console.log(param);
// })