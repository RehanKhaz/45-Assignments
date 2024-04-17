// Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// Exercise # 42
var magicians = [
    "Harry Houdin",
    "David Copperfield ",
    "Penn & Teller ",
];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var val = magicians_1[_i];
        console.log(val);
    }
}
function make_great(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great.";
        greatMagicians.push(magicians[i]);
    }
    return greatMagicians;
}
var copiedMagician = magicians.slice();
var greatMagicians = make_great(copiedMagician);
// Shows the magicians with their original names.
show_magicians(magicians);
// Shows the magicians with the great added to it.
show_magicians(greatMagicians);
