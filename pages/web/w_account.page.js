const I = actor();
const { writeTextFile } = require('../../utils/utils');

const tempFilePath = 'output/temp.txt';

module.exports = {
  clickLinkDevice() {
    I.click('Link Device');
  },

  async getQRCode() {
    I.waitForElement('//*[contains(@class,"LinkDeviceModal_code-name")]', 90);
    let qrCode = await I.grabTextFrom(
      '//*[contains(@class,"LinkDeviceModal_code-name")]'
    );
    console.log(qrCode);
    writeTextFile(tempFilePath, qrCode);
    return qrCode;
  },
};
