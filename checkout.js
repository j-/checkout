const prices = require('./prices');

class Checkout {
	constructor (pricingRules) {
		this.pricingRules = pricingRules;
		this.items = [];
	}

	static new (pricingRules) {
		return new Checkout(pricingRules);
	}

	add (item) {
		this.items.push(item);
	}

	total () {
		return this.items
			.map((item) => prices.get(item))
			.filter((item) => item !== undefined)
			.reduce((total, price) => total + price, 0);
	}
}

module.exports = Checkout;
