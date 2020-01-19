import * as dumb from '../index';

describe('Dumb test', () => {
    test('1 + 2 should return numbers sum (3)', () => {
        expect(dumb.dumbCalc(1, 2)).toStrictEqual(3);
    });

    test('NaN + NaN should return 0', () => {
        expect(dumb.dumbCalc(NaN, NaN)).toStrictEqual(0);
    });

});
