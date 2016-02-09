/**
* @file page-object-loader.js
*/

// This page is used to require just one file into the tests and then have access to all the available page objects.
// If you create a new page object file, do not forgot to add it here.
module.exports = {
  'AuthenticationPage': require('./authentication.page'),
  'ContentPage': require('./content.page.js'),
  'PerformancePage': require('./performance.page'),
  'SamplePage': require('./sample.page'),
  'TaskSchedulerPage': require('./task.scheduler.page')
}
