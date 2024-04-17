// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function carInfo(manufacturer, modelName, ...moreInfo) {
  let car = {
    manufacturer: manufacturer,
    modelName: modelName,
  };
  moreInfo.forEach((info) => {
    let [key, val] = info.split(":");
    car[key.trim()] = val.trim();
  });
  return car;
}

let aboutCar = carInfo(
  "Volkswagen",
  "Aventador",
  "color: Red",
  "horsepower: 730",
  "year : 2023", 
   "Message : I want this car in just 2 weeks."
);
console.log(aboutCar)
