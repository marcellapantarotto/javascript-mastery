// Map: allows us to store a key that can be any value

const object = {
	firstName: "Harry",
	age: 35,
	// {}: 2  // not allowed: objects as keys
	// 1: 2,  // allowed
};

console.log(object);
console.log();

const map = new Map();
map.set("firstName", "Megan");
map.set("age", 30);
map.set({ address: "Toronto" }, 'Canada');  
map.set(1, 2);
map.set("1", 2);

console.log(map);
