const prices = require('../prices');

const STANDOUT_DISCOUNTED_PRICE = 30999;
const PREMIUM_DISCOUNTED_PRICE = 38999;

module.exports = [
	/**
	 * Gets a 5 for 4 deal on classic ads.
	 */
	(co) => {
		const numClassic = co.items.filter((item) => item === 'classic').length;
		const numFives = Math.floor(numClassic / 5);
		const discount = numFives * prices.get('classic');
		return discount;
	},
	/**
	 * Gets a discount on standout ads where the price drops to $309.99 per ad.
	 */
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
	/**
	 * Gets a discount on premium ads when 3 or more are purchased. The price
	 * drops to $389.99 per ad.
	 */
	(co) => {
		const numPremium = co.items.filter((item) => item === 'premium').length;
		if (numPremium < 3) {
			return 0;
		}
		const expectedPrice = PREMIUM_DISCOUNTED_PRICE;
		const actualPrice = prices.get('premium');
		const delta = actualPrice - expectedPrice;
		const discount = numPremium * delta;
		return discount;
	},
];
