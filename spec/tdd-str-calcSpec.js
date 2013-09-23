var tddStrCalc = require('../tdd-str-calc');

describe('Add method', function() {
    var add = tddStrCalc.Add;

    it('returns an empty string on 0 arguments', function() {
        expect(add()).toMatch('');
    });

    it('takes 0, 1 or 2 numbers', function() {
        expect(add('1')).toBeTruthy();
        expect(add('1, 2')).toBeTruthy();
    });

    it('returns the sum of the numbers', function() {
        expect(add('1, 2')).toEqual(3);
    });

    it('can handle an unknowm amount of arguments', function() {
        expect(add('1,2,3')).toEqual(6);
        expect(add('1,2,3,4')).toEqual(10);
        expect(add('1,2,3,4,5')).toEqual(15);
        expect(add('1,2,3,4,5,6')).toEqual(21);
    });

    it('can handle new lines "\n" instead of comma', function() {
        expect(add('1\n2,3')).toEqual(6);
    });

    it ('supports different delimeters that you specify in the beginning of the string: “//[delimiter]\\n[numbers…]”', function() {
        expect(add(';\n1;2')).toEqual(3);
        expect(add('|\n1|2|3')).toEqual(6);
    });

    it('throws an exception if any of the numbers are negative with message: "negatives not allowed " + numbers', function() {
        expect(function() {add('1,-4, 6'); }).toThrow(new Error('negatives not allowed -4'));
    });
});