let users : string[] = ["user1", "user2", "user3", "user4", "admin"];
users.forEach((val) => {
   if ( val === "admin"){
    console.log(`Hello ${val} ! would you like to see a status report.`)
} else {
    console.log(`Thank you ${val} for logging in again.`)
}
})