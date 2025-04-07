// Sum and Product of Array
// Write a JavaScript program to compute the sum and product of an array of integers.
// [1,2,3,4,5]

const array = [1, 2, 3, 4, 5];

let sum = 0;
let product = 1;

array.forEach(num => {
  sum += num;
  product *= num;
});

console.log(`Sum = ${sum}`);
console.log(`Product = ${product}`);