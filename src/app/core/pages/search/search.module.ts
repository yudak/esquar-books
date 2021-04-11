import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DataService } from 'src/app/common/services/data.service';
import { SpinnerComponent } from 'src/app/common/spinner/spinner.component';
import { SharedModule } from '../../components/shared.module';



@NgModule({
  declarations: [
    SearchComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SearchRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    DataService
  ]
})
export class SearchModule { }
