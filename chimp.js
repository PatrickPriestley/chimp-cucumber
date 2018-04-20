module.exports = {
  // - - - - CHIMP - - - -
  watch: false,
  watchTags: '@watch',
  offline: false,

  // - - - - CUCUMBER - - - -
  path: './cucumberExample/',
  require: [
            './cucumberExample/src/steps/given.js',
            './cucumberExample/src/steps/then.js',
            './cucumberExample/src/steps/when.js',
        ],
  jsonOutput: 'output.json',

  // '- - - - DEBUGGING  - - - -
  log: 'info',
  debug: false,
  seleniumDebug: false,
  webdriverLogLevel: false,
  // debugBrkCucumber: 5858,
};
