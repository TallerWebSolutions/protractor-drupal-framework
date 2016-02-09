/**
 * @file performance.page.js
 */

// This is an object used for cache cleaning.
var PerformancePage = function () {

	this.clearAllCachesButton = element(by.css('#system-performance-settings #edit-clear'));

	this.get = function () {
		browser.get('admin/config/development/performance');
	}

};

module.exports = new PerformancePage();
