const I = actor();

module.exports = {
  seeProfileItem() {
    I.waitForElement('//a[@data-testid="link-to-profile-page"]', 30);
    I.seeElement('//a[@data-testid="link-to-profile-page"]');
  },

  clickProfileAndSelectDevice() {
    I.click('//a[@data-testid="link-to-profile-page"]');
    I.click(
      '(//*[contains(@class,"Account_tab-buttons__tab-on-desktop")]//*[contains(@class,"Account_button-btn")])[1]'
    );
  },

  clickUserNameOnChatList(userName) {
    I.waitForElement(
      '//*[contains(@class,"NavSide_container")]//*[@id="ic-chat"]'
    );
    I.forceClick('//*[contains(@class,"NavSide_container")]//*[@id="ic-chat"]');
    I.waitForElement(
      '//*[contains(@class,"header-title") and text()="Chats"]',
      20
    );
    I.click(`// *[@data-testid="room-name"]/*[contains(.,"${userName}")]`);
  },

  checkReceivedMessages(messages) {
    messages.forEach((m) => {
      I.see(m);
    });
  },
};
