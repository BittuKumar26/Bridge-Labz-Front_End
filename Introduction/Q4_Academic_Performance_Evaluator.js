// Q4: Academic Performance Evaluator
// Takes marks of 5 subjects, validates, calculates average, prints promotion status.
// Test values provided in marks array.

const marks = [78, 85, 92, 67, 74]; // five subjects

// Validation: if any subject < 35 -> detained
const hasFailedSubject = marks.some(m => m < 35);

const sum = marks.reduce((acc, val) => acc + val, 0);
const average = sum / marks.length;
const percentage = average; // assuming each subject is out of 100

if (hasFailedSubject) {
  console.log("Detained (failed in one or more subjects).");
} else if (percentage >= 85) {
  console.log("Promoted with Distinction");
} else if (percentage >= 50 && percentage <= 84) {
  console.log("Promoted");
} else {
  console.log("Detained");
}

console.log(`Average: ${average.toFixed(2)}%, Percentage: ${percentage.toFixed(2)}%`);
