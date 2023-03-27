import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonDetailService {

  constructor(private http: HttpClient) { }

  getAllDetails(pokemonUrl: string) {
    return this.http.get<any>(pokemonUrl);
  }
}
