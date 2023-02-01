// Objects: collection of (key, value) pairs, where we can have different data types and even functions

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

// person.lastName = "Marley"  // this way you can't access the property lastName later
person["lastName"] = "Marley"; // this way you can
// for more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#accessing_properties

// delete person.deleteMe;
delete person["deleteMe"];

console.log(person.toString());
console.log(person);

for(const p in person) {
  console.log("> " + p + ": " +  person[p])
}

console.log(Object.keys(person))
console.log(Object.values(person))