# protractor-drupal-framework
A test automation framework for Drupal apps, written using Protractor and the PageObjects pattern.

**Pre-requisites:**
- NodeJS (greater than v0.10.0)
- Java Development Kit (JDK) - for the selenium server

**Setup:**

To install node dependecies and Protractor globally, use:

`npm install; npm install -g protractor`

After installing Protractor, you will need to update the webdriver-manager. Use:

`webdriver-manager update`

To start the selenium server, use:

`webdriver-manager start`

**Running tests:**

For running the Protractor tests, execute the below command in the path where the Protractor configuration file is located:

`protractor`
