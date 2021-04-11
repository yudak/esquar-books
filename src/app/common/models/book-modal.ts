import { ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { BookItem } from './book-item';

export interface BookMoadlData {
    bookDetails:  Observable<BookItem>
}