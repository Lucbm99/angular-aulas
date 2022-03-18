import { AnimalsList } from './../../module/animals-list';
import { Component, OnInit } from '@angular/core';
import { AnimalsListService } from 'src/app/services/animals-list.service';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.scss']
})
export class AnimalsListComponent implements OnInit {

  public animalsList: Array<AnimalsList> = [];

  constructor(private _animalsList: AnimalsListService) { }

  ngOnInit(): void {
    this._animalsList.animalsList().subscribe(
      res => this.animalsList = res,
      error => error
    );
  
    this._animalsList.animalsEmit.subscribe(
      response => {
        alert(`Adicionou => ${response.nome}`);
        return this.animalsList.push(response)
      }
    );
  }

  public editAnimalsList(value: string, id: number) {
    this._animalsList.editAnimalsList(value, id).subscribe(
      response => {
        return console.log(response)
      },
      error => error
    )
  }

  public foodListDelete(id: number) {
    this._animalsList.deleteAnimalsList(id).subscribe(
      response => {
        this.animalsList = this.animalsList.filter(
          item => {
            return id !== item.id
          }
        )
      },
      error => error
    )
  }
}
