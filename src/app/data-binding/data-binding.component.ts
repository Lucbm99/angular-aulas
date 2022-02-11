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
  
  constructor() { }

  ngOnInit(): void {
  }

}
