// Creating Errors

const error = new Error("oops")
console.log(error.name)
console.log(error.message)
console.log(error.stack)

const syntaxError = new SyntaxError("oops")
console.log(syntaxError.name)
console.log(syntaxError.message)
console.log(syntaxError.stack)

class MyError extends Error {
  constructor(message) {
    super(message)
    this.name = "MyError"
  }
}

const myError = new MyError("oops")
console.log(myError.name)
console.log(myError.message)
console.log(myError.stack)