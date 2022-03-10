import { Injectable } from '@angular/core';

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

  constructor() {}

  public getSorvetes() {
    return this.listSorvetes;
  }
}
