import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  public nome: string = "Lucas";
  public idade: number = 23;
  public maisUm: number = 1;

  public checkedDisabled: boolean = true;
  public imgSrc = "https://www.google.com.br/google.jpg"
  public imgTitle = "Foto do Google";
  public altText = "Foto do Google";
  
  public position: {x: number, y: number} = {x: 0, y: 0};

  constructor() { }

  ngOnInit(): void {}

  public alertaInfo(valor: MouseEvent) {
    console.log(valor);
  }

  public mouseMoveTest(valor: MouseEvent) {
    console.log(valor)
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}
