import { Injectable } from '@angular/core';
import {Video} from './video.model';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {observableToBeFn} from 'rxjs/testing/TestScheduler';

const urlGetAll = environment.apiEndPoint + '/videoes';
const urlGetOne = urlGetAll + '/';

@Injectable()
export class VideoService {

  constructor(private http: HttpClient) {

  }

    getVideoes(): Observable<Video[]> {
    return this.http
      .get<Video[]>
      (urlGetAll);
    }

  getById(id: number): Observable<Video> {
    return this.http
      .get<Video>
      (urlGetOne + id);
  }

  delete(id: number): Observable<Video> {
    return this.http
      .delete<Video>(urlGetOne + id);
  }

}