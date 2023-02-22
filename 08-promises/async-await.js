// Async Await

const customers = new Promise((resolve, reject) => {
	return Promise.resolve().then(() => {
		let i = 0;
		while (i < 2_000_000_000) i++;
		resolve([
			{ name: "Marcella", id: 1 },
			{ name: "Ana", id: 2 },
		]);
	});
});

const addresses = new Promise((resolve, reject) => {
	return Promise.resolve().then(() => {
		let i = 0;
		while (i < 2_000_000_000) i++;
		resolve([
			{ customerId: 1, address: "California" },
			{ customerId: 2, address: "New York" },
		]);
	});
});

// this way is difficult to read the promises
// const fetchData = () => {
//   customers.then(c => {
//     addresses.then(a => {
//       console.log(c)
//       console.log(a)
//     }).catch(error => {
//       console.log(error)
//     })
//   }).catch(error => {
//     console.log(error)
//   })
// }

// this way is better to read, and both mean the same
// a 'async' function allows us to use the 'await' keyword
const fetchData = async () => {
  //await blocks action until the promise is returned
  const c = await customers;
  const a = await addresses;
  console.log(c)
  console.log(a)
}

fetchData()