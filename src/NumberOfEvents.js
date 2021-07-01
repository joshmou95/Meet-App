import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    eventCount: 32
  }

  handleChange = (event) => {
    console.log('handleChange event', event)
    const value = event.target.value;
    this.setState({ 
      eventCount: value,
     });
     
     this.props.updateEvents(value);
     console.log('handleChange eventCount', value)
  }

  render() {
    return (
      <div className='numberOfEvents'>
        <input 
          type="number"
          className='event-number'
          value={this.state.eventCount}
          onChange={this.handleChange}
        />
        
      </div>
    );
  }
}

export default NumberOfEvents;