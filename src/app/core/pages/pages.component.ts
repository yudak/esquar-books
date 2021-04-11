import { Component, Inject } from '@angular/core';
import { DataCenter, DATA_CENTER } from 'src/app/common/data-center/data-center';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {

  constructor(@Inject(DATA_CENTER) public dataCenter: DataCenter) { }

}
