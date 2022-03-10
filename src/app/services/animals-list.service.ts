import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnimalsList } from '../module/animals-list';

@Injectable({
  providedIn: 'root'
})
export class AnimalsListService {

  public emitEvent = new EventEmitter();

  private listAnimals: Array<string> = [
    "Hipopótamo",
    "Elefante",
    "Hiena",
    "Zebra",
    "Baleia"
  ];

  constructor(private httpClient: HttpClient) { }

  private url: string = "http://localhost:3000";
  
  // public animalsList() {
  //   return this.listAnimals;
  // }

  //puxando do servidor fake 
  public animalsList(): Observable<AnimalsList> {
    return this.httpClient.get<AnimalsList>(`${this.url}/animals-list`)
    .pipe(
      response => response,
      error => error
    )
  }

  public animalsListAlert(value: string) {
    return this.emitEvent.emit(value);
  }
}
