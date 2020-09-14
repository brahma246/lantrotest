import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { UserdataService } from './userdata.service';
import { Observable } from 'rxjs';
@Injectable()
export class RefreshService implements HttpInterceptor {
  constructor(public userservice: UserdataService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {  
    
  // Get access token from Local Storage
  const refreshToken = localStorage.getItem("refreshToken");
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken && !refreshToken) {
      return next.handle(request)
  }else{
  this.userservice.getRefreshToken(refreshToken,accessToken);
  return next.handle(request)
  }
  }
}