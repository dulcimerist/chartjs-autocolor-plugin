import {
    getBestNonFactorMultipleMultiplier,
    getAllNonFactorMultipleIncrements
} from "./NonFactorMultipleFinder";
import {describe, test, expect} from "@jest/globals";

describe('Non-Factor-Multiple Finder', () => {
    describe('getAllNonFactorMultipleIncrements', () => {
       test('should return all numbers from 1 to (size-1) that arent a factor or a multiple of a factor', () => {
           let actual = getAllNonFactorMultipleIncrements(12);
           expect(actual.length).toEqual(4);
           expect(actual).toContain(1);
           expect(actual).toContain(5);
           expect(actual).toContain(7);
           expect(actual).toContain(11);
       })
    });
    describe('getBestNonFactorIncrement', () => {
       test('should return the factor closest to size / 2, prioritizing the larger of the two numbers when equidistant', () => {
           let actual = getBestNonFactorMultipleMultiplier(12);
           expect(actual).toEqual(7);
       });
    });
});
