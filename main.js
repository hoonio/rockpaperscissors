/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var resetGame = function resetGame() {
	document.getElementById("message").innerHTML = "Pick your move";
	document.getElementById("player-move").innerHTML = "";
	document.getElementById("computer-move").innerHTML = "";
	toggleButtons();
};

var playerMove = function playerMove(playerInput) {
	var computerChoice = generateComputerMove();
	var playerChoice = playerInput < 3 ? playerInput : generateComputerMove();
	var playerPhrase = playerInput < 3 ? "You picked " : "On your behalf, computer picked ";

	document.getElementById("message").innerHTML = compareHands(playerChoice, computerChoice);
	document.getElementById("player-move").innerHTML = playerPhrase + convertValueToShape(playerChoice);
	document.getElementById("computer-move").innerHTML = "Computer picked " + convertValueToShape(computerChoice);

	toggleButtons();
};

var toggleButtons = function toggleButtons() {
	var buttons = document.getElementsByTagName("button");
	for (var i = 0; i < buttons.length; i++) {
		var button = buttons[i];
		button.classList.toggle("hidden");
	}
};

var convertValueToShape = function convertValueToShape(choiceValue) {
	var valueString = void 0;
	switch (choiceValue) {
		case 0:
			valueString = "rock";
			break;
		case 1:
			valueString = "paper";
			break;
		default:
			valueString = "scissors";
			break;
	}
	return valueString;
};

var compareHands = function compareHands(playerHand, computerHand) {
	if (playerHand == 0 && computerHand == 2) {
		return "You won";
	} else if (playerHand == 2 && computerHand == 0) {
		return "You lose";
	} else if (playerHand > computerHand) {
		return "You won";
	} else if (playerHand < computerHand) {
		return "You lose";
	} else {
		return "It's a tie";
	}
};

var generateComputerMove = function generateComputerMove() {
	return Math.floor(3 * Math.random());
};

module.exports = { resetGame: resetGame, playerMove: playerMove, toggleButtons: toggleButtons };

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(1);

document.getElementById("reset").addEventListener("click", function () {
  _module2.default.resetGame();
});

var playButtons = document.getElementsByClassName("play-choice");

var _loop = function _loop() {
  var button = playButtons[i];
  var playerValue = i;
  button.addEventListener("click", function () {
    _module2.default.playerMove(playerValue);
  });
};

for (var i = 0; i < playButtons.length; i++) {
  _loop();
}

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map