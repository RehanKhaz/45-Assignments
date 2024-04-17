// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
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
show_magicians(magicians);
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great.";
        console.log(magicians[i]);
    }
}
make_great(magicians);
show_magicians(magicians); // shows that array has been modified.
