Feature: Home page

  Scenario: Viewing application's home page
    When I am on the homepage
    Then I should see the sidebar selector
    Then I should hover over the sidebar
    Then I should click on the themes