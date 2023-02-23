// Error Object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors

const json = '{"brand" "Nike"}';
try {
  console.log(brand)
	console.log(JSON.parse(json));
} catch (error) {
  console.log(error.name, "\n")
  console.log(error.message, "\n")
  console.log(error.stack)
}
