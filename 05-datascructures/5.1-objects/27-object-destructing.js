// Object Destructing

const person = {
	firstName: "Bob",
	age: 32,
	isFemale: false,
	balance: 100.63,
	dateOfBirth: new Date(2023, 1, 26).toJSON(),
	address: {
		city: "London",
		postCode: "SW9",
	},
	toString: function () {
		return `Name: ${this.firstName}${this.lastName}\nAge: ${this.age}`;
	},
	deleteMe: true,
};

// const firstName = person.firstName
// const age = person.age
// const balance = person.balance

const {
	firstName,
	firstName: name,
	age,
	balance,
	address: { city: town },
} = person;

console.log(firstName);
console.log(name)
console.log(age);
console.log(balance);
// console.log(city); // city is renamed to town in line 27
console.log(town)