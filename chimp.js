module.exports = {
  // - - - - CHIMP - - - -
  watch: false,
  watchTags: '@watch',
  offline: false,

  // - - - - CUCUMBER - - - -
  path: './cucumberExample/',
  require: [
            './cucumberExample/step_definitions/steps/given.js',
            './cucumberExample/step_definitions/steps/then.js',
            './cucumberExample/step_definitions/steps/when.js',
        ],
  jsonOutput: 'output.json',

  // '- - - - DEBUGGING  - - - -
  log: 'info',
  debug: false,
  seleniumDebug: false,
  webdriverLogLevel: false,
  // debugBrkCucumber: 5858,
};
