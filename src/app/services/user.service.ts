import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) {
    
   }
   registerUsingAPI(user:User){
    console.log("from the service")
    console.log(user);
    console.log("--------------")
    return this.httpClient.post("http://localhost:44374/api/User",user);
  }
}
