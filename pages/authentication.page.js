/**
* @file authentication.page.js
*/

// This is an object used for authentication (login and logout).
var AuthenticationPage = function () {

  this.usernameField = element(by.css('input#edit-name'));
  this.passwordField = element(by.css('input#edit-pass'));
  this.loginButton = element(by.css('input#edit-submit'));
  this.loggedIn = element(by.css('body.logged-in'));

  this.login = function (user, password) {
    this.get();
    this.usernameField.sendKeys(user);
    this.passwordField.sendKeys(password);
    this.loginButton.click();
  }

  this.logout = function () {
    browser.get('user/logout');
  }

  this.get = function () {
    browser.get('user');
  }

};

module.exports = new AuthenticationPage();
