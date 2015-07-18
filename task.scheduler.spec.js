/**
 * @file task.scheduler.spec.js
 */

// Require authentication, task scheduler and sample page objects.
var AuthenticationPage = require('./pages/authentication.page');
var TaskSchedulerPage = require('./pages/task.scheduler.page');
var SamplePage = require('./pages/sample.page');

// Used for non-angular apps
browser.ignoreSynchronization = true;

// For each spec file is recommended to have just one describe.
// A describe may the the description of a functionality/feature or even a web page, like home page, contact page, etc. It depends on the team work agreement
describe ('Task scheduler', function() {
  // This is the pre-condition step of each test.
  beforeEach(function () {
    AuthenticationPage.logout();
    AuthenticationPage.login(browser.params.admin.user, browser.params.admin.password);
  });
	it ('run the cron', function () {
    TaskSchedulerPage.get();
  	TaskSchedulerPage.run();
    expect(SamplePage.body.getText()).toContain('O cron foi executado com sucesso.');
  });
});
