/**
* @file authentication.page.js
*/

// Prefix for Expected Conditions.
var EC = protractor.ExpectedConditions;

// This is an object used for authentication (login and logout).
var AuthenticationPage = function () {

  var defaultTimeout = 5000;

  // Define authentication attributes.
  this.usernameField = element(by.css('input#edit-name'));
  this.passwordField = element(by.css('input#edit-pass'));
  this.loginButton = element(by.css('input#edit-submit'));
  this.loggedIn = element(by.css('body.logged-in'));

  // Define authentication methods.
	this.get = function () {
    browser.get('user');
  };

  this.login = function (user, password) {
    this.get();
    browser.wait(EC.visibilityOf(this.usernameField, defaultTimeout));
    this.usernameField.sendKeys(user);
    browser.wait(EC.visibilityOf(this.passwordField, defaultTimeout));
    this.passwordField.sendKeys(password);
    browser.wait(EC.visibilityOf(this.loginButton, defaultTimeout));
    this.loginButton.click();
  }

  this.logout = function () {
    browser.get('user/logout');
  }

};

module.exports = new AuthenticationPage();
