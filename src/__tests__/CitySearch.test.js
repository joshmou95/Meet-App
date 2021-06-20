import React from 'react';
import { shallow } from 'enzyme';
import CitySearch from '../CitySearch';

// checks whether an element with the class name city exists within the CitySearchWrapper component
describe('<CitySearch /> component', () => {
  test('render text input', () => {
    const CitySearchWrapper = shallow(<CitySearch />);
    expect(CitySearchWrapper.find('.city')).toHaveLength(1);
  });
  // test for an element with className 'suggestions'
  test('renders a list of suggestions', () => {
    const CitySearchWrapper = shallow(<CitySearch />);
    expect(CitySearchWrapper.find('.suggestions')).toHaveLength(1);
  });
});