#!/usr/bin/env node
// file: calculator.js
const { add, subtract, times, divide, modulus } = require('./src/stmnts-01');
const { power } = require('./src/stmnts-02');

if (process.argv.length < 5) {
  console.error("usage: node calculator.js number operator number");
  process.exit(1);
}

const num1 = parseFloat(process.argv[2]);
const operation = (process.argv[3]).toLowerCase();
const num2 = parseFloat(process.argv[4]);

let result = `Solving ${num1} ${operation} ${num2}`;

// Implementation goes here
// if you get an error, exit with an error of 1 by calling process.exit(1);
if (isNaN(num1) || isNaN(num2)) {
  console.error("Error: invalid number.");
  process.exit(1);
}

switch (operation) {
  case 'add':
    result = add(num1, num2);
    break;
  case 'subtract':
    result = subtract(num1, num2);
    break;
  case 'multiply':
  case 'times':
    result = times(num1, num2);
    break;
  case 'divide':
    if (num2 === 0) {
      console.error("Error: invalid number.");
      process.exit(1);
    }
    result = divide(num1, num2);
    break;
  case 'modulus':
  case 'remainder':
    result = modulus(num1, num2);
    break;
  case 'power':
    result = power(num1, num2);
    break;
  default:
    console.error("Error: unknown operation.");
    process.exit(1);
}

console.log("result: ", result);
process.exit(0);
