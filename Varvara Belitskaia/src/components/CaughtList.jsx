/* eslint-disable import/prefer-default-export */
import React from 'react';
import { PokemonCard } from './PokemonCard';

export const CaughtList = ({ caughtPokemonList }) => {
  const caughtPokemons = caughtPokemonList.map(poke => (
    <PokemonCard key={poke.id} poke={poke} />
  ));
  return (
    <div className="pokemons-wrapper d-flex flex-wrap justify-content-around">
      {caughtPokemons}
    </div>
  );
};
