import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  // fetch() {
  //   return this.httpClient.get('http://127.0.0.1:8000/users/')
  // }

  getUsers(): Observable<User[]> {

    return this.httpClient.get<User[]>('http://127.0.0.1:8000/apitest/users/')

  }
}
