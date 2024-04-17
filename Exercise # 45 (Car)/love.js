// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function carInfo(manufacturer, modelName) {
    var moreInfo = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        moreInfo[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    moreInfo.forEach(function (info) {
        var _a = info.split(":"), key = _a[0], val = _a[1];
        car[key.trim()] = val.trim();
    });
    return car;
}
var aboutCar = carInfo("Volkswagen", "Aventador", "color: Red", "horsepower: 730", "year : 2023", "Message : I want this car in just 2 weeks.");
console.log(aboutCar);
