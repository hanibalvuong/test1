exports.config = {
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://web.qa.leapxpert.app',
      browser: 'chrome',
      host: '127.0.0.1',
      port: 4444,
      restart: false,
      windowSize: '1264x768',
      desiredCapabilities: {
        chromeOptions: {
          args: ['--disable-notifications'],
        },
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
    features: './features/web/*.feature',
    steps: [
      './step_definitions/web/w_login.steps.js',
      './step_definitions/web/w_home.steps.js',
      './step_definitions/web/w_account.steps.js',
    ],
  },
  plugins: {
    screenshotOnFail: {
      enabled: true,
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone'],
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
  name: 'codeceptjs webdriver',
};
