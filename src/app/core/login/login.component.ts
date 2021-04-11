import { Route } from '@angular/compiler/src/core';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataCenter, DATA_CENTER } from 'src/app/common/data-center/data-center';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFG: FormGroup;
  showError: boolean;

  constructor(private fb: FormBuilder,
              @Inject(DATA_CENTER) private dataCenter: DataCenter,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loginFG = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }


  login() {
    this.loginFG.markAsDirty();
    if (this.loginFG.valid) {
      this.dataCenter.userName = this.loginFG.get('userName').value;
      this.router.navigateByUrl('/pages/search')
    } else {
      this.showError = true;
    }
  }

}
