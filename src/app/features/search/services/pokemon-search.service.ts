import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonSearchService {

  constructor(private http: HttpClient) { }

  getAllPokemons() {
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon?limit=151');
  }
}
