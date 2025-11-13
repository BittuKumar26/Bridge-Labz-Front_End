// Q1: Personalized Login Greeting
// Greets user based on current hour. Uses template literals.
// Test: change userName to test different names.

const userName = "Bittu Kumar";
const currentHour = new Date().getHours(); // 0 - 23

let greeting;
if (currentHour < 12) {
  greeting = `Good Morning ${userName}!`;
} else if (currentHour >= 12 && currentHour <= 17) {
  greeting = `Good Afternoon ${userName}!`;
} else {
  greeting = `Good Evening ${userName}!`;
}

console.log(greeting);
