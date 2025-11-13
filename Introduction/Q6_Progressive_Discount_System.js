// Q6: Progressive Discount System
// Applies tiered discounts and prints original total, discount percentage, and final price.

const purchaseTotal = 7345; // test input

let discountPercent = 0;
if (purchaseTotal >= 10000) {
  discountPercent = 25;
} else if (purchaseTotal >= 5000) {
  discountPercent = 15;
} else if (purchaseTotal >= 2000) {
  discountPercent = 5;
} else {
  discountPercent = 0;
}

const discountAmount = Math.round((purchaseTotal * discountPercent) / 100);
const finalPrice = Math.round(purchaseTotal - discountAmount);

console.log(`Original total: ₹${purchaseTotal}`);
console.log(`Discount percentage: ${discountPercent}%`);
console.log(`Discount amount: ₹${discountAmount}`);
console.log(`Final price after discount: ₹${finalPrice}`);
