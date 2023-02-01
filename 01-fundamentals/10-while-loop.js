// While Loop

var names = [
  "Alex",
  "Hailey",
  "Luke",
  "Clair",
  "Phil",
  "Gloria"
]

console.log("Array length = " + names.length + "\n")

var i = 0
while (i < names.length) {
  console.log(i + "\t" + names[i])
  i++
}

console.log()

var j = 0
do {
  console.log(j + "\t" + names[j])
  j++
} while (j < names.length);