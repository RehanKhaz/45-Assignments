var guests_list = [
    "ImranKhan",
    "Molana Tariq Masood",
    "Dr Israar Ahmed",
    "Molana Tariq Masood",
    "Bhutto",
    "NawazSharif",
];
guests_list.forEach(function (person) {
    console.log("Hello ".concat(person, " , the number of guests in the dinner party will be ").concat(guests_list.length, " including you."));
});
