import { Component, OnInit } from '@angular/core';
import { PokemonSearchService } from '../services/pokemon-search.service';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.scss']
})
export class SearchpageComponent implements OnInit {
  pokemons? = [];

  constructor(private pokemonService: PokemonSearchService) {}

  ngOnInit(): void {
    this.pokemonService.getAllPokemons()
    .subscribe(
      data => {
        this.pokemons = data.results;
        console.log(this.pokemons);
      }
    )
  }
  
}
