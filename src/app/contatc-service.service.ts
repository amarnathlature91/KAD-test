import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from './constants';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContatcServiceService {

  private host = API_BASE_URL;
	constructor(private httpClient: HttpClient) { }

	sendMessage(cform:NgForm): Observable<any> {
    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*' });
    return this.httpClient.post(`${this.host}/send`, cform.value,{responseType: 'text'});
	}
}
