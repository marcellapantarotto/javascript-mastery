// Promises

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('data back from the server')
  }, 3000)

  setTimeout(() => {
    reject('failed to get data from the server')
  }, 2000)
})

// then for success
// catch for the error
// finally runs regardless if it is success or fail (it's optional)
promise.then(response => {
  console.log(response)
}).catch(error => {
  console.log(error)
}).finally(() => {
  console.log("done")
})