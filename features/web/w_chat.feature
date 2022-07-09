Feature: Chat

  @w_ReviewChat
  Scenario: I can receive new message from others
    Given I open login page desktop
    When I enter company name and click next
    When I enter "User2" data then click login
    When I enter security code
    Then I see my profile icon on home
    When I select User1 on chat list
    Then I see the new messages of User1