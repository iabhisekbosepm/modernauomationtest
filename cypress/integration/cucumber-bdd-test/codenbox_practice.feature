Feature: Practice functions of the Application

    As a user i am enable to use all the functions in practice page.

   
   Scenario: As a user, i should able to see the title of the page
    Given I successfully browse to the Application
    When I click on Practice button
    Then I should see the title of the page is 'Automation Practice'

  
   Scenario: As a user, i should able to select from static dropdown
     When I click on static dropdown example
     Then I should able to select Selenium