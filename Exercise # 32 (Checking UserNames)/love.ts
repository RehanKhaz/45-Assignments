// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

var current_users: string[] = ["user1", "user2", "user3", "user4", "user5"];
let new_users: string[] = ["userB", "userC", "User1", "User2", "userA"];
new_users.forEach((Newuser) => {
  if (
    current_users.some(
      (CurrentUser) => CurrentUser.toUpperCase() === Newuser.toUpperCase()
    )
  ) {
    console.log(`${Newuser} have to find a newuser name.`);
  } else {
    console.log("username is available.");
  }
});
