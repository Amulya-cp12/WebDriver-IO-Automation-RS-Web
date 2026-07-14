Feature: Register User

  Scenario Outline: Register new user successfully

    Given I am on the login page
    When I click register button
    And I enter first name as "<firstname>"
    And I enter last name as "<lastname>"
    And I enter email as "<email>"
    And I enter phone number as "<phonenumber>"
    And I choose occupation as Engineer
    And I select female gender
    And I enter password as "<password>"
    And I enter confirm password as "<confirmpassword>"
    And I click age checkbox
    And I click final register button
    Then user should be registered successfully

    Examples:
      | firstname | lastname | email                  | phonenumber | password   | confirmpassword |
      |   Gopi  |    Krishnan    | gkrish123@gmail.com    | 9876543210  | Test@156 | Test@156      |