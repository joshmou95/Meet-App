import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

import { loadFeature, defineFeature } from 'jest-cucumber';
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

  test('When user hasn’t specified a number, 32 is the default number.', ({ given, when, then }) => {
    given('the list of events is displayed', () => {

    });
    let AppWrapper;
    when('the user has not specified a number of events', () => {
      AppWrapper = mount(<App />);
    });

    then(/^the default number is (\d+)$/, (arg0) => {
      AppWrapper.update();
      expect(AppWrapper.state('numberOfEvents')).toBe(32);
    });
});


test('User can change the number of events they want to see.', ({ given, when, then }) => {
    let AppWrapper
    given('the list of events is displayed', () => {
      AppWrapper = await mount(<App />);
      AppWrapper.find('.event-number').simulate('change', { target: { value: '2' } });
    });

    when('the user enters a number of events they want to see', () => {

    });

    then('that specified number of events is displayed', () => {

    });
});

});