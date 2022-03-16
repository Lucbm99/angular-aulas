import { Component, OnInit } from '@angular/core';
import { TimesServiceService } from 'src/app/services/times-list.service';

@Component({
  selector: 'app-add-times',
  templateUrl: './add-times.component.html',
  styleUrls: ['./add-times.component.scss']
})
export class AddTimesComponent implements OnInit {

  constructor(private timesService: TimesServiceService) { }

  ngOnInit(): void {
  }

  public addTeam(value: string) {
    this.timesService.addTeams(value).subscribe(
      res => this.timesService.addTimesAlert(res),
      error => error 
    )
  }
}
