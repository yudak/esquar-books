import { Inject, Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { isEmpty } from 'lodash';
import { DataCenter, DATA_CENTER } from '../data-center/data-center';

@Injectable()
export class AuthGuardGuard implements CanActivate {

  constructor(@Inject(DATA_CENTER) public dataCenter: DataCenter,
              private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot) {
    if (isEmpty(this.dataCenter.userName)) {
      this.router.navigateByUrl('login');
    }
    return !isEmpty(this.dataCenter.userName);
  }
}
