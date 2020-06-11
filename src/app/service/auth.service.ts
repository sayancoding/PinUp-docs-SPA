import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _signInUrl = 'http://localhost:4000/users/signin';
  constructor(private _http:HttpClient) {}

  signInUser(user){
    return this._http.post<any>(this._signInUrl,user)
  }
}
