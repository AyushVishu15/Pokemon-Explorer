import React from 'react';

const Header = () => {
  return (
    <header className="bg-white-600 text-black p-4">
      <div className="flex items-center justify-center gap-2">
        <img
          src="/pokeball-logo.png" // Update to match exact filename and extension (e.g., /pokeball-logo.jpg)
          alt="Pokéball Logo"
          className="h-10 w-10"
          onError={() => console.error('Failed to load Pokéball logo. Check file path and name in public/')}
        />
        <h1 className="text-4xl font-bold">Pokémon Explorer</h1>
      </div>
    </header>
  );
};

export default Header;