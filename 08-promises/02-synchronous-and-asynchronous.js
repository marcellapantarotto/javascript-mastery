// Promises

console.log("synchronous 1");

const promise = new Promise((resolve, reject) => {
	return Promise.resolve().then(() => {
		let i = 0;
		while (i < 1_000_000_000) {
			i++;
		}
		resolve("data back from the server");
	});
});

// then for success
// catch for the error
// finally runs regardless if it is success or fail (it's optional)
promise
	.then((response) => {
		console.log(response);
	})
	.catch((error) => {
		console.log(error);
	})
	.finally(() => {
		console.log("done");
	});

console.log("synchronous 2");
