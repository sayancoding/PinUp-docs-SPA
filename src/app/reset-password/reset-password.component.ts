import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ResetService } from '../service/reset.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
  constructor(private _router: Router,private _restService:ResetService, private _activeRoute: ActivatedRoute) {}
  token = '';
  ngOnInit(): void {
    this.token = this._activeRoute.snapshot.paramMap.get('token');
  }
  resetPwd = new FormGroup({
    password: new FormControl('',[Validators.required]),
    confirmPassword: new FormControl('',[this.checkConfirmPass.bind(this)]),
  });
  onSubmit() {
    console.log({...this.resetPwd.value,'token':this.token});
    this._restService.resetConfirm({
      ...this.resetPwd.value,
      token: this.token,
    }).subscribe(result=>{
      alert(`save changes password`)
      this._router.navigate(['/sign-in'])
    },err=>{
      alert('happen something wrong')
    })
  }
  checkConfirmPass(formControl: FormControl) {
    if (typeof this.resetPwd !== 'undefined') {
      if (
        formControl.value == '' ||
        this.resetPwd.controls.password.value != formControl.value
      ) {
        return { incorrect: true };
      } else {
        // console.log(formControl.value);
        return null;
      }
    }
  }
}
