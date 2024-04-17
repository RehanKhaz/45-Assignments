// Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(
  size: string = "large",
  message: string = "'I love TypeScript'"
) {
  console.log(
    `I gifted a T-shirt to my friend of ${size} size with ${message} printed on it.`
  );
}

make_shirt();
make_shirt("medium");
make_shirt("medium", "'I am learning programming'");
