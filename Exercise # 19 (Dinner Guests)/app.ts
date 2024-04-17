let guests_list = [
  "ImranKhan",
  "Molana Tariq Masood",
  "Dr Israar Ahmed",
  "Molana Tariq Masood",
  "Bhutto",
  "NawazSharif",
];

guests_list.forEach((person) => {
  console.log(
    `Hello ${person} , the number of guests in the dinner party will be ${guests_list.length} including you.`
  );
});
