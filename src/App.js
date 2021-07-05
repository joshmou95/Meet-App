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
      numberOfEvents: 10
    }
    this.handleChange = this.handleChange.bind(this);
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
    const eventCount = this.state.numberOfEvents;
    // console.log('initial location', location);
    // console.log('initial eventCount', eventCount);
    getEvents().then((events) => {
      // check if value is 'all'
      // console.log('events from updateEvents', events);
      const locationEvents = (location === 'all')
      ? events.slice(0, eventCount)
      :
      events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, eventCount)
      });
      // console.log('locationEvents', locationEvents);
      // console.log('locationEvents Count', eventCount);
    });
  }

  handleChange(event) {
    this.setState({
      numberOfEvents: event.target.value
    })
  }

  render() {
    return (
      <Container className="App" bg="dark">
        <h1 className="mb-2">Meet App</h1>
        <CitySearch 
        locations={this.state.locations} 
        updateEvents={this.updateEvents} />
        <NumberOfEvents 
        input={this.state.numberOfEvents} 
        handleChange={this.handleChange} />
        <EventList 
        events={this.state.events} />
      </Container>
    );
  }
}

export default App;
