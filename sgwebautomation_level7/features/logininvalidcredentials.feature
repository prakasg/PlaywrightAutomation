@Execute
Feature: Verify Login functionality with Invalid credentials

  Scenario: Validate Login functionality with invalid data
    When I launch chromium browser and navigate Application url
    Then I find the login page
    When I enter invalid username in username text field
    When I enter invalid password in password text field
    When I click on signin button in login page
    Then I find error message that Invalid username or password