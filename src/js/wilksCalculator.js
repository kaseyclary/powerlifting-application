const weightConversion = require('./weightconversion')

//Weights need to be in kilograms

const setWilksScore = (sex, totalWeight, bodyWeight) => {
    totalWeight = weightConversion.getKilograms(totalWeight);
    bodyWeight = weightConversion.getKilograms(bodyWeight);
    if(sex === 'male'){
        return maleWilksScore(totalWeight, bodyWeight);
    } else if(sex === 'female'){
        return femaleWilksScore(totalWeight, bodyWeight);
    }
}

const maleWilksScore = (totalWeight, bodyWeight) => {
    return (totalWeight * 500) / (-216.0475144 + 16.2606339 * bodyWeight + -0.002388645 * bodyWeight**2 + -0.00113732 * bodyWeight**3 + 0.00000701863 * bodyWeight**4 + -0.00000001291 * bodyWeight**5);
}

const femaleWilksScore = (totalWeight, bodyWeight) => {
    return (totalWeight * 500) / (594.31747775582 + -27.23842536447 * bodyWeight + 0.82112226871 * bodyWeight**2 + -0.00930733913 * bodyWeight**3 + 0.00004731582 * bodyWeight**4 + -0.0000000905 * bodyWeight**5);
}

exports.setWilksScore = setWilksScore;