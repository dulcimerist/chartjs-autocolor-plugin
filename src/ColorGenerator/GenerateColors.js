const {getBestNonFactorMultipleMultiplier} = require("../Helpers/NonFactorMultipleFinder");

function getColorMultiplier(initialOffset, incrementalOffset) {
    const TWO_PI = Math.PI * 2;
    return Math.cos((TWO_PI * initialOffset) + (TWO_PI * incrementalOffset));
}

const getCustomColors = function (
    size,
    redInitialOffset, redIncrementalOffsetMultiplier, redVariance, redBaseline,
    greenInitialOffset, greenIncrementalOffsetMultiplier, greenVariance, greenBaseline,
    blueInitialOffset, blueIncrementalOffsetMultiplier, blueVariance, blueBaseline) {
    const colors = [];
    for (let i = 0; i < size; i++) {
        colors.push(
            {
                red: Math.floor(
                    getColorMultiplier(
                        redInitialOffset,
                        i * redIncrementalOffsetMultiplier
                    )
                    * redVariance
                    + redBaseline
                ),
                green: Math.floor(
                    getColorMultiplier(
                        greenInitialOffset,
                        i * greenIncrementalOffsetMultiplier
                    )
                    * greenVariance
                    + greenBaseline
                ),
                blue: Math.floor(
                    getColorMultiplier(
                        blueInitialOffset,
                        i * blueIncrementalOffsetMultiplier
                    )
                    * blueVariance
                    + blueBaseline
                )
            })
    }
    return colors;
}

const rainbow = function (size) {
    return getCustomColors(size,
        0, 1 / size, 128, 128,
        1 / 3, 1 / size, 128, 128,
        2 / 3, 1 / size, 128, 128)
}

const alternating = function (size) {
    const nonFactorIncrement = getBestNonFactorMultipleMultiplier(size);
    return getCustomColors(size,
        0, nonFactorIncrement / size, 128, 128,
        1 / 3, nonFactorIncrement / size, 128, 128,
        2 / 3, nonFactorIncrement / size, 128, 128)
}

module.exports = {rainbow, alternating, getCustomColors};
