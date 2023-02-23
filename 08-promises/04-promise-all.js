// Promise All: takes an array of promises and returns an array of results for each promise in the initial array
// normally used when you want all or nothing, because if one promise fails then the catch is immediately invoked

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
		// reject("oops error");

		let i = 0;
		while (i < 2_000_000_000) i++;
		resolve([
			{ customerId: 1, address: "California" },
			{ customerId: 2, address: "New York" },
		]);
	});
});

// const fetchData = () => {
// 	Promise.all([customers, addresses])
// 		.then((values) => {
// 			const [c, a] = values
// 			console.log(a)
// 			console.log(c)
// 		})
// 		.catch((error) => {
// 			console.log(error);
// 		});
// };

const fetchData = async () => {
	try {
		const values = await Promise.all([customers, addresses])
		const [c, a] = values;
		console.log(a)
		console.log(c)
	} catch (error) {
		console.log(error)
	}
};

fetchData();
