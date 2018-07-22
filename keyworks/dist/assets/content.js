/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/content.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/key-string/detectKeyString.js":
/*!****************************************************!*\
  !*** ./node_modules/key-string/detectKeyString.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = detectKeyString;\n\nvar _keyStringMap = __webpack_require__(/*! ./keyStringMap.js */ \"./node_modules/key-string/keyStringMap.js\");\n\nvar _keyStringMap2 = _interopRequireDefault(_keyStringMap);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * @param event {KeyboardEvent}\n * @returns {String}\n */\nfunction detectKeyString(event) {\n  var keyString = \"\";\n  if (event.shiftKey) {\n    keyString = \"Shift+\" + keyString;\n  }\n  if (event.ctrlKey) {\n    keyString = \"Ctrl+\" + keyString;\n  }\n  if (event.altKey) {\n    keyString = \"Alt+\" + keyString;\n  }\n  if (event.metaKey) {\n    keyString = \"Meta+\" + keyString;\n  }\n  keyString += _keyStringMap2.default[event.keyCode] || \"Unknown\";\n  return keyString;\n}\n\n//# sourceURL=webpack:///./node_modules/key-string/detectKeyString.js?");

/***/ }),

/***/ "./node_modules/key-string/index.js":
/*!******************************************!*\
  !*** ./node_modules/key-string/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.keyStringMap = exports.detectKeyString = undefined;\n\nvar _detectKeyString = __webpack_require__(/*! ./detectKeyString.js */ \"./node_modules/key-string/detectKeyString.js\");\n\nvar _detectKeyString2 = _interopRequireDefault(_detectKeyString);\n\nvar _keyStringMap = __webpack_require__(/*! ./keyStringMap.js */ \"./node_modules/key-string/keyStringMap.js\");\n\nvar _keyStringMap2 = _interopRequireDefault(_keyStringMap);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.detectKeyString = _detectKeyString2.default;\nexports.keyStringMap = _keyStringMap2.default;\n\n//# sourceURL=webpack:///./node_modules/key-string/index.js?");

/***/ }),

/***/ "./node_modules/key-string/keyStringMap.js":
/*!*************************************************!*\
  !*** ./node_modules/key-string/keyStringMap.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar keyStringMap = {\n  8: \"BackSpace\",\n  9: \"Tab\",\n  13: \"Return\",\n  27: \"Esc\",\n  32: \"Space\",\n  33: \"PageUp\",\n  34: \"PageDown\",\n  35: \"End\",\n  36: \"Home\",\n  37: \"Left\",\n  38: \"Up\",\n  39: \"Right\",\n  40: \"Down\",\n  45: \"Insert\",\n  46: \"Delete\",\n  48: \"0\",\n  49: \"1\",\n  50: \"2\",\n  51: \"3\",\n  52: \"4\",\n  53: \"5\",\n  54: \"6\",\n  55: \"7\",\n  56: \"8\",\n  57: \"9\",\n  65: \"A\",\n  66: \"B\",\n  67: \"C\",\n  68: \"D\",\n  69: \"E\",\n  70: \"F\",\n  71: \"G\",\n  72: \"H\",\n  73: \"I\",\n  74: \"J\",\n  75: \"K\",\n  76: \"L\",\n  77: \"M\",\n  78: \"N\",\n  79: \"O\",\n  80: \"P\",\n  81: \"Q\",\n  82: \"R\",\n  83: \"S\",\n  84: \"T\",\n  85: \"U\",\n  86: \"V\",\n  87: \"W\",\n  88: \"X\",\n  89: \"Y\",\n  90: \"Z\",\n  112: \"F1\",\n  113: \"F2\",\n  114: \"F3\",\n  115: \"F4\",\n  116: \"F5\",\n  117: \"F6\",\n  118: \"F7\",\n  119: \"F8\",\n  120: \"F9\",\n  121: \"F10\",\n  122: \"F11\",\n  123: \"F12\",\n  186: \":\",\n  187: \";\",\n  188: \",\",\n  189: \"-\",\n  190: \".\",\n  191: \"/\",\n  192: \"@\",\n  219: \"[\",\n  220: \"\\\\\",\n  221: \"]\",\n  222: \"^\",\n  226: \"\\\\\"\n};\n\nexports.default = keyStringMap;\n\n//# sourceURL=webpack:///./node_modules/key-string/keyStringMap.js?");

/***/ }),

