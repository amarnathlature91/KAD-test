import { Injectable } from '@angular/core';
import { API_BASE_URL } from '../common/constants';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Gallery } from '../entity/gallery';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private host = API_BASE_URL;
  constructor(private httpClient: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)
      .set('Access-Control-Allow-Origin', '*')
    return headers;
  }

  addImage(data: FormData): Observable<Gallery> {
    const headers = this.getHeaders();
    return this.httpClient.post<Gallery>(`${this.host}/upload`, data, { headers: headers });
  }

  deleteImage(gId: number): Observable<any> {
    const headers = this.getHeaders();
    return this.httpClient.delete<any>(`${this.host}/delete/${gId}`, { headers: headers });
  }

  getAllGallery(): Observable<Gallery[]> {
    const headers = this.getHeaders();
    return this.httpClient.get<Gallery[]>(`${this.host}/getAllGallery`);
  }
}
