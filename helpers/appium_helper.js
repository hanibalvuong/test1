const Helper = require('@codeceptjs/helper');

class AppiumHelper extends Helper {
  async longPress(locator) {
    const { Appium } = this.helpers;
    const value = await Appium.grabElementBoundingRect(locator);
    const sourceX = parseInt(value['x']) + parseInt(value['width']) / 2;
    const sourceY = parseInt(value['y']) + parseInt(value['height']) / 2;
    Appium.touchPerform([
      {
        action: 'longPress',
        options: {
          x: sourceX,
          y: sourceY,
          duration: 3000,
        },
      },
      { action: 'release' },
    ]);
  }

  async customTap(locator) {
    const { Appium } = this.helpers;
    const value = await Appium.grabElementBoundingRect(locator);
    const sourceX = parseInt(value['x']) + parseInt(value['width']) / 2;
    const sourceY = parseInt(value['y']) + parseInt(value['height']) / 2;
    Appium.touchPerform([
      {
        action: 'tap',
        options: {
          x: sourceX,
          y: sourceY,
          count: 1,
        },
      },
    ]);
  }
}

module.exports = AppiumHelper;
