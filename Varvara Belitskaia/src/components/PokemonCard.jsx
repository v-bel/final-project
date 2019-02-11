/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from './Avatar';
import { PokemonName } from './PokemonName';
import { CatchButton } from './CatchButton';

export const PokemonCard = ({ poke, onClick }) => {
  return (
    <div className="pokemon-card card-shadow card mb-3 mx-1 d-flex flex-column">
      <Link
        className="pokemon-info-link my-2 text-decoration-none text-reset"
        to={`/pokemons/${poke.id}`}
      >
        <Avatar poke={poke} />
        <PokemonName name={poke.name} />
      </Link>
      <CatchButton poke={poke} onClick={onClick} />
    </div>
  );
};
