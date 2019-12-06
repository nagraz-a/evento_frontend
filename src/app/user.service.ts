import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
<<<<<<< HEAD
import { Event } from '../app/event';


=======
import { Event } from '../app/event'
import { User } from './user.model';
>>>>>>> f3cf73b5ba252bb336383d8ff9db0bd94fcd4590


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient ) { }

  // event creation 
  apiUrl='http://localhost:8080/event';
  createEvent(event: Object): Observable<Object> {
    return this._http.post(`${this.apiUrl}` + `/createEvent`, event);
  }
  
//  event registration 
  serviceUrl='http://localhost:8080/eventRegistration';
  postEvent(event: Object): Observable<Object> {
    return this._http.post<Object>(`${this.serviceUrl}` + `/createEventRegistration`, event);
  }

<<<<<<< HEAD
  userUrl='http://localhost:8080/user'
  createtUser(user: Object): Observable<Object> {
    return this._http.post<Object>(`${this.userUrl}` + `/saveuser`, user);
=======
//user registration
  userUrl='http://localhost:8080/user/';
  postUser(event: Object): Observable<Object> {
    return this._http.post(`${this.userUrl}` + `/createUser`, event);
>>>>>>> f3cf73b5ba252bb336383d8ff9db0bd94fcd4590
  }

  //get listofusers
  listUrl='http://localhost:8080/user/getAll';
  getUser():Observable<User[]> {
     return this._http.get<User[]>(this.listUrl);
  }
  
  //get listofevents
  eventUrl='http://localhost:8080/event/getAll'
  getEvent(): Observable<Event[]> {
     return this._http.get<Event[]> (this.eventUrl);
  }

}
