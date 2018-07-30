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
		return 0;
	}
}

module.exports = Checkout;
