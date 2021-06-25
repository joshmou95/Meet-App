import React, { Component } from "react";
import Event from "./Event";

class EventList extends Component {
  render() {
    // props passed from App Component
    const { events } = this.props;
    return (
      <ul className="EventList">
        {events.map(event =>
          <li key={event.id}>
            <Event event={event} />
          </li>
        )}
      </ul>
    );
  }
}

export default EventList;