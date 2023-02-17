const numbers = [5, 9, 6, 7, 2, 4, 8];

const result = Math.min.apply(Math, numbers);

console.log("Minimum value is: " + result);