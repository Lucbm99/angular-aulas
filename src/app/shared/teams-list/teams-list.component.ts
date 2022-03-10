import { Component, OnInit } from '@angular/core';
import { TimesServiceService } from 'src/app/services/times-list.service';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss']
})
export class TeamsListComponent implements OnInit {

  public listTeams: Array<string> = [];

  constructor(private _timesService: TimesServiceService) { }

  ngOnInit(): void {
    this.listTeams = this._timesService.listTeams();
  }

}
