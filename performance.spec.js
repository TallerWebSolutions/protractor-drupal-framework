/**
 * @file performance.spec.js
 */

// Require all page objects.
var AllPages = require('./pages/all.page');

// For each spec file is recommended to have just one describe.
// A describe may the the description of a functionality/feature or even a web page, like home page, contact page, etc. It depends on the team work agreement
describe ('Performance', function() {
  // This is the pre-condition step of each test.
  beforeEach(function () {
    AllPages.AuthenticationPage.logout();
    AllPages.AuthenticationPage.login(browser.params.admin.user, browser.params.admin.password);
  });
	it ('clear all caches', function () {
    AllPages.PerformancePage.get();
  	AllPages.PerformancePage.clearAllCaches();
    expect(AllPages.SamplePage.body.getText()).toContain('Todos os caches foram limpos.');
  });
});
