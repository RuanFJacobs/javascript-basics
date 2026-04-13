/*const person = {
  name: "Ruan",
  role: "Junior Developer",
  learning: "JavaScript"
};*/

const user = {
    name: "Ruan",
    role: "Junior Developer",
    skills: ["JavaScript", "HTML", "CSS"]
};


console.log(user.name);
//console.log(user.role);

user.location = "South Africa";

console.log(user);

for (let skill of user.skills) {
    console.log(skill);
}