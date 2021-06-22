import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {

  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event events={mockData} />);
  })

  test('render event', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  });
  
  test('check that button exists', () => {
    expect(EventWrapper.find('.details-btn')).toHaveLength(1);
  });

  test('button text to be Show Details', () => {
    expect(EventWrapper.find('.details-btn').text()).toBe('Show Details');
  })

  test('event details hidden', () => {
    expect(EventWrapper.find('.event-details')).toHaveLength(0);
  });

  test('event details expand on click', () => {
    EventWrapper.setState({ showDetails: false });
    EventWrapper.find('.details-btn').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(true);
  })

  test('button text to be Hide Details', () => {
    expect(EventWrapper.find('.details-btn').text()).toBe('Hide Details');
  })

  test('show event details', () => {
    expect(EventWrapper.find('.event-details')).toHaveLength(1);
  });

});