import React from 'react';
import { shallow } from 'enzyme';
import EventList from '../EventList';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<EventList /> component', () => {
  // test will pass if EventList renders four events from its prop events using Mock Data
  // Events data list will be passed as props to EventList from the parent App component
  let EventListWrapper;
  beforeAll(() => {
    EventListWrapper = shallow(<EventList events={mockData} />);
  });

  test('render correct number of events', () => {
    expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
  });

});