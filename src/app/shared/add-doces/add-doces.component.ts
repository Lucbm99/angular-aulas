import { DocesListService } from 'src/app/services/doces-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-doces',
  templateUrl: './add-doces.component.html',
  styleUrls: ['./add-doces.component.scss']
})
export class AddDocesComponent implements OnInit {

  constructor(private docesListService: DocesListService) { }

  ngOnInit(): void {
  }

  public addDoces(value: string) {
    this.docesListService.addListDoces(value).subscribe(
      res => this.docesListService.alertListDoces(res),
      error => error 
    )
  }

}
