// Q3: Monthly Expense Tracker
// Tracks 5 categories, computes total, adds 10% tax, uses toFixed(2).

const expenses = {
  food: 8000,
  travel: 1500,
  rent: 12000,
  bills: 2500,
  leisure: 2000
};

// Compute total
const expenseValues = Object.values(expenses);
let total = 0;
for (let val of expenseValues) {
  total += val; // arithmetic + assignment
}
const average = total / expenseValues.length;

// Add 10% tax to total
const taxRate = 0.10;
const totalAfterTax = total + (total * taxRate);

console.log(`Total (before tax): ₹${total.toFixed(2)}`);
console.log(`Average per category: ₹${average.toFixed(2)}`);
console.log(`Final amount after 10% tax: ₹${totalAfterTax.toFixed(2)}`);
