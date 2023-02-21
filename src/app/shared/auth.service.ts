import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  userRegister(data:any){
    return this.http.post('http://localhost:4000/user/register/',data)
  };

  userLogin(data:any){
    return this.http.post('http://localhost:4000/user/login/', data)
  };
}
