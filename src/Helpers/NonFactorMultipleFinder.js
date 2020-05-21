function getAllFactors(size) {
    const factors = [];
    for (let i = 2; i < size; i++) {
        if (size % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}

function getAllNonFactorMultipleIncrements(size) {
    const factors = getAllFactors(size);

    const returnValue = [];
    for (let i = 1; i < size; i++) {
        let isMultipleOfFactor = false;
        factors.forEach((factor) => {
            if (i % factor === 0) {
                isMultipleOfFactor = true;
            }
        })
        if (!isMultipleOfFactor) {
            returnValue.push(i);
        }
    }

    return returnValue;
}

const getBestNonFactorMultipleMultiplier = function(size) {
    const nonRepeatingIncrements = getAllNonFactorMultipleIncrements(size);
    return nonRepeatingIncrements[Math.floor(nonRepeatingIncrements.length / 2)];
}

module.exports = {getAllNonFactorMultipleIncrements, getBestNonFactorMultipleMultiplier};
