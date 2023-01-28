// Arrow Functions
// const getBrand = brand => {
//   return {
//     brand: brand,
//     website: `www.${brand.toLowerCase()}.com`
//   }
// }

// using parenthesis because the function is immediately returning an object
const getBrand = brand => (
  {
    brand: brand,
    website: `www.${brand.toLowerCase()}.com`
  }
)

const brand = getBrand("Adidas")
console.log(JSON.stringify(brand, null, 1))

const add = (a,  b) => a + b
const calculate = (a,  b, sign) => {
  switch (sign) {
    case "+": return a + b
    case "-": return a - b
    default:
      // throw error;
  }
}