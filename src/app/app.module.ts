import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BASE_URL } from './common/api/api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule 
  ],
  providers: [
    { provide: BASE_URL, useValue: 'https://www.googleapis.com/books/v1/volumes' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
