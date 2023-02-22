const MESSAGE = {
	main: "Feliz Aniversário Aninha! <3",
	secondary: "Tá ficando velha",
};

// there can as many named exports as we want
// export const add = (a, b) => a + b;
// export const subtract = (a, b) => a - b;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
export { add, subtract, MESSAGE as message, MESSAGE};

// there can only be one export default
export default MESSAGE;
