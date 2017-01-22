'use strict';

describe('awCalculator app', function() {


  it('should load', function() {
    browser.get('awCalculator.html');
    expect(browser.getLocationAbsUrl()).toMatch("/");
  });


  describe('xxx', function() {

    beforeEach(function() {
      browser.get('awCalculator.html');
    });


    it('should have keys and operators', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });
});