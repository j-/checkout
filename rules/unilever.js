const prices = require('../prices');

module.exports = [
	/** 3 for 2 deal on classic ads */
	(co) => {
		const numClassics = co.items.filter((item) => item === 'classic').length;
		const numThrees = Math.floor(numClassics / 3);
		const discount = numThrees * prices.get('classic');
		return discount;
	},
];
