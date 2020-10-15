const weightConversion = require('./weightconversion');

const getOneRepMax = (weight, reps, units) => {
    if(units === 'kg'){
        return Math.round(weight / (1.0278 - 0.0278 * reps));
    } else if (units === 'lb'){
        weight = weightConversion.getKilograms(weight);
        return Math.round(weightConversion.getPounds(weight / (1.0278 - 0.0278 * reps)));
    } else {
        console.log("Please make sure you specified a unit (kg/lb)")
    }
}

const reverseOneRm = (percentage) => {
    const weight = getOneRepMax(225, 5, 'lb');
    return percentage * weight;
}

exports.getOneRepMax = getOneRepMax;

