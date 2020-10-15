/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/1rm.js":
/*!***********************!*\
  !*** ./src/js/1rm.js ***!
  \***********************/
/*! default exports */
/*! export getOneRepMax [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const weightConversion = __webpack_require__(/*! ./weightconversion */ \"./src/js/weightconversion.js\");\n\nconst getOneRepMax = (weight, reps, units) => {\n    if(units === 'kg'){\n        return Math.round(weight / (1.0278 - 0.0278 * reps));\n    } else if (units === 'lb'){\n        weight = weightConversion.getKilograms(weight);\n        return Math.round(weightConversion.getPounds(weight / (1.0278 - 0.0278 * reps)));\n    } else {\n        console.log(\"Please make sure you specified a unit (kg/lb)\")\n    }\n}\n\nconst reverseOneRm = (percentage) => {\n    const weight = getOneRepMax(225, 5, 'lb');\n    return percentage * weight;\n}\n\nexports.getOneRepMax = getOneRepMax;\n\n\n\n//# sourceURL=webpack://1rm/./src/js/1rm.js?");

/***/ }),

/***/ "./src/js/user.js":
/*!************************!*\
  !*** ./src/js/user.js ***!
  \************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

eval("\n\n//# sourceURL=webpack://1rm/./src/js/user.js?");

/***/ }),

/***/ "./src/js/weightconversion.js":
/*!************************************!*\
  !*** ./src/js/weightconversion.js ***!
  \************************************/
/*! default exports */
/*! export getKilograms [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getPounds [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("const poundsToKilogram = (pounds) => {\n    const kilogram = Math.round(pounds * 0.453592);\n    return kilogram;\n}\n\nconst kilogramToPound = (kilograms) => {\n    const pound = Math.round(kilograms * 2.20462);\n    return pound;\n}\n\nexports.getKilograms = poundsToKilogram;\nexports.getPounds = kilogramToPound;\n\n//# sourceURL=webpack://1rm/./src/js/weightconversion.js?");

/***/ }),

/***/ "./src/js/wilksCalculator.js":
/*!***********************************!*\
  !*** ./src/js/wilksCalculator.js ***!
  \***********************************/
/*! default exports */
/*! export setWilksScore [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const weightConversion = __webpack_require__(/*! ./weightconversion */ \"./src/js/weightconversion.js\")\n\n//Weights need to be in kilograms\n\nconst setWilksScore = (sex, totalWeight, bodyWeight) => {\n    totalWeight = weightConversion.getKilograms(totalWeight);\n    bodyWeight = weightConversion.getKilograms(bodyWeight);\n    if(sex === 'male'){\n        return maleWilksScore(totalWeight, bodyWeight);\n    } else if(sex === 'female'){\n        return femaleWilksScore(totalWeight, bodyWeight);\n    }\n}\n\nconst maleWilksScore = (totalWeight, bodyWeight) => {\n    return (totalWeight * 500) / (-216.0475144 + 16.2606339 * bodyWeight + -0.002388645 * bodyWeight**2 + -0.00113732 * bodyWeight**3 + 0.00000701863 * bodyWeight**4 + -0.00000001291 * bodyWeight**5);\n}\n\nconst femaleWilksScore = (totalWeight, bodyWeight) => {\n    return (totalWeight * 500) / (594.31747775582 + -27.23842536447 * bodyWeight + 0.82112226871 * bodyWeight**2 + -0.00930733913 * bodyWeight**3 + 0.00004731582 * bodyWeight**4 + -0.0000000905 * bodyWeight**5);\n}\n\nexports.setWilksScore = setWilksScore;\n\n//# sourceURL=webpack://1rm/./src/js/wilksCalculator.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
eval("const oneRepMax = __webpack_require__(/*! ./1rm */ \"./src/js/1rm.js\");\nconst wilksCalculator = __webpack_require__(/*! ./wilksCalculator */ \"./src/js/wilksCalculator.js\");\nconst userGenerator = __webpack_require__(/*! ./user */ \"./src/js/user.js\");\nconst fs = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'fs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nconst { create } = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'domain'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nconst loadUsers = () => {\n    try {\n        const dataBuffer = fs.readFileSync('user.json');\n        const dataJSON = dataBuffer.toString();\n        return JSON.parse(dataJSON);\n    } catch (e){\n        return [];\n    }\n}\n\nconst readUserInfo = (id) => {\n    const users = loadUsers();\n    const user = users.find((user) => user.id === id);\n    if(user){\n        console.log(user);\n    } else {\n        console.log(\"No user found!\")\n    }\n}\n\nconst createUser = () => {\n    const users = loadUsers();\n    const newUserID = users.length + 1;\n    const newUser = new User(newUserID);\n    users.push(newUser);\n    const dataJSON = JSON.stringify(users);\n    fs.writeFileSync('user.json', dataJSON);\n}\n\nconst editUser = () => {\n\n}\n\nconst deleteUser = (id) => {\n    const users = loadUsers();\n    const user = users.find((user) => user.id === id);\n    if(user){\n        users.pop(user);\n    } else {\n        console.log('No user found!')\n    }\n    const dataJSON = JSON.stringify(users);\n    fs.writeFileSync('user.json', dataJSON);\n}\n\nconst getUserWilksScore = (id) => {\n    const users = loadUsers();\n    const user = users.find((user) => user.id === id)\n    if(user){\n        const wilksScore = wilksCalculator.setWilksScore(user.sex, user.powerTotal, user.weight);\n        console.log(wilksScore);\n    } else {\n        console.log(\"No user found!\")\n    }\n}\n\nconst addLift = (user) => {\n    lift = {\n        date: 0,\n        type: '',\n        weight: 0,\n        reps: 0,\n        repMax: oneRepMax.getOneRepMax(weight, reps, user.unit)\n    }\n    user.lifts.push(lift);\n}\n\nclass User {\n    constructor(id){\n        this.id = id;\n        this.fname = 'Kasey';\n        this.lname = 'Clary';\n        this.sex = 'male';\n        this.unit = 'lb';\n        this.weight = 190;\n        this.maxBench = 265,\n        this.maxSquat = 365,\n        this.maxDeadlift = 410,\n        this.lifts = [],\n        this.powerTotal = this.maxBench + this.maxSquat + this.maxDeadlift,\n        this.wilksScore = wilksCalculator.setWilksScore(this.sex, this.powerTotal, this.weight)\n    }\n}\n\ncreateUser();\n\n//# sourceURL=webpack://1rm/./src/js/index.js?");
})();

/******/ })()
;