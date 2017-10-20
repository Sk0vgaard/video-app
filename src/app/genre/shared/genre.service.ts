import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Genre} from './genre.model';
import {Observable} from 'rxjs/Observable';
import * as url from 'url';

const urlGetAll = environment.apiEndPoint + '/genres';
const urlGetOne = urlGetAll + '/';

@Injectable()
export class GenreService {

  constructor(private http: HttpClient) { }

  create(genre: Genre): Observable<Genre> {
    return this.http
      .post<Genre>(urlGetAll, genre);
  }
}
