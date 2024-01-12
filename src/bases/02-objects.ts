export const pokemonIds = [1,20,30,34,75]

// export const Pokemon = {
//     id: 1,
//     name: 'Bulbasaur',
// }

interface Pokemon {
    id: number;
    name: string;
    age: number;
}

export const bulbasaur:Pokemon = {
    id: 1,
    name: 'Bulbasaur',
    age: 2
}

export const charmander:Pokemon = {
    id: 4,
    name: 'Bulbasaur',
    age: 2
}

export const pokemons:Pokemon[] = [];

pokemons.push( charmander, bulbasaur)

console.log(pokemons)