const readline = require("readline");

class Calculator {
  constructor(a, b, operation) {
    this.a = a;
    this.b = b;
    this.operation = operation.toLowerCase();
  }

  calculate() {
    switch (this.operation) {
      case "add":
      case "+":
        return this.a + this.b;
      case "subtract":
      case "-":
        return this.a - this.b;
      case "multiply":
      case "*":
        return this.a * this.b;
      case "divide":
      case "/":
        if (this.b === 0) return "Error: Division by zero!";
        return this.a / this.b;
      default:
        return "Invalid operation!";
    }
  }
}


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter first number: ", (a) => {
  rl.question("Enter second number: ", (b) => {
    rl.question("Enter operation (add/subtract/multiply/divide or + - * /): ", (operation) => {
      const calc = new Calculator(parseFloat(a), parseFloat(b), operation);
      console.log(`Result: ${calc.calculate()}`);
      rl.close();
    });
  });
});
