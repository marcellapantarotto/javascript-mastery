import { Person, SoftwareEngineer } from "./classes.js";

const marcella = new Person("Marcella", "Pantarotto", "FEMALE", 29);

// Properties
console.log(marcella.name);
console.log(marcella.gender);
console.log(marcella.age);
console.log(marcella.fullName);

marcella.fName = "Marcella Bella"
console.log(marcella.fullName);

// Behaviors
marcella.sleep();
marcella.eat();
console.log(marcella.toString());

console.log();

// Inheritance
const ana = new SoftwareEngineer("Ana", "Paula", "FEMALE", 24, ["JavaScript", "Python"]);
ana.sleep();
ana.eat();
ana.code();
