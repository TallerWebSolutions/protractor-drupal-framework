/**
 * @task.scheduler.page.js
 */

// This is an object used for drupal cron execution.
var TaskSchedulerPage = function () {

	// Define task scheduler attributes.
	this.runButton = element(by.css('#system-cron-settings #edit-run'));

	// Define task scheduler methods.
  this.get = function () {
  	browser.get('admin/config/system/cron');
  };

  this.run = function () {
  	this.runButton.click();
  	browser.driver.sleep(3000);
  }

};

module.exports = new TaskSchedulerPage();
