import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../app/event'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient ) { }

  apiUrl='http://localhost:8080/event';
  createEvent(event: Object): Observable<Object> {
    return this._http.post(`${this.apiUrl}` + `/createEvent`, event);
  }
  
  
  serviceUrl='http://localhost:8080/eventRegistration';
  postEvent(event: Object): Observable<Object> {
    return this._http.post(`${this.serviceUrl}` + `/createEventRegistration`, event);
  }

  userUrl='http://localhost:8080/user/';
  postUser(event: Object): Observable<Object> {
    return this._http.post(`${this.userUrl}` + `/createUser`, event);
  }


}
