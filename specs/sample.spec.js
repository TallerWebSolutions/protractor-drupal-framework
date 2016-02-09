/**
* @file sample.spec.js
*/

var AllPages = require('../pages/page-object-loader');

describe ('Sample' , function () {

  it('login', function () {
    AllPages.AuthenticationPage.login(browser.params.admin.user, browser.params.admin.password);
    // Check that user is logged in.
    expect(AllPages.AuthenticationPage.loggedIn.isPresent()).toBe(true);
  });

  it('logout', function () {
    AllPages.AuthenticationPage.logout();
    // Check that user is logged out.
    expect(AllPages.AuthenticationPage.loggedIn.isPresent()).toBe(false);
  });

});
