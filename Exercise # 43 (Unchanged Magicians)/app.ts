// Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

// Exercise # 42
let magicians: string[] = [
  "Harry Houdin",
  "David Copperfield ",
  "Penn & Teller ",
];
function show_magicians(magicians) {
  for (let val of magicians) {
    console.log(val);
  }
}

function make_great(magicians) {
  let greatMagicians: string[] = [];
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = magicians[i] + " the Great.";
    greatMagicians.push(magicians[i]);
  }
  return greatMagicians;
}

let copiedMagician = magicians.slice();
let greatMagicians = make_great(copiedMagician);

// Shows the magicians with their original names.
show_magicians(magicians);
// Shows the magicians with the great added to it.
show_magicians(greatMagicians);
