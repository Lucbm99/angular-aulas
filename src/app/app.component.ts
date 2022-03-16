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
    </app-diretivas-atributos>
    
    <app-diretivas-atributos></app-diretivas-atributos>
    <app-new-component></app-new-component>
  
    <app-input [contador]="addValue"></app-input>
    <br>
    <button (click)="add()"> Add </button>

    <ng-template [ngIf]="getDados">
      <h1>{{ getDados.nome }} </h1>
      <h2>{{ getDados.idade }} </h2>
    </ng-template>
    <app-output (enviarDados)="setDados($event)"></app-output>
    
    <app-food-add></app-food-add>
    <app-food-list></app-food-list>
    <app-forms></app-forms>-->
    <app-animals-list></app-animals-list><hr>
    <app-add-times></app-add-times>
    <app-teams-list></app-teams-list><hr>
    <app-add-sorvetes></app-add-sorvetes>
    <app-sorvetes-list></app-sorvetes-list><hr>
    <app-add-doces></app-add-doces>
    <app-doces-list></app-doces-list><hr>
    <app-add-heroes></app-add-heroes>
    <app-heroes-list></app-heroes-list><hr>
    <router-outlet></router-outlet> 
  `
})
export class AppComponent implements OnInit {
  
  public addValue: number = 0;
  public getDados: {
    nome: string,
    idade: number
  } | undefined;

  constructor() {
  }

  public add() {
    this.addValue +=1;
  }

  ngOnInit(): void {
      
  }

  public setDados(event: { nome: string, idade: number}) {
    this.getDados = event;
  }


}
