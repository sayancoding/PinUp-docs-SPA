import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {}
  navigateToSignIn() {
    this._router.navigateByUrl('/sign-in');
  }
  signUp = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z]+$/),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      ),
    ]),
    pwd: new FormControl('', [Validators.required]),
    confirmPwd: new FormControl('', [this.checkConfirmPass.bind(this)]),
  });

  checkConfirmPass(formControl: FormControl) {
    if (typeof this.signUp !== 'undefined') {
      if (
        formControl.value == '' ||
        this.signUp.controls.pwd.value != formControl.value
      ) {
        return { incorrect: true };
      } else {
        // console.log(formControl.value);
        return null;
      }
    }
  }
  onSubmit() {
    console.log(this.signUp.value);
    this.signUp.reset();
    
  }
}
