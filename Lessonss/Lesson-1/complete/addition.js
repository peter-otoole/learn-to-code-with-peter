// Get input from console arguments
let firstValue = process.argv[2];
let secondValue = process.argv[3];

// Parse the inputs as numbers and sum the numbers
let firstNumber = parseInt(firstValue);
let secondNumber = parseInt(secondValue);
let sum = firstNumber + secondNumber;

// Print the output
let message = "The sum of " + firstValue + " and " + secondValue + " is " + sum;
console.log(message);
