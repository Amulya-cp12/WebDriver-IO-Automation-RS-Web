Feature: Login Test

  Scenario Outline: Successful login

    Given I am on the login page
    When I login with "<email>" and "<password>"
    Then I should be logged in successfully

    Examples:
      | email                   | password   |
      | cpamulya049@gmail.com  | Test@12345 |