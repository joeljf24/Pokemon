// import endpoint from "./backendEndpoint"

export async function fetchPokemons() {
    try {
      const response = await fetch('https://api.pokemon.com/pokemons');
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error fetching pokemons:', error);
      return [];
    }
}