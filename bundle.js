"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["bundle"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Quicksand&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  background-color: rgb(200, 215, 255);\\r\\n  font-family: \\\"Quicksand\\\", sans-serif;\\r\\n  color: rgb(4, 32, 68);\\r\\n}\\r\\n\\r\\n.container {\\r\\n  max-width: 65%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  background-color: #fff;\\r\\n  margin: 60px auto;\\r\\n  padding: 20px;\\r\\n}\\r\\n\\r\\n.container h1 {\\r\\n  font-size: 2em;\\r\\n  font-weight: bolder;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.form {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.form .head {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\nform i {\\r\\n  font-size: 1.35em;\\r\\n  padding-top: 8px;\\r\\n  cursor: pointer;\\r\\n  margin-right: -10px;\\r\\n}\\r\\n\\r\\n.head i {\\r\\n  padding: 16px 0;\\r\\n}\\r\\n\\r\\n.form ul {\\r\\n  margin: 0;\\r\\n  padding: 20px 0;\\r\\n}\\r\\n\\r\\n.lists li {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  height: 50px;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\nform {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  gap: 20px;\\r\\n}\\r\\n\\r\\nform .add {\\r\\n  background: none;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\nform i:hover {\\r\\n  transition: 0.3s ease;\\r\\n  color: #184e9e;\\r\\n}\\r\\n\\r\\nform .task-input {\\r\\n  width: 100%;\\r\\n  padding: 10px 10px;\\r\\n  border: none;\\r\\n  border-bottom: 1px solid rgb(104, 104, 104);\\r\\n}\\r\\n\\r\\nform .task-input::placeholder {\\r\\n  color: rgb(102, 102, 102);\\r\\n  font-size: 1.2em;\\r\\n  font-family: \\\"Quicksand\\\", sans-serif;\\r\\n  font-style: italic;\\r\\n  opacity: 0.7;\\r\\n}\\r\\n\\r\\nform .task-input:focus {\\r\\n  outline: none;\\r\\n  font-size: 1em;\\r\\n  font-family: \\\"Quicksand\\\", sans-serif;\\r\\n}\\r\\n\\r\\n.clear {\\r\\n  margin-bottom: 20px;\\r\\n  padding: 15px 45px;\\r\\n  border: none;\\r\\n  cursor: pointer;\\r\\n  background-color: rgb(227, 227, 227);\\r\\n}\\r\\n\\r\\n.clear:hover {\\r\\n  transition: 0.4s ease;\\r\\n  background-color: rgb(192, 192, 192);\\r\\n}\\r\\n\\r\\n.lists .left {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  gap: 7px;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.left input {\\r\\n  border: none;\\r\\n  font-size: 1.2em;\\r\\n  font-family: \\\"Quicksand\\\", sans-serif;\\r\\n}\\r\\n\\r\\n.left input:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.menu-pop .btn {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.lists .right {\\r\\n  margin-top: 10px;\\r\\n  font-size: 1.25em;\\r\\n  display: flex;\\r\\n  gap: 10px;\\r\\n}\\r\\n\\r\\n.right i:hover {\\r\\n  color: #184e9e;\\r\\n  cursor: pointer;\\r\\n  transition: 0.3s ease;\\r\\n}\\r\\n\\r\\n.save {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.hide {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.fa-arrows-rotate:hover {\\r\\n  color: #184e9e;\\r\\n  cursor: pointer;\\r\\n  transition: 0.3s ease;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"add\": () => (/* binding */ add),\n/* harmony export */   \"completed\": () => (/* binding */ completed),\n/* harmony export */   \"index\": () => (/* binding */ index),\n/* harmony export */   \"list\": () => (/* binding */ list),\n/* harmony export */   \"newTask\": () => (/* binding */ newTask)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_deleteTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/deleteTask.js */ \"./src/modules/deleteTask.js\");\n/* harmony import */ var _modules_editTask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/editTask.js */ \"./src/modules/editTask.js\");\n/* harmony import */ var _modules_saveTask_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/saveTask.js */ \"./src/modules/saveTask.js\");\n/* harmony import */ var _modules_completeTask_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/completeTask.js */ \"./src/modules/completeTask.js\");\n/* harmony import */ var _modules_addTask_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/addTask.js */ \"./src/modules/addTask.js\");\n/* harmony import */ var _modules_showTask_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/showTask.js */ \"./src/modules/showTask.js\");\n\n\n\n\n\n\n\n\nconst newTask = document.querySelector('.task-input');\nconst add = document.querySelector('.add');\nconst list = document.querySelector('.lists');\n\n_modules_showTask_js__WEBPACK_IMPORTED_MODULE_6__.reload.addEventListener('click', () => {\n  (0,_modules_showTask_js__WEBPACK_IMPORTED_MODULE_6__.showTasks)();\n});\n\nconst completed = false; const\n  index = 1;\n(0,_modules_showTask_js__WEBPACK_IMPORTED_MODULE_6__.showTasks)();\n\nadd.addEventListener('click', () => { (0,_modules_addTask_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(); });\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/modules/addTask.js":
/*!********************************!*\
  !*** ./src/modules/addTask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addT)\n/* harmony export */ });\n/* harmony import */ var _showTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showTask.js */ \"./src/modules/showTask.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n\n\n\nlet index; let\n  listArr;\nfunction addT() {\n  const storedData = localStorage.getItem('data');\n\n  if (storedData === null) {\n    listArr = [];\n  } else {\n    listArr = JSON.parse(storedData);\n    index = listArr.length + 1;\n  }\n\n  const task = { description: _index_js__WEBPACK_IMPORTED_MODULE_1__.newTask.value, completed: _index_js__WEBPACK_IMPORTED_MODULE_1__.completed, index };\n\n  listArr.push(task);\n  localStorage.setItem('data', JSON.stringify(listArr));\n  return (0,_showTask_js__WEBPACK_IMPORTED_MODULE_0__.showTasks)();\n}\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/addTask.js?");

