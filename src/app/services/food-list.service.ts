import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//Interface
import { FoodList } from '../module/food-list';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  public emitEvent = new EventEmitter(); 

  private list: Array<string> = [
    "X-Bacon",
    "Feijão",
    "Ovo"
  ];

  //customização de headers para envio de requisições
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  private url: string = "http://localhost:3000/"; //list-food

  constructor(private _httpClient: HttpClient) { 

  }

  // public foodList() {
  //   return this.list;
  // }

  public foodList(): Observable<Array<FoodList>> {
    return this._httpClient.get<Array<FoodList>>(`${this.url}list-food`)
    .pipe(
      res => res,
      error => error
    );
  }

  //add without post - angular
  // public foodListAdd(value: string) {
  //   this.foodListAlert(value);
  //   return this.list.push(value);
  // }

  //add with post - angular
  public foodListAdd(value: string): Observable<FoodList> {
    return this._httpClient.post<FoodList>(`${this.url}list-food`, {
      nome: value,
    },
      //passagem de um header customizado
      //this.httpOptions,
    )
    .pipe(
      res => res,
      error => error
    )
  }

  //edit
  public foodListEdit(value: string, id: number): Observable<FoodList> {
    return this._httpClient.put<FoodList>(`${this.url}list-food/${id}`, {
      nome: value
    })
    .pipe(
      res => res,
      error => error
    )
  }

  //delete
  public foodListDelete(id: number): Observable<FoodList> {
    return this._httpClient.delete<FoodList>(`${this.url}list-food/${id}`)
    .pipe(
      res => res,
      error => error
    )
  }

  // public foodListAlert(value: string) {
  //   return this.emitEvent.emit(value);
  // }

  public foodListAlert(value: FoodList) {
    return this.emitEvent.emit(value);
  }
}
