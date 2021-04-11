import { Component, Inject } from '@angular/core';
import { isNil } from 'lodash';
import { DataCenter, DATA_CENTER } from 'src/app/common/data-center/data-center';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent {

  constructor(@Inject(DATA_CENTER) public dataCenter: DataCenter) { }

  hasItems(): boolean {
    return !isNil(this.dataCenter?.wishListAsArray);
  }

}
