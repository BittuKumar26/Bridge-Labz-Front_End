// Q10: Citizen Eligibility Validator
// Checks eligibility for services based on age and citizenship.

const age = 19;
const isCitizen = true;

if (isCitizen && age >= 18) {
  // further check: if age 18-20 -> "Eligible to vote only." per requirement
  if (age >= 18 && age <= 20) {
    console.log("Eligible to vote only.");
  } else {
    console.log("Eligible for all services.");
  }
} else if (!isCitizen && age >= 18) {
  console.log("Only age criteria met.");
} else {
  console.log("Not eligible yet.");
}
