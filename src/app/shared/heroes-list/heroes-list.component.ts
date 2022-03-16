import { Component, OnInit } from '@angular/core';
import { HeroesList } from 'src/app/module/heroes-list';
import { HeroesListService } from 'src/app/services/heroes-list.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {

  public listHeroes: Array<HeroesList> = [];


  constructor( private heroesService: HeroesListService) { }

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe(
      response => this.listHeroes = response,
      error => error
    )

    this.heroesService.emitEvent.subscribe(
      response => {
        alert(`Você adicionou => ${response.nome}`);
        return this.listHeroes.push(response);
      }
    )
  }

}
