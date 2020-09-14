import { Component, OnInit } from '@angular/core';
import { UserdataService } from './../dashboard/service/userdata.service';
import { UserData, User } from '../dashboard/model/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   userdata:UserData;
    firstname='';
    lastname='';
    token = '';

  

  constructor(private userdataservice: UserdataService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem("accessToken");
    this.userdataservice.getUserProfile(this.token).subscribe((userdata:User) => {
      this.firstname = userdata.data.firstname;
      this.lastname = userdata.data.lastname;
      this.token = userdata.token;
    });
  }

}
