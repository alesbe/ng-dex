import { Component, Input, OnInit } from '@angular/core';
import { PokemonDetailService } from 'src/app/shared/services/pokemon-detail.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() basicPokemonInfo?: any;
  pokemon?: any;

  constructor(private pokemonService: PokemonDetailService) {}

  ngOnInit(): void {
    this.pokemonService.getAllDetails(this.basicPokemonInfo.url)
    .subscribe(
      data => {
        this.pokemon = data;
        console.log(this.pokemon);
      }
    )
  }
}
