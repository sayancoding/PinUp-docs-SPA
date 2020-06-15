import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
  constructor(private _router:Router,private _activeRoute:ActivatedRoute) {}
  token = ''
  ngOnInit(): void {
    this.token = this._activeRoute.snapshot.paramMap.get('token');
  }
  resetPwd = new FormGroup({
    password : new FormControl(''),
    confirmPassword : new FormControl(''),
  })
  onSubmit(){
    console.log(this.resetPwd.value)
    console.log(this.token)
  }
}
