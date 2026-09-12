Feature: Verify Create Customer Functionality

  Scenario: Validate Login functionality with valid data
    When I launch chromium browser and navigate Application url
    Then I find the login page
    When I enter username in username text field
    When I enter password in password text field
    When I click on signin button in login page
    Then I find home page
    When I click on customer menu link in home page
    Then I find display customers
    When I click on Add Customer button
    Then I find add customer form
    When I enter customername in customer name text field
    When I enter emailid in customer email id text field
    When I enter location in customer location text field
    When I enter description in customer description text field
    When I click on save button
    Then I find newly created customer in display customer page
    When I click on delete button
    Then I find newly created customer deleted from display customer page
    When I click on logout link in home page
    Then I find the login page