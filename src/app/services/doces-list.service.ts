import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DocesList } from '../module/doces-list';

@Injectable({
  providedIn: 'root'
})
export class DocesListService {

  docesList: Array<string> = [];
  private urlDoces: string = 'http://localhost:3000';

  constructor(private _httpClient: HttpClient) { }

  public getListDoces(): Observable<Array<DocesList>> {
    return this._httpClient.get<Array<DocesList>>(`${this.urlDoces}/doces-list`)
    .pipe(
      response => response,
      error => error
    )
  }
}
