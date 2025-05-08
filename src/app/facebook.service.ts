import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface FacebookUser {
  id: string;
  name: string;
  email?: string;
}

@Injectable({
  providedIn: 'root'
})
export class FacebookService {
  private apiUrl = 'https://graph.facebook.com/me?fields=id,name,email';

  constructor(private http: HttpClient) {}

  getFacebookUser(token: string): Observable<FacebookUser> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<FacebookUser>(this.apiUrl, { headers });
  }
}
