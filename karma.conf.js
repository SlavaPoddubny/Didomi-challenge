// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/UI'),
      exclude: [
        "node_modules",
        "**/*.model.ts",
        "**/*.module.ts",
        "**/*.mock.ts",
        "**/index.ts",
        "**/modules.ts"
      ],
      reports: ['html', 'lcov', 'cobertura'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browserNoActivityTimeout: 120000,
    browserDisconnectTimeout: 120000,
    browserDisconnectTolerance: 5,
    retryLimit: 5,
    browserSocketTimeout: 60000,
    captureTimeout: 120000,
    browsers: ['ChromeHeadless'],
    singleRun: false
  });
};
