const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  numTestsKeptInMemory: 0,
  chromeWebSecurity: false,
  video: true,
  retries: 2,
  defaultCommandTimeout: 30000,
  videosFolder: "cypress/videos",
  screenshotsFolder: "cypress/screenshots",
  fixturesFolder: "cypress/fixtures",
  includeShadowDom: true,
  viewportHeight: 1080,
  viewportWidth: 1920,
  watchForFileChanges: true,
  e2e: {
    baseUrl: "http://localhost:5173",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});