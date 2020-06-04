import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  jwtAuthenticationService(username, password) {
    return this.http.post<any>(
      `http://localhost:8000/authenticate`,{username,password}).pipe(
        map(
          data => {
            sessionStorage.setItem('authenticaterUser', username);
            sessionStorage.setItem('token', `Bearer ${data.token}`);
            return data;
          }
        )
      );
    }

    getAuthenticatedUser() {
      return sessionStorage.getItem('authenticaterUser')
    }

    getAuthenticatedToken() {
      if(this.getAuthenticatedUser())
        return sessionStorage.getItem('token')
    }

    isUserLoggedIn() {
      let user = sessionStorage.getItem('authenticaterUser')
      return !(user === null)
    }

    logout(){
      sessionStorage.removeItem('authenticaterUser')
      sessionStorage.removeItem('token')
    }
}

  export class AuthenticationBean{
    constructor(public message:string) { }
  }



