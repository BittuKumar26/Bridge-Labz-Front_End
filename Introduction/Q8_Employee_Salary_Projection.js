// Q8: Employee Salary Projection
// Computes 5-year salary projection with yearly increment rate.

let currentSalary = 500000; // starting salary (₹)
const annualIncrementPercent = 8; // 8% per year

const projection = [];
for (let year = 1; year <= 5; year++) {
  // apply increment
  currentSalary = currentSalary + (currentSalary * (annualIncrementPercent / 100));
  // round to nearest integer
  const roundedSalary = Math.round(currentSalary);
  projection.push({ Year: year, Salary: roundedSalary });
}

console.table(projection);
