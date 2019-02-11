/* eslint-disable import/prefer-default-export */
import React from 'react';

export const PokemonName = ({ name, isForInfoPage }) => {
  return isForInfoPage ? (
    <h2 className="card-title text-capitalize text-monospace mb-4">{name}</h2>
  ) : (
    <p className="pokemon-name card-text text-capitalize text-center">{name}</p>
  );
};
