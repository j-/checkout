const prices = require('./prices');

class Checkout {
	constructor (pricingRules) {
		this.pricingRules = pricingRules;
		this.items = [];
	}

	static new (pricingRules) {
		return new Checkout(pricingRules);
	}

	/**
	 * Adds a single product to be checked out.
	 * @param {string} item Item SKU / ID
	 */
	add (item) {
		this.items.push(item);
	}

	/**
	 * Calculates the total of all products (taking discounts into account).
	 */
	total () {
		return this.subtotal() - this.discounts();
	}

	subtotal () {
		return this.items
			// Lookup the price for this item
			.map((item) => prices.get(item))
			// Remove any items with no price
			.filter((item) => item !== undefined)
			// Calculate sum of item prices
			.reduce((total, price) => total + price, 0);
	}

	discounts () {
		if (!this.pricingRules || !this.pricingRules.length) {
			// This customer has no special discounts.
			// Exit early.
			return 0;
		}
		return this.pricingRules
			// Calculate discount for this rule
			.map((rule) => rule(this))
			// Calculate sum of discounts
			.reduce((total, discount) => total + discount, 0);
	}
}

module.exports = Checkout;
