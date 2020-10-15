const oneRepMax = require('./1rm');

const max = oneRepMax.getOneRepMax(225, 5, 'lb');

const percentageOfMax = (max) => {
    const percentages = {
    percent90: max * .9,
    percent80: max * .8,
    percent70: max * .7,
    percent60: max * .6,
    percent50: max * .5,
    }
    return percentages
}

