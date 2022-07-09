const w_homePage = require('../../pages/web/w_home.page');
const { readFileJSON } = require('../../utils/utils');

const userFile = './data/users.json';
const messageFile = './data/messages.json';
let users = readFileJSON(userFile);
let messages = readFileJSON(messageFile);

Then('I see my profile icon on home', () => {
  w_homePage.seeProfileItem();
});

When('I select User1 on chat list', () => {
  w_homePage.clickUserNameOnChatList(users.User1.username);
});

Then('I see the new messages of User1', () => {
  let values = Object.values(messages);
  w_homePage.checkReceivedMessages(values);
});
