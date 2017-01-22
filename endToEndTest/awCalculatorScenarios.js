'use strict';

describe('awCalculator app', function() {


  it('should load', function() {
    browser.get('awCalculator.html');
    expect(browser.getLocationAbsUrl()).toMatch("");
  });


  describe('simple operations', function() {

    beforeEach(function() {
      browser.get('awCalculator.html');
    });

    var firstNumber = element.all(by.css("[aid='numbers'] tr td button")).get(0); // TODO properly with unique aid
    var secondNumber = element.all(by.css("[aid='numbers'] tr td button")).get(2);
    var addButton = element.all(by.css("[aid='operations'] tr td button")).get(0);
    var equalsButton = element.all(by.css("[aid='operations'] tr td button")).last();  // TODO properly with unique aid
    var result = element(by.css("[aid='result']"));

    it('1+3=4', function() {
      firstNumber.click();
      addButton.click();
      secondNumber.click();
      equalsButton.click();
      expect(result.getText()).toEqual('4');
    });


  });

});