import { Component, OnInit } from '@angular/core';
import { SorvetesListService } from 'src/app/services/sorvetes-list.service';

@Component({
  selector: 'app-sorvetes-list',
  templateUrl: './sorvetes-list.component.html',
  styleUrls: ['./sorvetes-list.component.scss']
})
export class SorvetesListComponent implements OnInit {

  public listSorvetes: Array<string> = [];

  constructor(private _sorvetesService: SorvetesListService) { }

  ngOnInit(): void {
    this.listSorvetes = this._sorvetesService.getSorvetes();
  }

}
