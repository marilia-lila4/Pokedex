import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonService } from '../server/pokemon.service';
import { Pokemons } from '../model/pokemons';
import { PaginatorModule } from 'primeng/paginator';
import { DetalheComponent } from '../detalhe/detalhe.component';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [PaginatorModule, DetalheComponent],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent implements OnInit {

  listarPokemons: Pokemons = new Pokemons();
  pokemonImageUrls: { [key: string]: string } = {};
  idPokemon: string = '';
  totalPokemons: number = 1302;
  first: number = 0;
  rows: number = 20;
  rotaAtual!: Subscription;

  constructor(private service: PokemonService, private router: Router){}

  ngOnInit(): void {
      this.listarTodosPokemons();
      // console.log('lista', this.receberUrlDetalhe)
  }

  listarTodosPokemons(): void {
    this.service.listarTodos(this.first, this.rows).subscribe(element => {
      this.listarPokemons = element
      console.log(element.results)
    })
  }

  getPokemonImageUrl(url: string): string {
    const match = url.match(/\/(\d+)\//)
    match ? this.idPokemon = match[1] : null;
    const urlImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.idPokemon}.png`;
    return urlImage
  }

  onPageChange(event: any): void {
    this.first = event.first;
    this.listarTodosPokemons();
  }

  irParaDetalhes(url: string) {
    console.log('url', url)
    const match = url.match(/\/(\d+)\//)
    match ? this.idPokemon = match[1] : null;
    this.router.navigate([`/detalhe/${this.idPokemon}`])
  }

}
