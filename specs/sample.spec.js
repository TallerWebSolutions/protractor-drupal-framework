/**
 * @file sample.spec.js
 */

var AuthenticationPage = require('../page-objects/authentication.page');
var ContentPage = require('../page-objects/content.page');
var GenericPage = require('../page-objects/generic.page');
var PerformancePage = require('../page-objects/performance.page');
var TaskSchedulerPage = require('../page-objects/task-scheduler.page');

describe ('Sample test' , function () {

  var authenticationPage = new AuthenticationPage();
  var contentPage = new ContentPage();
  var genericPage = new GenericPage();
  var performancePage = new PerformancePage();
  var taskSchedulerPage = new TaskSchedulerPage();

  beforeAll(function () {
    authenticationPage.login(
      browser.params.admin.user,
      browser.params.admin.password
    );
  });

  beforeEach(function() {
    genericPage.visit();
  });

  it('run cron', function() {
    // Arrange
    taskSchedulerPage.visit();

    // Act
    taskSchedulerPage.runButton.click();

    // Assert
    expect(genericPage.successMessage.isDisplayed()).toBe(true);
  });

  it('clear all caches', function() {
    // Arrange
    performancePage.visit();

    // Act
    performancePage.clearAllCachesButton.click();

    // Assert
    expect(genericPage.successMessage.isDisplayed()).toBe(true);
  });

  it('delete content', function() {
    // Arrange
    contentPage.visit();

    // Act
    contentPage.remove('test');

    // Assert
    expect(genericPage.successMessage.isDisplayed()).toBe(true);
  });

  afterAll(function() {
    authenticationPage.logout();
  });

});
