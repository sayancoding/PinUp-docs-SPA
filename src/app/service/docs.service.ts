import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DocsService {
  private _docsUrl = 'http://localhost:4000/docs/';
  constructor(private _http:HttpClient) {}
  getDocs(){
    // let haeder = new HttpHeaders({'authorization':`Bearer ${localStorage.getItem('token')}`})
    return this._http.get<any>(this._docsUrl);
  }
}
