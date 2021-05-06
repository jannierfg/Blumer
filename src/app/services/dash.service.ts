import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashService {

  API_URI = environment.api;
  constructor(private http: HttpClient) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
    'Authorization': 'Bearer ' + localStorage.getItem('ACCESS_TOKEN')
  });

  getUsers(page: number,q: string) {
    return this.http.get(`${this.API_URI}/user/users?page=${page}&q=${q}`, { headers: this.headers });
  }

  getTransactions(page: number,q: string) {
    return this.http.get(`${this.API_URI}/user/transactions?page=${page}&q=${q}`, { headers: this.headers });
  }

}
