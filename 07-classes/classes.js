// Classes

class Person {
	constructor(firstName, lastName, gender, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.age = age;
	}

	sleep() {
		console.log(`${this.firstName} is sleeping!`);
	}

	eat() {
		console.log(`${this.firstName} is eating!`);
	}

	working() {
		console.log(`${this.firstName} is working!`);
	}

	toString() {
		return `First Name: ${this.firstName} Last Name: ${this.lastName} Gender: ${this.gender} Age: ${this.age}`;
	}

	// Getter: it becomes a property and not a method that need to be invoked
	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	}

	// Setter: redefine the value of a property
	set fName(name) {
		if (!name) return; // can throw an error
		this.firstName = name;
	}
}

// Inheritance
class SoftwareEngineer extends Person {
	constructor(firstName, lastName, gender, age, programmingLanguages) {
		// this is redundant, you don't need to set these
		// this.firstName = firstName;
		// this.lastName = lastName;
		// this.gender = gender;
		// this.age = age;

		// instead use the super constructor
		super(firstName, lastName, gender, age);
		this.programmingLanguages = programmingLanguages;
	}

	code() {
		console.log(
			`${this.fullName} is coding using ${this.programmingLanguages}`
		);
	}
}

export { Person, SoftwareEngineer };
