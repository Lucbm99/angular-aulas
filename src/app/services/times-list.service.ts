import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamsList } from '../module/teams-list';

@Injectable({
  providedIn: 'root'
})
export class TimesServiceService {

  private teamsList: Array<string> = [
    "Palmeiras",
    "Fluminense",
    "Internacional",
    "Flamengo",
    "Santos"
  ]
  constructor(private httpClient: HttpClient) { }

  public teamsEmit = new EventEmitter();
  private urlTeams: string = 'http://localhost:3000';

  //pegar os dados
  public listTeams(): Observable<Array<TeamsList>> {
    return this.httpClient.get<Array<TeamsList>>(`${this.urlTeams}/times-list`)
    .pipe(
      res => res,
      error => error
    )
  }

  //adicionar os dados
  public addTeams(value: string): Observable<TeamsList> {
    return this.httpClient.post<TeamsList>(`${this.urlTeams}/times-list`, {
      nome: value
    }).pipe(
      response => response,
      error => error
    )
  }

  public editTimes(value: string, id: number): Observable<TeamsList> {
    return this.httpClient.put<TeamsList>(`${this.urlTeams}/times-list/${id}`, {
      nome: value
    }).pipe(
      res => res,
      error => error
    )
  } 

  public deleteTimes(id: number): Observable<TeamsList> {
    return this.httpClient.delete<TeamsList>(`${this.urlTeams}/times-list/${id}`)
    .pipe(
      res => res,
      error => error 
    )
  }

  public addTimesAlert(value: TeamsList) {
    return this.teamsEmit.emit(value);
  }
}
