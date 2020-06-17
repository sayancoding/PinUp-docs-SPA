import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ResetService {
  private _restRequestUrl = 'http://localhost:4000/resetPwd/';
  private _resetPwdConfirm = 'http://localhost:4000/resetPwd/confirm'
  constructor(private _http:HttpClient) {}
  resetRequest(data){
    return this._http.post<any>(this._restRequestUrl,data)
  }
  resetConfirm(data){
    return this._http.post<any>(this._resetPwdConfirm,data)
  }
}
