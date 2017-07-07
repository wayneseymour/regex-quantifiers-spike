describe('regex quantifiers', () => {

	describe('"aaaa".match(/a{0}/g)', () => {
		const actual = 'aaaa'.match(/a{0}/g);

		test('should return string[].length of 5', () => {
			expect(actual.length).toBe(5);
		});
		test('should return string[], with empty strings', () => {
			expect(actual.every(r => typeof(r) === "string")).toBeTruthy();
		});
	});

	describe('"aaaa".match(/a{0,}/g)', () => {
		const actual = 'aaaa'.match(/a{0}/g);

		test('should return string[].length of 5', () => {
			expect(actual.length).toBe(5);
		});
		test('should return string[], with empty strings', () => {
			expect(actual.every(r => typeof(r) === "string")).toBeTruthy();
		});
	});
	describe('min / max matches using a quantifier', () => {
		test(`should match at least 5 a's, onto infinity`, () => {
			expect('aaaaaaaaaa'.match(/a{5,}/g)).toEqual(["aaaaaaaaaa"]);
		});
		test(`should match at least 5 a's, onto 6 a's`, () => {
			expect('aaaaaaaaaa'.match(/a{5,6}/g)).toEqual(["aaaaaa"]);
		});
		test('should match on 3 items', () => {
			const str = `
http://egghead.io
not a web address
http://
https://egghead.io
httpss://egghead.io
httpsss://egghead.io
httpssss://egghead.io
`
			const regex = /https{2,4}:\/\//g;
			expect(str.match(regex).length).toEqual(3);
		});
	})
});
