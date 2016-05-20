/**
 * @file authentication.page.js
 * This is an object used for authentication (login and logout)
 */

var AuthenticationPage = function () {

  this.usernameField = element(by.css('input#edit-name'));
  this.passwordField = element(by.css('input#edit-pass'));
  this.loginButton = element(by.css('input#edit-submit'));
  this.loggedIn = element(by.css('body.logged-in'));

  this.login = function (user, password) {
    this.visit();
    this.usernameField.sendKeys(user);
    this.passwordField.sendKeys(password);
    this.loginButton.click();
  };

  this.visit = function () {
    browser.get('user');
  };

  this.logout = function () {
    browser.get('user/logout');
  };

};

module.exports = AuthenticationPage;
