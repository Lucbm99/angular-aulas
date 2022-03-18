import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable, EventEmitter } from '@angular/core';
import { SorveteList } from './../module/sorvete-list';

@Injectable({
  providedIn: 'root'
})
export class SorvetesListService {
  
  private listSorvetes: Array<string> = [
    "Baunilha",
    "Napolitano",
    "Flocos",
    "Brigadeiro",
    "Morango"
  ];

  constructor(private httpClient: HttpClient) {}

  public sorveteEmit = new EventEmitter();
  private urlIceCream: string = 'http://localhost:3000';

  public getSorvetes(): Observable<Array<SorveteList>> {
    return this.httpClient.get<Array<SorveteList>>(`${this.urlIceCream}/sorvetes-list`)
    .pipe(
      response => response,
      error => error
    )
  }

  public listAddSorvetes(value: string): Observable<SorveteList> {
    return this.httpClient.post<SorveteList>(`${this.urlIceCream}/sorvetes-list`, {
      sabor: value
    }).pipe(
      response => response,
      error => error
    )
  }

  public editSorvete(value: string, id: number): Observable<SorveteList> {
    return this.httpClient.put<SorveteList>(`${this.urlIceCream}/sorvetes-list/${id}`, {
      sabor: value
    }).pipe(
      res => res,
      error => error 
    )
  }

  public deleteSorvete(id: number): Observable<SorveteList> {
    return this.httpClient.delete<SorveteList>(`${this.urlIceCream}/sorvetes-list/${id}`)
    .pipe(
      res => res,
      error => error 
    )
  }

  public alertListSorvetes(value: SorveteList) {
    return this.sorveteEmit.emit(value);
  }
}
