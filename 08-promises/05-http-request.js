// Promise with http request using axios

import axios from "axios";

axios.get("https://api.chucknorris.io/jokes/random")
     .then(response => {
      console.log(response.data)
     })
     .catch(error => {
      console.log(error)
     })

const fetchJoke = async (url) => {
	try {
		const response = await axios.get(url);
		console.log(response.data);
	} catch (error) {
		console.log(error);
	}
};

fetchJoke("https://api.chucknorris.io/jokes/random");

console.log();

// Promise with http request using fetch

import fetch from "node-fetch";

const userName = "marcellapantarotto";

fetch(`https://api.github.com/users/${userName}`, {
	method: "GET",
	headers: { Accept: "application/vnd.github.v3+json" },
})
	.then((response) => {
		// console.log(typeof response);
		// console.log(response);
		return response.json();
	})
	.then((data) => {
		console.log(data);
	});
