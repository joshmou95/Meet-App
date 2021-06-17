# Meet-App
 Objective: To build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

## Meet App Features and Requirements

### FEATURE 1: Filter events by city.
As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city.

Scenario 1:<br>
When a user hasn’t searched for a city, show upcoming events from all cities.<br>
Given user hasn’t searched for any city<br>
When the user opens the app<br>
Then the user should see a list of all upcoming events<br>

Scenario 2: <br>
User should see a list of suggestions when they search for a city.<br>
Given the main page is open<br>
When user starts typing in the city textbox<br>
Then the user should see a list of cities (suggestions) that match what they’ve typed<br>

Scenario 3: <br>
User can select a city from the suggested list.<br>
Given the user was typing “Berlin” in the city textbox<br>
And the list of suggested cities is showing<br>
When the user selects a city (e.g., “Berlin, Germany”) from the list<br>
Then their city should be changed to that city (i.e., “Berlin, Germany”)<br>
And the user should receive a list of upcoming events in that city<br>

### FEATURE 2: Show/hide event details.
As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.

Scenario 1:<br>
User should not see details for an event by default<br>
Given the user is viewing the app<br>
When they see a list of upcoming events<br>
Then the details will be hidden by default<br>

Scenario 2: <br>
User can expand an event to see details<br>
Given the list of upcoming events are displayed.<br>
When the user expands an event.<br>
Then the details of the event will be displayed.<br>

Scenario 3: <br>
Users can collapse an event to hide details.<br>
Given the details for upcoming events are displayed<br>
When the user collapses the event<br>
Then the details of the event will be hidden<br>

### FEATURE 3: SPECIFY NUMBER OF EVENTS
As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.

Scenario 1: <br>
User should see a default of 32 events when they don’t specify a number <br>
Given the list of events is displayed<br>
When the user hasn’t specified a number of events<br>
Then a default of 32 events is displayed<br>

Scenario 2: <br>
User should be able to change the number of events they want to see<br>
Given the list of events is displayed<br>
When the user enters a number of events they want to see<br>
Then that specified number of events is displayed<br>

### FEATURE 4: USE THE APP WHEN OFFLINE
As a user, I would like to be able to use the app when offline so that Ican see the events I viewed the last time I was online.

Scenario 1: <br>
User should see cached data in the app when there is no internet connection.<br>
Given the user is using the app<br>
When they are no longer online<br>
Then the app used cached data to run<br>


Scenario 2: <br>
User should see an error when changing the settings (city, time range) when offline<br>
Given the user is offline<br>
When they try to change the settings (city, time range) <br>
Then they should see an error<br>

### FEATURE 5: DATA VISUALIZATION
As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.

Scenario 1:<br>
User should be able to see a chart with the number of upcoming events in each city<br>
Given the user wants to see a chart of upcoming events by city<br>
When the user chooses particular city<br>
Then the user see a chart showing upcoming events in that city<br>


From terminal:
cd static-site-test
http-server 
test-auth-server.html
Get OAuth URL
Click to Authorize
input code and press Get Token

When adding new functions to handler.js
cd auth-server
serverless deploy
