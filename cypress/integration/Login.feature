Feature: Login

  I want to login into Conduit

  Scenario: Conduit Login
    Given I open Conduit Login Page
    When I type in username and password
    And I click on Sign in button
    Then Your Feed should be shown
