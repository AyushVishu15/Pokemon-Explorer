import React from 'react';

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="w-24 h-24"
      />
      <h3 className="text-lg font-semibold capitalize">{pokemon.name}</h3>
      <p className="text-gray-600">#{pokemon.id}</p>
      <div className="flex gap-2">
        {pokemon.types.map(type => (
          <span
            key={type.type.name}
            className="px-2 py-1 bg-gray-200 rounded-full text-sm capitalize"
          >
            {type.type.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;