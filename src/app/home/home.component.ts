import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isModalOn: boolean = false;
  constructor(private _router: Router) {}
  user_name = ''
  ngOnInit(): void {
    this.user_name = jwt_decode( localStorage.getItem('token')).user_name
    $(document).ready(function () {
      $('#toggle-btn').click(function () {
        $('.sidebar').toggleClass('show');
      });
    });
  }

  signOut(){
    localStorage.clear()
    this._router.navigate(['/sign-in'])
  }
}
