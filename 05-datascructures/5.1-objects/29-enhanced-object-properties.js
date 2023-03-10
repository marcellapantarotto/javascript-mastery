// Enhanced Object Properties

const brandProp = "BRAND"

const calculator = (brand, price) => ({
	// brand: brand,
	// price: price,
	[brandProp.toLowerCase()]: brand,
	price,
  getDiscount: function() {
    return this.price - (this.price * .30)
  }
});

const casio = calculator("casio", 10);
console.log(casio);
console.log(casio.getDiscount());
