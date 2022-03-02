import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  private url: string = "http://localhost:3000/"; //list-food

  constructor(private _httpClient: HttpClient) { 

  }

  // public foodList() {
  //   return this.list;
  // }

  public foodList(): Observable<FoodList> {
    return this._httpClient.get<FoodList>(`${this.url}list-food`)
    .pipe(
      res => res,
      error => error
    );
  }

  public foodListAdd(value: string) {
    this.foodListAlert(value);
    return this.list.push(value);
  }

  public foodListAlert(value: string) {
    return this.emitEvent.emit(value);
  }
}
