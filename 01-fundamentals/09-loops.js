// For Loops

var names = [
  "Alex",
  "Hailey",
  "Luke",
  "Clair",
  "Phil",
  "Gloria"
]

console.log("> for i")
for (var i = 0; i < names.length; i++) {
  console.log(names[i])
}

console.log("\n> for of")
for (var name of names) {
  console.log(name)
}

console.log("\n> forEach")
names.forEach(function (name) {
  console.log(name)
})
