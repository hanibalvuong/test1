const w_loginPage = require('../../pages/web/w_login.page');
const { readFileJSON } = require('../../utils/utils');

const userFile = './data/users.json';
let users = readFileJSON(userFile);
// console.log(JSON.stringify(users));

Given('I open login page desktop', () => {
  w_loginPage.openLoginPage();
});

When('I enter company name and click next', () => {
  w_loginPage.enterCompanyAndClickNext(users.compay);
});

When('I enter {string} data then click login', (user) => {
  w_loginPage.enterUserNameAndPassword(
    users[`${user}`].username,
    users[`${user}`].password
  );
  w_loginPage.clickLogin();
});

When('I enter security code', () => {
  w_loginPage.enterSecurityCode(users.User1.security_code);
});
