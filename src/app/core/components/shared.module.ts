import { NgModule } from '@angular/core';
import { BookComponent } from './book/book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    BookComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    BookComponent,
    BookDetailsComponent,
    MatDialogModule,
    MatIconModule,
    MatCardModule
  ]
})
export class SharedModule { }
