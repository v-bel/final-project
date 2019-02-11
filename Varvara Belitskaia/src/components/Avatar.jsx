/* eslint-disable import/prefer-default-export */
import React from 'react';

export const Avatar = ({ poke, isForInfoPage }) => {
  const src = `https://raw.githubusercontent.com/epam-js-dec-2018/final-project/master/pokemons/${
    poke.id
  }.png`;
  const altText = `${poke.name}`;
  const classNameValue = isForInfoPage
    ? 'pokemon-info-avatar card-img-top'
    : 'pokemon-avatar';
  return (
    <img
      src={src}
      alt={altText}
      className={classNameValue}
      onError={e => {
        e.target.onerror = null;
        e.target.src = 'src/assets/default.png';
      }}
    />
  );
};
