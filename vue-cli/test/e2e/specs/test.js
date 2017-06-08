// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
const looksSame = require('looks-same')

module.exports = {
  'default e2e and accesibility tests': (browser) => {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.hello')
      .assert.containsText('h1', 'Welcome to Your Vue.js PWA')
      .assert.elementCount('img', 1)
      .saveScreenshot('../visual-regression/base.png')
      .axeInject()
      .axeRun('body', {
        rules: {
          'color-contrast': { enabled: false }
        }
      })
      .end()
  }
}
