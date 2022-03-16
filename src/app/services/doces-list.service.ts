import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { DocesList } from '../module/doces-list';

@Injectable({
  providedIn: 'root'
})
export class DocesListService {

  docesList: Array<string> = [];
  public docesEmit = new EventEmitter();
  private urlDoces: string = 'http://localhost:3000';

  constructor(private _httpClient: HttpClient) { }

  public getListDoces(): Observable<Array<DocesList>> {
    return this._httpClient.get<Array<DocesList>>(`${this.urlDoces}/doces-list`)
    .pipe(
      response => response,
      error => error
    )
  }

  public addListDoces(value: string): Observable<DocesList> {
    return this._httpClient.post<DocesList>(`${this.urlDoces}/doces-list`, {
      nome: value
    }).pipe(
      res => res,
      error => error
    )
  }

  public alertListDoces(value: DocesList) {
    return this.docesEmit.emit(value);
  }
}
