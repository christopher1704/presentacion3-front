import { Component, OnInit } from '@angular/core';

import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user.model';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public userService : UsersService) { }

  users: any = []

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

}
