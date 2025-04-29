import React from 'react';

const SearchFilter = ({ searchTerm, setSearchTerm, typeFilter, setTypeFilter, types }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search Pokémon..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="flex-1 p-1.5 text-sm rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
      />
      <select
        value={typeFilter}
        onChange={e => setTypeFilter(e.target.value)}
        className="p-1.5 text-sm rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
      >
        <option value="">All Types</option>
        {types.map(type => (
          <option key={type} value={type} className="capitalize">
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchFilter;