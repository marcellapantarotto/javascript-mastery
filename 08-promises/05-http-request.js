// Promise with http request using axios

import axios from "axios";

// axios.get("https://api.chucknorris.io/jokes/random")
//      .then(response => {
//       console.log(response.data)
//      })
//      .catch(error => {
//       console.log(error)
//      })

const fetchJoke = async (url) => {
	try {
		const response = await axios.get(url)
    console.log(response.data)
	} catch (error) {
		console.log(error);
	}
};

fetchJoke("https://api.chucknorris.io/jokes/random")