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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./sass/main.scss":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./sass/main.scss ***!
  \****************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_hero_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/hero.jpg */ \"./images/hero.jpg\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Open+Sans&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_hero_jpg__WEBPACK_IMPORTED_MODULE_2__.default);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*, h1, h2, h3, h4, h5, h6, p {\\n  margin: 0;\\n  box-sizing: border-box;\\n}\\n\\n.content {\\n  margin: 0px 16px;\\n}\\n@media (min-width: 600px) {\\n  .content {\\n    margin: 0 32px;\\n  }\\n}\\n@media (min-width: 1025px) {\\n  .content {\\n    max-width: 700px;\\n    margin: auto;\\n  }\\n}\\n\\n.full-width {\\n  margin-left: calc(50% - 50vw);\\n  width: 100vw;\\n}\\n\\n.flex-row {\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n}\\n\\n.hero {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n  background-position: center;\\n  padding-bottom: 64px;\\n  border-bottom: 16px solid #b90000;\\n}\\n\\n.hero-container {\\n  height: 20vh;\\n  text-align: center;\\n  background-color: #f5e4e4a6;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  margin-bottom: 64px;\\n}\\n\\n.logo {\\n  max-height: 80%;\\n}\\n\\n.hero-img {\\n  max-width: 100vw;\\n}\\n\\n.title {\\n  text-align: center;\\n  margin: 32px;\\n}\\n\\n.modal {\\n  display: none;\\n  position: fixed;\\n  left: 0;\\n  top: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-color: #000000a1;\\n}\\n\\n.modal-container {\\n  position: relative;\\n  margin-top: 10vh;\\n  margin-bottom: 10vh;\\n  height: 80vh;\\n  overflow: hidden;\\n  text-align: center;\\n  background-color: white;\\n  border: 8px solid #a90100;\\n  border-radius: 5px;\\n  animation-name: animatetop;\\n  animation-duration: 0.4s;\\n}\\n\\n@keyframes animatetop {\\n  from {\\n    top: -300px;\\n    opacity: 0;\\n  }\\n  to {\\n    top: 0;\\n    opacity: 1;\\n  }\\n}\\n.modal-close-btn {\\n  position: absolute;\\n  right: 0;\\n  color: black;\\n  font-size: 44px;\\n  font-weight: bold;\\n  padding-right: 16px;\\n  cursor: pointer;\\n}\\n\\n.modal-content {\\n  display: flex;\\n  flex-direction: column;\\n  margin: 16px;\\n}\\n\\n.modal-title {\\n  text-transform: capitalize;\\n}\\n\\n.modal-track-layout {\\n  margin-top: 16px;\\n  max-height: 80%;\\n  max-width: 65%;\\n}\\n\\n.modal-track-layout-info {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: start;\\n  background-color: #e9e9e9;\\n  border-radius: 1.5em;\\n  padding: 24px 16px;\\n  text-align: initial;\\n}\\n.modal-track-layout-info p {\\n  margin-top: 16px;\\n}\\n\\n.modal-track-info {\\n  margin-top: 16px;\\n}\\n\\n.upcoming-races {\\n  background-color: #f5e4e4a6;\\n  border: 8px solid #f003;\\n  border-radius: 10px;\\n  margin-bottom: 64px;\\n}\\n\\n.upcoming-races-container {\\n  padding: 16px;\\n  padding-top: 0;\\n}\\n\\n.upcoming-races-flex {\\n  display: flex;\\n  flex-direction: row;\\n  flex-wrap: wrap;\\n  justify-content: space-between;\\n}\\n\\n.upcoming-race {\\n  cursor: pointer;\\n  background-color: #ffffffd4;\\n  width: 100%;\\n  margin-top: 16px;\\n  padding: 8px 16px;\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  justify-content: space-between;\\n  border: 1px solid green;\\n  border-top-left-radius: 10px;\\n  border-bottom-right-radius: 10px;\\n}\\n@media (min-width: 600px) {\\n  .upcoming-race {\\n    width: 40%;\\n  }\\n}\\n\\n.articles {\\n  margin-top: 64px;\\n  margin-bottom: 64px;\\n  padding: 0 64px;\\n}\\n.articles h2 {\\n  text-align: center;\\n  margin-bottom: 32px;\\n}\\n\\n.story {\\n  border: 2px solid #b90000;\\n  border-radius: 4px;\\n  width: 40%;\\n  overflow: hidden;\\n}\\n.story img {\\n  width: 110%;\\n  position: relative;\\n}\\n\\n.story-content {\\n  padding: 16px;\\n}\\n.story-content h4 {\\n  font-weight: lighter;\\n  color: red;\\n  margin-bottom: 8px;\\n}\\n\\nbody {\\n  font-family: \\\"Open Sans\\\";\\n  background: #f8f8f8;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://website/./sass/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B0%5D.use%5B3%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://website/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== \"string\") {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://website/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./images/hero.jpg":
/*!*************************!*\
  !*** ./images/hero.jpg ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"images/hero.jpg\");\n\n//# sourceURL=webpack://website/./images/hero.jpg?");

/***/ }),

/***/ "./sass/main.scss":
/*!************************!*\
  !*** ./sass/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_3_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./sass/main.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_3_main_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_3_main_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://website/./sass/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://website/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/getWeatherApi.js":
/*!******************************!*\
  !*** ./src/getWeatherApi.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getWeatherAsync = async (cityName) => {\r\n    const APIKey = \"67bbc71d06335597f02d676c338fdd65\"\r\n    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}&units=metric`;\r\n    return new Promise((res, rej) => {\r\n        var xmlHttp = new XMLHttpRequest();\r\n        xmlHttp.open(\"GET\", url, false);\r\n        xmlHttp.onreadystatechange = () => {\r\n            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {\r\n                res(JSON.parse(xmlHttp.responseText));\r\n            }\r\n        }\r\n        xmlHttp.send(null);\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeatherAsync);\n\n//# sourceURL=webpack://website/./src/getWeatherApi.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/main.scss */ \"./sass/main.scss\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ \"./src/modal.js\");\n\r\n\r\n\r\n\r\nconst  loadJSON = async () => {   \r\n    return new Promise((res, reject) => {\r\n        var xobj = new XMLHttpRequest();\r\n            xobj.overrideMimeType(\"application/json\");\r\n        xobj.open('GET', '../upcomingRaces/upcomingRaces.json', true);\r\n        xobj.onreadystatechange = function () {\r\n              if (xobj.readyState == 4 && xobj.status == \"200\") {\r\n                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode\r\n                res(JSON.parse(xobj.responseText));\r\n              }\r\n        };\r\n        xobj.send(null);\r\n    })\r\n}\r\n\r\nconst addOnClickUpcomingRace  = (data, race) => {\r\n    let upcomingRaceButton = document.getElementById(`upcoming-race-${race}`);\r\n    let modalElement = document.querySelector(\".modal\");\r\n    const modalTest = new _modal__WEBPACK_IMPORTED_MODULE_1__.default(modalElement);\r\n\r\n    upcomingRaceButton.onclick = async() => {\r\n        if (!data[race]){\r\n            return;\r\n        }\r\n        await modalTest.fillData(data[race], race);\r\n        modalTest.showModal();\r\n    }\r\n}\r\n\r\nconst init = async () => {\r\n    const upcomingRaceData = await loadJSON();\r\n\r\n    addOnClickUpcomingRace(upcomingRaceData, 'bahrain');\r\n    addOnClickUpcomingRace(upcomingRaceData, 'italy');\r\n\r\n}\r\n\r\ninit();\r\n\n\n//# sourceURL=webpack://website/./src/index.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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