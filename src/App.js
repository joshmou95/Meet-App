import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';
import './nprogress.css';
import Container from 'react-bootstrap/Container';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      locations: [],
      numberOfEvents: 32,
      currentLocation: 'all'
    }
    // this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
      // make API call and save initial data to state
      this.setState({ 
        events: events.slice(0, this.state.numberOfEvents), 
        locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    const { currentLocation, numberOfEvents } = this.state;
    if (location) {
      getEvents().then((events) => {
        const locationEvents = (location === 'all') 
        ? events 
        : events.filter((event) => event.location === location);
        const filteredEvents = locationEvents.slice(0, numberOfEvents);
        this.setState({
          events: filteredEvents,
          currentLocation: location
        });
      });
    } else {
      getEvents().then((events) => {
        const locationEvents = (currentLocation === 'all') 
        ? events 
        : events.filter((event) => event.location === currentLocation);
        const filteredEvents = locationEvents.slice(0, eventCount);
        this.setState({
          events: filteredEvents,
          numberOfEvents: eventCount
        });
      });
    }
  }


  // updateEvents = (location, eventCount) => {
  //   const { numberOfEvents } = this.state
  //   // console.log('initial location', location);
  //   console.log('initial state', numberOfEvents);
  //   getEvents().then((response) => {
  //     // check if value is 'all'
  //     // console.log('events from updateEvents', events);
  //     const locationEvents = (location === 'all')
  //     ? response.events
  //     :
  //     response.events.filter((event) => event.location === location);
  //     this.setState({
  //       events: locationEvents.slice(0, numberOfEvents),
  //       numberOfEvents: eventCount
  //     });
  //     // console.log('locationEvents', locationEvents);
  //     // console.log('locationEvents Count', eventCount);
  //   });
  // }

  // handleChange = (event) => {
  //   // this.updateEvents();
  //   this.setState({
  //     numberOfEvents: event.target.value,
  //   });
  // }

  render() {
    const { numberOfEvents } = this.state
    return (
      <Container className="App" bg="dark">
        <h1 className="mb-2">Meet App</h1>
        <CitySearch 
        locations={this.state.locations} 
        updateEvents={this.updateEvents} />
        <NumberOfEvents 
        // input={this.state.numberOfEvents} 
        // handleChange={this.handleChange} 
        numberOfEvents={numberOfEvents}
        updateEvents={this.updateEvents} />
        <EventList 
        events={this.state.events} />
      </Container>
    );
  }
}

export default App;
