/* eslint-disable import/prefer-default-export */
import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <nav className="navbar bg-light nav-pills justify-content-start mb-2">
      <NavLink
        exact
        to="/"
        className="nav-link"
        activeClassName="nav-link active"
      >
        Pokemons
      </NavLink>
      <NavLink
        to="/caught"
        className="nav-link"
        activeClassName="nav-link active"
      >
        My Pokemons
      </NavLink>
    </nav>
  );
};
