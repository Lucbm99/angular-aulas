import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  @Output() public enviarDados = new EventEmitter();
  public list: Array<{nome: string, idade: number}> = [
    { nome: 'Lucas Baradel', idade: 23},
    { nome: 'Cezar Marchiori', idade: 60},
    { nome: 'Julio Cesar', idade: 34},
  ]
  constructor() { }

  ngOnInit(): void {
  }

  public getDados(event: number) {
    this.enviarDados.emit(this.list[event]);
  }
}
