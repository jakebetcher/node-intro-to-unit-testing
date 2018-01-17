const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');
describe('fizzBuzzer', function() {


	it('should return fizz-buzz, buzz, or fizz for numbers divisible by 15, 5, or 3 respectively.', function() {
		const normalCases = [
			{num: 30, expected: 'fizz-buzz'},
			{num: 10, expected: 'buzz'},
			{num: 9, expected: 'fizz'},
			{num: 7, expected: 7}
		];

		normalCases.forEach(function(input) {
			const answer = fizzBuzzer(input.num);
			expect(answer).to.equal(input.expected);
		});
	});

	it ('should raise error if arg is not number', function() {
		const badInputs = [
			{num: "number"},
			{num: true},
			{num: [1, 2, 3]}
		];
		badInputs.forEach(function(input) {
			expect(function() {
				fizzBuzzer(input.num);
			}).to.throw(Error);
		});
	});

});