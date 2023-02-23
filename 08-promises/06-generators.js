// Generators: functions that allow you to pause
// cannot use arrow function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators

const generator = function* () {
	yield 1;
	yield "Nike";
	yield { name: "Marcella", gender: "Female" };
};

console.log(generator);
const gen = generator();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

let result = gen.next();

while (!result.done) {
	console.log(result.value);
	result = gen.next();
}
