import { SorveteList } from 'src/app/module/sorvete-list';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { SorvetesListService } from 'src/app/services/sorvetes-list.service';

@Component({
  selector: 'app-add-sorvetes',
  templateUrl: './add-sorvetes.component.html',
  styleUrls: ['./add-sorvetes.component.scss']
})
export class AddSorvetesComponent implements OnInit {

  constructor(private sorveteService: SorvetesListService) { }

  ngOnInit(): void {
  }

  public addSorvete(value: string) {
    this.sorveteService.listAddSorvetes(value).subscribe(
      response => this.sorveteService.alertListSorvetes(response),
      error => error
    )
  }
}
