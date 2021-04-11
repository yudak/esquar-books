import { Component } from '@angular/core';
import { BASE_URL } from './common/api/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {provide: BASE_URL, useValue: 'https://www.googleapis.com/books/v1/volumes'}
  ]
})
export class AppComponent {
  
}
