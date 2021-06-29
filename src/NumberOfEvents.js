import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32
  }

  handleChange = (event) => {
    console.log('handleChange event', event)
    const value = event.target.value;
    this.setState({ 
      numberOfEvents: value,
     });
     console.log('handleChange numberOfEvents', value)
     this.props.updateEvents(value);
  }

  render() {
    const { numberOfEvents } = this.state;
    return (
      <div className='numberOfEvents'>
        <input 
          type="number"
          className='event-number'
          value={numberOfEvents}
          onChange={this.handleChange}
        />
        
      </div>
    );
  }
}

export default NumberOfEvents;