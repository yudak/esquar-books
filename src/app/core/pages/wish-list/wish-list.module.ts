import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishListComponent } from './wish-list.component';
import { WishListRoutingModule } from './wish-list-routing.module';
import { SharedModule } from '../../components/shared.module';



@NgModule({
  declarations: [WishListComponent],
  imports: [
    CommonModule,
    SharedModule,
    WishListRoutingModule
  ]
})
export class WishListModule { }
