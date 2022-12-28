import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from 'src/model/user';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  users:string = 'https://dummyjson.com/users'

  constructor(private http:HttpClient) { }


  
  getdata():Observable<Users>{
    return this.http.get(this.users);
  }
}
