const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('P1 ok! Timeout!')
  })
})

// this one will always win the race
const p2 = new Promise((resolve, reject) => {
  resolve('P2 ok!')
})

const p3 = new Promise((resolve, reject) => {
  resolve('P3 ok!')
})

const resolveAllRace = Promise.race([p1, p2, p3]).then((data) => {
  console.log(data)
})