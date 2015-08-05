/**
* @file content.page.js
*/

// Prefix for Expected Conditions.
var EC = protractor.ExpectedConditions;

// This is an object used for mananing drupal contents.
var ContentPage = function () {

	// Define content attributes.
	this.titleField = element(by.css('#views-exposed-form-admin-views-node-system-1 #edit-title'));
  this.applyButton = element(by.css('#views-exposed-form-admin-views-node-system-1 #edit-submit-admin-views-node'));

	//Define content methods.
	this.get = function () {
    browser.get('/admin/content');
  };

  this.filter = function (contentTitle) {
		browser.wait(EC.visibilityOf(this.titleField), browser.params.timeoutDefault);
    this.titleField.sendKeys(contentTitle);
    browser.wait(EC.visibilityOf(this.applyButton), browser.params.timeoutDefault);
    this.applyButton.click();
  };

  this.remove = function (title) {
		var titleLink = element(by.cssContainingText('a', title));
    this.filter(title);
		browser.wait(EC.visibilityOf(titleLink), browser.params.timeoutDefault);
    titleLink.click().then(function () {
      element(by.cssContainingText('.tabs a', 'Edit')).click().then(function () {
        element(by.css('#edit-delete')).click().then(function () {
          element(by.css('#edit-submit')).click();
        });
      });
    });
  };

};

module.exports = new ContentPage();
