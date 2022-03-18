import { AnimalsListService } from 'src/app/services/animals-list.service';
import { Component, OnInit } from '@angular/core';
import { AnimalsList } from 'src/app/module/animals-list';

@Component({
  selector: 'app-add-animals',
  templateUrl: './add-animals.component.html',
  styleUrls: ['./add-animals.component.scss']
})
export class AddAnimalsComponent implements OnInit {

  constructor(private animalsList: AnimalsListService) { }

  ngOnInit(): void {
  }

  public addAnimal(value: string) {
    this.animalsList.addAnimalsList(value).subscribe(
      response => this.animalsList.animalsListAlert(response),
      error => error 
    )
  }

}
