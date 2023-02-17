const numbers = [5, 9, 6, 7, 2, 4, 8];

const result = Math.max.apply(Math, numbers);

console.log("Maximum value is: " + result);