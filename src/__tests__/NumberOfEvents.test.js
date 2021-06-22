import React from 'react';
import { shallow } from 'enzyme';
import  NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('render number input', () => {
    expect(NumberOfEventsWrapper.find('.event-number')).toHaveLength(1);
  })
  
  test('renders number input correctly', () => {
    const eventNumber = NumberOfEventsWrapper.state('eventNumber');
    expect(NumberOfEventsWrapper.find('.event-number').prop('value')).toBe(eventNumber);
  });

  test('change state when text input changes', () => {
    NumberOfEventsWrapper.setState({
      eventNumber: 10
    });
    const eventObject = { target: { value: 20 }};
    NumberOfEventsWrapper.find('.event-number').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('eventNumber')).toBe(20);
  })

});
