const I = actor();

module.exports = {
  seeProfilePage() {
    I.seeElement('~chat.contact_profile');
  },

  clickChat() {
    I.tap('~profile_chat');
  },
};
