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
  }

}
