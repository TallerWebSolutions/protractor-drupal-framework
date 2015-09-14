/**
 * @performance.page.js
 */

// This is an object used for cache cleaning.
var PerformancePage = function () {

	// Define performance attributes.
	this.clearAllCachesButton = element(by.css('#system-performance-settings #edit-clear'));

	// Define performance methods.
	this.get = function () {
		browser.get('admin/config/development/performance');
	}

	this.clearAllCaches = function () {
		this.clearAllCachesButton.click();
	}

};

module.exports = new PerformancePage();
