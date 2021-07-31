import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents, checkToken, getAccessToken } from './api';
import './nprogress.css';
import Container from 'react-bootstrap/Container';
import { WarningAlert } from './Alert';
import WelcomeScreen from './WelcomeScreen';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import EventGenre from './EventGenre';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      locations: [],
      numberOfEvents: 32,
      currentLocation: 'all',
      showWelcomeScreen: undefined
    }
    // this.handleChange = this.handleChange.bind(this);

  }

  async componentDidMount() {
    this.mounted = true;
    if (!navigator.onLine) {
      this.setState({
        warningText: 'Currently not online. List may not be up to date.',
      });
    } else {
      this.setState({
        warningText: ''
      });
    }
    // get token from localStorage
    const accessToken = localStorage.getItem('access_token');
    // verify if token is valid
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search)
    const code = searchParams.get("code");

    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
        // make API call and save initial data to state
        this.setState({ 
          events: events.slice(0, this.state.numberOfEvents), 
          locations: extractLocations(events) });
        }
      });
    }
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

  getData = () => {
    const { locations, events } = this.state;
    let data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number};
    })
    return data;
  };

  render() {
    if (this.state.showWelcomeScreen === undefined) return <div className="App" />
    const { locations, numberOfEvents, events } = this.state
    return (
      <div>
        <Container className="App" bg="dark">
          <WarningAlert text={this.state.warningText} />
          <h1>Meet App</h1>
          <CitySearch 
          locations={locations} 
          updateEvents={this.updateEvents} />
          <NumberOfEvents 
          numberOfEvents={numberOfEvents}
          updateEvents={this.updateEvents} />
          <h5>List of events in each city with event types:</h5>
          <div className="data-vis-wrapper">
            <EventGenre events={events} />
            <ResponsiveContainer height={400} >
              <ScatterChart width={800} height={400}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid />
                <XAxis type="category" dataKey="city" name="city" />
                <YAxis 
                  allowDecimals={false} 
                  type="number" 
                  dataKey="number" 
                  name="number of events" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter data={this.getData()} fill="#8884d8" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
          <EventList events={events} />
          <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => { getAccessToken() }} />
        </Container>
      </div>
    );
  }
}

export default App;
