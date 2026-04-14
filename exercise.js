// Exercise 1
const word = "asldkjhalskjdjnalkdmals;kdma;skldma.skl,dmal;skdjma;s";

let counts = {};

for (let letter of word) {
  if (!counts[letter]) {
    counts[letter] = 0;
  }
  counts[letter]++;
}

// Removed to upgrade to any word
/*console.log(countA, "a's in", word);
console.log(countB, "b's in", word);
console.log(countN, "n's in", word);

console.log(counts);

let letters = ["a", "b", "n"];
let numbers = [countA, countB, countN];
let largest = numbers[0];*/

let maxLetter = "";
let maxCount = 0;

for (let letter in counts) {
    if (counts[letter] > maxCount) {
        maxCount = counts[letter];
        maxLetter = letter;
    }
}

console.log("The largest count is for the letter", maxLetter, ":", maxCount);