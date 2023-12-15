import { create } from 'zustand';
const endpoint = "unstring";

interface Pokemon {
    id: number,
    name: string,
    image: string,
    height: number,
    weight: number,
    hp: number,
    attack: string,
    defense: string,
}

interface PokemonStore {
    pokemons: Pokemon[],
    addPokemons: (data: Pokemon[]) => void;
}

export const usePokemonStore = create<PokemonStore>((set) => ({
    pokemons: [],
    addPokemons: (data) => set((state) => ({ pokemons: [...state.pokemons, ...data] })),
  }));