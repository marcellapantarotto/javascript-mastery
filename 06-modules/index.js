// to add package.json: $ npm init -y
// without package.json you can run the code with: $ node --experimental-modules index.js

// message is just a name and can be any other, because of the export default in lib.js
import
    message,
    { add, subtract, MESSAGE as msg }
    // * as lib
from './lib.js'

console.log(message)
// console.log(MESSAGE)
console.log(msg)
// console.log(lib.message)
// console.log(lib.message)
// console.log(lib.add(10, 3))
// console.log(lib.subtract(10, 3))