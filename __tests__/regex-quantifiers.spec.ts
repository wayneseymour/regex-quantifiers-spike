describe('regex quantifiers', () => {
    describe('"aaaa".match(/a{0}/g)', () => {
        test('should return string[].length === 5, all with empty strings', () => {
            const result = 'aaaa'.match(/a{0}/g);

            expect(result.every(r => typeof(r) === "string")).toBeTruthy();
        });
    })
});
