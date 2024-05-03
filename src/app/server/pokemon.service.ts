import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemons } from '../model/pokemons';
import { UniqPokemon } from '../model/uniqPokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url: string = 'https://pokeapi.co/api/v2'
  urlEvolucao: string = 'https://pokeapi.co/api/v2/pokemon';
  // image: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'

  constructor(private http: HttpClient) { }

  listarTodos(offset: number, limit: number): Observable<Pokemons>{
    return this.http.get<Pokemons>(`${this.url}/pokemon?offset=${offset}&limit=${limit}`)
  }

  detalhePokemon(id: string): Observable<UniqPokemon>{
    return this.http.get<UniqPokemon>(`${this.url}/pokemon/${id}`);
  }

}
