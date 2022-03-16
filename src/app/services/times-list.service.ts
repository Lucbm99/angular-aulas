import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  private urlTeams: string = 'http://localhost:3000';

  public listTeams(): Observable<Array<TeamsList>> {
    return this.httpClient.get<Array<TeamsList>>(`${this.urlTeams}/times-list`)
    .pipe(
      res => res,
      error => error
    )
  }
}
