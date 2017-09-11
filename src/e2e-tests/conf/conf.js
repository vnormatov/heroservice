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

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }

};
