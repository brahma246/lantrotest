import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserdataService } from './service/userdata.service';
import { User, UserData } from './model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  formGroup: FormGroup;
  userDetails: any = '';
  loggedinUserProfile: UserData;
  tocken: string;
  username = '';


  constructor(private formBuilder: FormBuilder, private router: Router, private userdataservice: UserdataService) { }

  ngOnInit(): void {
    this.userdataservice.getCustomProfile().subscribe((userdata: User) => {
      this.loggedinUserProfile = userdata.data;
      this.tocken = userdata.token;
      this.username = userdata.data.firstname + userdata.data.lastname;
    });
    this.createForm();
    this.formGroup.reset();
  }

  createForm() {

    this.formGroup = this.formBuilder.group({
      'firstname': ['', [Validators.required]],
      'lastname': ['', [Validators.required]],
      'bio': ['', [Validators.required]],
      'country': ['', [Validators.required]],
      'username': ['', [Validators.required]],
      'email': ['', [Validators.required, Validators.email]]
    });

  }
  onSubmit(userDetails) {

    this.userdataservice.updateUserInfo(userDetails, this.tocken).subscribe((userdata) => {
      this.loggedinUserProfile = userdata.data;
    });

    this.router.navigate(['/profile']);

  }
}
