// Spread Operator on Objects

const person = {
	firstName: "Bob",
	age: 32,
	isFemale: false,
	balance: 100.63,
	dateOfBirth: new Date(2023, 1, 26).toJSON(),
	toString: function () {
		return `Name: ${this.firstName}${this.lastName}\nAge: ${this.age}`;
	},
	deleteMe: true,
};

const address = {
	city: "London",
	postCode: "SW9",
};

const personWithAddress = {
	// firstName: person.firstName,
	// age: person.age,
	// address: {
	// 	city: address.city,
	// 	postCode: address.postCode,
	// }

	...person,
	address: { ...address },
};

console.log(personWithAddress);
