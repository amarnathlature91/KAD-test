import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { API_BASE_URL } from '../common/constants';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private host = API_BASE_URL + "/user";
  headers1 = new HttpHeaders({ 'Access-Control-Allow-Origin': '*', 'No-Auth': 'True' });


  constructor(private httpclient: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('jwtToken');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  public login(userLogin: NgForm): Observable<HttpResponse<any> | HttpErrorResponse> {
    return this.httpclient.post<any>(`${this.host}/login`, userLogin.value, { headers: this.headers1, observe: 'response' });
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
}
