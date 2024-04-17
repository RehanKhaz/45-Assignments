// Note : I have checked this code with the 3 previous exercise but since it was separate question therefore i have put this code in the separate folder.
console.log("Unfortunately , I can't invite more than two guests.")

while ( guest_list.length > 2) {
  let deletedGuest = guest_list.pop();
  console.log(`Sorry ${deletedGuest} , you are removed from the dinner invitation.`)
}

guest_list.forEach((person) => {
  console.log(`Mr.${person} , you are still invited for the dinner.`)
})