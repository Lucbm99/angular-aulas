import { Component, OnInit } from '@angular/core';
import { SorveteList } from 'src/app/module/sorvete-list';
import { SorvetesListService } from 'src/app/services/sorvetes-list.service';

@Component({
  selector: 'app-sorvetes-list',
  templateUrl: './sorvetes-list.component.html',
  styleUrls: ['./sorvetes-list.component.scss']
})
export class SorvetesListComponent implements OnInit {

  public listSorvetes: SorveteList | any;

  constructor(private _sorvetesService: SorvetesListService) { }

  ngOnInit(): void {
    this._sorvetesService.getSorvetes().subscribe(
      res => this.listSorvetes = res,
      error => error
    );
  }

}
