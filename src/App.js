import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';
import './nprogress.css';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
      // make API call and save initial data to state
      this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  updateEvents = (location) => {
    console.log('initial location', location);
    getEvents().then((events) => {
      // check if value is 'all'
      console.log('events from updateEvents', events);
      const locationEvents = (location === 'all')
      ? events 
      :
      events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents
      });
      console.log('locationEvents', locationEvents)
    });
  }

  render() {
    return (
      <div className="App">
        <CitySearch 
        locations={this.state.locations} 
        updateEvents={this.updateEvents} />
        <NumberOfEvents 
        numberOfEvents={this.state.numberOfEvents} 
        updateEvents={this.updateEvents} />
        <EventList 
        events={this.state.events} />
      </div>
    );
  }
}

export default App;
