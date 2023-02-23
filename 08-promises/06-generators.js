// Generators: functions that allow you to pause
// cannot use arrow function

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
