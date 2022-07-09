const a_contactsPage = require('../../pages/android/a_contacts.page');
const a_profilePage = require('../../pages/android/a_profile.page');
const { readFileJSON } = require('../../utils/utils');

const userFile = './data/users.json';
let users = readFileJSON(userFile);

Then('I select Team tab and search contact of User2', () => {
  a_contactsPage.selectTeamTab();
  const userName2 = users.User2.username;
  a_contactsPage.enterContactToSearch(userName2);
});

Then('I select contact and click Chat', () => {
  const userName2 = users.User2.username;
  a_contactsPage.selectThe1stResult(userName2);
  a_profilePage.seeProfilePage();
  a_profilePage.clickChat();
});
