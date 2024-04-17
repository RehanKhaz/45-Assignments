// Tests for equality and inequality with string.
let firstName = "Rehan";
let lastName = "Khan";
console.log(firstName.concat(lastName) === "RehanKhan"); // True
console.log(firstName !== "Rehan"); // False

// • Tests using the lower case function.
console.log(firstName.toLowerCase() === "Rehan"); // false
console.log(lastName.toLowerCase() !== "Khan"); // true

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// Equality & inEquality
let a = 2;
let b = 5;
console.log(a === b); // false
console.log(a !== 10); // true
// GreaterThan & LessThan
console.log(a > b); // false
console.log(a < b); // true

// Greater than or equal to & less than or equal to
console.log(a >= b); // false
console.log(a <= b); // true

// • Tests using "and" and "or" operators
let x = 10;
let y = 5;
console.log(x > 9 || x >= 20); // true
console.log(x > y && y < 4); // false

// • Test whether an item is in a array.
let cities = ["NewYork", "New Delhi", "Islamabad", "Dhaka"];
if (cities.includes("New Delhi")) {
  console.log(" Dehli is present in the array.");
}

// • Test whether an item is not in a array

if (!cities.includes("Karachi")) {
  console.log(" Karachi is not present in the array.");
}

