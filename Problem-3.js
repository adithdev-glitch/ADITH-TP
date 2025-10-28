const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number: ", (a) => {
  a = parseInt(a);


  let limit = (a % 2 === 0) ? a - 1 : a;
  let result = [];

  for (let i = 1; i <= limit; i++) {
    result.push(2 * i - 1);
  }

  console.log(`Output: ${result.join(", ")}`);
  rl.close();
});
