/**
* @file all.page.js
*/

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
