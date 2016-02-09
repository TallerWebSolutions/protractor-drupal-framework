/**
 * @file task.scheduler.page.js
 */

// This is an object used for drupal cron execution.
var TaskSchedulerPage = function () {

	this.runButton = element(by.css('#system-cron-settings #edit-run'));

	this.get = function () {
		browser.get('admin/config/system/cron');
	}

};

module.exports = new TaskSchedulerPage();
