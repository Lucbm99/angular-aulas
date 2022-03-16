import { Component, OnInit } from '@angular/core';
import { HeroesList } from 'src/app/module/heroes-list';
import { HeroesListService } from 'src/app/services/heroes-list.service';

@Component({
  selector: 'app-add-heroes',
  templateUrl: './add-heroes.component.html',
  styleUrls: ['./add-heroes.component.scss']
})
export class AddHeroesComponent implements OnInit {

  constructor(private heroesService: HeroesListService) { }
  public heroesList: Array<HeroesList> = [];

  ngOnInit(): void {
  }

  public listAddItem(value: string) {
    this.heroesService.heroesListAdd(value).subscribe(
      res => this.heroesService.heroesListAlert(res),
      error => error
    );  
  }

  

  
}
