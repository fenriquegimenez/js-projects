let prompt = require('prompt');

class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }
  sum() {
    return this.num1 + this.num2;
  }
  subtraction() {
    return this.num1 - this.num2;
  }
  multiplication() {
    return this.num1 * this.num2;
  }
  division() {
    return this.num1 / this.num2;
  }
}

prompt.start();

prompt.get(['number1', 'number2', 'toOperate'], function (err, result) {
  let number1 = result.number1;
  let number2 = result.number2;
  let toOperate = result.toOperate;
});

let operation1 = new Calculator(prompt.number1, prompt.number2);

switch (prompt.toOperate) {
  case sum:
    console.log(operation1.sum());
    break;
  case subt:
    console.log(operation1.subtraction());
    break;
  case div:
    console.log(operation1.division());
    break;
  case mult:
    console.log(operation1.multiplication());
    break;
}
