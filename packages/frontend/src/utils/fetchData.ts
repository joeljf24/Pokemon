// import endpoint from "./backendEndpoint"

export async function fetchPokemons() {
    try {
      const response = await fetch([`${endpoint}/pokemon`]);
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

export async function fetchTypes() {
  try {
    const response = await fetch([`${endpoint}/types`]);
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