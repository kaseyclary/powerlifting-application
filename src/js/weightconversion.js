const poundsToKilogram = (pounds) => {
    const kilogram = Math.round(pounds * 0.453592);
    return kilogram;
}

const kilogramToPound = (kilograms) => {
    const pound = Math.round(kilograms * 2.20462);
    return pound;
}

exports.getKilograms = poundsToKilogram;
exports.getPounds = kilogramToPound;