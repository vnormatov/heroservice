'use strict';

describe('Protractor Demo App first', function() {

  beforeEach(function () {
    browser.get('http://localhost:3000');
  });
  afterEach(function () {
    console.log("after method executed");
  });


  it('Application should have a title', function() {
    browser.get('http://localhost:3000');
    expect(browser.getTitle()).toEqual('Angular QuickStart');
  });

  it('User should change hero name', function() {
    var dashboard=require('../pageObjects/dashboard.js');
  dashboard.selectHero(' Narco');
  dashboard.changeName('newName');
  });

});
