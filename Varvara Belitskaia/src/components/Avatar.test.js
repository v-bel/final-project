import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Avatar } from './Avatar';

const poke = {
  name: 'bulbasaur',
  id: 1
};

it(`should render the pokemon's avatar`, () => {
  const enzymeWrapper = shallow(<Avatar poke={poke} />);
  expect(toJson(enzymeWrapper)).toMatchSnapshot();
});
