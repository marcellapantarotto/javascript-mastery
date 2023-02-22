// Sets: doesn't allow duplicates -> so you can transform an array into a version with no duplicates

const numbersArray = [1, 1, 2, 2, 3]
console.log(numbersArray)

const numbersSet = new Set()
numbersSet.add(1).add(1).add(2).add(2).add(3) // set removes duplicates
console.log(numbersSet)

console.log()

// set shares the same API as map
console.log(numbersSet.delete(3)) // true because it exists
console.log(numbersSet.delete(6)) // false because it doesn't exist
console.log(numbersSet)

console.log()

console.log(numbersSet.has(3))
console.log(numbersSet.has(6))
console.log(numbersSet.has(2))

console.log()

for (const element of numbersSet) {
  console.log(element)
}

console.log()

numbersSet.forEach(element => console.log(element))

console.log()

console.log(numbersSet.size)
numbersSet.clear()
console.log(numbersSet.size)

console.log()

// converting array into a set
console.log(Array.from(new Set(numbersArray)))
