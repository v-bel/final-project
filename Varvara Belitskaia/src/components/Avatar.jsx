/* eslint-disable import/prefer-default-export */
import React from 'react';

export const Avatar = props => {
  const src = `https://raw.githubusercontent.com/epam-js-dec-2018/final-project/master/pokemons/${
    props.poke.id
  }.png`;
  const altText = `${props.poke.name}`;
  const classNameValue = props.isForInfoPage
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
