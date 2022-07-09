Feature: Account

  @w_GetQR
  Scenario: Get qr code on web desktop
    Given I open login page desktop
    When I enter company name and click next
    When I enter "User1" data then click login
    When I enter security code
    Then I see my profile icon on home
    When I click profile icon and select devices to link
    Then I can get qr Code to link device