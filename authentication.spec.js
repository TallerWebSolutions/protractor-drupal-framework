/**
* @file authentication.spec.js
*/

var AuthenticationPage = require('./pages/authentication.page');

browser.ignoreSynchronization = true;

// For each spec file is recommended to have just one describe.
// A describe may the the description of a functionality/feature or even a web page, like home page, contact page, etc. It depends on the team work agreement
describe ('Authentication' , function () {
  it ('login', function () {
    // To login two arguments are needed, user and password. You need to change the default values.
		AuthenticationPage.login('user-here', 'password-here');
    // Check that user is logged in.
    expect(AuthenticationPage.loggedIn.isPresent()).toBe(true);
	});

  it ('logout', function () {
    AuthenticationPage.logout();
    // Check that user is logged out.
    expect(AuthenticationPage.loggedIn.isPresent()).toBe(false);
  });
});
