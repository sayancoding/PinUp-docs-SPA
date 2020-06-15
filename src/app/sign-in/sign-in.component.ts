import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  constructor(private _router: Router, private _auth: AuthService) {}

  ngOnInit(): void {}

  isAuthSuccess: boolean = false;

  navigateToSignUP() {
    this._router.navigateByUrl('/sign-up');
  }
  navigateToReset(){
    this._router.navigate(['/reset'])
  }

  signIn = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      ),
    ]),
    pwd: new FormControl('', [Validators.required]),
  });
  onSubmit() {
    // console.log(this.signIn.value);
    this._auth.signInUser(this.signIn.value).subscribe(
      (res) => {
        this.isAuthSuccess = true;
        console.log(res);
        localStorage.setItem('token', res.token);
        setTimeout(() => {
          this._router.navigateByUrl('/home');
        }, 400);
      },
      (err) => {
        console.log(err);
        alert(err.error.error);
      }
    );
    this.signIn.reset();
  }
}
