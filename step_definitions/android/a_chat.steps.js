const { pause } = require('codeceptjs');
const a_chatPage = require('../../pages/android/a_chat.page');
const { readFileJSON } = require('../../utils/utils');

const messageFile = './data/messages.json';
const messages = readFileJSON(messageFile);

let message1 = messages.message1;
let message2 = messages.message2;
When('I send a message to User2', () => {
  a_chatPage.sendChatMessage(message1);
});

Then('I long press and reply on the sent message', () => {
  a_chatPage.longPressMessage(message1);
  a_chatPage.selectReply();
  a_chatPage.sendChatMessage(message2);
});
