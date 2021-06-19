import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import EventList from '../EventList';

describe('<App /> component', () => {
  // test description
  test('render list of events', () => {
    // render component 
    const AppWrapper = shallow(<App />);
    // expect function runs a search find() for EventList components within AppWrapper
    // It ensures that there exists only one EventList component within the App Component
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  })
});