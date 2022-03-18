import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { HeroesList } from '../module/heroes-list';

@Injectable({
  providedIn: 'root'
})
export class HeroesListService {

  private listHeroes: Array<string> = [];
  private urlHeroes: string = "http://localhost:3000";
  
  public emitEvent = new EventEmitter();

  constructor(private httpClient: HttpClient) { }

  //pegar os dados 
  public getHeroes(): Observable<Array<HeroesList>> {
    return this.httpClient.get<Array<HeroesList>>(`${this.urlHeroes}/heroes-list`)
    .pipe(
      response => response,
      error => error
    )
  }

  //adicionar os dados 
  public heroesListAdd(value: string): Observable<HeroesList> {
    return this.httpClient.post<HeroesList>(`${this.urlHeroes}/heroes-list`, {
      nome: value
    }).pipe(
      response => response,
      error => error
    )
  }


  public editHeroes(value: string, id: number): Observable<HeroesList> {
    return this.httpClient.put<HeroesList>(`${this.urlHeroes}/heroes-list/${id}`, {
      nome: value
    }).pipe(
      res => res,
      error => error
    )
  }

  public deleteHeroes(id: number): Observable<HeroesList> {
    return this.httpClient.delete<HeroesList>(`${this.urlHeroes}/heroes-list/${id}`).
    pipe(
      res => res,
      error => error,
    )
  }
  public heroesListAlert(value: HeroesList) {
    return this.emitEvent.emit(value);
  }

}
