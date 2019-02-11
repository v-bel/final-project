import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { CaughtList } from './CaughtList';

const caughtPokemonList = [
  {
    name: 'pikachu',
    id: 25,
    isCaught: true,
    date: '07/02/2019, 17:53:16'
  },
  {
    name: 'nidorina',
    id: 30,
    isCaught: true,
    date: '07/02/2019, 17:53:25'
  },
  {
    name: 'vulpix',
    id: 37,
    isCaught: true,
    date: '07/02/2019, 23:13:48'
  }
];

it('should render the list of caught pokemons', () => {
  const enzymeWrapper = shallow(
    <CaughtList caughtPokemonList={caughtPokemonList} />
  );
  expect(toJson(enzymeWrapper)).toMatchSnapshot();
});
