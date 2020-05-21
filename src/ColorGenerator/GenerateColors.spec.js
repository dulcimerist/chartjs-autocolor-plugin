import {alternating, rainbow} from "./GenerateColors";
import {describe, expect, test} from "@jest/globals";

describe('Color Generator', () => {
    describe('alternating', () => {
        test('should alternate colors wildly for any size that has a non-factor integer', () => {
            const actual = alternating(8);
            const colorDeltas = [];
            for (let i = 1; i < actual.length; i++) {
                colorDeltas.push({
                    red: Math.abs(actual[i - 1].red - actual[i].red),
                    green: Math.abs(actual[i - 1].green - actual[i].green),
                    blue: Math.abs(actual[i - 1].blue - actual[i].blue),
                })
            }
            colorDeltas.push({
                red: Math.abs(actual[actual.length - 1].red - actual[0].red),
                green: Math.abs(actual[actual.length - 1].green - actual[0].green),
                blue: Math.abs(actual[actual.length - 1].blue - actual[0].blue),
            })

            colorDeltas.forEach((deltas) => {
               expect(deltas.red + deltas.green + deltas.blue).toBeGreaterThan(256 * (3 / 2));
            });
        })

        test('should not return any duplicate colors', () => {
            const actual = alternating(8);
            for (let i = 0; i < actual.length; i++) {
                for (let j = i + 1; j < actual.length; j++) {
                    expect(actual[i]).not.toEqual(actual[j]);
                }
            }
        });
    });

    describe('rainbow', () => {
        test('should put close colors together', () => {
            const actual = rainbow(8);
            const colorDeltas = [];
            for (let i = 1; i < actual.length; i++) {
                colorDeltas.push({
                    red: Math.abs(actual[i - 1].red - actual[i].red),
                    green: Math.abs(actual[i - 1].green - actual[i].green),
                    blue: Math.abs(actual[i - 1].blue - actual[i].blue),
                })
            }
            colorDeltas.push({
                red: Math.abs(actual[actual.length - 1].red - actual[0].red),
                green: Math.abs(actual[actual.length - 1].green - actual[0].green),
                blue: Math.abs(actual[actual.length - 1].blue - actual[0].blue),
            })

            colorDeltas.forEach((deltas) => {
                expect(deltas.red + deltas.green + deltas.blue).toBeLessThan(256 * (3 / 2));
            });
        })

        test('should not return any duplicate colors', () => {
            const actual = rainbow(8);
            for (let i = 0; i < actual.length; i++) {
                for (let j = i + 1; j < actual.length; j++) {
                    expect(actual[i]).not.toEqual(actual[j]);
                }
            }
        });
    });
});
