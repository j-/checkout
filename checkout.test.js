const Checkout = require('./checkout');

const rulesUnilever = require('./rules/unilever');
const rulesApple = require('./rules/apple');
const rulesNike = require('./rules/nike');

it('calculates default total', () => {
	const co = Checkout.new(null);
	co.add('classic');
	co.add('standout');
	co.add('premium');
	expect(co.total()).toBe(98797);
});

it('calculates Unilever total', () => {
	const co = Checkout.new(rulesUnilever);
	co.add('classic');
	co.add('classic');
	co.add('classic');
	co.add('premium');
	expect(co.total()).toBe(93497);
});

it('calculates Apple total', () => {
	const co = Checkout.new(rulesApple);
	co.add('standout');
	co.add('standout');
	co.add('standout');
	co.add('premium');
	expect(co.total()).toBe(129496);
});

it('calculates Nike total', () => {
	const co = Checkout.new(rulesNike);
	co.add('premium');
	co.add('premium');
	co.add('premium');
	co.add('premium');
	expect(co.total()).toBe(151996);
});
