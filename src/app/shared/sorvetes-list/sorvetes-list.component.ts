import { Component, OnInit } from '@angular/core';
import { SorveteList } from 'src/app/module/sorvete-list';
import { SorvetesListService } from 'src/app/services/sorvetes-list.service';

@Component({
  selector: 'app-sorvetes-list',
  templateUrl: './sorvetes-list.component.html',
  styleUrls: ['./sorvetes-list.component.scss']
})
export class SorvetesListComponent implements OnInit {

  public listSorvetes: Array<SorveteList> = [];

  constructor(private _sorvetesService: SorvetesListService) { }

  ngOnInit(): void {
    this._sorvetesService.getSorvetes().subscribe(
      res => this.listSorvetes = res,
      error => error
    );

    this._sorvetesService.sorveteEmit.subscribe(
      response => {
        alert(`Foi adicionado o sorvete de sabor: ${response.sabor}`);
        return this.listSorvetes.push(response);
      }
    )
  }

}
