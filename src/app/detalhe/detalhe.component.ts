import { Component, Input, OnInit } from '@angular/core';
import { ListaComponent } from '../lista/lista.component';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../server/pokemon.service';
import { UniqPokemon } from '../model/uniqPokemon';

@Component({
  selector: 'app-detalhe',
  standalone: true,
  imports: [ListaComponent],
  templateUrl: './detalhe.component.html',
  styleUrl: './detalhe.component.scss'
})
export class DetalheComponent implements OnInit {

  uniqPokemon: UniqPokemon = new UniqPokemon();
  imagem: string = '';

  constructor(private active: ActivatedRoute, private service: PokemonService){}

  ngOnInit(): void {
      this.detalhePokemon();
  }

  detalhePokemon(): void {
    const id = this.active.snapshot.params["id"]
    this.imagem = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
    this.service.detalhePokemon(id).subscribe(pokemon => {
      this.uniqPokemon = pokemon
      console.log('pokemon', pokemon)
      console.log('abilities', pokemon.abilities)
      console.log('moves', pokemon.moves)
      console.log('types', pokemon.types)
    })
  }

}
