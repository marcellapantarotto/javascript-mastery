// Function Default Parameter

const getBrand = (brand = "Puma") => ({
  brand: brand,
  website: `www.${brand.toLowerCase()}.com`
})

const brand = getBrand()
console.log(JSON.stringify(brand, null, 1))