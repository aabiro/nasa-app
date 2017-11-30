import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './../auth/auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { ENV } from './env.config';
import { CollectionModel } from './models/collection.model';
import { ImageModel } from './models/image.model';

@Injectable()
export class ApiService {
    public baseUrl = 'http://localhost:8081/api/';

  constructor(
    private http: HttpClient,
    private auth: AuthService) { }

  // private get _authHeader(): string {
  //   return `Bearer ${localStorage.getItem('access_token')}`;
  // }

  // GET list of public, future events
  getCollections$(): Observable<EventModel[]> {
    return this.http
      // .get(`${ENV.BASE_API}collections`)
      .get(`${this.baseUrl}collections`)
      .catch(this._handleError);
  }
}
