/**
* @file content.spec.js
*/

// Require content, authentication and sample page object.
var ContentPage = require('./pages/content.page');
var AuthenticationPage = require('./pages/authentication.page');
var SamplePage = require('./pages/sample.page');

// Used for non-angular apps
browser.ignoreSynchronization = true;

// For each spec file is recommended to have just one describe.
// A describe may the the description of a functionality/feature or even a web page, like home page, contact page, etc. It depends on the team work agreement
describe ('Content' , function () {
  // This is the pre-condition step of each test.
	beforeEach(function () {
    AuthenticationPage.logout();
    AuthenticationPage.login(browser.params.admin.user, browser.params.admin.password);
  });

	it ('remove content', function () {
    ContentPage.get();
    // To remove a content you have to change the content title below. The default content title is 'teste'.
    ContentPage.remove('teste');
    expect(SamplePage.body.getText()).toContain('foi apagado.');
	});
});
