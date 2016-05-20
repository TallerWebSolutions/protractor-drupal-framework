/**
 * @file performance.page.js
 * This is an object used for cache clearing.
 */

var PerformancePage = function () {

	this.clearAllCachesButton = element(by.css('#system-performance-settings #edit-clear'));

	this.visit = function () {
		browser.get('admin/config/development/performance');
	}

};

module.exports = PerformancePage;
