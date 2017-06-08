const Application = require('spectron').Application
const assert = require('assert')
var path = require("path")
var fs = require("fs")
const appPath = path.resolve(__dirname, './electron-quick-start'); //require the whole thing
const electronPath = path.resolve(__dirname, './electron-quick-start/node_modules/.bin/electron');
const looksSame = require('looks-same')

const app = new Application({
    path: electronPath,
    args: [appPath], // pass args along with path
})

app.start().then(() => {
  // Check if the window is visible
  return app.browserWindow.isVisible()
}).then((isVisible) => {
  // Verify the window is visible
  assert.equal(isVisible, true)
}).then(() => {
  app.browserWindow.capturePage().then((imageBuffer) => {
    fs.writeFileSync('page-new.png', imageBuffer)
  })
}).then(() => {
  // Get the window's title
  return app.client.getTitle()
}).then((title) => {
  // Verify the window's title
  assert.equal(title, 'UI Test Kitchen')
}).then(() => {
  looksSame('./page.png', './page-new.png', {ignoreAntialiasing: true}, function(error, equal) {
    if (equal === false) {
      console.log('Visual Regression failed')
      looksSame.createDiff({
          reference: 'page.png',
          current: 'page-new.png',
          diff: 'page-diff.png',
          highlightColor: '#ff00ff', //color to highlight the differences
          strict: false,//strict comparsion
          tolerance: 2.5
      }, function(error) {
      })
    }
  })
})
.then(() => {
  // Stop the application
  return app.stop()
}).catch( (error) => {
  // Log any failures
  console.error('Test failed', error.message)
})