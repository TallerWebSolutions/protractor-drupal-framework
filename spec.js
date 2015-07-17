/**
* @file spec.js
*/

// Require sample page object.
var SamplePage = require('./pages/sample.page');

// Used for non-angular apps
browser.ignoreSynchronization = true;

// For each spec file is recommended to have just one describe.
// A describe may the the description of a functionality/feature or even a web page, like home page, contact page, etc. It depends on the team work agreement
describe ('Drupal home page' , function () {
  // This is the pre-condition step of each test.
	beforeEach(function () {
    // In the get method of the sample page you can have two behaviors:
    // If no url is set you will go to the base url defined in the conf.js file.
    // Or you can set a relative url as a string, without slash. E.g.: 'user'.
    SamplePage.get();
  });

	it ('uses \'bluecheese\' theme', function () {
    // Set the expected theme as a string to check that the correct drupal theme is been used.
		SamplePage.checkDrupalTheme('bluecheese');
	});
});
