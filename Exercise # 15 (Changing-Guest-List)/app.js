// I have checked this code in the previous exercise but since it was a separate question therefore I put this code into this file.
var notAttendingGuest = "Benazir Bhutto";
console.log("Unfortunately ! ".concat(notAttendingGuest, " is not attending the dinner."));
var newGuest = guest_list.splice(2, 1, "Bhutto");
guest_list.forEach(function (person) {
    console.log("Assalam-u-Alaikum ".concat(person, " , I would like to invite you at dinner."));
});
