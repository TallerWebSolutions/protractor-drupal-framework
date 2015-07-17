/**
* @file conf.js
*/

exports.config = {
  // The selenium address where the selenium server will be running.
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // The test files are stored into the specs array, separated by comma.
  specs: [
    'spec.js',
    'authentication.spec.js'
  ],

  // Browser configuration.
  capabilities: {
    'browserName': 'chrome'
  },

  // The url that will be used for the tests. With this you can call just the relative urls into the tests.
  // This is also good for running tests in different environments. To do this you just have to change the url here.
  baseUrl: 'http://drupal.org/',
};