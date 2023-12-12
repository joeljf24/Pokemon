import { create } from 'zustand';
const endpoint = "unstring";

interface Pokemons {
    id: number,
    name: string,
    image: string,
    height: number,
    weight: number,
    hp: number,
    attack: string,
    defense: string,
    getPokemons: () => Promise<void>
}

interface PokemonState {
    pokemons: Pokemons[],
}

export const usePokemonsStore = create(() => ({
    getPokemons: async () => {
        const res  = await (await fetch(`${endpoint}/pokemons`)).json()
    }
}))