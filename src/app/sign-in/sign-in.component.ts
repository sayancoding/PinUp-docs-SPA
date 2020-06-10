import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  navigateToSignUP() {
    this._router.navigateByUrl('/sign-up');
  }
  signIn = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      )
    ]),
    pwd: new FormControl('', [Validators.required]),
  });
  onSubmit() {
    console.log(this.signIn.value);
    this.signIn.reset()
  }
}
