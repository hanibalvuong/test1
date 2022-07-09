const I = actor();

module.exports = {
  sendChatMessage(message) {
    I.waitForVisible('~send_to_room', 20);
    I.tap('~send_to_room');
    I.wait(3);
    I.waitForVisible('~chatDetail_input', 20);
    I.fillField('~chatDetail_input', message);
    I.waitForVisible('~chatDetail_sendMessage', 5);
    I.tap('~chatDetail_sendMessage');
    I.wait(3);
  },

  longPressMessage(message) {
    I.waitForElement(
      `//android.widget.TextView[@content-desc='${message}']`,
      5
    );
    I.customTap(`//android.widget.TextView[@content-desc='${message}']`);
    I.longPress(`//android.widget.TextView[@content-desc='${message}']`);
  },

  selectReply() {
    I.customTap('//android.widget.TextView[@content-desc="reply"]');
    I.waitForInvisible('//android.widget.TextView[@content-desc="reply"]');
  },
};
