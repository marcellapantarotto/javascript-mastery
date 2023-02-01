// Increment and Decrement Operators

 // POSTFIX INCREMENT
var number = 0
console.log(number++) // it doesn't work because it return the value of 'number' before incrementing
console.log(number) // here it shows the value after incrementing
console.log(number--)
console.log(number)

console.log()

// PREFIX INCREMENT
var numberTwo = 0
console.log(++numberTwo) // it works because it increments and then returns the value of 'numberTwo'
console.log(numberTwo)
console.log(--numberTwo)
console.log(numberTwo)

console.log()

// proceed with value of 'i' and then increment for next iteration
for (var index = 0; index < 3; index++) {
  console.log(index)
}