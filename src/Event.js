import React, { Component } from 'react';

class Event extends Component {
  state = {
    showDetails: false
  }

  showDetails = () => {
    this.setState({
      showDetails: !this.state.showDetails
    })
  }

  render() {
    // props passed from EventList Component
    const { event } = this.props;

    return <div className='event'>
      <h1 className='name'>{event.summary}</h1>
      {/* <p>{new Date(event.start.dateTime).toLocaleDateString
      ('en-US', { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZone: 'utc', timeZoneName: 'short' })
      }
      </p> */}
      <p>
          @ {event.summary} | {event.location}
      </p>

      {this.state.showDetails && (
        <div className='event-details'>
          <h3>About event:</h3>
          <a href={event.htmlLink}>See Details on Google Calendar</a>
           <p className='description'>{event.description}</p>
        </div>
      )}

      <button className='details-btn' onClick={this.showDetails}>{this.state.showDetails ? 'Hide Details' : 'Show Details'}</button>
    </div>
  }
}

export default Event;