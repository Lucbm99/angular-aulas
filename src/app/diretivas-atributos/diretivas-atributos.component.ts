import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {

  public valor: boolean = true;
  public heightPx: string = "20px";
  public backgroundColor: string = "#ff0ff7";

  public nome: string = "";
  public list: Array<{nome: string}> = [{nome: 'Lucas'}];

  public cores: boolean = false;
  public time: string = 'Palmeiras';

  public date:Date = new Date();

  constructor() { }

  ngOnInit(): void {

    setInterval( () => {
      if (this.valor) {
        this.valor = false;
      } else {
        this.valor = true;
      } 

      if(this.heightPx == "20px") {
        this.heightPx = "50px";
        this.backgroundColor = "#ee0033";
      } else {
        this.heightPx = "20px";
        this.backgroundColor = "#ff0ff7";
      }

    }, 2000);

  }

  public salvar() {
    if(this.nome == '') {
      alert("Campo em branco. Verifique e tente novamente!");
      return;
    }
    this.list.push({nome: this.nome});
    this.nome = "";
  }

}
