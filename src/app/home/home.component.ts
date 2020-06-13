import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isModalOn: boolean = false;
  constructor(private _router:Router) {}

  ngOnInit(): void {
    $(document).ready(function () {
      $('#toggle-btn').click(function () {
        $('.sidebar').toggleClass('show');
      });
    });
  }
  
}
