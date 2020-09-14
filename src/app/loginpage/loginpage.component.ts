import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserdataService } from './../dashboard/service/userdata.service';
import { Router } from '@angular/router';
import { User, UserData } from '../dashboard/model/user';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  form: FormGroup;
  public loginInvalid: boolean;
  public errormessage = '';
  public userdata: UserData;

  constructor(private fb: FormBuilder, private router: Router, private userService: UserdataService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required]
    });
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessToken");

  }

  onSubmit(): void {
    this.errormessage = '';
    const username = this.form.get('username').value;
    const password = this.form.get('password').value;
    if (username == '' && password == '') {
      return;
    }
     this.userService.checkAuthenticated({ "email": username, "password": password }).subscribe(
      (userdata) => {
        localStorage.setItem("refreshToken", userdata.refreshToken);
        localStorage.setItem("accessToken", userdata.token);
        this.router.navigate(['/profile']);
      },
      (errorResponse: HttpErrorResponse) => {
        this.errormessage = errorResponse.error.errors[0].message;
      }); 
  }
}
