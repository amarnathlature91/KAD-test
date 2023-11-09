import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../entity/user';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  loginSubject = new Subject<User>();


  constructor(private httpClient: HttpClient, private router: Router) { }

  public setToken(jwtToken: string) {
    localStorage.setItem("jwtToken", jwtToken);
  }

  public logout() {
    this.clearlc();
    this.router.navigate(['/login']);
  }

  public getToken() {
    return localStorage.getItem("jwtToken");
  }

  public clearlc() {
    localStorage.clear();
  }

  public isLoggedIn(): boolean {
    const token = localStorage.getItem("jwtToken");
    if (token == null || token.length <= 0) {
      return false;
    }
    else {
      return true;
    }
  }

  storeAuthUserInCache(authUser: User): void {
    if (authUser != null) {
      localStorage.setItem("authUser", JSON.stringify(authUser));
    }
    this.loginSubject.next(authUser);
  }

  getAuthUserFromCache(): User {
    let user = localStorage.getItem("authUser");
    var myObject: User = JSON.parse(JSON.stringify(user)) as User;
    return myObject;
  }

  getAuthUserId(): number {
    let user: string = localStorage.getItem("authUser") as string;
    var myObject = JSON.parse(user);
    return myObject.userId;
  }

}
