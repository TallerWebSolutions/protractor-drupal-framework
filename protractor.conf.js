/**
* @file conf.js
*/

exports.config = {
  // The selenium address where the selenium server will be running.
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Parameters that can be used in the tests.
  params: {
    // Here is where you set the user credentials for tests usage.
    admin: {
      'user': 'user-here',
      'password': 'password-here'
    },
    timeoutDefault: 5000
  },

  // The test files are stored into the specs array, separated by comma.
  // In the TallerWay, we use only the spec.js file and we require all other tests into this file.
  specs: ['spec.js'],

  // Browser configuration.
  capabilities: {
    'browserName': 'chrome'
  },

  // The url that will be used for the tests. With this you can call just the relative urls into the tests.
  // This is also good for running tests in different environments. To do this you just have to change the url here.
  baseUrl: 'http://drupal.org/',

  // Here we set things that have to happen before start testing.
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
  }
};
