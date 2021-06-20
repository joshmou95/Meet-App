import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';

describe('<App /> component', () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });
  // test description
  test('render list of events', () => {
    // render component 
    // expect function runs a search find() for EventList components within AppWrapper
    // It ensures that there exists only one EventList component within the App Component
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  })
  // test if CitySearch component is in App Component
  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

});