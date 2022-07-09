const a_homePage = require('../../pages/android/a_home.page');

When('I select Contact on home page', () => {
  a_homePage.seeChatsIcon();
  a_homePage.clickContact();
});
