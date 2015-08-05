/**
* @file all.page.js
*/

// This page is used to require just one file into tests and then have access to all the available page objects.
// If you create a new page object file, do not forgot to add it here.
var AuthenticationPage = require('./authentication.page');
var ContentPage = require('./content.page.js');
var PerformancePage = require('./performance.page');
var SamplePage = require('./sample.page');
var TaskSchedulerPage = require('./task.scheduler.page');

module.exports = {
  'AuthenticationPage': AuthenticationPage,
  'ContentPage': ContentPage,
  'PerformancePage': PerformancePage,
  'SamplePage': SamplePage,
  'TaskSchedulerPage': TaskSchedulerPage
}
