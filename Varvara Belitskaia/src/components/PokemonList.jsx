/* eslint-disable import/prefer-default-export */
import React from 'react';
import { PokemonCard } from '../components/PokemonCard';

export const PokemonList = props => {
  const pokemons = props.pokemonList.map(poke => (
    <PokemonCard
      key={poke.id}
      poke={poke}
      onClick={props.onClick.bind(this, poke)}
    />
  ));
  return (
    <div className="pokemons-wrapper d-flex flex-wrap justify-content-around">
      {pokemons}
    </div>
  );
};
