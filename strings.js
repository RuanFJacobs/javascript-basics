const username = "ruan jacobs";

//console.log(username.toUpperCase());
console.log(username.includes("jacobs"));
console.log(username.replace("ruan", "Ruan"));
console.log(username.length);
console.log(username.split(" "));


//console.log(username.toUpperCase().split(" "));

const [firstName, lastName] = username.split(" ");


console.log(firstName.charAt(0).toUpperCase() + firstName.slice(1));
console.log(lastName.toUpperCase());
