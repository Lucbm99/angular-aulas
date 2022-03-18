import { AddDocesComponent } from './add-doces/add-doces.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

//Components
import { NewComponentComponent } from './new-component/new-component.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodAddComponent } from './food-add/food-add.component';
import { FormsModule } from '@angular/forms';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { SorvetesListComponent } from './sorvetes-list/sorvetes-list.component';
import { DocesListComponent } from './doces-list/doces-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { AddHeroesComponent } from './add-heroes/add-heroes.component';
import { AddSorvetesComponent } from './add-sorvetes/add-sorvetes.component';
import { AddTimesComponent } from './add-times/add-times.component';
import { AddAnimalsComponent } from './add-animals/add-animals.component';


@NgModule({
  declarations: [
    NewComponentComponent,
    InputComponent,
    OutputComponent,
    FoodListComponent,
    FoodAddComponent,
    AnimalsListComponent,
    TeamsListComponent,
    SorvetesListComponent,
    DocesListComponent,
    HeroesListComponent,
    AddHeroesComponent,
    AddSorvetesComponent,
    AddTimesComponent,
    AddDocesComponent,
    AddAnimalsComponent
  ],
  exports: [
    NewComponentComponent,
    InputComponent,
    OutputComponent,
    FoodListComponent,
    FoodAddComponent,
    AnimalsListComponent,
    TeamsListComponent,
    SorvetesListComponent,
    DocesListComponent,
    HeroesListComponent,
    AddHeroesComponent,
    AddSorvetesComponent,
    AddTimesComponent,
    AddDocesComponent,
    AddAnimalsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ]
})
export class SharedModule { }
