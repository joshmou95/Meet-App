import React, { Component } from 'react';

class NumberOfEvents extends Component {
  // state = {
  //   numberOfEvents: 32
  // }

  // handleChange = (event) => {
  //   console.log('handleChange event', event)
  //   const value = event.target.value;
  //   this.setState({ 
  //     numberOfEvents: value,
  //    });
     
  //    this.props.updateEvents(value);
  //    console.log('handleChange numberOfEvents', value)
  // }

  render() {
    return (
      <div className='numberOfEvents'>
        <input 
          type="number"
          className='event-number'
          value={this.props.numberOfEvents}
          onChange={this.props.updateEvents}
        />
        
      </div>
    );
  }
}

export default NumberOfEvents;