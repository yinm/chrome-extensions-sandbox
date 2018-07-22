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


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = detectKeyString;

var _keyStringMap = __webpack_require__(/*! ./keyStringMap.js */ "./node_modules/key-string/keyStringMap.js");

var _keyStringMap2 = _interopRequireDefault(_keyStringMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param event {KeyboardEvent}
 * @returns {String}
 */
function detectKeyString(event) {
  var keyString = "";
  if (event.shiftKey) {
    keyString = "Shift+" + keyString;
  }
  if (event.ctrlKey) {
    keyString = "Ctrl+" + keyString;
  }
  if (event.altKey) {
    keyString = "Alt+" + keyString;
  }
  if (event.metaKey) {
    keyString = "Meta+" + keyString;
  }
  keyString += _keyStringMap2.default[event.keyCode] || "Unknown";
  return keyString;
}

/***/ }),

/***/ "./node_modules/key-string/index.js":
/*!******************************************!*\
  !*** ./node_modules/key-string/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keyStringMap = exports.detectKeyString = undefined;

var _detectKeyString = __webpack_require__(/*! ./detectKeyString.js */ "./node_modules/key-string/detectKeyString.js");

var _detectKeyString2 = _interopRequireDefault(_detectKeyString);

var _keyStringMap = __webpack_require__(/*! ./keyStringMap.js */ "./node_modules/key-string/keyStringMap.js");

var _keyStringMap2 = _interopRequireDefault(_keyStringMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.detectKeyString = _detectKeyString2.default;
exports.keyStringMap = _keyStringMap2.default;

/***/ }),

/***/ "./node_modules/key-string/keyStringMap.js":
/*!*************************************************!*\
  !*** ./node_modules/key-string/keyStringMap.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var keyStringMap = {
  8: "BackSpace",
  9: "Tab",
  13: "Return",
  27: "Esc",
  32: "Space",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "Left",
  38: "Up",
  39: "Right",
  40: "Down",
  45: "Insert",
  46: "Delete",
  48: "0",
  49: "1",
  50: "2",
  51: "3",
  52: "4",
  53: "5",
  54: "6",
  55: "7",
  56: "8",
  57: "9",
  65: "A",
  66: "B",
  67: "C",
  68: "D",
  69: "E",
  70: "F",
  71: "G",
  72: "H",
  73: "I",
  74: "J",
  75: "K",
  76: "L",
  77: "M",
  78: "N",
  79: "O",
  80: "P",
  81: "Q",
  82: "R",
  83: "S",
  84: "T",
  85: "U",
  86: "V",
  87: "W",
  88: "X",
  89: "Y",
  90: "Z",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  186: ":",
  187: ";",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "@",
  219: "[",
  220: "\\",
  221: "]",
  222: "^",
  226: "\\"
};

exports.default = keyStringMap;

/***/ }),

/***/ "./src/actions.js":
/*!************************!*\
  !*** ./src/actions.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_CopyToClipboardAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions/CopyToClipboardAction */ "./src/actions/CopyToClipboardAction.js");


var actions = {
  CopyToClipboard: _actions_CopyToClipboardAction__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/* harmony default export */ __webpack_exports__["default"] = (actions);

/***/ }),

/***/ "./src/actions/Action.js":
/*!*******************************!*\
  !*** ./src/actions/Action.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Action = function () {
  function Action(_ref) {
    var value = _ref.value;

    _classCallCheck(this, Action);

    this.value = value;
  }

  _createClass(Action, [{
    key: "run",
    value: function run() {}
  }]);

  return Action;
}();

/* harmony default export */ __webpack_exports__["default"] = (Action);

/***/ }),

/***/ "./src/actions/CopyToClipboardAction.js":
/*!**********************************************!*\
  !*** ./src/actions/CopyToClipboardAction.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ "./src/actions/Action.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



function copyToClipboard(string) {
  var textarea = document.createElement('textarea');
  textarea.style.cssText = 'position: absolute; left: -100%;';
  document.body.appendChild(textarea);
  textarea.value = string;
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

function format(template, variables) {
  return Object.keys(variables).reduce(function (result, variableName) {
    return result.replace('${' + variableName + '}', variables[variableName]);
  }, template);
}

var CopyToClipboardAction = function (_Action) {
  _inherits(CopyToClipboardAction, _Action);

  function CopyToClipboardAction() {
    _classCallCheck(this, CopyToClipboardAction);

    return _possibleConstructorReturn(this, (CopyToClipboardAction.__proto__ || Object.getPrototypeOf(CopyToClipboardAction)).apply(this, arguments));
  }

  _createClass(CopyToClipboardAction, [{
    key: 'run',
    value: function run() {
      copyToClipboard(format(this.value, {
        title: document.title,
        url: location.href
      }));
    }
  }]);

  return CopyToClipboardAction;
}(_Action__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (CopyToClipboardAction);

/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var key_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! key-string */ "./node_modules/key-string/index.js");
/* harmony import */ var key_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(key_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/actions.js");



var getSettings = function getSettings() {
  return new Promise(function (resolve) {
    chrome.storage.sync.get('settings', function (_ref) {
      var settings = _ref.settings;

      resolve(settings);
    });
  });
};

getSettings().then(function (settings) {
  window.addEventListener('keydown', function (event) {
    var keyString = Object(key_string__WEBPACK_IMPORTED_MODULE_0__["detectKeyString"])(event);
    var actionDefinition = settings.actionDefinitions[keyString];
    if (actionDefinition) {
      new _actions__WEBPACK_IMPORTED_MODULE_1__["default"][actionDefinition.type](actionDefinition).run();
    }
  });
});

/***/ })

/******/ });
//# sourceMappingURL=content.js.map