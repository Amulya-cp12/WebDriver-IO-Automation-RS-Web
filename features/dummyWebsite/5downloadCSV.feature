Feature: Download CSV

  Scenario: Download order csv successfully

    Then order should be placed successfully
    When I download csv file