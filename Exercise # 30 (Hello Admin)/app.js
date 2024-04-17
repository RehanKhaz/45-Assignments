var users = ["user1", "user2", "user3", "user4", "admin"];
users.forEach(function (val) {
    if (val === "admin") {
        console.log("Hello ".concat(val, " ! would you like to see a status report."));
    }
    else {
        console.log("Thank you ".concat(val, " for logging in again."));
    }
});
