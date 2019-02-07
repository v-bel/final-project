/* eslint-disable import/prefer-default-export */
import React from 'react';

export const PokemonName = props => {
  return props.isForInfoPage ? (
    <h2 className="card-title text-capitalize text-monospace mb-4">
      {props.name}
    </h2>
  ) : (
    <p className="pokemon-name card-text text-capitalize text-center">
      {props.name}
    </p>
  );
};
