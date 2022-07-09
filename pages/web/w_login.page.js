const I = actor();

module.exports = {
  openLoginPage() {
    I.amOnPage('/login');
  },

  enterCompanyAndClickNext(comanyName) {
    I.fillField('//input', comanyName);
    I.click("//span[contains(@class, 'Login_button')]");
  },

  enterUserNameAndPassword(userName, password) {
    I.fillField("//input[@data-testid='usernameLogin']", userName);
    I.fillField("//input[@data-testid='passwordLogin']", secret(password));
  },

  clickLogin() {
    I.click("//span[contains(@class, 'Login_button')]");
  },

  enterSecurityCode(code) {
    const numbers = code.split('');
    I.waitForElement("//*[text()='Security Code']");
    for (let i = 1; i <= 6; i++) {
      I.fillField('(//input)[' + i + ']', numbers[i - 1]);
    }
  },
};
