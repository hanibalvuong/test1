const w_homePage = require('../../pages/web/w_home.page');
const w_accountPage = require('../../pages/web/w_account.page');

When('I click profile icon and select devices to link', () => {
  w_homePage.clickProfileAndSelectDevice();
  w_accountPage.clickLinkDevice();
});

Then('I can get qr Code to link device', () => {
  w_accountPage.getQRCode();
});
