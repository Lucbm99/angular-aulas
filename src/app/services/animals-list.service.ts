import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

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
  public animalsList() {
    return this.httpClient.get(`${this.url}/animals-list`);
  }

  public animalsListAlert(value: string) {
    return this.emitEvent.emit(value);
  }
}
