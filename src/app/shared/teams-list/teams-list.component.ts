import { Component, OnInit, EventEmitter } from '@angular/core';
import { TeamsList } from 'src/app/module/teams-list';
import { TimesServiceService } from 'src/app/services/times-list.service';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss']
})
export class TeamsListComponent implements OnInit {

  public teamsEmit = new EventEmitter();
  public listTeams: Array<TeamsList> = [];

  constructor(private _timesService: TimesServiceService) { }

  ngOnInit(): void {
    this._timesService.listTeams().subscribe(
      res => this.listTeams = res,
      error => error 
    );

    this._timesService.teamsEmit.subscribe(
      res => {
        alert(`O time adicionado foi: ${res.nome}`)
        return this.listTeams.push(res)
      }
    )
  }

}
