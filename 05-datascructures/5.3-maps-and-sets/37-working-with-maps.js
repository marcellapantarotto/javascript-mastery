const map = new Map();
map.set("name", "Harry").set("age", 22).set("delete", true);

console.log(map);
console.log(map.size);

console.log(map.has("name")); // has a key
console.log(map.has("foo"));
console.log(map.get("name")); // get the value

console.log(Object.fromEntries(map.entries()))

console.log(map.delete("delete"));
console.log(map.size);
map.clear()
console.log(map.size);
