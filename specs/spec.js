/**
* @file spec.js
*/

var AllPages = require('../pages/all.page');

describe ('Drupal home page' , function () {

	// This is the pre-condition step of each test.
	beforeEach(function () {
		// In the get method of the sample page you can have two behaviors:
		// If no url is set you will go to the base url defined in the protractor.conf.js file.
		// Or you can set a relative url as a string, without slash. E.g.: 'user'.
		AllPages.SamplePage.get();
	});

	it('uses \'bluecheese\' theme', function () {
		// Set the expected theme as a string to check that the correct drupal theme is been used.
		AllPages.SamplePage.checkDrupalTheme('bluecheese');
	});

});

// Require all other spec files for execution.
require('./sample.spec.js');
