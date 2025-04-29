export const fetchPokemon = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
      const data = await response.json();
      const pokemonDetails = await Promise.all(
        data.results.map(async pokemon => {
          const res = await fetch(pokemon.url);
          return res.json();
        })
      );
      return pokemonDetails;
    } catch (error) {
      throw new Error('Failed to fetch Pokémon');
    }
  };
  
  export const fetchPokemonTypes = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/type');
      const data = await response.json();
      return data.results.map(type => type.name);
    } catch (error) {
      throw new Error('Failed to fetch Pokémon types');
    }
  };