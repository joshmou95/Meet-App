import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    errorText: ''
  }

  handleChange = (event) => {
    // console.log('handleChange event', event)
    const value = event.target.value;
    if ( value < 1 || value > 32 ) {
      this.setState({
        numberOfEvents: '',
        errorText: 'Enter a number between 1 and 32',
      })
    } else {
      this.setState({ 
        numberOfEvents: value,
        errorText: ''
       });
    }
    this.props.updateEvents(null, value);
    console.log('handleChange numberOfEvents', value)
  }


  render() {
    const { numberOfEvents } = this.state
    return (
      <Form>
        <Form.Group className='numberOfEvents mb-4'>
            <Form.Label size="sm">Number of Events:</Form.Label>
          <Form.Control size="sm"
            type="number"
            className='event-number'
            value={numberOfEvents}
            max={32}
            min={1}
            onChange={this.handleChange}
          />
          <Form.Text>
            <ErrorAlert text={this.state.errorText} />
          </Form.Text>
        </Form.Group>
      </Form>
    );
  }
}

export default NumberOfEvents;