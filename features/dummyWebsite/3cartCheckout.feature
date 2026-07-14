Feature: Cart and Checkout

  #Background:
    #Given I am logged in
    #And I add ZARA COAT 3 to cart

  Scenario: Verify product in cart and click checkout

    And I go to cart
    Then I should see ZARA COAT 3 in the cart
    When I click checkout