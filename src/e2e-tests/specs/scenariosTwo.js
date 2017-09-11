'use strict';
var dashboard=require('../pageObjects/dashboard.js');
describe('Protractor Demo App two', function() {

  beforeEach(function () {
    browser.get('http://localhost:3000');
  });
  afterEach(function () {
    console.log("after method executed");
  });


  it('User should have able to add and dell heroes', function() {
    dashboard.openHeroesPage();
    dashboard.addHero('newHero');
    dashboard.dellHero();
  });


});
