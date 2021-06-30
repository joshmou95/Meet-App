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
      this.setState({ 
        events, 
        locations: extractLocations(events),
        numberOfEvents: 32
      });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    console.log('initial location', location);
    console.log('eventCount', eventCount);
    this.setState({
      numberOfEvents: eventCount.target.value
    });
    getEvents().then((events) => {
      // check if value is 'all'
      console.log('events from updateEvents', events);
      const locationEvents = (location === 'all')
      ? events.slice(0, eventCount)
      :
      events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, eventCount)
      });
      console.log('locationEvents', locationEvents);
      console.log('locationEvents Count', eventCount);
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
