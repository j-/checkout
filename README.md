Checkout system
===============


Usage
-----

Start by installing this package as a dependency.

```sh
$ npm install https://github.com/j-/checkout.git
```

It can then be imported into your project.

```js
const Checkout = require('checkout');

const co = Checkout.new(pricingRules);
co.add(item1);
co.add(item2);
co.total();
```


Billing
-------

Product prices are defined in [prices.js](./prices.js). All prices are defined
as an integer number of cents to avoid [problems with floating point maths][0].


Discounts
---------

Discount rules for privileged customers are defined in [rules/](./rules). They
must be supplied to the checkout constructor to be applied when calculating a
checkout total.

```js
const pricingRules = require('checkout/apple');
const co = Checkout.new(pricingRules);
```

New rules can be defined as an array of individual discount rule calculation
functions. All rules are given a reference to the checkout object, which they
can use to inspect the types of products being calculated.

```js
const pricingRules = [
	// Holiday discount. Every purchase gets $50 off.
	() => 5000,
	// $100 back for buying more than 5 products.
	(co) => co.items.length > 5 ? 0 : 10000,
	// ...etc
];
```


Development
-----------

To contribute to this project, clone the repository and install dependencies.

```sh
$ git clone https://github.com/j-/checkout.git && cd checkout
$ npm install
```

Tests are run with [Jest][1].

```sh
$ npm test # Run full test suite
$ npm run test -- --watch # Run Jest in watch mode
```


[0]: https://0.30000000000000004.com/
[1]: https://jestjs.io/
