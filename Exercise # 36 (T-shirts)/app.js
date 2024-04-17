// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, textToPrint) {
    console.log("I received the shirt of ".concat(size, " size on which ").concat(textToPrint, " is printed."));
}
// Calling the function.
make_shirt("medium", "Love.js");
