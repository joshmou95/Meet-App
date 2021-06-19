import React from 'react';
import { shallow } from 'enzyme';
import EventList from '../EventList';
import Event from '../Event';

describe('<EventList /> component', () => {
  // test will pass if EventList renders four events from its prop events using Mock Data
  // Events data list will be passed as props to EventList from the parent App component
  test('render correct number of events', () => {
    const EventListWrapper = shallow(<EventList events={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4}]} />);
    expect(EventListWrapper.find(Event)).toHaveLength(4);
  });
});