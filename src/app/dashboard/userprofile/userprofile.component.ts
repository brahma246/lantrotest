import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../service/userdata.service';
import { User } from '../model/user';
import { UserData } from '../model/user';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  userProfile: UserData;
  errMessage: string;
  tocken : string;
  firstname: string;
  lastname: string;

  constructor(private userdataService: UserdataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.tocken = localStorage.getItem("accessToken");
   
     this.userdataService.getUserProfile(this.tocken).subscribe(
       (user) => {
         this.userProfile = <UserData>Object.values(user)[0];
      },
       (errorResponse: HttpErrorResponse) => { this.errMessage= errorResponse.error.errors[0].message});
  }

  

}
