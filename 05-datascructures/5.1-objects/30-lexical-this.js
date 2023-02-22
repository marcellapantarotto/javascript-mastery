// Lexical this

// using bing
const person = {
	firstName: "Bob",
	cars: ["Ferrari", "Mustang"],
	toString: function () {
		console.log(`Name: ${this.firstName}`);
		// this doesn't have scope in the forEach if I don't use bind(this)
		this.cars.forEach(
			function (car) {
				console.log(`Name: ${this.firstName} drives ${car}`);
			}.bind(this)
		);
	},
	deleteMe: true,
};

person.toString();
console.log();

// using that
const person2 = {
	firstName: "Mari",
	cars: ["Ferrari", "Mustang"],
	toString: function () {
		console.log(`Name: ${this.firstName}`);
		const that = this;
		this.cars.forEach(function (car) {
			console.log(`Name: ${that.firstName} drives ${car}`);
		});
	},
	deleteMe: true,
};

person2.toString();
console.log();

// using arrow function
const person3 = {
	firstName: "Steve",
	cars: ["Ferrari", "Mustang"],
  // if I want to have access to the scope of this in the nested function,
  // the top leval function cannot be an arrow function
	toString() {
		console.log(`Name: ${this.firstName}`);
		this.cars.forEach((car) => {
			console.log(`Name: ${this.firstName} drives ${car}`);
		});
	},
	deleteMe: true,
};

person3.toString();
console.log();
