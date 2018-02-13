const expect = require('expect');
const { isRealString } = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        var onlyNumbers = 123;
        expect(isRealString(onlyNumbers)).toBe(false);
    });

    it('should reject string with only spaces', () => {
        var onlySpaces = '     ';
        expect(isRealString(onlySpaces)).toBe(false);
    });

    it('should allow string with non-space characters', () => {
        var validString = '  TesteSom123SomSom  ';
        expect(isRealString(validString)).toBe(true);
    });
});