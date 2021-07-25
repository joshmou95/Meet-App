import React, { Component } from 'react';
import { InfoAlert } from './Alert';
import Form from 'react-bootstrap/Form';

class CitySearch extends Component {
  state = {
    query: '',
    suggestions: [],
    showSuggestions: undefined
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({showSuggestions:true});
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    if (suggestions.length === 0) {
      this.setState({
        query: value,
        infoText: 'We cannot find the city you are looking for, try again.',
      });
    } else {
      return this.setState({
        query: value,
        suggestions,
        infoText:''
      });
    }
  }

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      suggestions: [],
      showSuggestions: false,
      infoText:''
    });
    // pass the clicked suggestion to the passed updateEvents prop
    this.props.updateEvents(suggestion);
    // console.log('handleItemClicked', suggestion);
  }

  render() {
    return (
      <Form className="CitySearch">
        <Form.Text>
          <InfoAlert text={this.state.infoText} />
          </Form.Text>     
        <Form.Group className="search mb-4">
          <Form.Control
            type="text"
            className="city"
            placeholder="Search for city"
            value={this.state.query}
            onChange={this.handleInputChanged}
            onFocus={() => {this.setState({ showSuggestions: true }) }}
          />
          {/* if showSuggestions is true the list will be visible, otherwise not */}
          <ul className="suggestions" style={this.state.showSuggestions ? {}: { display: 'none' }}>
            {this.state.suggestions.map((suggestion) => (
              <li 
              key={suggestion}
              onClick={() => this.handleItemClicked(suggestion)}
              >{suggestion}</li>
            ))}
            <li onClick={() => this.handleItemClicked("all")}>
              <b>See all cities</b>
            </li>
          </ul>
        </Form.Group>
      </Form>
    );
  }
}

export default CitySearch;