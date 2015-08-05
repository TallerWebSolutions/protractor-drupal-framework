/**
 * @file performance.spec.js
 */

// Require all page objects.
var AllPages = require('../pages/all.page');

// For each spec file is recommended to have just one describe.
// A describe may the the description of a functionality/feature or even a web page, like home page, contact page, etc. It depends on the team work agreement
describe ('Performance', function() {
  // This is the pre-condition step of each test.
  beforeEach(function () {
    AllPages.AuthenticationPage.logout();
    AllPages.AuthenticationPage.login(browser.params.admin.user, browser.params.admin.password);
  });
	it ('clear all caches', function () {
    var message = 'Todos os caches foram limpos.';
    AllPages.PerformancePage.get();
  	AllPages.PerformancePage.clearAllCaches();
    AllPages.SamplePage.waitMessageToBeVisible(message);
    expect(AllPages.SamplePage.body.getText()).toContain(message);
  });
});
