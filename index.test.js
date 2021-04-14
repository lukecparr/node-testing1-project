const utils = require('./index');

describe('[Exercise 1] trimProperties', () => {
	const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
	const expected = { foo: 'foo', bar: 'bar', baz: 'baz' };

	it('[1] returns an object with the properties trimmed', () => {
		// EXAMPLE
		const actual = utils.trimProperties(input);
		expect(actual).toEqual(expected);
	});
	it('[2] returns a copy, leaving the original object intact', () => {
		expect(input).toEqual({ foo: '  foo ', bar: 'bar ', baz: ' baz' });
	});
});

describe('[Exercise 2] trimPropertiesMutation', () => {
	let input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
	const expected = { foo: 'foo', bar: 'bar', baz: 'baz' };
	input = utils.trimPropertiesMutation(input);

	it('[3] returns an object with the properties trimmed', () => {
		expect(input).toEqual(expected);
	});
	it('[4] the object returned is the exact same one we passed in', () => {
		expect(input).not.toEqual({ foo: '  foo ', bar: 'bar ', baz: ' baz' });
	});
});

describe('[Exercise 3] findLargestInteger', () => {
	it('[5] returns the largest number in an array of numbers', () => {
		const input = [2, 1, 47, 3, 14, 7];
		const expected = 47;
		const result = utils.findLargestInteger(input);

		expect(result).toBe(expected);
	});
});

describe('[Exercise 4] Counter', () => {
	let counter;
	beforeEach(() => {
		counter = new utils.Counter(3); // each test must start with a fresh couter
	});
	it('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
		const expected = 3;
		const actual = counter.countDown();

		expect(actual).toEqual(expected);
	});
	it('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
		const expected = 2;
		counter.countDown();
		const actual = counter.countDown();

		expect(actual).toEqual(expected);
	});
	it('[8] the count eventually reaches zero but does not go below zero', () => {
		expect(counter.countDown()).toBe(3);
		expect(counter.countDown()).toBe(2);
		expect(counter.countDown()).toBe(1);
		expect(counter.countDown()).toBe(0);
		expect(counter.countDown()).toBe(0);
	});
});

describe('[Exercise 5] Seasons', () => {
	let seasons;
	beforeEach(() => {
		seasons = new utils.Seasons(); // each test must start with fresh seasons
	});
	it('[9] the FIRST call of seasons.next returns "summer"', () => {
		const expected = 'summer';
		const actual = seasons.next();

		expect(actual).toBe(expected);
	});
	it('[10] the SECOND call of seasons.next returns "fall"', () => {
		const expected = 'fall';
		seasons.next();
		const actual = seasons.next();

		expect(actual).toBe(expected);
	});
	it('[11] the THIRD call of seasons.next returns "winter"', () => {
		const expected = 'winter';

		seasons.next();
		seasons.next();

		const actual = seasons.next();

		expect(actual).toBe(expected);
	});
	it('[12] the FOURTH call of seasons.next returns "spring"', () => {
		const expected = 'spring';

		seasons.next();
		seasons.next();
		seasons.next();

		const actual = seasons.next();

		expect(actual).toBe(expected);
	});
	it('[13] the FIFTH call of seasons.next returns again "summer"', () => {
		const expected = 'summer';

		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next();

		const actual = seasons.next();

		expect(actual).toBe(expected);
	});
	it('[14] the 40th call of seasons.next returns "spring"', () => {
		const expected = 'spring';

		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next();

		const actual = seasons.next();

		expect(actual).toBe(expected);
	});
});

describe('[Exercise 6] Car', () => {
	let focus;
	beforeEach(() => {
		focus = new utils.Car('focus', 20, 30); // each test must start with a fresh car
	});
	it('[15] driving the car returns the updated odometer', () => {
		focus.drive(10);
		expect(focus.odometer).toBe(10);

		focus.drive(20);
		expect(focus.odometer).toBe(30);
	});
	it('[16] driving the car uses gas', () => {
		focus.drive(10);
		expect(focus.tank).toBe(0);
	});
	it('[17] refueling allows to keep driving', () => {
		// ✨ test away
	});
	it('[18] adding fuel to a full tank has no effect', () => {
		// ✨ test away
	});
});

describe('[Exercise 7] isEvenNumberAsync', () => {
	it('[19] resolves true if passed an even number', () => {
		// ✨ test away
	});
	it('[20] resolves false if passed an odd number', () => {
		// ✨ test away
	});
	it('[21] rejects an error with the message "number must be a number" if passed a non-number type', () => {
		// ✨ test away
	});
	it('[22] rejects an error with the message "number must be a number" if passed NaN', () => {
		// ✨ test away
	});
});
