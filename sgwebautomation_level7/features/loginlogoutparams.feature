@Execute
Feature: Verify Login functionality with Multiple Valid credentials

  Scenario Outline: Validate Login functionality with Multiple valid data
    When I launch chromium browser and navigate Application url
    Then I find the login page
    When I enter "<username>" in username text field
    When I enter "<password>" in password text field
    When I click on signin button in login page
    Then I find home page
    When I click on logout link in home page
    Then I find the login page
 Examples:
     | username | password |
     | pgudi  | pgudi  |
     | pgudi  | pgudi  |
     | pgudi  | pgudi  |