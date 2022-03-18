import { DocesList } from './../../module/doces-list';
import { Component, OnInit } from '@angular/core';
import { DocesListService } from 'src/app/services/doces-list.service';

@Component({
  selector: 'app-doces-list',
  templateUrl: './doces-list.component.html',
  styleUrls: ['./doces-list.component.scss']
})
export class DocesListComponent implements OnInit {

  public docesList: Array<DocesList> = [];
  constructor(private _docesService: DocesListService) { }

  ngOnInit(): void {
    this._docesService.getListDoces().subscribe(
      res => this.docesList = res,
      error => error
    )

    this._docesService.docesEmit.subscribe(
      response => {
        alert(`Doce adicionado foi: ${response.nome}`);
        return this.docesList.push(response);
      }
    )
  }

  public editDoces(value: string, id: number) {
    this._docesService.editDoces(value, id).subscribe(
      res => { 
        return console.log(res)
      },
      error => error,
    )
  }

  public deleteDoces(id: number) {
    this._docesService.deleteDoces(id).subscribe(
      response => {
        this.docesList = this.docesList.filter(
          doce => {
            return doce.id !== id
          }
        )
      },
      error => error
    )
  }
}
