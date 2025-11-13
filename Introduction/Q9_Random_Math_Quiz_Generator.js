// Q9: Random Math Quiz Generator
// Generates two numbers (1-20) and random operator, calculates correct answer.

const a = Math.floor(Math.random() * 20) + 1;
const b = Math.floor(Math.random() * 20) + 1;
const operators = ['+', '-', '*', '/'];
const op = operators[Math.floor(Math.random() * operators.length)];

let correctAnswer;
switch (op) {
  case '+':
    correctAnswer = a + b;
    break;
  case '-':
    correctAnswer = a - b;
    break;
  case '*':
    correctAnswer = a * b;
    break;
  case '/':
    // avoid division by zero, and round to 2 decimals
    correctAnswer = (a / b).toFixed(2);
    break;
  default:
    correctAnswer = null;
}

console.log(`Question: ${a} ${op} ${b}`);
console.log(`Correct Answer: ${correctAnswer}`);
