import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Header } from './Header';

it('should render the header with navigation links', () => {
  const enzymeWrapper = shallow(<Header />);
  expect(toJson(enzymeWrapper)).toMatchSnapshot();
});
