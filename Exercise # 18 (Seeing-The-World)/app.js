var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countriesToVisit = [
    // Here I store the countries which I want to vist in a variable named as CountriesToVisit
    "India",
    "Japan",
    "SaudiArabia",
    "Norway",
    "Iceland",
];
console.log("Original Order:", countriesToVisit); // Printing array in its original order.
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort()); // Will print my array in Alphabetical order without changing the original array.
console.log("Original Order:", countriesToVisit); // Array is still in its original position.
console.log("Reverse Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort().reverse()); // Will print my array in Reverse Alphabetical order without changing the original array.
countriesToVisit.reverse();
console.log("Reversed Order:", countriesToVisit); // Since arrays are mutable therefore It will change the array to reverse Order.
countriesToVisit.reverse();
console.log("Original Order:", countriesToVisit); // Now array come to its original order due to two times applying reverse method.
countriesToVisit.sort();
console.log("Alphabetical Order:", countriesToVisit); // Printing the array in Alphabetical Order by changing the original array.
countriesToVisit.reverse();
console.log("Reverse Alphabetical Order:", countriesToVisit); // Will print the array in  reverse Alphabetical Order by changing the original array.
