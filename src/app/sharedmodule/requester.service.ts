import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequesterService {

  constructor(private http: HttpClient) { }

  addNewUser(data:object,url:string): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'auth-token': '737524291',
    })
    return this.http.post(url, data,{headers})
  }

  logIn(data:object, url:string):Observable<any> {
    return this.http.get(url)
  }

}
