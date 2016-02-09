/**
* @file content.page.js
*/

// This is an object used for mananing drupal contents.
var ContentPage = function () {

	this.titleField = element(by.css('#views-exposed-form-admin-views-node-system-1 #edit-title'));
	this.applyButton = element(by.css('#views-exposed-form-admin-views-node-system-1 #edit-submit-admin-views-node'));

	this.remove = function (title) {
		var titleLink = element(by.cssContainingText('a', title));

		this.filter(title);

		titleLink.click();
		
		element(by.cssContainingText('.tabs a', 'Edit')).click();
		element(by.css('#edit-delete')).click();
		element(by.css('#edit-submit')).click();
	}

	this.filter = function (contentTitle) {
		this.titleField.sendKeys(contentTitle);
		this.applyButton.click();
	}

	this.get = function () {
		browser.get('/admin/content');
	}

};

module.exports = new ContentPage();
