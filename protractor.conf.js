/**
 * @file protractor.conf.js
 */

exports.config = {
  // The selenium address where the selenium server will be running.
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // When running tests against chrome or firefox you can use the browser's webdriver directly.
  // Remember, this configuration ignores the seleniumAddress configuration.
  directConnect: true,

  // Parameters that can be used in the tests.
  params: {
    // Here is where you set the user credentials for tests usage.
    admin: {
      'user': 'user-here',
      'password': 'password-here'
    }
  },

  // The test files are stored into the specs array, separated by comma.
  // In the TallerWay, we use only the spec.js file and we require all other tests into this file.
  specs: ['./specs/*.spec.js'],

  // Browser configuration.
  capabilities: {
    'browserName': 'chrome'
  },

  // The base url used for the testing. With this you can call just the relative urls into the tests.
  // This is also good for running tests in different environments. To do this you just have to change the url here.
  baseUrl: 'http://drupal.org/',

  // Here we set things that needs to happen before start testing.
  onPrepare: function () {
    var SpecReporter = require('jasmine-spec-reporter');
    // add jasmine spec reporter
    jasmine.getEnv().addReporter(new SpecReporter({
      displayFailuresSummary: true,
      displayFailedSpec: true,
      displaySuiteNumber: true,
      displaySpecDuration: true
    }));

    // Used for non-angular apps.
    browser.ignoreSynchronization = true;

    // Maximize window before start testing.
    browser.driver.manage().window().maximize();

    // Used to define a default delay between actions.
    var origFn = browser.driver.controlFlow().execute;

    browser.driver.controlFlow().execute = function() {
      var args = arguments;

      // queue 100ms wait.
      origFn.call(browser.driver.controlFlow(), function() {
        return protractor.promise.delayed(100);
      });

      return origFn.apply(browser.driver.controlFlow(), args);
    };
  },

  jasmineNodeOpts: {
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 999999
  }
};
