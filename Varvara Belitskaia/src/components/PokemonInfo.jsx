/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Avatar } from './Avatar';
import { PokemonName } from './PokemonName';

export const PokemonInfo = props => {
  return (
    <div className="pokemon-info-wrapper d-flex justify-content-center">
      <div className="pokemon-info-card card card-shadow d-flex flex-column justify-content-center bg-light p-4">
        <Avatar poke={props.poke} isForInfoPage={true} />
        <div className="card-body d-flex flex-column mt-2">
          <PokemonName name={props.poke.name} isForInfoPage={true} />
          <p className="card-text text-monospace">
            <span className="font-weight-bold">ID: </span>
            {props.poke.id}
          </p>
          {props.poke.isCaught ? (
            <p className="card-text text-monospace">
              <span className="font-weight-bold">Status: </span>caught on{' '}
              {props.poke.date}
            </p>
          ) : (
            <p className="card-text text-monospace">
              <span className="font-weight-bold">Status: </span>not caught yet
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
