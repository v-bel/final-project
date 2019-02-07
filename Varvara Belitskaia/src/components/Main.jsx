/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PokemonListContainer from '../containers/PokemonListContainer';
import CaughtListContainer from '../containers/CaughtListContainer';
import PokemonInfoContainer from '../containers/PokemonInfoContainer';

export const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={PokemonListContainer} />
      <Route path="/caught" component={CaughtListContainer} />
      <Route path="/pokemons/:id" component={PokemonInfoContainer} />
    </Switch>
  );
};
