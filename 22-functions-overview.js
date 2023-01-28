// Functions
const getBrand = function(brand) {
  return {
    brand: brand,
    website: `www.${brand.toLowerCase()}.com`
  }
}

const brand = getBrand("Adidas")
console.log(JSON.stringify(brand, null, 1))