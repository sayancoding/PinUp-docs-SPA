import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isModalOn:boolean = false;
  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      $('#toggle-btn').click(function(){
        $('.sidebar').toggleClass('show')
      })
    })
  }
  toggleModal(){
    this.isModalOn = !this.isModalOn
  }
  detailView(){
    this.toggleModal();
  }
}
