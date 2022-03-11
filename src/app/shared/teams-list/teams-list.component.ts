import { Component, OnInit } from '@angular/core';
import { TeamsList } from 'src/app/module/teams-list';
import { TimesServiceService } from 'src/app/services/times-list.service';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss']
})
export class TeamsListComponent implements OnInit {

  public listTeams: TeamsList | any;

  constructor(private _timesService: TimesServiceService) { }

  ngOnInit(): void {
    this._timesService.listTeams().subscribe(
      res => this.listTeams = res,
      error => error 
    );
  }

}
