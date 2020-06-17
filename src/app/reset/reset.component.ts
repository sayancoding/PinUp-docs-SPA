import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ResetService } from '../service/reset.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css'],
})
export class ResetComponent implements OnInit {
  constructor(private _resetService:ResetService) {}

  ngOnInit(): void {}
  reset = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      ),
    ]),
  });
  onSubmit() {
    console.log(this.reset.valid);
    this._resetService.resetRequest(this.reset.value).subscribe(result=>{
      alert('check you email, we have sended a rest link' )
    },err=>{
      alert('something have wrong')
    })
  }
}
