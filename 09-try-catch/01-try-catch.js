// Try Catch: exception handling - when the scenario that we are dealing with doesn't turn out as we would've expected

// remove ':' for error
const json = '{"brand": "Nike"}';
try {
	console.log(JSON.parse(json));
	console.log(JSON.parse(json).brand);
} catch (error) {
  console.log(`oooops cannot parse json: ${json} \n`)
  console.log(error)
} finally {
  // finally is mainly used for cleanup purposes
  console.log("\nfinally was invokes")
}
