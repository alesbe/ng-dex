import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { PokemonSearchService } from './services/pokemon-search.service';
import { CardComponent } from './components/card/card.component';
import { PokemonDetailService } from '../../shared/services/pokemon-detail.service';



@NgModule({
  declarations: [
    SearchpageComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    PokemonSearchService,
    PokemonDetailService
  ],
  exports: [
    SearchpageComponent
  ]
})
export class SearchModule { }
