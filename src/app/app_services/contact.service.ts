import { Injectable } from '@angular/core';
import { API_BASE_URL } from '../common/constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private host = API_BASE_URL;
  constructor(private httpClient: HttpClient) { }

  sendMessage(cform: NgForm): Observable<any> {
    return this.httpClient.post(`${this.host}/send`, cform.value, { responseType: 'text' });
  }
}
