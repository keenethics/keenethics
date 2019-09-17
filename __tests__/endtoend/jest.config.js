module.exports = {
  globals: {
    PATH: "http://localhost:3000/"
  },
  testMatch: [
    "<rootDir>/*.test.js"
  ],
    globalSetup: '<rootDir>/config/setup.js',
    globalTeardown: '<rootDir>/config/teardown.js',
    testEnvironment: '<rootDir>/config/puppeteer_environment.js',
    setupTestFrameworkScriptFile: '<rootDir>/config/setup_test_framework_script.js',
  };