const names = ["Bob", "Ana", "Mary", "Steve", "Luke", "Alex"];

// const bob = names[0]
// const ana = names[1]
// const mary = names[2]

const [b, ana, mary, ...rest] = names;

console.log(b);
console.log(ana);
console.log(mary);
console.log(rest);
