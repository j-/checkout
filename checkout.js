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
		return this.subtotal() - this.discounts();
	}

	subtotal () {
		return this.items
			.map((item) => prices.get(item))
			.filter((item) => item !== undefined)
			.reduce((total, price) => total + price, 0);
	}

	discounts () {
		if (!this.pricingRules || !this.pricingRules.length) {
			return 0;
		}
		return this.pricingRules
			.map((rule) => rule(this))
			.reduce((total, discount) => total + discount, 0);
	}
}

module.exports = Checkout;
