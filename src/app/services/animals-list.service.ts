import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnimalsList } from '../module/animals-list';

@Injectable({
  providedIn: 'root'
})
export class AnimalsListService {

  public emitEvent = new EventEmitter();

  
  constructor(private httpClient: HttpClient) { }
  
  private listAnimals: Array<string> = [];
  private url: string = "http://localhost:3000";
  public animalsEmit = new EventEmitter();

  // public animalsList() {
  //   return this.listAnimals;
  // }

  //puxando do servidor fake 
  public animalsList(): Observable<Array<AnimalsList>> {
    return this.httpClient.get<Array<AnimalsList>>(`${this.url}/animals-list`)
    .pipe(
      response => response,
      error => error
    )
  }

  public addAnimalsList(value: string): Observable<AnimalsList> {
    return this.httpClient.post<AnimalsList>(`${this.url}/animals-list`, {
      nome: value
    }).pipe(
      response => response,
      error => error
    )
  }


  public editAnimalsList(value: string, id: number): Observable<AnimalsList> {
    return this.httpClient.put<AnimalsList>(`${this.url}/animals-list/${id}`, {
      nome: value
    }).pipe(
      response => response,
      error => error
    )
  }

  public deleteAnimalsList(id: number): Observable<AnimalsList> {
      return this.httpClient.delete<AnimalsList>(`${this.url}/animals-list/${id}`)
      .pipe(
        response => response,
        error => error
    )
  }

  public animalsListAlert(value: AnimalsList) {
    return this.animalsEmit.emit(value);
  }

}
