Feature: Chat

    @a_ChatToOther
    Scenario: Login android app by qr code and chat with other
        When I open android application
        Then I click skip
        Then I enter an existing activation code of User1
        Then I enter password and click Signin
        Then I enter security code
        When I select Contact on home page
        Then I select Team tab and search contact of User2
        Then I select contact and click Chat
        When I send a message to User2
        Then I long press and reply on the sent message


