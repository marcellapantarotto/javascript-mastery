// Array.reduce() : executes a reducer function on each value in the array
// takes the array and returns a single value of it

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

const sumOfNumbers = numbers.reduce(
	(accumulator, current) => accumulator + current
);
console.log(sumOfNumbers);
