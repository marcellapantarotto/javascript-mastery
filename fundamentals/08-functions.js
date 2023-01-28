// Functions
// A function is a set of statements that performs a task or calculates a value

var addition = 2 + 2
console.log(addition)

function addNumbers(a, b) {
  return a + b
}
console.log(addNumbers(5, 5))
console.log(addNumbers(10, 10))

// Built-in Functions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

var person = {
  name: "Marcella"
}
console.log(Object.values(person))
console.log(Object.keys(person))

console.log("Marcella".toUpperCase())
console.log("Marcella".toLowerCase())
console.log("Marcella".indexOf("i"))