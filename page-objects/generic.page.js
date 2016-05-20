/**
 * @file generic.page.js
 * This is a generic page object file where you will find generic methods to use with drupal.
 */

var GenericPage = function () {

	this.body = element(by.css('body'));
	this.successMessage = element(by.css('.messages.status'));
	this.warningMessage = element(by.css('.messages.warning'));
	this.errorMessage = element(by.css('.messages.error'));

	// The url argument is optional, if not set it just goes to the baseUrl defined in the conf.js file.
	this.visit = function (url) {
		if (typeof(url) != 'undefined') {
			browser.get('/' + url);
		} else {
			browser.get('/');
		}
	};

};

module.exports = GenericPage;
