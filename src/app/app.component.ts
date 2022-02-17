import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <app-data-binding></app-data-binding> -->
    <!-- <app-diretivas-estruturais></app-diretivas-estruturais> -->
    
    <!-- <app-diretivas-atributos>
      <h1>Aulas de diretivas de atributo</h1>
      <h3>Final da aula</h3>
    </app-diretivas-atributos>
    
    <app-diretivas-atributos>
      <h1>Lucas Baradel</h1>
      <h3>Rosana Baradel</h3>
    </app-diretivas-atributos>-->
    
    <app-diretivas-atributos></app-diretivas-atributos>
    <app-new-component></app-new-component>
    <router-outlet></router-outlet> 
  `
})
export class AppComponent implements OnInit {
  
  constructor() {
  }

  ngOnInit(): void {
      
  }


}
