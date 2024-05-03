export class Pokemons {
    count: number = 0;
    next: number = 0;
    previous: number = 0;
    results: PokemonResult[] = [];
}

export class PokemonResult {
    name: string = '';
    url: string = '';
}
