import { InjectionToken } from '@angular/core';
import { BookItem } from '../models/book-item';
import { assign, isEmpty, isNil } from 'lodash';

export type WishListItems = {[id: string]: BookItem};

export class DataCenter {
    private _userName: string;
    private _wishList: WishListItems;

    public get userName(): string {
        return this._userName;
    }

    public set userName(userName: string) {
        this._userName = userName;
    }

    public get wishList(): WishListItems {
        return this._wishList;
    }

    public get wishListAsArray(): BookItem[] {
        if (!isNil(this._wishList)) {
            return Object.keys(this._wishList).map(key => this._wishList[key]);
        }
    }

    removeFromWishList(bookItem: BookItem): void {
        delete this._wishList[bookItem.id];
    }

    addToWishList(bookItem: BookItem) {
        this._wishList = assign(this.wishList, {[bookItem.id]: bookItem})
    }

    isSelcted(id: string): boolean {
        if (isEmpty(this._wishList)) {
          return false
        }
        return !isEmpty(this._wishList[id]);
      }
}

export const DATA_CENTER: InjectionToken<DataCenter> = new InjectionToken<DataCenter>('DATA_CENTER', {
    providedIn: 'root',
    factory: () => new DataCenter()
});