import { Injectable } from '@angular/core';

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
  constructor() { }

  public listTeams() {
    return this.teamsList;
  }
}
