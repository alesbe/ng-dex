import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { PokemonSearchService } from './services/pokemon-search.service';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    SearchpageComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    PokemonSearchService
  ],
  exports: [
    SearchpageComponent
  ]
})
export class SearchModule { }
