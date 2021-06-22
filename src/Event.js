import React, { Component } from 'react';

// (summary, start, htmlLink, description)
class Event extends Component {
  state = {
    event: {},
    showDetails: false
  }

  showDetails = () => {
    this.setState({
      showDetails: !this.state.showDetails
    })
  }

  render() {
    const { events } = this.props;
    return <div className='event'>
      <h1 className='name'>{events.summary}</h1>
      <p>{events.start}</p>

      {this.state.showDetails && (
        <div className='event-details'>
          <h2>About event:</h2>
          <a href={events.htmlLink}>See Details on Google Calendar</a>
           <p>{events.description}</p>
        </div>
      )}

      <button className='details-btn' onClick={this.showDetails}>{this.state.showDetails ? 'Hide Details' : 'Show Details'}</button>
    </div>
  }
}

export default Event;