const prices = require('../prices');

const PREMIUM_DISCOUNTED_PRICE = 37999;

module.exports = [
	/**
	 * Gets a discount on premium ads when 4 or more are purchased. The price
	 * drops to $379.99 per ad.
	 */
	(co) => {
		const numPremium = co.items.filter((item) => item === 'premium').length;
		if (numPremium < 4) {
			return 0;
		}
		const expectedPrice = PREMIUM_DISCOUNTED_PRICE;
		const actualPrice = prices.get('premium');
		const delta = actualPrice - expectedPrice;
		const discount = numPremium * delta;
		return discount;
	},
];
