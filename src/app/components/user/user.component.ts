import { Component, OnInit } from '@angular/core';

import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user.model';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public userService : UsersService) { }

  users: any = []
  selectedUser : User = {
    nombre : "",
    primerApellido : "",
    segundoApellido : "",
    email : "",
    telefono :""
  }

  ngOnInit(): void {
    this.getUsers();
  }



  getUsers(){

    this.userService.getUser().subscribe(
      res => {
        this.users = res;
      },
      err => console.log(err)
    )
  }

  addUser(form : NgForm){
    if(form.value.uid){
      console.log("actualizando");
      this.userService.putUser(form.value).subscribe(
        res => {
          this.getUsers()
          form.resetForm()
        },
        err => console.log(err) 
      )
      
    }else{
      this.userService.createUSer(form.value).subscribe(
        res => {
          this.getUsers()
          form.resetForm()
        },
        err => console.log(err)  
      )
    }
  }

  deleteUser(id : string){
    console.log(id);
    
    this.userService.deleteUser(id).subscribe(
    res => this.getUsers(),
    err => console.log(err)
     )
  }

  editUser(user : User){
    console.log(user);
    this.selectedUser = user
    
  }



}
