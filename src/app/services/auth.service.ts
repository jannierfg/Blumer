import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';

const ACCESS_TOKEN = 'ACCESS_TOKEN';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URI = environment.api;
  
  constructor(private http: HttpClient) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  login(login) {
    const token = this.http.post(`${this.API_URI}auth/login`, login)
    console.log(token)
    return token
  }

  logoutUser() {
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("DATA_USER");
  }

  isLogged() {
    return localStorage.getItem(ACCESS_TOKEN) != null;
  }

}
