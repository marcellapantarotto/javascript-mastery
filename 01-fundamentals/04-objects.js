// An object is a collection of properties

var person = {
  firstName: "Bob",
  age: 32,
  isFemale: false,
  balance: 100.63,
  dateOfBirth: new Date(2023, 1, 26).toJSON(),
  address: {
    city: "London",
    postCode: "SW9",
  }
}

console.log(person)
console.log(person.firstName)
console.log(person.age)
console.log(person.address)
console.log(person.address.city )
console.log(Object.values(person))
console.log(Object.keys(person))