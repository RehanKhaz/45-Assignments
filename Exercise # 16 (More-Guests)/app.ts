// NOTE : I have checked this code with the previous 2 exercises but since this is the separate question therefore I put that code in this separate file.

guest_list.forEach((people) => {
    console.log(`Good News Mr.${people} ! I have find a bigger dinner table.`);
  });
  
  let firstNewguest = guest_list.unshift("Molana Tariq Masood");
  let secondNewguest = guest_list.splice(
    guest_list.length / 2,
    0,
    "Molana Tariq Masood"
  );
  let thirdNewguest = guest_list.push("Dr. Israr Ahmed");
  
  guest_list.forEach((person) => {
    console.log(`AssalamuAlaikum ${person} , I would like to invite you at the dinner.`)
  })

  guest_list.forEach((people) => {
    console.log(`Good News Mr.${people} ! I have find a bigger dinner table.`);
  });
  
  let firstNewguest = guest_list.unshift("Molana Tariq Masood");
  let secondNewguest = guest_list.splice(
    guest_list.length / 2,
    0,
    "Molana Tariq Masood"
  );
  let thirdNewguest = guest_list.push("Dr. Israr Ahmed");
  
  guest_list.forEach((person) => {
    console.log(`AssalamuAlaikum ${person} , I would like to invite you at the dinner.`)
  })