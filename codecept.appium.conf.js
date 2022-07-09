exports.config = {
  output: './output',
  helpers: {
    AppiumHelper: {
      require: './helpers/appium_helper.js',
    },
    Appium: {
      host: '127.0.0.1',
      port: 4723,
      path: '/',
      platform: 'Android',
      desiredCapabilities: {
        'appium:app':
          '/Users/quoctran/Desktop/auto/js/test1/app/app-qa-release.apk',
        'appium:platformVersion': '12',
        'appium:deviceName': 'emulator-5554',
        'appium:automationName': 'uiautomator2',
      },
      waitForTimeout: 5000,
      smartWait: 5000,
    },
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/android/*.feature',
    steps: [
      './step_definitions/android/a_login.steps.js',
      './step_definitions/android/a_home.steps.js',
      './step_definitions/android/a_contact.steps.js',
      './step_definitions/android/a_chat.steps.js',
    ],
  },
  plugins: {
    screenshotOnFail: {
      enabled: true,
    },
  },
  stepTimeout: 0,
  stepTimeoutOverride: [
    {
      pattern: 'wait.*',
      timeout: 0,
    },
    {
      pattern: 'amOnPage',
      timeout: 0,
    },
  ],
  name: 'codeceptjs appium',
};
