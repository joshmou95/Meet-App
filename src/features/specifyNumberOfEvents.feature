Feature: Specify Number of Events

Scenario: When user hasn’t specified a number, 32 is the default number.
Given the list of events is displayed
When the user has not specified a number of events
Then the default number is 32


Scenario: User can change the number of events they want to see.
Given the list of events is displayed
When the user enters a number of events they want to see
Then that specified number of events is displayed