/***/ }),

/***/ "./src/modules/completeTask.js":
/*!*************************************!*\
  !*** ./src/modules/completeTask.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _showTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showTask.js */ \"./src/modules/showTask.js\");\n\n\nlet completeTask; let\n  listArr;\n\nwindow.completeTask = (index) => {\n  const storedData = localStorage.getItem('data');\n  listArr = JSON.parse(storedData);\n  const addedTask = document.querySelector('.task');\n  for (let i = 0; i < listArr.length; i += 1) {\n    if (listArr[i].index === index) {\n      if (listArr[i].completed === false) {\n        listArr[i].completed = true;\n        // addedTask.style.textDecoration = 'strikethrough';\n      } else { listArr[i].completed = false; }\n      // addedTask.style.textDecoration = 'none';\n    }\n  }\n  localStorage.setItem('data', JSON.stringify(listArr));\n  (0,_showTask_js__WEBPACK_IMPORTED_MODULE_0__.showTasks)();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ completeTask });\n\n//# sourceURL=webpack://webpack-demo/./src/modules/completeTask.js?");

/***/ }),

/***/ "./src/modules/deleteTask.js":
/*!***********************************!*\
  !*** ./src/modules/deleteTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _showTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showTask.js */ \"./src/modules/showTask.js\");\n\n\nlet index;\n\nlet deleteTask;\nwindow.deleteTask = (index) => {\n  let listArr;\n  const storedData = localStorage.getItem('data');\n  listArr = JSON.parse(storedData);\n  listArr.splice(index - 1, 1);\n  for (let i = 0; i < listArr.length; i += 1) {\n    listArr[i].index = i + 1;\n  }\n  localStorage.setItem('data', JSON.stringify(listArr));\n  (0,_showTask_js__WEBPACK_IMPORTED_MODULE_0__.showTasks)();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ deleteTask });\n\n//# sourceURL=webpack://webpack-demo/./src/modules/deleteTask.js?");

/***/ }),

/***/ "./src/modules/editTask.js":
/*!*********************************!*\
  !*** ./src/modules/editTask.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet listArr; let index; let\n  editTask;\n\nwindow.editTask = (index) => {\n  const saveBtn = document.getElementById(`edit${index}`);\n  const editBtn = document.getElementById(`save${index}`);\n\n  saveBtn.style.display = 'none';\n  editBtn.style.display = 'block';\n\n  const specTask = document.getElementById(`task${index}`);\n\n  specTask.removeAttribute('readonly');\n  const { length } = specTask.value;\n  specTask.setSelectionRange(length, length);\n  specTask.focus();\n\n  return specTask;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ editTask, listArr, index });\n\n//# sourceURL=webpack://webpack-demo/./src/modules/editTask.js?");

/***/ }),

/***/ "./src/modules/saveTask.js":
/*!*********************************!*\
  !*** ./src/modules/saveTask.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _showTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showTask.js */ \"./src/modules/showTask.js\");\n\n\nlet listArr; let index; let\n  saveTask;\n\nwindow.saveTask = (index) => {\n  const saveBtn = document.getElementById(`edit${index}`);\n  const editBtn = document.getElementById(`save${index}`);\n\n  saveBtn.style.display = 'block';\n  editBtn.style.display = 'none';\n\n  const specTask = document.getElementById(`task${index}`);\n  const storedData = localStorage.getItem('data');\n  listArr = JSON.parse(storedData);\n  listArr[index - 1].description = specTask.value;\n\n  localStorage.setItem('data', JSON.stringify(listArr));\n  (0,_showTask_js__WEBPACK_IMPORTED_MODULE_0__.showTasks)();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ saveTask, index });\n\n//# sourceURL=webpack://webpack-demo/./src/modules/saveTask.js?");

/***/ }),

/***/ "./src/modules/showTask.js":
/*!*********************************!*\
  !*** ./src/modules/showTask.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reload\": () => (/* binding */ reload),\n/* harmony export */   \"showTasks\": () => (/* binding */ showTasks)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n/* harmony import */ var _deleteTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteTask.js */ \"./src/modules/deleteTask.js\");\n\n\n\nconst reload = document.querySelector('.fa-arrows-rotate');\nlet listArr; let index;\n\nconst showTasks = () => {\n  const storedData = localStorage.getItem('data');\n  // index = 0;\n  if (storedData === null) {\n    listArr = [];\n  } else {\n    listArr = JSON.parse(storedData);\n    index = listArr.length + 1;\n  }\n\n  let newLiTag = '';\n  listArr.forEach((element) => {\n    newLiTag += `<li>\n       <div class=\"left\">\n       <input type=\"checkbox\" onclick=\"completeTask(${element.index});\">\n       <input type=\"text\" class=\"task\" id=\"task${element.index}\" value=\"${element.description}\" readonly>\n       </div>\n       <div class=\"right\">\n       <i class=\"fa-solid fa-pen-to-square edit \" id=\"edit${element.index}\" onclick=\"editTask(${element.index});\"></i>\n       <i class=\"fa-solid fa-floppy-disk save hide\" id=\"save${element.index}\" onclick=\"saveTask(${element.index});\"></i>\n       <i class=\"fa-solid fa-trash delete\" id=\"del\" onclick=\"deleteTask(${element.index});\"></i>       \n</div>\n       </li><hr>`;\n  });\n  _index_js__WEBPACK_IMPORTED_MODULE_0__.list.innerHTML = newLiTag;\n  _index_js__WEBPACK_IMPORTED_MODULE_0__.newTask.focus();\n};\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/showTask.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);