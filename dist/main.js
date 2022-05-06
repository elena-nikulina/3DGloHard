/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const timer = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");//one\r\nconst two = __webpack_require__(/*! ./modules/two */ \"./modules/two.js\");\r\n\r\ntimer('23 april 2022');//one\r\ntwo();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((module) => {

eval("const timer = (deadline) => {//oneModule\r\n\r\n    const timerHours = document.getElementById('timer-hours');\r\n    const timerMinutes = document.getElementById('timer-minutes');\r\n    const timereconds = document.getElementById('timer-seconds');\r\n\r\n    const getTimeRimaining = () => {\r\n\r\n        let dateStop = new Date(deadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n        let timeRemaining = (dateStop - dateNow)/1000;\r\n\r\n        let hours = Math.floor(timeRemaining / 60 / 60);\r\n        let minutes = Math.floor((timeRemaining / 60) % 60);\r\n        let seconds = Math.floor(timeRemaining % 60);\r\n\r\n        return { timeRemaining, hours, minutes, seconds }\r\n    }\r\n\r\n    let updateClock = () => {\r\n        let getTime = getTimeRimaining();\r\n\r\n        /*timerHours.textContent = getTime.hours;\r\n        timerMinutes.textContent = getTime.minutes;\r\n        timereconds.textContent = getTime.seconds;*/\r\n\r\n        if (getTime.timeRemaining > 0) {\r\n            //setTimeout(updateClock, 1000);\r\n            timerHours.textContent = (getTime.hours < 10 ? \"0\" : \"\") + getTime.hours;\r\n            timerMinutes.textContent = (getTime.minutes < 10 ? \"0\" : \"\") + getTime.minutes;\r\n            timereconds.textContent = (getTime.seconds < 10 ? \"0\" : \"\") + getTime.seconds;\r\n        } else {\r\n            clearInterval(timer1);//window.clearInterval(timer1);\r\n            timerHours.textContent = '00';\r\n            timerMinutes.textContent = '00';\r\n            timereconds.textContent = '00';\r\n        }\r\n    }\r\n    //updateClock();\r\n    let timer1 = setInterval(updateClock, 1000);\r\n\r\n}\r\n\r\nmodule.exports = timer;//oneModule\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/two.js":
/*!************************!*\
  !*** ./modules/two.js ***!
  \************************/
/***/ ((module) => {

eval("const twoModule = () => {\r\n    const two = 'two1.js';\r\n    console.log(two);\r\n}\r\n\r\nmodule.exports = twoModule;\n\n//# sourceURL=webpack:///./modules/two.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;