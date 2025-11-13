// Q2: Multi-Type Data Summary
// Declares variables of various types and prints a formatted report using console.table().

const name = "Bittu";                  // string
const age = 22;                       // number
const isActive = true;                // boolean
const hobbies = ["coding", "reading"]; // array
const address = { city: "Patna", state: "Bihar" }; // object
const unknownValue = undefined;       // undefined
const emptyValue = null;              // null

const items = [
  { label: "name", value: name, type: typeof name },
  { label: "age", value: age, type: typeof age },
  { label: "isActive", value: isActive, type: typeof isActive },
  { label: "hobbies", value: hobbies, type: Array.isArray(hobbies) ? "array" : typeof hobbies },
  { label: "address", value: address, type: typeof address },
  { label: "unknownValue", value: unknownValue, type: typeof unknownValue },
  { label: "emptyValue", value: emptyValue, type: (emptyValue === null) ? "null" : typeof emptyValue },
];

console.table(items);
