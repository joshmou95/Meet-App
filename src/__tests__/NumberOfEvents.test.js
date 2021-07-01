import React from 'react';
import { shallow } from 'enzyme';
import  NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
  });

  test('render number input', () => {
    expect(NumberOfEventsWrapper.find('.event-number')).toHaveLength(1);
  })
  
  test('renders number input correctly', () => {
    const eventCount = NumberOfEventsWrapper.state('eventCount');
    expect(NumberOfEventsWrapper.find('.event-number').prop('value')).toBe(eventCount);
  });

  test('change state when text input changes', () => {
    NumberOfEventsWrapper.setState({
      eventCount: 10
    });
    const eventObject = { target: { value: 20 }};
    NumberOfEventsWrapper.find('.event-number').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('eventCount')).toBe(20);
  })

});
