/**
 * @file spec.js
 */

var GenericPage = require('../page-objects/generic.page');

describe ('Home page' , function () {

	var genericPage = new GenericPage();

	// This is the pre-condition step of each test.
	beforeEach(function () {
		// In the get method of the sample page you can have two behaviors:
		// If no url is set you will go to the base url defined in the protractor.conf.js file.
		// Or you can set a relative url as a string, without slash. E.g.: 'user'.
		genericPage.visit();
	});

	it('theme', function () {
		expect(browser.executeScript('return Drupal.settings.ajaxPageState.theme'))
			.toEqual('bluecheese');
	});

});
