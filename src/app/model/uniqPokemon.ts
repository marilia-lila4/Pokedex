export class UniqPokemon {
    id: number = 0;
    height: number = 0;
    weight: number = 0;
    name: string = '';
    abilities: Ability[] = [];
    moves: Move[] = [];
    types: Type[] = [];
}

export class Ability {
    ability: AbilityDetails = new AbilityDetails();
}

export class AbilityDetails {
    name: string = '';
}

export class Move {
    move: MoveDetails = new MoveDetails();
}

export class MoveDetails {
    name: string = '';
}

export class Type {
    type: TypeDetails = new TypeDetails();
}

export class TypeDetails {
    name: string = '';
}

