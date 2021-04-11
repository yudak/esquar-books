import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, Inject, ChangeDetectorRef} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DataCenter, DATA_CENTER } from 'src/app/common/data-center/data-center';
import { BookItem } from "../../../common/models/book-item";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Observable<BookItem>,
              @Inject(DATA_CENTER) public dataCenter: DataCenter) { }

  @Input()
  bookItem: BookItem

  @Input()
  showRemove: boolean

  @Output()
  onClick: EventEmitter<BookItem> = new EventEmitter<BookItem>();

  doClick() {
    this.onClick.emit(this.bookItem);
  }

  toggelWishList() {
    if (!this.dataCenter.isSelcted(this.bookItem.id)) {
      this.dataCenter.addToWishList(this.bookItem);
    } else {
      this.dataCenter.removeFromWishList(this.bookItem);
    }
  }

}
