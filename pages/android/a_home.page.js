const I = actor();

module.exports = {
  seeChatsIcon() {
    I.waitForElement('~chat.chat', 60);
    I.seeElement('~chat.chat');
  },

  clickContact() {
    I.waitForElement('~bottomTab_contact');
    I.tap('~bottomTab_contact');
  },
};
