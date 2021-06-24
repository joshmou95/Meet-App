import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';
import { extractLocations } from '../api';



describe('<App /> component', () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  // test if 1 EventList component is in App Component
  test('render list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  })

  // test if 1 CitySearch component is in App Component
  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });
  
  test('render NumberOfEvents', () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  })
});

// integration tests
describe('<App /> integration', () => {

  // Test if EventList gets events as a prop from App
  test('App passes "events" state as a prop to EventList', () => {
    // render App Component
    const AppWrapper = mount(<App />);
    const AppEventsState = AppWrapper.state('events');
    // test that state is not undefined
    expect(AppEventsState).not.toEqual(undefined);
    // compare state to props
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
    // unmount after test
    AppWrapper.unmount();
  });

  test('App passes "locations" state as a prop to CitySearch', () => {
    const AppWrapper = mount(<App />);
    const AppLocationsState = AppWrapper.state('locations');
    expect(AppLocationsState).not.toEqual(undefined);
    expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationsState);
    AppWrapper.unmount();
  });

  test('get list of events matching the city selected by the user', async () => {
    const AppWrapper = mount(<App />);
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    const locations = extractLocations(mockData);
    // suggestions state set to all available cities
    CitySearchWrapper.setState({ suggestions: locations });
    const suggestions = CitySearchWrapper.state('suggestions');
    // hold the index of the selected suggestion from the suggestions array
    const selectedIndex = Math.floor(Math.random() * (suggestions.length));
    // once index is selected it is used to return the suggestion in selectedCity
    const selectedCity = suggestions[selectedIndex];
    // click is mimicked in CitySearchWrapper instance, selectedCity is passed to it
    await CitySearchWrapper.instance().handleItemClicked(selectedCity);
    // getEvents from the API ascynchronously
    const allEvents = await getEvents();
    // list of events is filtered against the selected city 
    const eventsToShow = allEvents.filter(event => event.location === selectedCity);
    // compares state of events to eventsToShow
    expect(AppWrapper.state('events')).toEqual(eventsToShow);
    AppWrapper.unmount();

  })

})