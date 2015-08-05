/**
* @file content.spec.js
*/

// Require all page objects.
var AllPages = require('../pages/all.page');

// For each spec file is recommended to have just one describe.
// A describe may the the description of a functionality/feature or even a web page, like home page, contact page, etc. It depends on the team work agreement
describe ('Content' , function () {
  // This is the pre-condition step of each test.
	beforeEach(function () {
    AllPages.AuthenticationPage.logout();
    AllPages.AuthenticationPage.login(browser.params.admin.user, browser.params.admin.password);
  });

	it ('remove content', function () {
    AllPages.ContentPage.get();
    // To remove a content you have to change the content title below. The default content title is 'teste'.
    AllPages.ContentPage.remove('teste');
    expect(AllPages.SamplePage.body.getText()).toContain('foi apagado.');
	});
});
