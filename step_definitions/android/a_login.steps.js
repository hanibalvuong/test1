const a_loginPage = require('../../pages/android/a_login.page');
const { readFileJSON, readTextFile } = require('../../utils/utils');

const tempFilePath = 'output/temp.txt';
const userFile = './data/users.json';
let users = readFileJSON(userFile);

When('I open android application', () => {
  a_loginPage.waitAppLaunch();
});

Then('I click skip', () => {
  a_loginPage.clickSkip();
});

Then('I enter an existing activation code of User1', () => {
  const activationCode = readTextFile(tempFilePath);
  a_loginPage.enterActivationCode(activationCode);
});

Then('I enter password and click Signin', () => {
  const password1 = users.User2.password;
  a_loginPage.enterPassword(password1);
});

Then('I enter security code', () => {
  const securityCode = users.User2.security_code;
  a_loginPage.enterSecurityCode(securityCode);
});
