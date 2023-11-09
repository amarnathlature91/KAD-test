import { Injectable } from '@angular/core';
import { User } from '../entity/user';
import { API_BASE_URL } from '../common/constants';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../entity/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  authUser!: User;
  private host = API_BASE_URL + '/post';
  constructor(private httpClient: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)
      .set('Access-Control-Allow-Origin', '*');
    return headers;
  }

  createNewPost(data: FormData): Observable<Post | HttpErrorResponse> {
    const headers = this.getHeaders();
    return this.httpClient.post<Post>(`${this.host}/create`, data, { headers: headers });
  }

  deletePost(postId: number): Observable<any> {
    const headers = this.getHeaders();
    return this.httpClient.delete<any>(`${this.host}/${postId}/delete`, { headers: headers });
  }

  getPosts(page: number, size: number): Observable<Post[]> {
    const headers = this.getHeaders();
    return this.httpClient.get<Post[]>(`${this.host}/getAllPostsByTime`, { headers: { 'Access-Control-Allow-Origin': '*' } });
  }

  updatePost(data: FormData): Observable<Post | HttpErrorResponse> {
    const headers = this.getHeaders();
    return this.httpClient.post<Post>(`${this.host}/update`, data, { headers: headers });
  }

  applyJob(data: FormData): Observable<any | HttpErrorResponse> {
    const headers = this.getHeaders();
    return this.httpClient.post<Post>(`${API_BASE_URL}/applyJob`, data);
  }

}
