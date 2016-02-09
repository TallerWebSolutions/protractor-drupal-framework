/**
* @file sample.page.js
*/

// This is a sample page file where you will find generic methods to use with drupal.
var SamplePage = function () {

	this.body = element(by.css('body'));

	// The url argument is optional, if not set it just goes to the baseUrl defined in the conf.js file.
	this.get = function (url) {
		if (typeof(url) != 'undefined') {
			browser.get('/' + url);
		} else {
			browser.get('/');
		}
	};

	// Check that the correct drupal theme is used based on a string argument that represents the drupal theme.
	this.checkDrupalTheme = function(theme) {
		expect(browser.executeScript('return Drupal.settings.ajaxPageState.theme')).toEqual(theme);
	};

	this.checkSuccessMessage = function() {
		var successMessage = $('.messages.status');

		expect(successMessage.isDisplayed()).toBe(true);
	};

	this.checkWarningMessage = function() {
		var warningMessage = $('.messages.warning');

		expect(warningMessage.isDisplayed()).toBe(true);
	};

	this.checkErrorMessage = function() {
		var errorMessage = $('.messages.error');

		expect(errorMessage.isDisplayed()).toBe(true);
	};

};

module.exports = new SamplePage();
