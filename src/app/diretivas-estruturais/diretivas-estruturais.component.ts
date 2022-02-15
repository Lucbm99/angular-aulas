import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public idade: boolean = true;
  public idadeClick: boolean = true;
  
  public list: Array<{ nome: string, idade: number}> = [
    { nome: "Lucas Baradel", idade: 22 },
    { nome: "Felicio Campos", idade: 23 },
    { nome: "Julio Cesar", idade: 22},
    { nome: "Cezar Marchiori", idade: 33 },
    { nome: "Rosana Baradel", idade: 60 },
  ];

  public nameSwitch: string = 'rosana';

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
    this.list.push({ nome: "Fernanda", idade: 31 })
  }

  public onClickEventList(event: number) {
    //remover um evento do array
    this.list.splice(event, 1);
  }
}
