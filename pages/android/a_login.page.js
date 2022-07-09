const I = actor();

module.exports = {
  waitAppLaunch() {
    I.waitForElement('~activation.welcome_title', 20);
  },

  clickSkip() {
    I.tap('Skip');
  },

  enterActivationCode(code) {
    I.waitForElement('~scan_qr_code');
    const chars = code.split('');
    for (let i = 0; i < 10; i++) {
      I.fillField('~activation_' + i, chars[i]);
    }
  },

  enterPassword(password) {
    I.waitForElement('~login_password');
    I.fillField('~login_password', secret(password));
    I.tap('~login_signIn');
  },

  enterSecurityCode(code) {
    const numbers = code.split('');
    for (let i = 0; i < 6; i++) {
      I.fillField('~otp_' + i, numbers[i]);
    }
  },
};
