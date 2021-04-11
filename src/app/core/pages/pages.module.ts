import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { AuthGuardGuard } from 'src/app/common/guards/auth-guard.guard';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';




@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  providers: [
    AuthGuardGuard,
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ]
})
export class PagesModule { }
