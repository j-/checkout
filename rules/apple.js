const prices = require('../prices');

const STANDOUT_DISCOUNTED_PRICE = 29999;

module.exports = [
	/** Gets a discount on standout ads where the price drops to $299.99 per ad */
	(co) => {
		const numStandounds = co.items.filter((item) => item === 'standout').length;
		if (numStandounds === 0) {
			return 0;
		}
		const expectedPrice = STANDOUT_DISCOUNTED_PRICE;
		const actualPrice = prices.get('standout');
		const delta = actualPrice - expectedPrice;
		const discount = numStandounds * delta;
		return discount;
	},
];
