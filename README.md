# protractor-drupal-framework
A test automation framework for Drupal apps, written using Protractor and the PageObjects pattern.

**Pre-requisites:**
- NodeJS (v4.0.0+)
- Java Development Kit (JDK) - for the selenium server

**Setup:**

To install Protractor globally, use:

`npm install -g protractor`

After installing Protractor, you will need to update the webdriver-manager. Use:

`webdriver-manager update`

To start the selenium server, use:

`webdriver-manager start`

The above step is not necessary when running tests with Chrome or Firefox.
Take a look at the directConnection Protractor configuration.

**Running tests:**

For running the Protractor tests, execute the below command in the path where the Protractor configuration file is located:

`protractor`

To overwrite the Protractor's configurations you can run the below command (it will overwrite baseUrl and params):

`protractor --baseUrl http://your-custom-url/ --params.admin.user=your-admin-user --params.admin.password=your-admin-password`

Other configurations can be overwritten the same way.
