import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User, UserData } from '../model/user';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UserdataService {
   
   user: User;
   headers: HttpHeaders;
   userDetails: User;
   userData: UserData;

   private baseUrl = "https://ltrx.herokuapp.com/";

  constructor(private httpclient: HttpClient) { }
   
  getUserProfile(authtoken: string):Observable<Object> {
   return  this.httpclient.get(this.baseUrl+"api/v1/auth/user", 
   {headers: new HttpHeaders({'Authorization': 'Bearer '+ authtoken})
  }).pipe(map((userdata) =>userdata));

  }

  getRefreshToken(tocken,accesstocken):Observable<Object>{
    return  this.httpclient.post(this.baseUrl+"api/v1/auth/refreshToken",
    {'refreshToken':tocken,'accessToken':accesstocken});
  }
   
  checkAuthenticated(userdata):Observable<User>{
    return  this.httpclient.post(this.baseUrl+'api/v1/auth/login', userdata).pipe(map((userinfo: User) => this.userDetails = userinfo));
  }
  getCustomProfile(): Observable<User>{ 
    return new BehaviorSubject(this.userDetails);
  }
  
  updateUserInfo(updatedata: User, token: string): Observable<User>{
   return this.httpclient.put(this.baseUrl+"api/v1/auth/user", updatedata,
   { headers: new HttpHeaders({'Authorization': 'Bearer '+ token })},
   ).pipe(map((userinfo: User) => this.userDetails = userinfo));
  }

}
  

  


