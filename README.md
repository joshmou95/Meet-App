# Meet-App
 PWA application with React using TDD technique

Markup :  ## Heading 2 ##
Meet App Features and Requirements

FEATURE 1: Filter events by city.
As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city.

Scenario 1:
When a user hasn’t searched for a city, show upcoming events from all cities.
Given user hasn’t searched for any city
When the user opens the app
Then the user should see a list of all upcoming events

Scenario 2: 
User should see a list of suggestions when they search for a city.
Given the main page is open
When user starts typing in the city textbox
Then the user should see a list of cities (suggestions) that match what they’ve typed

Scenario 3: 
User can select a city from the suggested list.
Given the user was typing “Berlin” in the city textbox
And the list of suggested cities is showing
When the user selects a city (e.g., “Berlin, Germany”) from the list
Then their city should be changed to that city (i.e., “Berlin, Germany”)
And the user should receive a list of upcoming events in that city


FEATURE 2: Show/hide event details.
As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.

Scenario 1:
User should not see details for an event by default
Given the user is viewing the app
When they see a list of upcoming events
Then the details will be hidden by default

Scenario 2: 
User can expand an event to see details
Given the list of upcoming events are displayed.
When the user expands an event.
Then the details of the event will be displayed.

Scenario 3: 
Users can collapse an event to hide details.
Given the details for upcoming events are displayed
When the user collapses the event
Then the details of the event will be hidden


FEATURE 3: SPECIFY NUMBER OF EVENTS
As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.

Scenario 1: 
User should see a default of 32 events when they don’t specify a number 
Given the list of events is displayed
When the user hasn’t specified a number of events
Then a default of 32 events is displayed

Scenario 2: 
User should be able to change the number of events they want to see
Given the list of events is displayed
When the user enters a number of events they want to see
Then that specified number of events is displayed


FEATURE 4: USE THE APP WHEN OFFLINE
As a user, I would like to be able to use the app when offline so that Ican see the events I viewed the last time I was online.

Scenario 1: 
User should see cached data in the app when there is no internet connection.
Given the user is using the app
When they are no longer online
Then the app used cached data to run


Scenario 2: 
User should see an error when changing the settings (city, time range) when offline
Given the user is offline
When they try to change the settings (city, time range) 
Then they should see an error

FEATURE 5: DATA VISUALIZATION
As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.

Scenario 1:
User should be able to see a chart with the number of upcoming events in each city
Given the user wants to see a chart of upcoming events by city
When the user chooses particular city
Then the user see a chart showing upcoming events in that city

