//  Qn : 44 => Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
var orderSandwiches = function () {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("I ordered him to make a sandwich with ".concat(items.slice(0, -1).join(", "), " and ").concat(items.slice(-1), "."));
};
// Calling the function three times.
orderSandwiches("mayonnaise", "cheese");
orderSandwiches("mayonnaise", "cheese", "egg");
orderSandwiches("mayonnaise", "cheese", "egg", "chicken");
