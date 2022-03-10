import { AnimalsList } from './../../module/animals-list';
import { Component, OnInit } from '@angular/core';
import { AnimalsListService } from 'src/app/services/animals-list.service';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.scss']
})
export class AnimalsListComponent implements OnInit {

  public animalsList: AnimalsList | any;

  constructor(private _animalsList: AnimalsListService) { }

  ngOnInit(): void {
    this._animalsList.animalsList().subscribe(
      res => this.animalsList = res,
      error => error
    );
  
    // this._animalsList.emitEvent.subscribe(
    //   response => alert(`Adicionou => ${response}`)
    // );
  }

}
