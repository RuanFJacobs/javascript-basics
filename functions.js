function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

let username = "ruan f Jacobs";

const words = username.split(" ").filter(word => word.trim() !== "");

let formattedUsername = "";

for (let word of words) {
  formattedUsername += capitalize(word) + " ";
}

formattedUsername = formattedUsername.trim();

function greet(name) {
  return `Hello, ${name}`;
}

console.log(greet(formattedUsername));