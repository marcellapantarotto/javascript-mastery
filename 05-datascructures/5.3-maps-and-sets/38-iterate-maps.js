const map = new Map();
map.set("name", "Harry").set("age", 22).set("delete", true);

console.log(map.keys())
for(const key of map.keys()){
  console.log(key)
}

console.log()

console.log(map.values())
for(const value of map.values()){
  console.log(value)
}

console.log()

console.log(map.entries())
for(const entry of map){
  console.log(entry)
  console.log(entry[0])
  console.log(entry[1])
}
