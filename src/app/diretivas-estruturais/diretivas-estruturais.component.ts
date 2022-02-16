import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public idade: boolean = true;
  public idadeClick: boolean = true;
  
  //prática ngIf
  public cerveja: string = 'Amstel';

  public isLogged: boolean = true;
  public isNewUser: boolean = true;

  public voltagem: number = 220;

  //prática - ngFor
  public list: Array<{ nome: string, idade: number}> = [
    { nome: "Lucas Baradel", idade: 22 },
    { nome: "Felicio Campos", idade: 23 },
    { nome: "Julio Cesar", idade: 22},
    { nome: "Cezar Marchiori", idade: 33 },
    { nome: "Rosana Baradel", idade: 60 },
  ];

  public teams: Array<{ nomeTime: string, estado: string}> = [
    {nomeTime: 'Palmeiras', estado: 'São Paulo'},
    {nomeTime: 'Flamengo', estado: 'Rio de Janeiro'},
    {nomeTime: 'Internacional', estado: 'Rio Grande do Sul'},
    {nomeTime: 'ABC', estado: 'Rio Grande do Norte'}
  ]
  public timesFutebolAmericano: Array<{team: string; city: string }> = [
    {team: 'Carolina Panthers', city: 'Charlotte'},
    {team: 'Cincinatti Bengals', city: 'Cincinatti'},
    {team: 'Baltimore Ravens', city: 'Baltimore'},
    {team: 'Arizona Cardinals', city: 'Arizona'},
  ]

  public moveis: Array<{nome: string, marca: string, preco: number}> = [
    { nome: "Geladeira", marca: 'Brastemp', preco: 2222},
    { nome: "Microondas", marca: 'LG', preco: 1400},
    { nome: "Televisão", marca: 'Samsung', preco: 1500},
    { nome: "Torradeira", marca: 'Black & Decker', preco: 1640},
    { nome: "Máquina de lavar", marca: 'Consul', preco: 1840},
  ]

  //prática Switch
  public nameSwitch: string = 'rosana';

  public month: string = 'Fevereiro';
  public dayOfWeek: string = 'Tuesday';
  public candy: string = 'Pudim';

  constructor() { }

  ngOnInit(): void {

    setInterval( () => {
      this.idade ? 
        this.idade = false : 
        this.idade = true;
    }, 2000)
  }

  public onClick() {
    this.idadeClick ? 
        this.idadeClick = false : 
        this.idadeClick = true;
  }

  public onClickAddList() {
    this.list.push({ 
      nome: "Fernanda", 
      idade: 31 
    })
  }

  public addTeamFA() {
    this.timesFutebolAmericano.push({
      team: 'Seattle Seahawks',
      city: 'Seattle'
    })
  }

  public onClickEventList(event: number) {
    //remover um evento do array
    this.list.splice(event, 1);
  }
}
