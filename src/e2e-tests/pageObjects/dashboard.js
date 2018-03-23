var until = protractor.ExpectedConditions;
var dashboard = function () {
    this.selectHero = function (nameHero) {
      element(by.xpath('//h4[.="'+ nameHero+'"]/../..')).click();
      browser.wait(until.presenceOf(element(by.xpath('//h2'))), 5000, 'Element taking too long to appear in the DOM');
      expect(element(by.xpath('//h2')).getText()).toEqual("Narco details!");
    };

    this.changeName = function (newName) {
      var input=element(by.xpath('//input'));
     input.clear().then(function() {
       input.sendKeys(newName);
      });
      expect(element(by.xpath('//h2')).getText()).toEqual(newName+' details!');
    };

  this.openHeroesPage = function () {
   element(by.xpath('//a[.="Heroes"]')).click();
    expect(element(by.xpath('//h2')).getText()).toEqual('My Heroes');
  };

  this.addHero = function (name) {
    element(by.xpath('//input')).sendKeys(name);
    element(by.xpath('//*[contains(text(),"Add")]')).click();
    element(by.xpath('//span[contains(text(),"21")]/..')).getText().then(function (value) {
      var name=value.slice(3,10);
    expect(name).toBe("newHero");
    })
  };

  this.dellHero = function () {
    element(by.xpath('(//span[contains(text(),"0")]/../button)[1]')).click();
    expect(element(by.xpath('//span[contains(text(),"0")]/..')).isDisabled).toBeFalsy();
  };

};
module.exports = new dashboard();
