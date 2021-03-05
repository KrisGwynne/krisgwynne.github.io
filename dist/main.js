/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/getWeatherApi.js":
/*!******************************!*\
  !*** ./src/getWeatherApi.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getWeatherAsync = async (cityName) => {\r\n    const APIKey = \"67bbc71d06335597f02d676c338fdd65\"\r\n    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}&units=metric`;\r\n    return new Promise((res, rej) => {\r\n        var xmlHttp = new XMLHttpRequest();\r\n        xmlHttp.open(\"GET\", url, false);\r\n        xmlHttp.onreadystatechange = () => {\r\n            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {\r\n                res(JSON.parse(xmlHttp.responseText));\r\n            }\r\n        }\r\n        xmlHttp.send(null);\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeatherAsync);\n\n//# sourceURL=webpack://website/./src/getWeatherApi.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./src/modal.js\");\n// import \"../sass/main.scss\";\r\n\r\n\r\n\r\nconst  loadJSON = async () => {   \r\n    return new Promise((res, reject) => {\r\n        var xobj = new XMLHttpRequest();\r\n            xobj.overrideMimeType(\"application/json\");\r\n        xobj.open('GET', '../upcomingRaces/upcomingRaces.json', true);\r\n        xobj.onreadystatechange = function () {\r\n              if (xobj.readyState == 4 && xobj.status == \"200\") {\r\n                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode\r\n                res(JSON.parse(xobj.responseText));\r\n              }\r\n        };\r\n        xobj.send(null);\r\n    })\r\n}\r\n\r\nconst addOnClickUpcomingRace  = (data, race) => {\r\n    let upcomingRaceButton = document.getElementById(`upcoming-race-${race}`);\r\n    let modalElement = document.querySelector(\".modal\");\r\n    const modalTest = new _modal__WEBPACK_IMPORTED_MODULE_0__.default(modalElement);\r\n\r\n    upcomingRaceButton.onclick = async() => {\r\n        if (!data[race]){\r\n            return;\r\n        }\r\n        await modalTest.fillData(data[race], race);\r\n        modalTest.showModal();\r\n    }\r\n}\r\n\r\nconst init = async () => {\r\n    const upcomingRaceData = await loadJSON();\r\n\r\n    addOnClickUpcomingRace(upcomingRaceData, 'bahrain');\r\n    addOnClickUpcomingRace(upcomingRaceData, 'italy');\r\n\r\n}\r\n\r\ninit();\r\n\n\n//# sourceURL=webpack://website/./src/index.js?");

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\n/* harmony import */ var _getWeatherApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWeatherApi */ \"./src/getWeatherApi.js\");\n\r\n\r\nclass Modal {\r\n    constructor(modal) {\r\n        this.modal = modal;\r\n        this.modalCloseButton = modal.querySelector(\".modal-close-btn\")\r\n\r\n        this.init();\r\n    }\r\n\r\n    init () {\r\n        this.modalCloseButton.onclick = () => {\r\n            this.hideModal();\r\n        }\r\n\r\n        this.modal.onclick = (e) => {\r\n            if (e.target === this.modal)\r\n            {\r\n                this.hideModal();\r\n            }\r\n        }\r\n    }\r\n\r\n    async fillData(data, race) {\r\n        this.modal.querySelector('.modal-race-circuit').innerHTML = `Circuit: ${data.circuit}`;\r\n        this.modal.querySelector('.modal-track-layout').setAttribute('src', data.trackSrc);\r\n        this.modal.querySelector('.modal-race-length').innerHTML = `Length: ${data.length}`;\r\n        this.modal.querySelector('.modal-race-laps').innerHTML = `Laps: ${data.laps}`;\r\n        this.modal.querySelector('.modal-race-race-distance').innerHTML = `Race distance: ${data.raceDistance}`;\r\n        this.modal.querySelector('.modal-title').innerHTML = `${race} track layout`;\r\n\r\n        await this.fillWeatherData(race)\r\n    }\r\n\r\n    async fillWeatherData(race) {\r\n        const weatherData = await (0,_getWeatherApi__WEBPACK_IMPORTED_MODULE_0__.default)(race);\r\n        if (!weatherData) {\r\n            return;\r\n        }\r\n        this.modal.querySelector('.modal-temp').innerHTML = `${weatherData?.main?.temp}&deg;C`;\r\n    }\r\n\r\n    async showModal(race) {\r\n        this.modal.style.display = \"block\";\r\n    }\r\n    \r\n    hideModal() {\r\n        this.modal.style.display = \"none\";\r\n    }\r\n\r\n}\r\n\n\n//# sourceURL=webpack://website/./src/modal.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;