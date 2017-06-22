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

});