/***/ "./src/actions.js":
/*!************************!*\
  !*** ./src/actions.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_CopyToClipboardAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions/CopyToClipboardAction */ \"./src/actions/CopyToClipboardAction.js\");\n\n\nvar actions = {\n  CopyToClipboard: _actions_CopyToClipboardAction__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (actions);\n\n//# sourceURL=webpack:///./src/actions.js?");

/***/ }),

/***/ "./src/actions/Action.js":
/*!*******************************!*\
  !*** ./src/actions/Action.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Action = function () {\n  function Action(_ref) {\n    var value = _ref.value;\n\n    _classCallCheck(this, Action);\n\n    this.value = value;\n  }\n\n  _createClass(Action, [{\n    key: \"run\",\n    value: function run() {}\n  }]);\n\n  return Action;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Action);\n\n//# sourceURL=webpack:///./src/actions/Action.js?");

/***/ }),

/***/ "./src/actions/CopyToClipboardAction.js":
/*!**********************************************!*\
  !*** ./src/actions/CopyToClipboardAction.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ \"./src/actions/Action.js\");\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\nfunction copyToClipboard(string) {\n  var textarea = document.createElement('textarea');\n  textarea.style.cssText = 'position: absolute; left: -100%;';\n  document.body.appendChild(textarea);\n  textarea.value = string;\n  textarea.select();\n  document.execCommand('copy');\n  document.body.removeChild(textarea);\n}\n\nfunction format(template, variables) {\n  return Object.keys(variables).reduce(function (result, variableName) {\n    return result.replace('${' + variableName + '}', variables[variableName]);\n  }, template);\n}\n\nvar CopyToClipboardAction = function (_Action) {\n  _inherits(CopyToClipboardAction, _Action);\n\n  function CopyToClipboardAction() {\n    _classCallCheck(this, CopyToClipboardAction);\n\n    return _possibleConstructorReturn(this, (CopyToClipboardAction.__proto__ || Object.getPrototypeOf(CopyToClipboardAction)).apply(this, arguments));\n  }\n\n  _createClass(CopyToClipboardAction, [{\n    key: 'run',\n    value: function run() {\n      copyToClipboard(format(this.value, {\n        title: document.title,\n        url: location.href\n      }));\n    }\n  }]);\n\n  return CopyToClipboardAction;\n}(_Action__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CopyToClipboardAction);\n\n//# sourceURL=webpack:///./src/actions/CopyToClipboardAction.js?");

/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var key_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! key-string */ \"./node_modules/key-string/index.js\");\n/* harmony import */ var key_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(key_string__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ \"./src/actions.js\");\n\n\n\nvar getSettings = function getSettings() {\n  return new Promise(function (resolve) {\n    chrome.storage.sync.get('settings', function (_ref) {\n      var settings = _ref.settings;\n\n      resolve(settings);\n    });\n  });\n};\n\ngetSettings().then(function (settings) {\n  window.addEventListener('keydown', function (event) {\n    var keyString = Object(key_string__WEBPACK_IMPORTED_MODULE_0__[\"detectKeyString\"])(event);\n    var actionDefinition = settings.actionDefinitions[keyString];\n    if (actionDefinition) {\n      new _actions__WEBPACK_IMPORTED_MODULE_1__[\"default\"][actionDefinition.type](actionDefinition).run();\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/content.js?");

/***/ })

/******/ });