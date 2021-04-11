import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataCenter, DATA_CENTER } from 'src/app/common/data-center/data-center';
import { BookItem } from "src/app/common/models/book-item";
import { BookMoadlData } from 'src/app/common/models/book-modal';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: BookMoadlData,
    @Inject(DATA_CENTER) public dataCenter: DataCenter) { }

  ngOnInit(): void {
  }

  toggelWishList(item: BookItem) {
    if (!this.dataCenter.isSelcted(item.id)) {
      this.dataCenter.addToWishList(item);
    } else {
      this.dataCenter.removeFromWishList(item);
    }
  }
}
