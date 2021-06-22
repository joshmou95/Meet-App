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
    const { event } = this.props;
    return <div className='event'>
      <h1 className='name'>{event.summary}</h1>
      <p>{event.start}</p>

      {this.state.showDetails && (
        <div className='event-details'>
          <h2>About event:</h2>
          <a href={event.htmlLink}>See Details on Google Calendar</a>
           <p>{event.description}</p>
        </div>
      )}

      <button className='details-btn' onClick={this.showDetails}>{this.state.showDetails ? 'Hide Details' : 'Show Details'}</button>
    </div>
  }
}

export default Event;