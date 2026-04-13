
const fruits = ["apple", "banana", "orange"];

console.log(fruits[0]);
console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

const prices = [10, 20, 30, 40];

// double each price
const doubled = prices.map(price => price * 2);

console.log(doubled);

// filter values above 20
const filtered = prices.filter(price => price <= 30);

console.log(filtered);

// sum values
const total = prices.reduce((sum, price) => sum + price, 0);

console.log(total);