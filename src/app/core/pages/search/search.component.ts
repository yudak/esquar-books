import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { tap, map, switchMap, debounceTime, catchError } from 'rxjs/operators';
import { BookItem } from "src/app/common/models/book-item";
import { BookMoadlData } from 'src/app/common/models/book-modal';
import { DataService } from 'src/app/common/services/data.service';
import { BookDetailsComponent } from '../../components/book-details/book-details.component';

type GoTo = 'Previous' | 'next';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  bookItems: Observable<BookItem[]>;
  totalItems: number;
  formIndex: number;
  pageNumber: number;
  maxResults: number;
  searchFc: FormControl;
  isSearching: boolean;
  

  constructor(private dataService: DataService, 
              private cdr: ChangeDetectorRef,
              public dialog: MatDialog) { }

  ngOnInit(): void {

    this.pageNumber = 0;
    this.maxResults = 20;
    this.searchFc = new FormControl('')
    this.bookItems = this.searchFc.valueChanges.pipe(
      tap(() => this.isSearching = true),
      debounceTime(200),
      switchMap((value) => this.search(value))
    )
  }


  getFromIndex(): number {
    const currentIndex = this.pageNumber * this.maxResults;
    return currentIndex + 1;
  }

  getToIndex(): number {
    if (this.totalItems < this.maxResults) {
      return this.totalItems;
    }
    return (this.pageNumber + 1) * this.maxResults;
  }

  getPagesCount(): number {
    return Math.abs(this.totalItems / this.maxResults);
  }

  goPage(goto: GoTo): void {
    if (goto == 'Previous'){
      this.pageNumber--;
    } else {
      this.pageNumber++;
    }
      
    this.bookItems = this.search(this.searchFc.value)
  }

  openDialog(bookItem: BookItem) {
    const bookDetails = this.dataService.getBookDedatils(bookItem.id);
    const data: BookMoadlData = {
        bookDetails: bookDetails
    }
    const dialogOption: Partial<MatDialogConfig> = {
      data,
      height: '80vh',
      width: '80vw'
    }
    const dialogRef = this.dialog.open(BookDetailsComponent, dialogOption);
  }

  private search(searchValue: string): Observable<BookItem[]> {
    this.isSearching = true;
    
    return this.dataService.search(this.BuildUrl(searchValue)).pipe(
      tap(res => this.totalItems = res.totalItems),
      map(res => res.items),
      tap(() => this.isSearching = false),
      catchError((error) => this.setError(error))
    )
  }

  private setError(error: any): Observable<BookItem[]> {
    this.isSearching = false;
    this.totalItems = 0
    let bookItem: BookItem[]
    return of(bookItem);
  }

  private BuildUrl(searchString: string): string {
    const fields = 'totalItems,items(id,volumeInfo(title,authors,publishedDate,pageCount,imageLinks(smallThumbnail)))'
    return `?q=${searchString}&maxResults=${this.maxResults}&startIndex=${this.pageNumber}&fields=${fields}`
  }
  

}
