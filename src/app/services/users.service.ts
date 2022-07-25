import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  URL_API = 'http://localhost:8000/api/users'

  users : User[] | undefined

  constructor(private http:HttpClient) { }

  //CRUD USUARIOS
  getUser() {
    return this.http.get<User[]>(this.URL_API);
  }

  createUSer(user : User){
    return this.http.post(this.URL_API,user)
  }

  deleteUser(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}`)
  }

  putUser(user : User){
    return this.http.put(`${this.URL_API}/${user.uid}`,user)
  }



}
