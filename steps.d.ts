/// <reference types='codeceptjs' />
type AppiumHelper = import('./helpers/appium_helper.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any }
  interface Methods extends AppiumHelper, Appium {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
