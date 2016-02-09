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

  it('runs cron', function() {
    // Arrange
    AllPages.AuthenticationPage.login(browser.params.admin.user, browser.params.admin.password);
    AllPages.TaskSchedulerPage.get();

    // Act
    AllPages.TaskSchedulerPage.runButton.click();

    // Assert
    AllPages.SamplePage.checkSuccessMessage();
  });

  it('cleans cache', function() {
    // Arrange
    AllPages.AuthenticationPage.login(browser.params.admin.user, browser.params.admin.password);
    AllPages.PerformancePage.get();

    // Act
    AllPages.PerformancePage.clearAllCachesButton.click();

    // Assert
    AllPages.SamplePage.checkSuccessMessage();
  });

  it('delete content', function() {
    // Arrange
    AllPages.AuthenticationPage.login(browser.params.admin.user, browser.params.admin.password);
    AllPages.ContentPage.get();

    // Act
    AllPages.ContentPage.remove('test');

    // Assert
    AllPages.SamplePage.checkSuccessMessage();
  });

  afterEach(function() {
    AllPages.AuthenticationPage.logout();
  });

});
