// I have checked this code in the previous exercise folder but since it was a separate question therefore I put this code into this folder.
let notAttendingGuest = "Benazir Bhutto";   
console.log(
  `Unfortunately ! ${notAttendingGuest} is not attending the dinner.`
);
let newGuest = guest_list.splice(2, 1, "Bhutto");
guest_list.forEach((person) => {
  console.log(
    `Assalam-u-Alaikum ${person} , I would like to invite you at dinner.`
  );
});
