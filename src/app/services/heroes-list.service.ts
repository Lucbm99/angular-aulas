import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroesList } from '../module/heroes-list';

@Injectable({
  providedIn: 'root'
})
export class HeroesListService {

  private listHeroes: Array<string> = [];
  private urlHeroes: string = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }


  public getHeroes(): Observable<HeroesList> {
    return this.httpClient.get<HeroesList>(`${this.urlHeroes}/heroes-list`)
    .pipe(
      response => response,
      error => error
    )
  }
}
