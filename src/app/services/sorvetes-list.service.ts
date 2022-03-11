import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
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

  private urlIceCream: string = 'http://localhost:3000';

  public getSorvetes(): Observable<SorveteList> {
    return this.httpClient.get<SorveteList>(`${this.urlIceCream}/sorvetes-list`)
    .pipe(
      response => response,
      error => error
    )
  }
}
