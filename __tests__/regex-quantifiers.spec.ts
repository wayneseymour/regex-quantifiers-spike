
describe('regex quantifiers', () => {
  describe('zero', () => {
    test('should match empty string', () => {
      const result = 'aaaa'.match(/a{0}/g);

      expect(result).toEqual(['', '', '', '', ''])
    });
  })
});