import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchFilter from './components/SearchFilter';
import PokemonCard from './components/PokemonCard';
import { fetchPokemon, fetchPokemonTypes } from './utils/api';

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [types, setTypes] = useState([]);

  // Fetch Pokémon and types on mount
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const pokemonData = await fetchPokemon();
        setPokemonList(pokemonData);
        setFilteredPokemon(pokemonData);

        const typesData = await fetchPokemonTypes();
        setTypes(typesData);
      } catch (err) {
        setError('Failed to fetch Pokémon data');
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  // Filter Pokémon based on search and type
  useEffect(() => {
    let filtered = pokemonList;

    if (searchTerm) {
      filtered = filtered.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (typeFilter) {
      filtered = filtered.filter(pokemon =>
        pokemon.types.some(type => type.type.name === typeFilter)
      );
    }

    setFilteredPokemon(filtered);
  }, [searchTerm, typeFilter, pokemonList]);

  // Render loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto p-4">
        <SearchFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          typeFilter={typeFilter}
          setTypeFilter={setTypeFilter}
          types={types}
        />
        {filteredPokemon.length === 0 ? (
          <div className="text-center text-gray-600">
            No Pokémon found matching your criteria
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredPokemon.map(pokemon => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default App;