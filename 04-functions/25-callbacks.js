// Callbacks: function that is passed as an argument to another function

const greetUser = (username, callback) => {
	if (callback) {
		console.log(callback(username));
	} else {
		console.log(`Go away ${username}!`);
	}
};

const myCallBack = (username) => {
	return "Hello " + username;
};

greetUser("Marcella", myCallBack);

greetUser("Maria");
