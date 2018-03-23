//jshint strict: false
exports.config = {

    allScriptsTimeout: 11000,
    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        'browserName': 'chrome'
    },

  suites: {
    ChangeHeroName: '../specs/scenariosOne.js',
    AddAndDellHero: ['../specs/scenariosTwo.js', '../specs/scenariosThree.js']
  },

    baseUrl: 'http://localhost:3000',
    framework: 'jasmine2',
  onPrepare: function () {
    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter());
    jasmine.getEnv().afterEach(function(done){
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment('Screenshot', function () {
          return new Buffer(png, 'base64')
        }, 'image/png')();
        done();
      })
    });
  },

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },

  beforeLaunch: function() {
  console.log('beforeLaunch');
  },
};
