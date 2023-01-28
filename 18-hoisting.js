// var i ==> hoists (declares) the variable to the top

for (var i = 0; i <= 10; i++) {
  console.log(i);
}

// because of the hoisting, it is possible to access the variable outside the scope of the loop
console.log("value of i outside the loop: " + i)