//'use strict';

    var calculatorApp = angular.module('calculatorApp', ['calculatorModule']);
    var calculatorModule = angular.module('calculatorModule', []);

    calculatorModule.controller('calculatorController', ['$scope', function ($scope) {
        $scope.calculator = calculatorModel;

			$scope.numberClick = function(clickedNumber) {
				console.log("clickedNumber  " + clickedNumber);
				if (calculatorModel.currentNumber === "0") {
					calculatorModel.currentNumber = "";
					calculatorModel.currentDisplay = "";
				} 
				if (clickedNumber === ".") { // TODO multi .
					calculatorModel.hasPoint = true;
				}	
				if (clickedNumber === 'X') { // TODO  remove last digit
					calculatorModel.currentNumber /= "10";
					calculatorModel.currentDisplay /= "10";
					return;
				}			
				calculatorModel.currentNumber += clickedNumber;
				calculatorModel.currentDisplay += clickedNumber;
			};
			
			$scope.operationClick = function(clickedOperation) {
				console.log(clickedOperation + "  " + calculatorModel.result);
				if (clickedOperation === "=") {
					this.enterClicked();
				}				
				else {
					calculatorModel.setOperation(clickedOperation);				
				}
			};
			
			$scope.enterClicked = function() {
				calculatorModel.calculate();
				//calculatorModel.currentDisplay = calculatorModel.result;
			};
			
			$scope.resetClicked = function() {
				calculatorModel.reset();
			};
    }]);

    // CALCULATOR MODEL

	calculatorModel = {
		operation: "",
		currentNumber: "0",
		currentDisplay: "0", 
		firstNumber: 0,
		result: 0, 
		hasPoint: false,
		
		reset: function() {
			this.result = 0; 
			this.operation = "";
			this.currentNumber = "0";
			this.currentDisplay = "0" ;
		},
		
		setOperation: function(operationToSet) {
			this.operation = operationToSet;
			if (calculatorModel.currentNumber === "0") {
				this.currentDisplay += "0";
			}				
			this.currentDisplay += " " + this.operation + " ";
			this.firstNumber = parseFloat(this.currentNumber);			
			this.currentNumber = "";
		},

		calculate: function() {
			console.log("firstNumber: " + this.firstNumber + " currentNumber:  " + this.currentNumber);
			switch(this.operation) {
				case "+":
					this.result = this.firstNumber + parseFloat(this.currentNumber);
					break;					
				case "-":
					this.result = this.firstNumber - parseFloat(this.currentNumber);
					break;
				case "*":
					this.result = this.firstNumber * parseFloat(this.currentNumber);
					break;
				case "/":
					this.result = this.firstNumber / parseFloat(this.currentNumber);
					break;
			}
			this.operation = "";
			this.currentNumber = "0";
			this.firstNumber = 0;
		}			
		
	};
