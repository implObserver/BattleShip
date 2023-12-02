"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/views/styles/main.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/views/styles/main.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/views/images/dot.svg */ "./src/views/images/dot.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::before,
*::after {
    padding: 0;
    margin: 0;
    border: 0;
    height: 100%;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
}

:root {
    font-size: min(2vh, 2vw);
    --board-width: 0;
    --board-height: 0;
    --cell-size: min(5vh, 2vw);
}

html {
    font-family: Roboto;
}

.wrapper {
    display: grid;
    grid-template-rows: min-content 1fr min-content;
    width: 100%;
    height: 100%;
    row-gap: min(2vh, 0.8vw);
    justify-items: center;
    width: min-content;
}

span {
    display: grid;
    padding: min(1vh, 0.4vw);
    height: min-content;
    min-width: max-content;
}

.header {
    display: grid;
    grid-template-columns: 1fr 1fr min-content;
    justify-items: center;
    align-items: center;
    width: 100%;
    height: min-content;
    padding: min(2vh, 0.8vw);
}

.title {
    display: grid;
    font-size: 3rem;
}

.tips {
    display: grid;
    background-color: rgba(128, 128, 128, 0.2);
    align-items: center;
    padding: min(1vh, 1vw);
    border-radius: min(2vh, 0.8vw);
    height: min-content;
}

.exit {
    display: grid;
}

.main {
    display: grid;
    width: max-content;
    max-width: inherit;
    justify-items: center;
    justify-content: center;
    align-items: center;
    align-content: center;
}

.shipyard {
    display: grid;
    align-content: center;
    grid-template-rows: repeat(4, min-content);
    row-gap: min(6vh, 2.4vw);
    padding: min(2vh, 0.8vw);
    width: min(40vh, 16vw);
    height: min(40vh, 16vw);
    max-width: min(50vh, 20vw);
    align-self: center;
}

.dock {
    display: flex;
    column-gap: min(4vh, 1.6vw);
    height: min-content;
}

.board__axis-wrapper {
    display: grid;
    grid-template-rows: 1fr min-content;
    row-gap: min(2vh, 0.8vw);
    width: min-content;
    height: min-content;
    justify-items: center;
    padding: min(5vh, 2vw);
}

.axis-wrapper {
    display: grid;
    width: min-content;
    grid-template-rows: min-content 1fr;
}

.board-wrapper {
    display: grid;
    grid-template-areas:
        'axis-x axis-x axis-x'
        'shipyard axis-y board';
}

.x-axis {
    display: grid;
    grid-area: axis-x;
    width: min-content;
    height: min-content;
    justify-self: end;
    grid-template-columns: repeat(var(--board-width),
            max(var(--cell-size), 2vh));
}

.y-axis {
    display: grid;
    grid-area: axis-y;
    grid-template-rows: repeat(var(--board-height), 2fr);
    width: min-content;
}

.board {
    display: grid;
    grid-area: board;
    grid-template-columns: repeat(var(--board-width), 2fr);
    grid-template-rows: repeat(var(--board-height), 2fr);
    border: min(0.5vh, 0.2vw) rgba(0, 0, 255, 0.2) solid;
}

.play {
    display: grid;
    grid-area: board;
    justify-self: center;
    align-self: center;
    width: min(10vh, 10vw);
    height: min(10vh, 10vw);
    min-width: 2vh;
    min-height: 2vh;
    background-color: rgba(119, 202, 41, 0.726);
    border: min(1vh, 1vw) rgb(119, 202, 41) solid;
    z-index: 998;
}

.ai-mini-shipyard,
.player-mini-shipyard {
    display: grid;
    width: min-content;
    height: min-content;
    row-gap: min(2vh, 0.8vw);
    padding: min(3vh, 1.2vw);
}

.low-opacity {
    opacity: 0.4;
}

.block {
    pointer-events: none;
}

.hidden {
    display: none;
}

.marker {
    display: grid;
    justify-self: right;
    width: min-content;
}

.cell {
    display: grid;
    width: var(--cell-size);
    height: var(--cell-size);
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    min-width: 2vh;
    min-height: 2vh;
}

.miss-hit {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: 100% 100%;
}

.destroyed {
    display: grid;
    border: 1px red solid;
}

.live {}

.x-cell,
.y-cell {
    justify-items: center;
    align-content: center;
    opacity: 0.5;
}

.marine-sector {
    display: grid;
    border: min(0.1vh, 0.1vw) rgba(0, 0, 255, 0.2) solid;
}

.ship {
    --x: 0px;
    --y: 0px;
    transform: translate(var(--x), var(--y));
    display: grid;
    align-content: center;
    justify-content: center;
    margin-left: -1px;
    margin-top: -1px;
    border: min(0.1vh, 0.1vw) rgba(0, 0, 255, 1) solid;
    width: min-content;
    height: min-content;
    touch-action: none;
}

.draggable {}

.horizontal {
    grid-template-columns: repeat(4, 2fr);
}

.vertical {
    grid-template-rows: repeat(4, 2fr);
}

.deck {
    display: grid;
    background-color: rgba(0, 0, 255, 0.1);
    z-index: 999;
}

.deck>svg {
    display: grid;
    width: 100%;
    height: 100%;
}

.mini-ship {
    height: min-content !important;
    width: min-content !important;
}

.mini-cell {
    min-width: 1vh;
    min-height: 1vh;
    width: min(2vh, 0.8vw);
    height: min(2vh, 0.8vw);
    background-color: rgba(0, 255, 0, 0.1);
    border: min(0.1vh, 0.1vw) rgba(0, 255, 255, 1) solid;
}

.footer {
    display: grid;
    grid-template-columns: min-content min-content;
    width: 100%;
    justify-content: center;
    gap: min(4vh, 1.6vw);
}

.random-mode,
.manual-mode {
    height: min-content;
    display: grid;
    border-bottom: 1px dotted blue;
    color: blue;
    cursor: pointer;
}

.random-mode:hover,
.manual-mode:hover {
    color: rgb(122, 231, 72);
    border-bottom: 1px dotted rgb(122, 231, 72);
}

.timer {
    display: grid;
    width: 100vw;
    height: min(2vh, 0.8vw);
    justify-self: start;
}

.timer>svg {
    display: grid;

    width: 100vw;
}

.hidden {
    display: none;
}

.null-opacity {
    opacity: 0;
}

.popup-win,
.popup-lose {
    position: fixed;
    display: grid;
    grid-template-rows: repeat(auto-fit, min-content);
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    top: 0;
    left: 0;
    justify-items: center;
    align-items: center;
    visibility: hidden;
    opacity: 0;
    padding: min(1vh, 1vw);
    z-index: 1000;
}

.text {
    display: grid;
    color: white;
    font-size: min(10vh, 10vw);
}

.win,
.lose {
    display: grid;
    grid-template-rows: repeat(3, min-content);
    height: min-content;
    justify-items: center;
    z-index: 2000;
}

.gif-container {
    display: flex;
    justify-self: center;
    width: min(100vh, 100vw);
    height: 0;
    padding-bottom: min(56vh, 22.4vw);
    position: relative;
    pointer-events: none;
}

.selected {
    opacity: 0.01 !important;
}

@media screen and (max-aspect-ratio: 1.00001/1) {
    .main {
        grid-template-rows: min-content min-content;
    }

    .shipyard {
        justify-self: center;
        padding-bottom: 2vh;
    }
}

@media screen and (min-aspect-ratio: 1/1) {
    .main {
        grid-template-columns: min-content min-content;
    }

    .ai-board {
        align-self: start;
    }
}

.cross {
    border: 1px red solid;
}`, "",{"version":3,"sources":["webpack://./src/views/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    border: 0;\n    height: 100%;\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n}\n\n:root {\n    font-size: min(2vh, 2vw);\n    --board-width: 0;\n    --board-height: 0;\n    --cell-size: min(5vh, 2vw);\n}\n\nhtml {\n    font-family: Roboto;\n}\n\n.wrapper {\n    display: grid;\n    grid-template-rows: min-content 1fr min-content;\n    width: 100%;\n    height: 100%;\n    row-gap: min(2vh, 0.8vw);\n    justify-items: center;\n    width: min-content;\n}\n\nspan {\n    display: grid;\n    padding: min(1vh, 0.4vw);\n    height: min-content;\n    min-width: max-content;\n}\n\n.header {\n    display: grid;\n    grid-template-columns: 1fr 1fr min-content;\n    justify-items: center;\n    align-items: center;\n    width: 100%;\n    height: min-content;\n    padding: min(2vh, 0.8vw);\n}\n\n.title {\n    display: grid;\n    font-size: 3rem;\n}\n\n.tips {\n    display: grid;\n    background-color: rgba(128, 128, 128, 0.2);\n    align-items: center;\n    padding: min(1vh, 1vw);\n    border-radius: min(2vh, 0.8vw);\n    height: min-content;\n}\n\n.exit {\n    display: grid;\n}\n\n.main {\n    display: grid;\n    width: max-content;\n    max-width: inherit;\n    justify-items: center;\n    justify-content: center;\n    align-items: center;\n    align-content: center;\n}\n\n.shipyard {\n    display: grid;\n    align-content: center;\n    grid-template-rows: repeat(4, min-content);\n    row-gap: min(6vh, 2.4vw);\n    padding: min(2vh, 0.8vw);\n    width: min(40vh, 16vw);\n    height: min(40vh, 16vw);\n    max-width: min(50vh, 20vw);\n    align-self: center;\n}\n\n.dock {\n    display: flex;\n    column-gap: min(4vh, 1.6vw);\n    height: min-content;\n}\n\n.board__axis-wrapper {\n    display: grid;\n    grid-template-rows: 1fr min-content;\n    row-gap: min(2vh, 0.8vw);\n    width: min-content;\n    height: min-content;\n    justify-items: center;\n    padding: min(5vh, 2vw);\n}\n\n.axis-wrapper {\n    display: grid;\n    width: min-content;\n    grid-template-rows: min-content 1fr;\n}\n\n.board-wrapper {\n    display: grid;\n    grid-template-areas:\n        'axis-x axis-x axis-x'\n        'shipyard axis-y board';\n}\n\n.x-axis {\n    display: grid;\n    grid-area: axis-x;\n    width: min-content;\n    height: min-content;\n    justify-self: end;\n    grid-template-columns: repeat(var(--board-width),\n            max(var(--cell-size), 2vh));\n}\n\n.y-axis {\n    display: grid;\n    grid-area: axis-y;\n    grid-template-rows: repeat(var(--board-height), 2fr);\n    width: min-content;\n}\n\n.board {\n    display: grid;\n    grid-area: board;\n    grid-template-columns: repeat(var(--board-width), 2fr);\n    grid-template-rows: repeat(var(--board-height), 2fr);\n    border: min(0.5vh, 0.2vw) rgba(0, 0, 255, 0.2) solid;\n}\n\n.play {\n    display: grid;\n    grid-area: board;\n    justify-self: center;\n    align-self: center;\n    width: min(10vh, 10vw);\n    height: min(10vh, 10vw);\n    min-width: 2vh;\n    min-height: 2vh;\n    background-color: rgba(119, 202, 41, 0.726);\n    border: min(1vh, 1vw) rgb(119, 202, 41) solid;\n    z-index: 998;\n}\n\n.ai-mini-shipyard,\n.player-mini-shipyard {\n    display: grid;\n    width: min-content;\n    height: min-content;\n    row-gap: min(2vh, 0.8vw);\n    padding: min(3vh, 1.2vw);\n}\n\n.low-opacity {\n    opacity: 0.4;\n}\n\n.block {\n    pointer-events: none;\n}\n\n.hidden {\n    display: none;\n}\n\n.marker {\n    display: grid;\n    justify-self: right;\n    width: min-content;\n}\n\n.cell {\n    display: grid;\n    width: var(--cell-size);\n    height: var(--cell-size);\n    user-select: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    min-width: 2vh;\n    min-height: 2vh;\n}\n\n.miss-hit {\n    background-image: url(/src/views/images/dot.svg);\n    background-size: 100% 100%;\n}\n\n.destroyed {\n    display: grid;\n    border: 1px red solid;\n}\n\n.live {}\n\n.x-cell,\n.y-cell {\n    justify-items: center;\n    align-content: center;\n    opacity: 0.5;\n}\n\n.marine-sector {\n    display: grid;\n    border: min(0.1vh, 0.1vw) rgba(0, 0, 255, 0.2) solid;\n}\n\n.ship {\n    --x: 0px;\n    --y: 0px;\n    transform: translate(var(--x), var(--y));\n    display: grid;\n    align-content: center;\n    justify-content: center;\n    margin-left: -1px;\n    margin-top: -1px;\n    border: min(0.1vh, 0.1vw) rgba(0, 0, 255, 1) solid;\n    width: min-content;\n    height: min-content;\n    touch-action: none;\n}\n\n.draggable {}\n\n.horizontal {\n    grid-template-columns: repeat(4, 2fr);\n}\n\n.vertical {\n    grid-template-rows: repeat(4, 2fr);\n}\n\n.deck {\n    display: grid;\n    background-color: rgba(0, 0, 255, 0.1);\n    z-index: 999;\n}\n\n.deck>svg {\n    display: grid;\n    width: 100%;\n    height: 100%;\n}\n\n.mini-ship {\n    height: min-content !important;\n    width: min-content !important;\n}\n\n.mini-cell {\n    min-width: 1vh;\n    min-height: 1vh;\n    width: min(2vh, 0.8vw);\n    height: min(2vh, 0.8vw);\n    background-color: rgba(0, 255, 0, 0.1);\n    border: min(0.1vh, 0.1vw) rgba(0, 255, 255, 1) solid;\n}\n\n.footer {\n    display: grid;\n    grid-template-columns: min-content min-content;\n    width: 100%;\n    justify-content: center;\n    gap: min(4vh, 1.6vw);\n}\n\n.random-mode,\n.manual-mode {\n    height: min-content;\n    display: grid;\n    border-bottom: 1px dotted blue;\n    color: blue;\n    cursor: pointer;\n}\n\n.random-mode:hover,\n.manual-mode:hover {\n    color: rgb(122, 231, 72);\n    border-bottom: 1px dotted rgb(122, 231, 72);\n}\n\n.timer {\n    display: grid;\n    width: 100vw;\n    height: min(2vh, 0.8vw);\n    justify-self: start;\n}\n\n.timer>svg {\n    display: grid;\n\n    width: 100vw;\n}\n\n.hidden {\n    display: none;\n}\n\n.null-opacity {\n    opacity: 0;\n}\n\n.popup-win,\n.popup-lose {\n    position: fixed;\n    display: grid;\n    grid-template-rows: repeat(auto-fit, min-content);\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.8);\n    top: 0;\n    left: 0;\n    justify-items: center;\n    align-items: center;\n    visibility: hidden;\n    opacity: 0;\n    padding: min(1vh, 1vw);\n    z-index: 1000;\n}\n\n.text {\n    display: grid;\n    color: white;\n    font-size: min(10vh, 10vw);\n}\n\n.win,\n.lose {\n    display: grid;\n    grid-template-rows: repeat(3, min-content);\n    height: min-content;\n    justify-items: center;\n    z-index: 2000;\n}\n\n.gif-container {\n    display: flex;\n    justify-self: center;\n    width: min(100vh, 100vw);\n    height: 0;\n    padding-bottom: min(56vh, 22.4vw);\n    position: relative;\n    pointer-events: none;\n}\n\n.selected {\n    opacity: 0.01 !important;\n}\n\n@media screen and (max-aspect-ratio: 1.00001/1) {\n    .main {\n        grid-template-rows: min-content min-content;\n    }\n\n    .shipyard {\n        justify-self: center;\n        padding-bottom: 2vh;\n    }\n}\n\n@media screen and (min-aspect-ratio: 1/1) {\n    .main {\n        grid-template-columns: min-content min-content;\n    }\n\n    .ai-board {\n        align-self: start;\n    }\n}\n\n.cross {\n    border: 1px red solid;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/views/styles/main.css":
/*!***********************************!*\
  !*** ./src/views/styles/main.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/views/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/controllers/listeners/forLinks.js":
/*!***********************************************!*\
  !*** ./src/controllers/listeners/forLinks.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setListenersForLinks: () => (/* binding */ setListenersForLinks)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./src/index.js");
/* harmony import */ var _models_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/session */ "./src/models/session.js");
/* harmony import */ var _views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../views/animations/changeVisible */ "./src/views/animations/changeVisible.js");
/* harmony import */ var _views_nodes_shipyard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../views/nodes/shipyard */ "./src/views/nodes/shipyard.js");





const setListenersForLinks = () => {
    const manualModeLink = document.querySelector('.manual-mode');
    const randomModeLink = document.querySelector('.random-mode');
    const shipyard = document.querySelector('.shipyard');

    const openManualMode = manualModeLink.addEventListener('click', (e) => {
        _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.manualMode = true;
        ___WEBPACK_IMPORTED_MODULE_0__.game.player.getGameboard().reset();
        (0,_views_nodes_shipyard__WEBPACK_IMPORTED_MODULE_3__.viewShipyard)(___WEBPACK_IMPORTED_MODULE_0__.game.player.getShipyard());
        (0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_2__.setHidden)(___WEBPACK_IMPORTED_MODULE_0__.game.ai.getGameboard().getNode());
        (0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_2__.removeHidden)(shipyard);
    });

    const openRandomMode = randomModeLink.addEventListener('click', (e) => {
        _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.manualMode = false;
        (0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_2__.removeHidden)(___WEBPACK_IMPORTED_MODULE_0__.game.ai.getGameboard().getNode());
        (0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_2__.setHidden)(shipyard);
        ___WEBPACK_IMPORTED_MODULE_0__.game.player.getGameboard().randomFillingOfShips();
    });
};


/***/ }),

/***/ "./src/controllers/listeners/forPlay.js":
/*!**********************************************!*\
  !*** ./src/controllers/listeners/forPlay.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setListenersForCells: () => (/* binding */ setListenersForCells),
/* harmony export */   setListenersForExitButton: () => (/* binding */ setListenersForExitButton),
/* harmony export */   setListenersForPlayButton: () => (/* binding */ setListenersForPlayButton)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./src/index.js");
/* harmony import */ var _models_elements_audioEffects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/elements/audioEffects */ "./src/models/elements/audioEffects.js");



const setListenersForPlayButton = () => {
    const button = document.querySelector('.play');
    const click = button.addEventListener('click', (e) => {
        _models_elements_audioEffects__WEBPACK_IMPORTED_MODULE_1__.clickEffect.play();
        ___WEBPACK_IMPORTED_MODULE_0__.game.play();
    });
};

const setListenersForExitButton = () => {
    const button = document.querySelector('.exit');

    const click = button.addEventListener('click', (e) => {
        _models_elements_audioEffects__WEBPACK_IMPORTED_MODULE_1__.clickEffect.play();
        ___WEBPACK_IMPORTED_MODULE_0__.game.end();
    });
};

const setListenersForCells = () => {
    const cells = ___WEBPACK_IMPORTED_MODULE_0__.game.ai.getGameboard().getUnstructedContainer();
    cells.forEach((cell) => {
        const node = cell.getCellNode();
        node.style.zIndex = 1000;
        const click = node.addEventListener('click', (e) => {
            ___WEBPACK_IMPORTED_MODULE_0__.game.gameHandler.checkCell(cell);
        });
    });
};


/***/ }),

/***/ "./src/controllers/listeners/forPopups.js":
/*!************************************************!*\
  !*** ./src/controllers/listeners/forPopups.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setListenersforPopups: () => (/* binding */ setListenersforPopups)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./src/index.js");
/* harmony import */ var _views_nodes_popups__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../views/nodes/popups */ "./src/views/nodes/popups.js");



const setListenersforPopups = () => {
    const popups = document.querySelectorAll('.popup');
    popups.forEach((popup) => {
        const click = popup.addEventListener('click', (e) => {
            (0,_views_nodes_popups__WEBPACK_IMPORTED_MODULE_1__.hiddenPopup)(popup);
            ___WEBPACK_IMPORTED_MODULE_0__.game.end();
        });
    });
};


/***/ }),

/***/ "./src/controllers/listeners/forShips.js":
/*!***********************************************!*\
  !*** ./src/controllers/listeners/forShips.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setListenersForShips: () => (/* binding */ setListenersForShips)
/* harmony export */ });
/* harmony import */ var _models_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/game */ "./src/models/game.js");
/* harmony import */ var _models_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/session */ "./src/models/session.js");
/* harmony import */ var _views_nodes_ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../views/nodes/ship */ "./src/views/nodes/ship.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ship */ "./src/controllers/ship.js");





const setListenersForShips = (ships) => {
    const border = document.querySelector('.player-board');

    ships.forEach((ship) => {
        const decks = ship.getBody();
        decks.forEach((deck) => {
            deck.getCellNode().addEventListener('mousedown', (evt) => {
                _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.index = deck.getNumber();
            });

            deck.getCellNode().addEventListener('touchstart', (evt) => {
                const { left, top, width, height } = deck.getCellNode().getBoundingClientRect()
                const centerX = left + width / 2
                const centerY = top + height / 2
                _models_game__WEBPACK_IMPORTED_MODULE_0__.Coordinates.setCoordinates(centerX, centerY);
            });

            deck.getCellNode().addEventListener('touchend', (evt) => {
                let event = new Event('mousedown');
                deck.getCellNode().dispatchEvent(event);
            });
        });

        ship.getContainer().addEventListener('click', (e) => {
            if (ship.getHead() !== null) {
                _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.activeShip = ship;
                _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.currentElement = ship.getHead().getCellNode();
                ship.orientationSwitch();
                let isView = (0,_views_nodes_ship__WEBPACK_IMPORTED_MODULE_2__.viewShip)(ship, ship.getHead());

                if (isView) {
                    ship.setOrientation();
                } else {
                    ship.orientationSwitch();
                }

                (0,_models_session__WEBPACK_IMPORTED_MODULE_1__.resetSession)();
            }
        });

        ship.getContainer().addEventListener(`dragstart`, (evt) => {
            evt.target.classList.add(`selected`);
            _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.activeShip = ship;
        });

        ship.getContainer().addEventListener(`dragend`, (evt) => {
            _models_game__WEBPACK_IMPORTED_MODULE_0__.Coordinates.reset();
            evt.target.classList.remove(`selected`);
            ship.getContainer().style.setProperty('--y', `0px`);
            ship.getContainer().style.setProperty('--x', `0px`);
            (0,_ship__WEBPACK_IMPORTED_MODULE_3__.shipDragEnd)();
            (0,_models_session__WEBPACK_IMPORTED_MODULE_1__.resetSession)();
        });

        ship.getContainer().addEventListener(`touchstart`, (evt) => {
            _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.activeShip = ship;
        });

        ship.getContainer().addEventListener(`touchend`, (evt) => {
            let event = new DragEvent('dragend');
            ship.getContainer().dispatchEvent(event);
        });

        ship.getContainer().addEventListener(`touchmove`, (e) => {
            let cursorX = e.touches[0].clientX;
            let cursorY = e.touches[0].clientY;
            setCurrentElementForMobileDrag(cursorX, cursorY);
            (0,_views_nodes_ship__WEBPACK_IMPORTED_MODULE_2__.viewDragShipForMobile)(cursorX, cursorY, ship.getContainer());
        });
    });

    border.addEventListener(`dragover`, (evt) => {
        _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.currentElement = evt.target;
    });

    const setCurrentElementForMobileDrag = (cursorX, cursorY) => {
        const elements = document.elementsFromPoint(cursorX, cursorY);
        elements.forEach(element => {
            if (element.classList.contains('marine-sector')) {
                _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.currentElement = element;
            }
        })
    }
};


/***/ }),

/***/ "./src/controllers/ship.js":
/*!*********************************!*\
  !*** ./src/controllers/ship.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shipDragEnd: () => (/* binding */ shipDragEnd)
/* harmony export */ });
/* harmony import */ var _models_gameConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/gameConfig */ "./src/models/gameConfig.js");
/* harmony import */ var _models_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/session */ "./src/models/session.js");
/* harmony import */ var _views_nodes_ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/nodes/ship */ "./src/views/nodes/ship.js");




const shipDragEnd = () => {
    let isMoveable = false;
    let isAlterMovable = false;
    let body = _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.activeShip.getBody();
    
    if (_models_session__WEBPACK_IMPORTED_MODULE_1__.Session.currentElement !== null) {
        isMoveable = _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.currentElement.classList.contains(`marine-sector`);
        isAlterMovable = _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.currentElement.classList.contains(`deck`);
    }

    if (!isMoveable && !isAlterMovable) {
        return false;
    }

    if (isMoveable) {
        for (let i = 0; i < _models_gameConfig__WEBPACK_IMPORTED_MODULE_0__.Config.Gameboard.height; i++) {
            for (let j = 0; j < _models_gameConfig__WEBPACK_IMPORTED_MODULE_0__.Config.Gameboard.width; j++) {
                if (
                    _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.activeShip
                        .getBoard()
                        .getStructedContainer()
                        [j][i].getCellNode() === _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.currentElement
                ) {
                    return addShipOnBoard(_models_session__WEBPACK_IMPORTED_MODULE_1__.Session.index, j, i);
                }
            }
        }
    } else if (isAlterMovable) {
        for (let i = 0; i < body.length; i++) {
            if (body[i].getCellNode() === _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.currentElement) {
                _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.doubleIndex = _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.index - i;
            }
        }
        if (_models_session__WEBPACK_IMPORTED_MODULE_1__.Session.doubleIndex !== 'ship') {
            let head = _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.activeShip.getHead().getCellNode();
            for (let i = 0; i < _models_gameConfig__WEBPACK_IMPORTED_MODULE_0__.Config.Gameboard.height; i++) {
                for (let j = 0; j < _models_gameConfig__WEBPACK_IMPORTED_MODULE_0__.Config.Gameboard.width; j++) {
                    if (
                        _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.activeShip
                            .getBoard()
                            .getStructedContainer()
                            [j][i].getCellNode() === head
                    ) {
                        return addShipOnBoard(_models_session__WEBPACK_IMPORTED_MODULE_1__.Session.doubleIndex, j, i);
                    }
                }
            }
        } else {
            return false;
        }
    }
};

const addShipOnBoard = (index, y, x) => {
    console.log('bbbcxvxcxcx')
    let data = getData(index, y, x);
    return viewShipOnBoard(data);
};

const getData = (index, x, y) => {
    return _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.activeShip.isHorizontal()
        ? { x: x, y: y - index }
        : { x: x - index, y: y };
};

const viewShipOnBoard = (data) => {
    return (0,_views_nodes_ship__WEBPACK_IMPORTED_MODULE_2__.viewShip)(
        _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.activeShip,
        _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.activeShip.getBoard().getStructedContainer()[data.x][data.y],
    );
};


/***/ }),

/***/ "./src/helper/helper.js":
/*!******************************!*\
  !*** ./src/helper/helper.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addClasses: () => (/* binding */ addClasses),
/* harmony export */   appendChilds: () => (/* binding */ appendChilds),
/* harmony export */   randomIntFromInterval: () => (/* binding */ randomIntFromInterval),
/* harmony export */   removeChilds: () => (/* binding */ removeChilds),
/* harmony export */   setAttributes: () => (/* binding */ setAttributes)
/* harmony export */ });
const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const removeChilds = (node) => {
    if (node !== null) {
        while (node.firstChild) {
            node.removeChild(node.lastChild);
        }
    }
};

const addClasses = (node, ...classes) => {
    for (let curClass of classes) {
        node.classList.add(curClass);
    }
};

const setAttributes = (e, atrs) => {
    for (let atr of atrs) {
        e.setAttribute(atr.name, atr.val);
    }
};

const appendChilds = (node, ...childs) => {
    for (let child of childs) {
        node.appendChild(child);
    }
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   game: () => (/* binding */ game)
/* harmony export */ });
/* harmony import */ var _models_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/game */ "./src/models/game.js");
/* harmony import */ var _views_styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/styles/main.css */ "./src/views/styles/main.css");



const game = (0,_models_game__WEBPACK_IMPORTED_MODULE_0__.Game)();
game.start();


/***/ }),

/***/ "./src/models/alphabets.js":
/*!*********************************!*\
  !*** ./src/models/alphabets.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Alphabets: () => (/* binding */ Alphabets)
/* harmony export */ });
const Alphabet = (firstCharCode, lastCharCode) => {
    const long = lastCharCode - firstCharCode + 1;
    const codes = Array.from(Array(long).keys(), (x) => x + firstCharCode);

    const isThisAlphabet = (charCode) => {
        if (charCode >= firstCharCode && charCode <= lastCharCode) {
            return true;
        }
        return false;
    };

    return { firstCharCode, lastCharCode, long, isThisAlphabet, codes };
};

const Alphabets = (() => {
    const eng = () => {
        const alphabet = Alphabet(97, 122);
        return Object.assign(alphabet);
    };

    const rus = () => {
        const alphabet = Alphabet(1072, 1103);
        return Object.assign(alphabet);
    };

    return { eng, rus };
})();


/***/ }),

/***/ "./src/models/cell.js":
/*!****************************!*\
  !*** ./src/models/cell.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cell: () => (/* binding */ Cell),
/* harmony export */   Deck: () => (/* binding */ Deck),
/* harmony export */   MarineSector: () => (/* binding */ MarineSector)
/* harmony export */ });
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/helper */ "./src/helper/helper.js");
/* harmony import */ var _views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/animations/changeVisible */ "./src/views/animations/changeVisible.js");
/* harmony import */ var _views_nodes_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/nodes/factory */ "./src/views/nodes/factory.js");




const Cell = (x = -1, y = -1, name = 'cell') => {
    let hit = false;
    let parent = 'free';
    let node = (0,_views_nodes_factory__WEBPACK_IMPORTED_MODULE_2__.getNode)(name, 'cell');
    let linkedDeck = 'free';

    const setLinkedDeck = (deck) => {
        linkedDeck = deck;
    };

    const getLinkedDeck = () => {
        return linkedDeck;
    };

    const setTheHit = () => {
        hit = true;
    };

    const isHit = () => {
        return hit;
    };

    const setParent = (nParent) => {
        parent = nParent;
    };

    const getParent = () => {
        return parent;
    };

    const getCellNode = () => {
        return node;
    };

    const getXY = () => {
        return { x, y };
    };

    const setXY = (nx, ny) => {
        x = nx;
        y = ny;
    };

    const reset = () => {
        hit = false;
        node.classList.remove('miss-hit');
        node.classList.remove('destroyed');
        (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.removeChilds)(node);
        (0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__.setNormalOpacity)(node);
    };

    return {
        setTheHit,
        isHit,
        setParent,
        getParent,
        getCellNode,
        getXY,
        setXY,
        setLinkedDeck,
        getLinkedDeck,
        reset,
    };
};

const Deck = (number) => {
    const prototype = Cell(-1, -1, 'deck');

    const getNumber = () => {
        return number;
    };

    return Object.assign(prototype, { getNumber });
};

const MarineSector = (y, x) => {
    const prototype = Cell(y, x, 'marine-sector');
    let occupant = 'free';

    const occupy = (nOccupant) => {
        occupant = nOccupant;
    };

    const clear = () => {
        occupant = 'free';
        prototype.reset();
    };

    const isFree = () => {
        return occupant === 'free';
    };

    const getOccupant = () => {
        return occupant;
    };

    return Object.assign(prototype, { isFree, clear, occupy, getOccupant });
};


/***/ }),

/***/ "./src/models/cellHandler.js":
/*!***********************************!*\
  !*** ./src/models/cellHandler.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CellHandler: () => (/* binding */ CellHandler)
/* harmony export */ });
const CellHandler = () => {
    const getBefore = (x, y, parent) => {
        try {
            return parent[y][--x];
        } catch (error) {
            return parent[y][++x];
        }
    };

    const getAfter = (x, y, parent) => {
        try {
            return parent[y][++x];
        } catch (error) {
            return parent[y][--x];
        }
    };

    const getOver = (x, y, parent) => {
        try {
            return parent[--y][x];
        } catch (error) {
            return parent[++y][x];
        }
    };

    const getUnder = (x, y, parent) => {
        try {
            return parent[++y][x];
        } catch (error) {
            return parent[--y][x];
        }
    };

    const getDiag1 = (x, y, parent) => {
        try {
            return parent[--y][--x];
        } catch (error) {
            return parent[++y][++x];
        }
    };

    const getDiag2 = (x, y, parent) => {
        try {
            return parent[--y][++x];
        } catch (error) {
            return parent[++y][--x];
        }
    };

    const getDiag3 = (x, y, parent) => {
        try {
            return parent[++y][++x];
        } catch (error) {
            return parent[--y][--x];
        }
    };

    const getDiag4 = (x, y, parent) => {
        try {
            return parent[++y][--x];
        } catch (error) {
            return parent[--y][++x];
        }
    };

    const getCellAroundArea = (x, y, parent) => {
        let cells = [];
        cells.push(getBefore(x, y, parent));
        cells.push(getAfter(x, y, parent));
        cells.push(getOver(x, y, parent));
        cells.push(getUnder(x, y, parent));
        cells.push(getDiag1(x, y, parent));
        cells.push(getDiag2(x, y, parent));
        cells.push(getDiag3(x, y, parent));
        cells.push(getDiag4(x, y, parent));
        cells = cells.filter((cell) => cell !== undefined);
        return cells;
    };

    const getDiads = (x, y, parent) => {
        let cells = [];
        cells.push(getDiag1(x, y, parent));
        cells.push(getDiag2(x, y, parent));
        cells.push(getDiag3(x, y, parent));
        cells.push(getDiag4(x, y, parent));
        cells = cells.filter((cell) => cell !== undefined);
        return cells;
    };

    return { getCellAroundArea, getDiads };
};


/***/ }),

/***/ "./src/models/elements/attributes.js":
/*!*******************************************!*\
  !*** ./src/models/elements/attributes.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CrossAttributes: () => (/* binding */ CrossAttributes),
/* harmony export */   HorizontalLine: () => (/* binding */ HorizontalLine)
/* harmony export */ });
const CrossAttributes = (() => {
    const line = [
        { name: 'stroke', val: 'red' },
        { name: 'stroke-width', val: '5%' },
        { name: 'stroke-linecap', val: 'round' },
        { name: 'stroke-dasharray', val: '120%' },
        { name: 'stroke-dashoffset', val: '120%' },
    ];
    const leftDiag = [
        { name: 'x1', val: '10%' },
        { name: 'y1', val: '10%' },
        { name: 'x2', val: '90%' },
        { name: 'y2', val: '90%' },
    ];
    const rightDiag = [
        { name: 'x2', val: '10%' },
        { name: 'y2', val: '90%' },
        { name: 'x1', val: '90%' },
        { name: 'y1', val: '10%' },
    ];
    return { line, leftDiag, rightDiag };
})();

const HorizontalLine = (() => {
    const horizontal = [
        { name: 'stroke', val: 'red' },
        { name: 'stroke-width', val: 'min(3vh ,3vw)' },
        { name: 'stroke-linecap', val: 'round' },
        { name: 'stroke-dasharray', val: '100vw' },
        { name: 'stroke-dashoffset', val: '100vw' },
        { name: 'x1', val: '0vw' },
        { name: 'y1', val: '0vw' },
        { name: 'x2', val: '100vw' },
        { name: 'y2', val: '0vw' },
    ];
    return { horizontal };
})();


/***/ }),

/***/ "./src/models/elements/audioEffects.js":
/*!*********************************************!*\
  !*** ./src/models/elements/audioEffects.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clickEffect: () => (/* binding */ clickEffect),
/* harmony export */   drawCross: () => (/* binding */ drawCross),
/* harmony export */   killShipEffect: () => (/* binding */ killShipEffect),
/* harmony export */   lose: () => (/* binding */ lose),
/* harmony export */   missEffect: () => (/* binding */ missEffect),
/* harmony export */   timerEffect: () => (/* binding */ timerEffect),
/* harmony export */   win: () => (/* binding */ win)
/* harmony export */ });
/* harmony import */ var _views_audio_cross_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../views/audio/cross.mp3 */ "./src/views/audio/cross.mp3");
/* harmony import */ var _views_audio_shot_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../views/audio/shot.mp3 */ "./src/views/audio/shot.mp3");
/* harmony import */ var _views_audio_boom_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../views/audio/boom.mp3 */ "./src/views/audio/boom.mp3");
/* harmony import */ var _views_audio_clickPlay_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../views/audio/clickPlay.mp3 */ "./src/views/audio/clickPlay.mp3");
/* harmony import */ var _views_audio_timer_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../views/audio/timer.mp3 */ "./src/views/audio/timer.mp3");
/* harmony import */ var _views_audio_win_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../views/audio/win.mp3 */ "./src/views/audio/win.mp3");
/* harmony import */ var _views_audio_lose_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../views/audio/lose.mp3 */ "./src/views/audio/lose.mp3");








const drawCross = (() => {
    let audio = new Audio(_views_audio_cross_mp3__WEBPACK_IMPORTED_MODULE_0__);
    audio.playbackRate = 3;
    audio.volume = 0.5;
    return audio;
})();

const missEffect = (() => {
    let audio = new Audio(_views_audio_shot_mp3__WEBPACK_IMPORTED_MODULE_1__);
    audio.playbackRate = 2;
    audio.volume = 0.4;
    return audio;
})();

const killShipEffect = (() => {
    let audio = new Audio(_views_audio_boom_mp3__WEBPACK_IMPORTED_MODULE_2__);
    audio.volume = 0.2;
    return audio;
})();

const clickEffect = (() => {
    let audio = new Audio(_views_audio_clickPlay_mp3__WEBPACK_IMPORTED_MODULE_3__);
    audio.volume = 1;
    return audio;
})();

const timerEffect = (() => {
    let audio = new Audio(_views_audio_timer_mp3__WEBPACK_IMPORTED_MODULE_4__);
    audio.volume = 1;
    return audio;
})();

const win = (() => {
    let audio = new Audio(_views_audio_win_mp3__WEBPACK_IMPORTED_MODULE_5__);
    audio.volume = 1;
    return audio;
})();

const lose = (() => {
    let audio = new Audio(_views_audio_lose_mp3__WEBPACK_IMPORTED_MODULE_6__);
    audio.volume = 1;
    return audio;
})();


/***/ }),

/***/ "./src/models/elements/templates.js":
/*!******************************************!*\
  !*** ./src/models/elements/templates.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cross: () => (/* binding */ Cross),
/* harmony export */   Template: () => (/* binding */ Template),
/* harmony export */   Timer: () => (/* binding */ Timer)
/* harmony export */ });
/* harmony import */ var _views_nodes_markers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../views/nodes/markers */ "./src/views/nodes/markers.js");
/* harmony import */ var _views_nodes_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../views/nodes/timer */ "./src/views/nodes/timer.js");



const Template = (svg) => {
    let animations;
    const getSvg = () => {
        return svg;
    };

    const reset = () => {
        animations.forEach((animation) => {
            animation.finish();
        });
    };

    const setAnimations = (val) => {
        animations = val;
    };

    return { setAnimations, getSvg, animations, reset };
};

const Cross = () => {
    const prototype = Template((0,_views_nodes_markers__WEBPACK_IMPORTED_MODULE_0__.createCrossSVG)());

    const view = () => {
        prototype.setAnimations((0,_views_nodes_markers__WEBPACK_IMPORTED_MODULE_0__.viewCross)(prototype.getSvg()));
    };

    return Object.assign(prototype, { view });
};

const Timer = () => {
    const prototype = Template((0,_views_nodes_timer__WEBPACK_IMPORTED_MODULE_1__.createTimerSVG)());

    const view = () => {
        prototype.setAnimations((0,_views_nodes_timer__WEBPACK_IMPORTED_MODULE_1__.viewTimer)(prototype.getSvg()));
    };

    return Object.assign(prototype, { view });
};


/***/ }),

/***/ "./src/models/game.js":
/*!****************************!*\
  !*** ./src/models/game.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Coordinates: () => (/* binding */ Coordinates),
/* harmony export */   Game: () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _controllers_listeners_forLinks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/listeners/forLinks */ "./src/controllers/listeners/forLinks.js");
/* harmony import */ var _controllers_listeners_forPlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/listeners/forPlay */ "./src/controllers/listeners/forPlay.js");
/* harmony import */ var _controllers_listeners_forPopups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/listeners/forPopups */ "./src/controllers/listeners/forPopups.js");
/* harmony import */ var _controllers_listeners_forShips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/listeners/forShips */ "./src/controllers/listeners/forShips.js");
/* harmony import */ var _views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/animations/changeVisible */ "./src/views/animations/changeVisible.js");
/* harmony import */ var _views_nodes_hits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/nodes/hits */ "./src/views/nodes/hits.js");
/* harmony import */ var _views_nodes_popups__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/nodes/popups */ "./src/views/nodes/popups.js");
/* harmony import */ var _views_nodes_profile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/nodes/profile */ "./src/views/nodes/profile.js");
/* harmony import */ var _views_nodes_shipyard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../views/nodes/shipyard */ "./src/views/nodes/shipyard.js");
/* harmony import */ var _views_nodes_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../views/nodes/ui */ "./src/views/nodes/ui.js");
/* harmony import */ var _cellHandler__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cellHandler */ "./src/models/cellHandler.js");
/* harmony import */ var _elements_audioEffects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./elements/audioEffects */ "./src/models/elements/audioEffects.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./player */ "./src/models/player.js");
/* harmony import */ var _timeManipulators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./timeManipulators */ "./src/models/timeManipulators.js");















const Game = () => {
    let player = (0,_player__WEBPACK_IMPORTED_MODULE_12__.Profile)(1, 'Player', 'player-board', '.ai-mini-shipyard');
    let ai = (0,_player__WEBPACK_IMPORTED_MODULE_12__.Profile)(0, 'AI', 'ai-board', '.player-mini-shipyard');
    const timeManipulators = (0,_timeManipulators__WEBPACK_IMPORTED_MODULE_13__.TimeManipulators)();
    const gameHandler = GameHandler(ai, player, timeManipulators);

    const viewDefaulInterfaces = () => {
        (0,_views_nodes_profile__WEBPACK_IMPORTED_MODULE_7__.viewProfile)(player);
        (0,_views_nodes_profile__WEBPACK_IMPORTED_MODULE_7__.viewProfile)(ai);
        (0,_views_nodes_shipyard__WEBPACK_IMPORTED_MODULE_8__.viewShipyard)(player.getShipyard());
        (0,_views_nodes_shipyard__WEBPACK_IMPORTED_MODULE_8__.viewShipyard)(player.getMiniShipyard());
        (0,_views_nodes_shipyard__WEBPACK_IMPORTED_MODULE_8__.viewShipyard)(ai.getMiniShipyard());
        (0,_views_nodes_ui__WEBPACK_IMPORTED_MODULE_9__.setMiniShipyardDesign)(player.getMiniShipyard());
        (0,_views_nodes_ui__WEBPACK_IMPORTED_MODULE_9__.setMiniShipyardDesign)(ai.getMiniShipyard());
    };

    const setDefaultListeners = () => {
        (0,_controllers_listeners_forShips__WEBPACK_IMPORTED_MODULE_3__.setListenersForShips)(player.getShipyard().getAllShips());
        (0,_controllers_listeners_forLinks__WEBPACK_IMPORTED_MODULE_0__.setListenersForLinks)();
        (0,_controllers_listeners_forPlay__WEBPACK_IMPORTED_MODULE_1__.setListenersForPlayButton)();
        (0,_controllers_listeners_forPlay__WEBPACK_IMPORTED_MODULE_1__.setListenersForExitButton)();
        (0,_controllers_listeners_forPopups__WEBPACK_IMPORTED_MODULE_2__.setListenersforPopups)();
    };

    const setGamePlayListeners = () => {
        (0,_controllers_listeners_forPlay__WEBPACK_IMPORTED_MODULE_1__.setListenersForCells)();
    };

    const start = () => {
        setDefaultListeners();
        viewDefaulInterfaces();
        gameHandler.fillBoardsToRandomShips();
        ai.getGameboard().hiddenShips();
    };

    const play = () => {
        gameHandler.setDefaultSettings();
        setGamePlayListeners();
        (0,_views_nodes_ui__WEBPACK_IMPORTED_MODULE_9__.hiddenInterfaceBeforeStartPlay)();
        playGameState();
        (0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_4__.removeHidden)(ai.getMiniShipyard().getNode());
        (0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_4__.removeHidden)(player.getMiniShipyard().getNode());
        gameHandler.playerMove();
        timeManipulators.setTimeOfTheMove();
        (0,_views_nodes_ui__WEBPACK_IMPORTED_MODULE_9__.setMiniShipyardDesign)(player.getMiniShipyard());
        (0,_views_nodes_ui__WEBPACK_IMPORTED_MODULE_9__.setMiniShipyardDesign)(ai.getMiniShipyard());
    };

    const end = () => {
        (0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_4__.setHidden)(ai.getMiniShipyard().getNode());
        (0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_4__.setHidden)(player.getMiniShipyard().getNode());
        ai.getMiniShipyard().reset();
        player.getMiniShipyard().reset();
        timeManipulators.reset();
        (0,_views_nodes_ui__WEBPACK_IMPORTED_MODULE_9__.viewInterfaceAfterEndGame)();
        endGameState();
    };

    const playGameState = () => {
        document.querySelector('.x-axis').classList.add('correct');
        player.getGameboard().blockShips();
    };

    const endGameState = () => {
        document.querySelector('.x-axis').classList.remove('correct');
        ai.getGameboard().block();
        ai.getGameboard().reset();
        player.getGameboard().unblockShips();
        player.getGameboard().reset();
        gameHandler.fillBoardsToRandomShips();
        ai.getGameboard().hiddenShips();
        (0,_views_nodes_ui__WEBPACK_IMPORTED_MODULE_9__.setAiMoveDesign)(ai, player);
    };

    return { start, play, end, ai, player, gameHandler };
};

const GameHandler = (ai, player, timeManipulators) => {
    let move;
    let playerCells = [...player.getGameboard().getUnstructedContainer()];
    let aiCells = [...ai.getGameboard().getUnstructedContainer()];

    const setDefaultSettings = () => {
        move = 'player';
        playerCells = [...player.getGameboard().getUnstructedContainer()];
        aiCells = [...ai.getGameboard().getUnstructedContainer()];
    };

    const getActivePlayer = () => {
        return move === 'ai' ? ai : player;
    };

    const switchMove = () => {
        timeManipulators.reset();
        if (isEndGame()) {
            openPopup();
            return false;
        } else if (move === 'ai') {
            timeManipulators.setTimeOfTheMove();
            move = 'player';
            playerMove();
        } else {
            move = 'ai';
            aiMove();
        }
    };

    const isEndGame = () => {
        let isEnd = isPlayerLose(player) || isPlayerLose(ai);
        return isEnd;
    };

    const isPlayerLose = (player) => {
        let isLose = true;
        const ships = player.getShipyard().getAllShips();
        ships.forEach((ship) => {
            if (ship.isLive()) {
                isLose = false;
            }
        });
        return isLose;
    };

    const playerMove = () => {
        ai.getGameboard().unblock();
        (0,_views_nodes_ui__WEBPACK_IMPORTED_MODULE_9__.setPlayerMoveDesign)(ai, player);
    };

    const checkCell = (cell) => {
        if (aiCells.includes(cell)) {
            const index = aiCells.indexOf(cell);
            ai.getGameboard().block();
            takeHit(aiCells.splice(index, 1)[0]);
            timeManipulators.setTimeBetweenMoves(500);
        }
    };

    const aiMove = () => {
        ai.getGameboard().block();
        (0,_views_nodes_ui__WEBPACK_IMPORTED_MODULE_9__.setAiMoveDesign)(ai, player);
        timeManipulators.setAiSpeedOfTought(playerCells);
    };

    const takeHit = (cell) => {
        const ship = cell.getOccupant();
        cell.setTheHit();
        if (ship === 'free') {
            (0,_views_nodes_hits__WEBPACK_IMPORTED_MODULE_5__.viewMissHit)(cell);
            _elements_audioEffects__WEBPACK_IMPORTED_MODULE_11__.missEffect.play();
        } else {
            (0,_views_nodes_hits__WEBPACK_IMPORTED_MODULE_5__.viewAccurateHit)(cell);
            setTimeout(() => {
                if (checkLiveShip(ship)) {
                    hitAllDiags(cell);
                }
                move = move === 'ai' ? 'player' : 'ai';
            }, 500);
        }
    };

    const checkLiveShip = (ship) => {
        if (!ship.isLive()) {
            _elements_audioEffects__WEBPACK_IMPORTED_MODULE_11__.killShipEffect.play();
            ship.kill();
            let miniShip = getMiniShip(ship);
            miniShip.kill();
            hitAllAreaAroundShip(ship);
        }
        return ship.isLive();
    };

    const hitAllAreaAroundShip = (ship) => {
        const area = ship.getWaterAreas().getAreaAroundTheShip();
        area.forEach((cell) => {
            if (!cell.isHit()) {
                (0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_4__.setLowOpacity)(cell.getCellNode());
            }
            (0,_views_nodes_hits__WEBPACK_IMPORTED_MODULE_5__.viewMissHit)(cell);
            removeCell(cell);
        });
    };

    const removeCell = (cell) => {
        let cells = move === 'ai' ? playerCells : aiCells;
        let index = cells.indexOf(cell);
        if (index > -1) {
            cells.splice(index, 1);
        }
    };

    const hitAllDiags = (hitCell) => {
        const handler = (0,_cellHandler__WEBPACK_IMPORTED_MODULE_10__.CellHandler)();
        const x = hitCell.getXY().x;
        const y = hitCell.getXY().y;
        const opponent = move === 'ai' ? player : ai;
        const parent = opponent.getGameboard().getStructedContainer();
        const cells = handler.getDiads(x, y, parent);
        cells.forEach((cell) => {
            if (cell !== hitCell) {
                if (!cell.isHit()) {
                    (0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_4__.setLowOpacity)(cell.getCellNode());
                }
                (0,_views_nodes_hits__WEBPACK_IMPORTED_MODULE_5__.viewMissHit)(cell);
                removeCell(cell);
            }
        });
    };

    const getMiniShip = (ship) => {
        const type = ship.getType();
        const activePlayer = getActivePlayer();
        const ships = activePlayer.getMiniShipyard().getShipsOfType(type);
        for (let i = 0; i < ships.length; i++) {
            if (ships[i].isLive()) {
                return ships[i];
            }
        }
    };

    const fillBoardsToRandomShips = () => {
        ai.getGameboard().randomFillingOfShips();
        player.getGameboard().randomFillingOfShips();
    };

    const openPopup = () => {
        move === 'player' ? (0,_views_nodes_popups__WEBPACK_IMPORTED_MODULE_6__.viewLosePopup)() : (0,_views_nodes_popups__WEBPACK_IMPORTED_MODULE_6__.viewWinPopup)();
    };

    return {
        checkCell,
        playerMove,
        setDefaultSettings,
        switchMove,
        takeHit,
        isEndGame,
        fillBoardsToRandomShips,
    };
};


const Coordinates = (() => {
    let singleTone = 0;
    let x = 0;
    let y = 0;

    const setCoordinates = (nx, ny) => {
        if (singleTone === 0) {
            singleTone = 1;
            x = nx;
            y = ny;
        }
    }

    const reset = () => {
        singleTone = 0;
    }

    const getXY = () => {
        return { x, y };
    }

    return { setCoordinates, getXY, reset };
})();

/***/ }),

/***/ "./src/models/gameBoard.js":
/*!*********************************!*\
  !*** ./src/models/gameBoard.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/animations/changeVisible */ "./src/views/animations/changeVisible.js");
/* harmony import */ var _views_nodes_ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/nodes/ship */ "./src/views/nodes/ship.js");
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cell */ "./src/models/cell.js");
/* harmony import */ var _gameConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameConfig */ "./src/models/gameConfig.js");





const Gameboard = (name, player) => {
    const width = _gameConfig__WEBPACK_IMPORTED_MODULE_3__.Config.Gameboard.width;
    const height = _gameConfig__WEBPACK_IMPORTED_MODULE_3__.Config.Gameboard.height;
    const containers = fillBoard(width, height);
    const node = document.querySelector(`.${name}`);

    const getStructedContainer = () => {
        return containers.getStructed();
    };

    const getUnstructedContainer = () => {
        return containers.getUnstructed();
    };

    const getSize = () => {
        return { width, height };
    };

    const getNode = () => {
        return node;
    };

    const getPlayer = () => {
        return player;
    };

    const reset = () => {
        containers.getUnstructed().forEach((sector) => {
            sector.clear();
        });
        player.getShipyard().reset();
    };

    const randomFillingOfShips = () => {
        reset();
        let ships = player.getShipyard().getAllShips();

        ships.forEach((ship) => {
            ship.setRandomOrientation();
            (0,_views_nodes_ship__WEBPACK_IMPORTED_MODULE_1__.viewShipOnRandomCell)(ship, [...getUnstructedContainer()]);
        });
    };

    const blockShips = () => {
        node.querySelectorAll('.ship').forEach((ship) => {
            ship.classList.add('block');
        });
    };

    const unblockShips = () => {
        node.querySelectorAll('.ship').forEach((ship) => {
            ship.classList.remove('block');
        });
    };

    const hiddenShips = () => {
        const board = node.querySelector('.board');
        board.querySelectorAll('.ship').forEach((ship) => {
            ship.style.border = '0px blue solid';
        });
        board.querySelectorAll('.deck').forEach((deck) => {
            (0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setNullOpacity)(deck);
        });
    };

    const block = () => {
        node.querySelector('.board').classList.add('block');
    };

    const unblock = () => {
        node.querySelector('.board').classList.remove('block');
    };

    return {
        randomFillingOfShips,
        reset,
        getPlayer,
        getStructedContainer,
        getUnstructedContainer,
        getSize,
        getNode,
        blockShips,
        unblockShips,
        hiddenShips,
        block,
        unblock,
    };
};

const fillBoard = (width, height) => {
    let structed = [];
    let unstructed = [];

    for (let i = 0; i < height; i++) {
        let line = [];
        for (let j = 0; j < width; j++) {
            const cell = (0,_cell__WEBPACK_IMPORTED_MODULE_2__.MarineSector)(j, i);
            line[j] = cell;
            unstructed.push(cell);
        }
        structed[i] = line;
    }

    const getStructed = () => {
        return structed;
    };

    const getUnstructed = () => {
        return unstructed;
    };

    return { getStructed, getUnstructed };
};


/***/ }),

/***/ "./src/models/gameConfig.js":
/*!**********************************!*\
  !*** ./src/models/gameConfig.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Config: () => (/* binding */ Config)
/* harmony export */ });
const Config = (() => {
    const Gameboard = (() => {
        const width = 10;
        const height = 10;
        return { width, height };
    })();

    const Elements = (() => {
        const shipTypes = ['fregats', 'caravels', 'drakkars', 'boats'];
        const numberOf = (() => {
            const fregates = 1;
            const caravels = 2;
            const drakkars = 3;
            const boats = 4;
            return { fregates, caravels, drakkars, boats };
        })();

        return { numberOf, shipTypes };
    })();

    return { Gameboard, Elements };
})();


/***/ }),

/***/ "./src/models/player.js":
/*!******************************!*\
  !*** ./src/models/player.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Profile: () => (/* binding */ Profile)
/* harmony export */ });
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ "./src/models/gameBoard.js");
/* harmony import */ var _shipyard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipyard */ "./src/models/shipyard.js");



const Player = (id, name) => {
    const getId = () => {
        return id;
    };

    const getName = () => {
        return name;
    };

    return { getId, getName };
};

const Profile = (id, name, nodeId, miniShipyardId) => {
    const prototype = Player(id, name);

    let gameboard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)(nodeId, prototype);
    let shipyard = (0,_shipyard__WEBPACK_IMPORTED_MODULE_1__.Shipyard)(prototype);
    let miniShipyard = (0,_shipyard__WEBPACK_IMPORTED_MODULE_1__.Shipyard)(
        prototype,
        document.querySelector(miniShipyardId),
    );

    const getGameboard = () => {
        return gameboard;
    };

    const getShipyard = () => {
        return shipyard;
    };

    const getMiniShipyard = () => {
        return miniShipyard;
    };

    return Object.assign(prototype, {
        getGameboard,
        getShipyard,
        getMiniShipyard,
    });
};


/***/ }),

/***/ "./src/models/session.js":
/*!*******************************!*\
  !*** ./src/models/session.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Session: () => (/* binding */ Session),
/* harmony export */   resetSession: () => (/* binding */ resetSession)
/* harmony export */ });
const Session = (() => {
    let activeShip = null;
    let index = 0;
    let doubleIndex = 'ship';
    let currentElement = null;
    let choisedCell = null;
    let manualMode = false;
    return {
        manualMode,
        activeShip,
        index,
        doubleIndex,
        currentElement,
        choisedCell,
    };
})();

const resetSession = () => {
    Session.activeShip = null;
    Session.index = 0;
    Session.doubleIndex = 'ship';
    Session.currentElement = null;
};


/***/ }),

/***/ "./src/models/ship.js":
/*!****************************!*\
  !*** ./src/models/ship.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Boat: () => (/* binding */ Boat),
/* harmony export */   Caravel: () => (/* binding */ Caravel),
/* harmony export */   Drakkar: () => (/* binding */ Drakkar),
/* harmony export */   Fregat: () => (/* binding */ Fregat),
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/helper */ "./src/helper/helper.js");
/* harmony import */ var _views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/animations/changeVisible */ "./src/views/animations/changeVisible.js");
/* harmony import */ var _views_nodes_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/nodes/factory */ "./src/views/nodes/factory.js");
/* harmony import */ var _views_nodes_ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/nodes/ship */ "./src/views/nodes/ship.js");
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cell */ "./src/models/cell.js");
/* harmony import */ var _waterAreas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./waterAreas */ "./src/models/waterAreas.js");







const Ship = (length, player, type) => {
    const container = (0,_views_nodes_factory__WEBPACK_IMPORTED_MODULE_2__.getNode)('ship', 'horizontal');
    let body = [];
    let live = true;
    let horizontal = true;
    let head = null;
    let ship = {};
    let shipWaterAreas = (0,_waterAreas__WEBPACK_IMPORTED_MODULE_5__.ShipWaterAreas)(player, ship);

    const setYourself = (thisShip) => {
        ship = thisShip;
    };

    const getYourself = () => {
        return ship;
    };

    const fillContainer = () => {
        for (let i = 0; i < length; i++) {
            let deck = (0,_cell__WEBPACK_IMPORTED_MODULE_4__.Deck)(i);
            body.push(deck);
            container.appendChild(deck.getCellNode());
        }
    };

    const setOrientation = () => {
        if (container.classList.contains('horizontal')) {
            setVertical();
        } else if (container.classList.contains('vertical')) {
            setHorizontal();
        }
    };

    const takeDownWaterAreas = () => {
        shipWaterAreas.clearAreas();
    };

    const launchShipOnWater = (nHead) => {
        try {
            let waterAreas = getWaterArea(nHead);
            let acessibility = waterAreas.checkArea();
            if (acessibility) {
                takeDownWaterAreas();
                shipWaterAreas = waterAreas;
                linkShipWithField();
                shipWaterAreas.occupyAreas();
            }
            return acessibility;
        } catch (error) {
            return false;
        }
    };

    const linkShipWithField = () => {
        let area = shipWaterAreas.getAreaUnderTheShip();
        for (let i = 0; i < length; i++) {
            const xy = area[i].getXY();
            body[i].setXY(xy.x, xy.y);
            area[i].setLinkedDeck(body[i]);
        }
    };

    const getWaterArea = (head) => {
        let board = getBoard().getStructedContainer();
        let areas = (0,_waterAreas__WEBPACK_IMPORTED_MODULE_5__.ShipWaterAreas)(player, ship);
        let x = head.getXY().x;
        let y = head.getXY().y;
        let necessarySectors = [];
        for (let i = 0; i < length; i++) {
            necessarySectors.push(board[y][x]);
            if (horizontal) {
                x++;
            } else {
                y++;
            }
        }
        areas.setAreas(necessarySectors);
        return areas;
    };

    const isLive = () => {
        live = false;

        body.forEach((deck) => {
            if (!deck.isHit()) {
                live = true;
            }
        });

        return live;
    };

    const getBody = () => {
        return body;
    };

    const getContainer = () => {
        return container;
    };

    const getHead = () => {
        return head;
    };

    const setHead = (nHead) => {
        head = nHead;
    };

    const isHorizontal = () => {
        return horizontal;
    };

    const orientationSwitch = () => {
        horizontal = !horizontal;
    };

    const setVertical = () => {
        (0,_views_nodes_ship__WEBPACK_IMPORTED_MODULE_3__.setStandartVerticalShipDesign)(container, length);
        horizontal = false;
    };

    const setHorizontal = () => {
        (0,_views_nodes_ship__WEBPACK_IMPORTED_MODULE_3__.setStandartHorizontalShipDesign)(container, length);
        horizontal = true;
    };

    const setRandomOrientation = () => {
        (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.randomIntFromInterval)(0, 1) === 1 ? setHorizontal() : setVertical();
    };

    const getBoard = () => {
        return player.getGameboard();
    };

    const reset = () => {
        head = null;
        if (!container.classList.contains('mini-ship')) {
            setHorizontal();
        }
        resetBody();
        shipWaterAreas.clearAreas();
        shipWaterAreas = (0,_waterAreas__WEBPACK_IMPORTED_MODULE_5__.ShipWaterAreas)(player, ship);
    };

    const resetBody = () => {
        (0,_views_nodes_ship__WEBPACK_IMPORTED_MODULE_3__.resetShipStyle)(container);
        body.forEach((deck) => {
            deck.reset();
        });
    };

    const getType = () => {
        return type;
    };

    const kill = () => {
        body.forEach((deck) => {
            (0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__.setLowOpacity)(deck.getCellNode());
            deck.setTheHit();
        });
        (0,_views_nodes_ship__WEBPACK_IMPORTED_MODULE_3__.setDeathStyleOnShip)(container);
        live = false;
    };

    const getWaterAreas = () => {
        return shipWaterAreas;
    };

    fillContainer();

    return {
        setRandomOrientation,
        reset,
        setHorizontal,
        setVertical,
        getBoard,
        takeDownWaterAreas,
        launchShipOnWater,
        orientationSwitch,
        setOrientation,
        isLive,
        getBody,
        getContainer,
        getHead,
        setHead,
        isHorizontal,
        setYourself,
        getYourself,
        getType,
        kill,
        getWaterAreas,
    };
};

const Fregat = (marker) => {
    const prototype = Ship(4, marker, 'fregats');
    return Object.assign(prototype, marker);
};

const Caravel = (marker) => {
    const prototype = Ship(3, marker, 'caravels');
    return Object.assign(prototype);
};

const Drakkar = (marker) => {
    const prototype = Ship(2, marker, 'drakkars');
    return Object.assign(prototype);
};

const Boat = (marker) => {
    const prototype = Ship(1, marker, 'boats');
    return Object.assign(prototype);
};


/***/ }),

/***/ "./src/models/shipyard.js":
/*!********************************!*\
  !*** ./src/models/shipyard.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Shipyard: () => (/* binding */ Shipyard)
/* harmony export */ });
/* harmony import */ var _gameConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameConfig */ "./src/models/gameConfig.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/models/ship.js");



const Shipyard = (
    player,
    node = document.querySelector('.shipyard'),
) => {
    const fregats = Dock(_gameConfig__WEBPACK_IMPORTED_MODULE_0__.Config.Elements.numberOf.fregates, 'Fregat', player);
    const caravels = Dock(_gameConfig__WEBPACK_IMPORTED_MODULE_0__.Config.Elements.numberOf.caravels, 'Caravel', player);
    const drakkars = Dock(_gameConfig__WEBPACK_IMPORTED_MODULE_0__.Config.Elements.numberOf.drakkars, 'Drakkar', player);
    const boats = Dock(_gameConfig__WEBPACK_IMPORTED_MODULE_0__.Config.Elements.numberOf.boats, 'Boat', player);
    const ships = fregats
        .getShips()
        .concat(
            caravels
                .getShips()
                .concat(drakkars.getShips().concat(boats.getShips())),
        );

    const getShipsOfType = (type) => {
        switch (type) {
            case 'fregats':
                return fregats.getShips();
            case 'caravels':
                return caravels.getShips();
            case 'drakkars':
                return drakkars.getShips();
            case 'boats':
                return boats.getShips();
        }
    };

    const getDockWithFregats = () => {
        return fregats;
    };

    const getDockWithCaravels = () => {
        return caravels;
    };

    const getDockWithDrakkars = () => {
        return drakkars;
    };

    const getDockWithBoats = () => {
        return boats;
    };

    const getPlayer = () => {
        return player;
    };

    const getAllShips = () => {
        return ships;
    };

    const getNode = () => {
        return node;
    };

    const isEmpty = () => {
        let launchedShips = node.querySelectorAll('.ship');
        return launchedShips.length === 0;
    };

    const reset = () => {
        ships.forEach((ship) => {
            ship.reset();
        });
    };

    return {
        getShipsOfType,
        isEmpty,
        reset,
        getAllShips,
        getPlayer,
        getDockWithFregats,
        getDockWithCaravels,
        getDockWithDrakkars,
        getDockWithBoats,
        getNode,
    };
};

const Dock = (count, shipBluePrint, player) => {
    const ships = [];

    const fillDock = (count, shipBluePrint) => {
        for (let i = 0; i < count; i++) {
            const ship = buildShip(shipBluePrint);
            ships.push(ship);
        }
    };

    const buildShip = (bluePrint) => {
        switch (bluePrint) {
            case 'Fregat':
                return (0,_ship__WEBPACK_IMPORTED_MODULE_1__.Fregat)(player);
            case 'Caravel':
                return (0,_ship__WEBPACK_IMPORTED_MODULE_1__.Caravel)(player);
            case 'Drakkar':
                return (0,_ship__WEBPACK_IMPORTED_MODULE_1__.Drakkar)(player);
            case 'Boat':
                return (0,_ship__WEBPACK_IMPORTED_MODULE_1__.Boat)(player);
            default:
                console.log('Sorry, illegal ship blueprint');
        }
    };

    fillDock(count, shipBluePrint);

    const getShips = () => {
        return ships;
    };

    return { getShips };
};


/***/ }),

/***/ "./src/models/timeManipulators.js":
/*!****************************************!*\
  !*** ./src/models/timeManipulators.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeManipulators: () => (/* binding */ TimeManipulators)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _views_nodes_ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/nodes/ship */ "./src/views/nodes/ship.js");
/* harmony import */ var _elements_audioEffects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/audioEffects */ "./src/models/elements/audioEffects.js");
/* harmony import */ var _elements_templates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements/templates */ "./src/models/elements/templates.js");





const TimeManipulators = () => {
    let timeOfTheMove;
    let aiSpeedOfTought;
    let timeBetweenMoves;
    let alarm;
    let timer = (0,_elements_templates__WEBPACK_IMPORTED_MODULE_3__.Timer)();
    document.querySelector('.timer').appendChild(timer.getSvg());

    const setAiSpeedOfTought = (cells) => {
        aiSpeedOfTought = setTimeout(() => {
            ___WEBPACK_IMPORTED_MODULE_0__.game.gameHandler.takeHit((0,_views_nodes_ship__WEBPACK_IMPORTED_MODULE_1__.getRandomCell)(cells));
            setTimeBetweenMoves(1000);
        }, 1000);
    };

    const setTimeBetweenMoves = (timeout) => {
        timeBetweenMoves = setTimeout(() => {
            ___WEBPACK_IMPORTED_MODULE_0__.game.gameHandler.switchMove();
        }, timeout);
    };

    const setTimeOfTheMove = () => {
        timer.view();
        timeOfTheMove = setInterval(() => {
            ___WEBPACK_IMPORTED_MODULE_0__.game.gameHandler.switchMove();
        }, 15000);
        alarm = setTimeout(() => {
            _elements_audioEffects__WEBPACK_IMPORTED_MODULE_2__.timerEffect.play();
        }, 10000);
    };

    const reset = () => {
        timer.reset();
        clearTimeout(aiSpeedOfTought);
        clearTimeout(timeBetweenMoves);
        clearTimeout(alarm);
        clearInterval(timeOfTheMove);
    };

    return { setAiSpeedOfTought, setTimeBetweenMoves, setTimeOfTheMove, reset };
};


/***/ }),

/***/ "./src/models/waterAreas.js":
/*!**********************************!*\
  !*** ./src/models/waterAreas.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShipWaterAreas: () => (/* binding */ ShipWaterAreas)
/* harmony export */ });
/* harmony import */ var _cellHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cellHandler */ "./src/models/cellHandler.js");


const ShipWaterAreas = (player, ship) => {
    let underTheShip = [];
    let aroundTheShip = [];

    const getAreaUnderTheShip = () => {
        return underTheShip;
    };

    const getAreaAroundTheShip = () => {
        return aroundTheShip;
    };

    const setAreas = (area) => {
        underTheShip = area;
        aroundTheShip = setAreaAroundTheShip();
    };

    const setAreaAroundTheShip = () => {
        let handler = (0,_cellHandler__WEBPACK_IMPORTED_MODULE_0__.CellHandler)();
        let areas = [];
        let parent = player.getGameboard().getStructedContainer();
        underTheShip.forEach((sector) => {
            let coordinates = sector.getXY();
            let area = handler.getCellAroundArea(
                coordinates.x,
                coordinates.y,
                parent,
                ship,
            );
            areas = areas.concat(area);
        });
        return Array.from(new Set(areas)).filter(
            (x) => !underTheShip.includes(x),
        );
    };

    const occupyAreas = () => {
        underTheShip.forEach((sector) => {
            if (sector.isFree()) {
                sector.occupy(ship);
            }
        });
    };

    const checkArea = () => {
        let acessibility = true;
        let areas = underTheShip.concat(aroundTheShip);

        areas.forEach((sector) => {
            if (!sector.isFree() && sector.getOccupant() !== ship) {
                acessibility = false;
            }
        });

        return acessibility;
    };

    const clearAreas = () => {
        let areas = underTheShip.concat(aroundTheShip);
        areas.forEach((sector) => {
            sector.clear();
        });
    };

    return {
        clearAreas,
        checkArea,
        getAreaUnderTheShip,
        getAreaAroundTheShip,
        setAreas,
        occupyAreas,
    };
};


/***/ }),

/***/ "./src/views/animations/animations.js":
/*!********************************************!*\
  !*** ./src/views/animations/animations.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Animations: () => (/* binding */ Animations)
/* harmony export */ });
const Animations = (() => {
    const transform = (() => {
        const x = (e, x0, x1, dur, fill = 'none') => {
            return e.animate([{ left: `${x0}` }, { left: `${x1}` }], {
                duration: dur,
                fill: fill,
            });
        };

        const y = (e, y0, y1, dur, fill = 'none') => {
            return e.animate([{ top: `${y0}` }, { top: `${y1}` }], {
                duration: dur,
                fill: fill,
            });
        };

        const rotate = (e, rotate1, rotate2, dur, fill = 'none') => {
            return e.animate(
                [
                    { transform: `rotate(${rotate1}deg)` },
                    { transform: `rotate(${rotate2}deg)` },
                ],
                { duration: dur, fill: fill },
            );
        };

        return { x, y, rotate };
    })();

    const background = (e, color1, color2, dur, fill = 'none') => {
        return e.animate([{ background: color1 }, { background: color2 }], {
            duration: dur,
            fill: fill,
        });
    };

    const opacity = (e, opacity1, opacity2, dur, fill = 'none') => {
        return e.animate([{ opacity: opacity1 }, { opacity: opacity2 }], {
            duration: dur,
            fill: fill,
        });
    };

    const custom = (e, dur, fill = 'none', ...keyFrames) => {
        return e.animate(...keyFrames, { duration: dur, fill: fill });
    };

    return { transform, background, opacity, custom };
})();


/***/ }),

/***/ "./src/views/animations/changeVisible.js":
/*!***********************************************!*\
  !*** ./src/views/animations/changeVisible.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeHidden: () => (/* binding */ removeHidden),
/* harmony export */   removeNullOpacity: () => (/* binding */ removeNullOpacity),
/* harmony export */   setHidden: () => (/* binding */ setHidden),
/* harmony export */   setLowOpacity: () => (/* binding */ setLowOpacity),
/* harmony export */   setNormalOpacity: () => (/* binding */ setNormalOpacity),
/* harmony export */   setNullOpacity: () => (/* binding */ setNullOpacity)
/* harmony export */ });
const setHidden = (node) => {
    node.classList.add('hidden');
};

const removeHidden = (node) => {
    node.classList.remove('hidden');
};

const setLowOpacity = (node) => {
    node.classList.add('low-opacity');
};

const setNormalOpacity = (node) => {
    node.classList.remove('low-opacity');
};

const removeNullOpacity = (node) => {
    node.classList.remove('null-opacity');
};

const setNullOpacity = (node) => {
    node.classList.add('null-opacity');
};


/***/ }),

/***/ "./src/views/animations/markers.js":
/*!*****************************************!*\
  !*** ./src/views/animations/markers.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drawCross: () => (/* binding */ drawCross)
/* harmony export */ });
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animations */ "./src/views/animations/animations.js");


const drawCross = (e, dur, fill, ...keyFrames) => {
    _animations__WEBPACK_IMPORTED_MODULE_0__.Animations.custom(e.firstChild, dur, fill, ...keyFrames);
    setTimeout(() => {
        return _animations__WEBPACK_IMPORTED_MODULE_0__.Animations.custom(e.lastChild, dur, fill, ...keyFrames);
    }, dur);
};


/***/ }),

/***/ "./src/views/animations/timer.js":
/*!***************************************!*\
  !*** ./src/views/animations/timer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   colorsTimer: () => (/* binding */ colorsTimer),
/* harmony export */   drawTimer: () => (/* binding */ drawTimer)
/* harmony export */ });
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animations */ "./src/views/animations/animations.js");


const colorsTimer = (e, dur, fill, ...keyFrames) => {
    return _animations__WEBPACK_IMPORTED_MODULE_0__.Animations.custom(e, dur, fill, ...keyFrames);
};

const drawTimer = (e, dur, fill, ...keyFrames) => {
    return _animations__WEBPACK_IMPORTED_MODULE_0__.Animations.custom(e, dur, fill, ...keyFrames);
};


/***/ }),

/***/ "./src/views/dragAndDrop/setDraggable.js":
/*!***********************************************!*\
  !*** ./src/views/dragAndDrop/setDraggable.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setDraggable: () => (/* binding */ setDraggable)
/* harmony export */ });
const setDraggable = (node) => {
    node.draggable = true;
};


/***/ }),

/***/ "./src/views/dragAndDrop/ships.js":
/*!****************************************!*\
  !*** ./src/views/dragAndDrop/ships.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setDraggableForShips: () => (/* binding */ setDraggableForShips)
/* harmony export */ });
/* harmony import */ var _models_gameConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/gameConfig */ "./src/models/gameConfig.js");
/* harmony import */ var _setDraggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setDraggable */ "./src/views/dragAndDrop/setDraggable.js");



const setDraggableForShips = () => {
    _models_gameConfig__WEBPACK_IMPORTED_MODULE_0__.Config.Elements.shipTypes.forEach((type) => {
        forType(type);
    });
};

const forType = (type) => {
    const dock = document.querySelector(`.${type}`);
    const ships = Array.from(dock.children);

    ships.forEach((ship) => {
        (0,_setDraggable__WEBPACK_IMPORTED_MODULE_1__.setDraggable)(ship);
    });
};


/***/ }),

/***/ "./src/views/nodes/axis.js":
/*!*********************************!*\
  !*** ./src/views/nodes/axis.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   viewAxis: () => (/* binding */ viewAxis)
/* harmony export */ });
/* harmony import */ var _models_alphabets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/alphabets */ "./src/models/alphabets.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factory */ "./src/views/nodes/factory.js");



const alphabet = _models_alphabets__WEBPACK_IMPORTED_MODULE_0__.Alphabets.rus().codes;

const viewAxis = (board) => {
    const node = board.getNode();
    const xAxis = node.querySelector('.x-axis');
    const yAxis = node.querySelector('.y-axis');
    const size = board.getSize();

    for (let i = 0; i < size.width; i++) {
        const cell = (0,_factory__WEBPACK_IMPORTED_MODULE_1__.getNode)('x-cell', 'cell');
        const letter = String.fromCharCode(alphabet[i]).toUpperCase();
        cell.textContent = letter;
        xAxis.appendChild(cell);
    }

    for (let i = 0; i < size.height; i++) {
        const cell = (0,_factory__WEBPACK_IMPORTED_MODULE_1__.getNode)('y-cell', 'cell');
        cell.textContent = i;
        yAxis.appendChild(cell);
    }
};


/***/ }),

/***/ "./src/views/nodes/factory.js":
/*!************************************!*\
  !*** ./src/views/nodes/factory.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNode: () => (/* binding */ getNode)
/* harmony export */ });
const getNode = (...names) => {
    const node = document.createElement('div');
    names.forEach((name) => {
        if (name !== '') {
            node.classList.add(name);
        }
    });
    return node;
};


/***/ }),

/***/ "./src/views/nodes/gameboard.js":
/*!**************************************!*\
  !*** ./src/views/nodes/gameboard.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   viewBoard: () => (/* binding */ viewBoard)
/* harmony export */ });
/* harmony import */ var _models_gameConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/gameConfig */ "./src/models/gameConfig.js");


const viewBoard = (board) => {
    const container = board.getUnstructedContainer();
    const boardwr = board.getNode().querySelector('.board');
    container.forEach((cell) => {
        boardwr.appendChild(cell.getCellNode());
    });
};

const StylePresets = (() => {
    document.documentElement.style.setProperty(
        '--board-width',
        _models_gameConfig__WEBPACK_IMPORTED_MODULE_0__.Config.Gameboard.width,
    );
    document.documentElement.style.setProperty(
        '--board-height',
        _models_gameConfig__WEBPACK_IMPORTED_MODULE_0__.Config.Gameboard.height,
    );
})();


/***/ }),

/***/ "./src/views/nodes/hits.js":
/*!*********************************!*\
  !*** ./src/views/nodes/hits.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendCrossSvg: () => (/* binding */ appendCrossSvg),
/* harmony export */   viewAccurateHit: () => (/* binding */ viewAccurateHit),
/* harmony export */   viewMissHit: () => (/* binding */ viewMissHit)
/* harmony export */ });
/* harmony import */ var _models_elements_audioEffects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/elements/audioEffects */ "./src/models/elements/audioEffects.js");
/* harmony import */ var _models_elements_templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/elements/templates */ "./src/models/elements/templates.js");
/* harmony import */ var _animations_changeVisible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations/changeVisible */ "./src/views/animations/changeVisible.js");




const viewMissHit = (cell) => {
    cell.getCellNode().classList.add('miss-hit');
};

const viewAccurateHit = (cell) => {
    const deck = cell.getLinkedDeck();
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_2__.removeNullOpacity)(deck.getCellNode());
    deck.setTheHit();
    appendCrossSvg(deck);
    _models_elements_audioEffects__WEBPACK_IMPORTED_MODULE_0__.drawCross.play();
};

const appendCrossSvg = (deck) => {
    let cross = (0,_models_elements_templates__WEBPACK_IMPORTED_MODULE_1__.Cross)();
    deck.getCellNode().classList.add('destroyed');
    deck.getCellNode().appendChild(cross.getSvg());
    cross.view();
};


/***/ }),

/***/ "./src/views/nodes/markers.js":
/*!************************************!*\
  !*** ./src/views/nodes/markers.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCrossSVG: () => (/* binding */ createCrossSVG),
/* harmony export */   viewCross: () => (/* binding */ viewCross)
/* harmony export */ });
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helper/helper */ "./src/helper/helper.js");
/* harmony import */ var _models_elements_attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/elements/attributes */ "./src/models/elements/attributes.js");
/* harmony import */ var _animations_markers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations/markers */ "./src/views/animations/markers.js");




const createCrossSVG = () => {
    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    let leftLine = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'line',
    );
    let rightLine = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'line',
    );
    (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.appendChilds)(svg, leftLine, rightLine);
    (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.setAttributes)(
        leftLine,
        _models_elements_attributes__WEBPACK_IMPORTED_MODULE_1__.CrossAttributes.line.concat(_models_elements_attributes__WEBPACK_IMPORTED_MODULE_1__.CrossAttributes.leftDiag),
    );
    (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.setAttributes)(
        rightLine,
        _models_elements_attributes__WEBPACK_IMPORTED_MODULE_1__.CrossAttributes.line.concat(_models_elements_attributes__WEBPACK_IMPORTED_MODULE_1__.CrossAttributes.rightDiag),
    );
    return svg;
};

const viewCross = (svg) => {
    const animations = [
        (0,_animations_markers__WEBPACK_IMPORTED_MODULE_2__.drawCross)(svg, 200, 'forwards', [
            { strokeDashoffset: 'min(5vh ,2vw)' },
            { strokeDashoffset: 'min(0vh ,0vw)' },
        ]),
    ];
    return animations;
};


/***/ }),

/***/ "./src/views/nodes/popups.js":
/*!***********************************!*\
  !*** ./src/views/nodes/popups.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hiddenPopup: () => (/* binding */ hiddenPopup),
/* harmony export */   viewLosePopup: () => (/* binding */ viewLosePopup),
/* harmony export */   viewWinPopup: () => (/* binding */ viewWinPopup)
/* harmony export */ });
/* harmony import */ var _models_elements_audioEffects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/elements/audioEffects */ "./src/models/elements/audioEffects.js");


const viewWinPopup = () => {
    const popup = document.querySelector('.popup-win');
    popup.style.opacity = 1;
    popup.style.visibility = 'visible';
    _models_elements_audioEffects__WEBPACK_IMPORTED_MODULE_0__.win.play();
};

const viewLosePopup = () => {
    const popup = document.querySelector('.popup-lose');
    popup.style.opacity = 1;
    popup.style.visibility = 'visible';
    _models_elements_audioEffects__WEBPACK_IMPORTED_MODULE_0__.lose.play();
};

const hiddenPopup = (popup) => {
    popup.style.opacity = 0;
    popup.style.visibility = 'hidden';
    _models_elements_audioEffects__WEBPACK_IMPORTED_MODULE_0__.win.pause();
    _models_elements_audioEffects__WEBPACK_IMPORTED_MODULE_0__.lose.pause();
};


/***/ }),

/***/ "./src/views/nodes/profile.js":
/*!************************************!*\
  !*** ./src/views/nodes/profile.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   viewProfile: () => (/* binding */ viewProfile)
/* harmony export */ });
/* harmony import */ var _axis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axis */ "./src/views/nodes/axis.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/views/nodes/gameboard.js");



const viewProfile = (profile) => {
    (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.viewBoard)(profile.getGameboard());
    (0,_axis__WEBPACK_IMPORTED_MODULE_0__.viewAxis)(profile.getGameboard());
};


/***/ }),

/***/ "./src/views/nodes/ship.js":
/*!*********************************!*\
  !*** ./src/views/nodes/ship.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRandomCell: () => (/* binding */ getRandomCell),
/* harmony export */   resetShipStyle: () => (/* binding */ resetShipStyle),
/* harmony export */   setDeathStyleOnShip: () => (/* binding */ setDeathStyleOnShip),
/* harmony export */   setStandartHorizontalShipDesign: () => (/* binding */ setStandartHorizontalShipDesign),
/* harmony export */   setStandartVerticalShipDesign: () => (/* binding */ setStandartVerticalShipDesign),
/* harmony export */   viewDragShipForMobile: () => (/* binding */ viewDragShipForMobile),
/* harmony export */   viewShip: () => (/* binding */ viewShip),
/* harmony export */   viewShipOnRandomCell: () => (/* binding */ viewShipOnRandomCell)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./src/index.js");
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helper/helper */ "./src/helper/helper.js");
/* harmony import */ var _models_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/game */ "./src/models/game.js");
/* harmony import */ var _models_session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/session */ "./src/models/session.js");
/* harmony import */ var _animations_changeVisible__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../animations/changeVisible */ "./src/views/animations/changeVisible.js");






const viewShip = (ship, head) => {
    let isView = ship.launchShipOnWater(head);
    if (isView) {
        ship.setHead(head);
        head.getCellNode().appendChild(ship.getContainer());
        checkShipyard();
    }
    return isView;
};

const checkShipyard = () => {
    if (_models_session__WEBPACK_IMPORTED_MODULE_3__.Session.manualMode) {
        if (___WEBPACK_IMPORTED_MODULE_0__.game.player.getShipyard().isEmpty()) {
            setTimeout(() => {
                closeManualMenu();
            }, 500);
        }
    }
};

const closeManualMenu = () => {
    const shipyard = document.querySelector('.shipyard');
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_4__.removeHidden)(___WEBPACK_IMPORTED_MODULE_0__.game.ai.getGameboard().getNode());
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_4__.setHidden)(shipyard);
};

const viewShipOnRandomCell = (ship, cells) => {
    let cell = getRandomCell(cells);
    let isView = viewShip(ship, cell);
    return isView ? true : viewShipOnRandomCell(ship, cells);
};

const getRandomCell = (cells) => {
    let index = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_1__.randomIntFromInterval)(0, cells.length - 1);
    return cells.splice(index, 1)[0];
};

const setStandartHorizontalShipDesign = (container, length) => {
    container.classList.remove('vertical');
    container.classList.add('horizontal');
    container.style.width = `min(${length * 5}vh,${length * 2}vw)`;
    container.style.height = `min(5vh,2vw)`;
    container.style.minHeight = `2vh`;
    container.style.minWidth = `${length * 2}vh`;
};

const setStandartVerticalShipDesign = (container, length) => {
    container.classList.remove('horizontal');
    container.classList.add('vertical');
    container.style.height = `min(${length * 5}vh,${length * 2}vw)`;
    container.style.width = `min(5vh,2vw)`;
    container.style.minHeight = `${length * 2}vh`;
    container.style.minWidth = `2vh`;
};

const resetShipStyle = (container) => {
    container.style.opacity = '1';
    container.style.border = 'min(0.1vh, 0.1vw) rgba(0, 0, 255, 1) solid';
};

const setDeathStyleOnShip = (container) => {
    container.style.opacity = '0.3';
    container.style.border = 'min(0.1vh, 0.1vw) rgba(255, 0, 0, 1) solid';
};


const viewDragShipForMobile = (cursorX, cursorY, container) => {
    let x = cursorX - _models_game__WEBPACK_IMPORTED_MODULE_2__.Coordinates.getXY().x;
    let y = cursorY - _models_game__WEBPACK_IMPORTED_MODULE_2__.Coordinates.getXY().y;
    container.style.setProperty('--y', `${y}px`);
    container.style.setProperty('--x', `${x}px`);
}

/***/ }),

/***/ "./src/views/nodes/shipyard.js":
/*!*************************************!*\
  !*** ./src/views/nodes/shipyard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   viewShipyard: () => (/* binding */ viewShipyard)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./src/index.js");
/* harmony import */ var _models_gameConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/gameConfig */ "./src/models/gameConfig.js");
/* harmony import */ var _dragAndDrop_ships__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dragAndDrop/ships */ "./src/views/dragAndDrop/ships.js");




const viewShipyard = (shipyard) => {
    fillShipyardNode(shipyard);
    (0,_dragAndDrop_ships__WEBPACK_IMPORTED_MODULE_2__.setDraggableForShips)();
};

const fillShipyardNode = (shipyard) => {
    _models_gameConfig__WEBPACK_IMPORTED_MODULE_1__.Config.Elements.shipTypes.forEach((type) => {
        addType(type, shipyard);
    });
};

const addType = (type, shipyard) => {
    const dock = shipyard.getNode().querySelector(`.${type}`);
    const ships = shipyard.getShipsOfType(type);
    ships.forEach((ship) => {
        dock.appendChild(ship.getContainer());
    });
};


/***/ }),

/***/ "./src/views/nodes/timer.js":
/*!**********************************!*\
  !*** ./src/views/nodes/timer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTimerSVG: () => (/* binding */ createTimerSVG),
/* harmony export */   viewTimer: () => (/* binding */ viewTimer)
/* harmony export */ });
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helper/helper */ "./src/helper/helper.js");
/* harmony import */ var _models_elements_attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/elements/attributes */ "./src/models/elements/attributes.js");
/* harmony import */ var _animations_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations/timer */ "./src/views/animations/timer.js");




const createTimerSVG = () => {
    let timer = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    let line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.setAttributes)(line, _models_elements_attributes__WEBPACK_IMPORTED_MODULE_1__.HorizontalLine.horizontal);
    (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.appendChilds)(timer, line);
    return timer;
};

const viewTimer = (svg) => {
    const animations = [
        (0,_animations_timer__WEBPACK_IMPORTED_MODULE_2__.colorsTimer)(svg.lastChild, 15000, 'none', [
            { stroke: 'green' },
            { stroke: 'orange' },
            { stroke: 'red' },
        ]),
        (0,_animations_timer__WEBPACK_IMPORTED_MODULE_2__.drawTimer)(svg.lastChild, 15000, 'none', [
            { strokeDashoffset: '99vw' },
            { strokeDashoffset: '0vw' },
        ]),
    ];
    return animations;
};


/***/ }),

/***/ "./src/views/nodes/ui.js":
/*!*******************************!*\
  !*** ./src/views/nodes/ui.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hiddenInterfaceBeforeStartPlay: () => (/* binding */ hiddenInterfaceBeforeStartPlay),
/* harmony export */   setAiMoveDesign: () => (/* binding */ setAiMoveDesign),
/* harmony export */   setMiniShipyardDesign: () => (/* binding */ setMiniShipyardDesign),
/* harmony export */   setPlayerMoveDesign: () => (/* binding */ setPlayerMoveDesign),
/* harmony export */   viewInterfaceAfterEndGame: () => (/* binding */ viewInterfaceAfterEndGame)
/* harmony export */ });
/* harmony import */ var _animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animations/changeVisible */ "./src/views/animations/changeVisible.js");


const hiddenInterfaceBeforeStartPlay = () => {
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setHidden)(document.querySelector('.play'));
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setHidden)(document.querySelector('.footer'));
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setHidden)(document.querySelector('.tips'));
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.removeHidden)(document.querySelector('.exit'));
};

const viewInterfaceAfterEndGame = () => {
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.removeHidden)(document.querySelector('.play'));
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.removeHidden)(document.querySelector('.footer'));
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.removeHidden)(document.querySelector('.tips'));
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setHidden)(document.querySelector('.exit'));
};

const setPlayerMoveDesign = (ai, player) => {
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setNormalOpacity)(ai.getGameboard().getNode().querySelector('.x-axis'));
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setNormalOpacity)(ai.getGameboard().getNode().querySelector('.y-axis'));
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setNormalOpacity)(ai.getGameboard().getNode().querySelector('.board'));
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setLowOpacity)(player.getGameboard().getNode().querySelector('.x-axis'));
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setLowOpacity)(player.getGameboard().getNode().querySelector('.y-axis'));
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setLowOpacity)(player.getGameboard().getNode().querySelector('.board'));
};

const setAiMoveDesign = (ai, player) => {
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setNormalOpacity)(player.getGameboard().getNode().querySelector('.x-axis'));
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setNormalOpacity)(player.getGameboard().getNode().querySelector('.y-axis'));
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setNormalOpacity)(player.getGameboard().getNode().querySelector('.board'));
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setLowOpacity)(ai.getGameboard().getNode().querySelector('.x-axis'));
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setLowOpacity)(ai.getGameboard().getNode().querySelector('.y-axis'));
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_0__.setLowOpacity)(ai.getGameboard().getNode().querySelector('.board'));
};

const setMiniShipyardDesign = (shipyard) => {
    const decks = shipyard.getNode().querySelectorAll('.deck');
    const ships = shipyard.getNode().querySelectorAll('.ship');
    ships.forEach((ship) => {
        ship.classList.add('mini-ship');
    });
    decks.forEach((deck) => {
        deck.classList.add('mini-cell');
    });
};


/***/ }),

/***/ "./src/views/audio/boom.mp3":
/*!**********************************!*\
  !*** ./src/views/audio/boom.mp3 ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f0872139a5114016a2e5.mp3";

/***/ }),

/***/ "./src/views/audio/clickPlay.mp3":
/*!***************************************!*\
  !*** ./src/views/audio/clickPlay.mp3 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9bc49e833484732fba6b.mp3";

/***/ }),

/***/ "./src/views/audio/cross.mp3":
/*!***********************************!*\
  !*** ./src/views/audio/cross.mp3 ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dc6e954f0bccb598b2f8.mp3";

/***/ }),

/***/ "./src/views/audio/lose.mp3":
/*!**********************************!*\
  !*** ./src/views/audio/lose.mp3 ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "990398abf79ff87e7edf.mp3";

/***/ }),

/***/ "./src/views/audio/shot.mp3":
/*!**********************************!*\
  !*** ./src/views/audio/shot.mp3 ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "18439e956c3c94658d36.mp3";

/***/ }),

/***/ "./src/views/audio/timer.mp3":
/*!***********************************!*\
  !*** ./src/views/audio/timer.mp3 ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9f44935c848c3f5feba0.mp3";

/***/ }),

/***/ "./src/views/audio/win.mp3":
/*!*********************************!*\
  !*** ./src/views/audio/win.mp3 ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e1445b6c74195bd5bbd8.mp3";

/***/ }),

/***/ "./src/views/images/dot.svg":
/*!**********************************!*\
  !*** ./src/views/images/dot.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "708f605515c5b85ba9df.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNnSDtBQUNqQjtBQUNPO0FBQ3RHLDRDQUE0Qyx1SUFBNEM7QUFDeEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDhGQUE4RixVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sT0FBTyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFL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QUNQLElBQUksMkVBQWdCO0FBQ3BCLElBQUksMkVBQWdCO0FBQ3BCLElBQUksMkVBQWdCO0FBQ3BCLElBQUksd0VBQWE7QUFDakIsSUFBSSx3RUFBYTtBQUNqQixJQUFJLHdFQUFhO0FBQ2pCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3Mvc3R5bGVzL21haW4uY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL3N0eWxlcy9tYWluLmNzcz84OWY2Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yTGlua3MuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yUGxheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9mb3JQb3B1cHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yU2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb250cm9sbGVycy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaGVscGVyL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL2FscGhhYmV0cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9jZWxsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL2NlbGxIYW5kbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL2VsZW1lbnRzL2F0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvZWxlbWVudHMvYXVkaW9FZmZlY3RzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL2VsZW1lbnRzL3RlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9nYW1lQ29uZmlnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9zZXNzaW9uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvc2hpcHlhcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvdGltZU1hbmlwdWxhdG9ycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy93YXRlckFyZWFzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3MvYW5pbWF0aW9ucy9hbmltYXRpb25zLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3MvYW5pbWF0aW9ucy9jaGFuZ2VWaXNpYmxlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3MvYW5pbWF0aW9ucy9tYXJrZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3MvYW5pbWF0aW9ucy90aW1lci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL2RyYWdBbmREcm9wL3NldERyYWdnYWJsZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL2RyYWdBbmREcm9wL3NoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3Mvbm9kZXMvYXhpcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL25vZGVzL2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9ub2Rlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9ub2Rlcy9oaXRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3Mvbm9kZXMvbWFya2Vycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL25vZGVzL3BvcHVwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL25vZGVzL3Byb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9ub2Rlcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3Mvbm9kZXMvc2hpcHlhcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9ub2Rlcy90aW1lci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL25vZGVzL3VpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL3ZpZXdzL2ltYWdlcy9kb3Quc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG46cm9vdCB7XG4gICAgZm9udC1zaXplOiBtaW4oMnZoLCAydncpO1xuICAgIC0tYm9hcmQtd2lkdGg6IDA7XG4gICAgLS1ib2FyZC1oZWlnaHQ6IDA7XG4gICAgLS1jZWxsLXNpemU6IG1pbig1dmgsIDJ2dyk7XG59XG5cbmh0bWwge1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG59XG5cbi53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyIG1pbi1jb250ZW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICByb3ctZ2FwOiBtaW4oMnZoLCAwLjh2dyk7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbn1cblxuc3BhbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwYWRkaW5nOiBtaW4oMXZoLCAwLjR2dyk7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xufVxuXG4uaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciBtaW4tY29udGVudDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICAgIHBhZGRpbmc6IG1pbigydmgsIDAuOHZ3KTtcbn1cblxuLnRpdGxlIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuLnRpcHMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjIpO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogbWluKDF2aCwgMXZ3KTtcbiAgICBib3JkZXItcmFkaXVzOiBtaW4oMnZoLCAwLjh2dyk7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbn1cblxuLmV4aXQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG59XG5cbi5tYWluIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4uc2hpcHlhcmQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIG1pbi1jb250ZW50KTtcbiAgICByb3ctZ2FwOiBtaW4oNnZoLCAyLjR2dyk7XG4gICAgcGFkZGluZzogbWluKDJ2aCwgMC44dncpO1xuICAgIHdpZHRoOiBtaW4oNDB2aCwgMTZ2dyk7XG4gICAgaGVpZ2h0OiBtaW4oNDB2aCwgMTZ2dyk7XG4gICAgbWF4LXdpZHRoOiBtaW4oNTB2aCwgMjB2dyk7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uZG9jayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2x1bW4tZ2FwOiBtaW4oNHZoLCAxLjZ2dyk7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbn1cblxuLmJvYXJkX19heGlzLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgbWluLWNvbnRlbnQ7XG4gICAgcm93LWdhcDogbWluKDJ2aCwgMC44dncpO1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiBtaW4oNXZoLCAydncpO1xufVxuXG4uYXhpcy13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcbn1cblxuLmJvYXJkLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgJ2F4aXMteCBheGlzLXggYXhpcy14J1xuICAgICAgICAnc2hpcHlhcmQgYXhpcy15IGJvYXJkJztcbn1cblxuLngtYXhpcyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWFyZWE6IGF4aXMteDtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS1ib2FyZC13aWR0aCksXG4gICAgICAgICAgICBtYXgodmFyKC0tY2VsbC1zaXplKSwgMnZoKSk7XG59XG5cbi55LWF4aXMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hcmVhOiBheGlzLXk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQodmFyKC0tYm9hcmQtaGVpZ2h0KSwgMmZyKTtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG59XG5cbi5ib2FyZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWFyZWE6IGJvYXJkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KHZhcigtLWJvYXJkLXdpZHRoKSwgMmZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCh2YXIoLS1ib2FyZC1oZWlnaHQpLCAyZnIpO1xuICAgIGJvcmRlcjogbWluKDAuNXZoLCAwLjJ2dykgcmdiYSgwLCAwLCAyNTUsIDAuMikgc29saWQ7XG59XG5cbi5wbGF5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtYXJlYTogYm9hcmQ7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHdpZHRoOiBtaW4oMTB2aCwgMTB2dyk7XG4gICAgaGVpZ2h0OiBtaW4oMTB2aCwgMTB2dyk7XG4gICAgbWluLXdpZHRoOiAydmg7XG4gICAgbWluLWhlaWdodDogMnZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTE5LCAyMDIsIDQxLCAwLjcyNik7XG4gICAgYm9yZGVyOiBtaW4oMXZoLCAxdncpIHJnYigxMTksIDIwMiwgNDEpIHNvbGlkO1xuICAgIHotaW5kZXg6IDk5ODtcbn1cblxuLmFpLW1pbmktc2hpcHlhcmQsXG4ucGxheWVyLW1pbmktc2hpcHlhcmQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgcm93LWdhcDogbWluKDJ2aCwgMC44dncpO1xuICAgIHBhZGRpbmc6IG1pbigzdmgsIDEuMnZ3KTtcbn1cblxuLmxvdy1vcGFjaXR5IHtcbiAgICBvcGFjaXR5OiAwLjQ7XG59XG5cbi5ibG9jayB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tYXJrZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG59XG5cbi5jZWxsIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiB2YXIoLS1jZWxsLXNpemUpO1xuICAgIGhlaWdodDogdmFyKC0tY2VsbC1zaXplKTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIG1pbi13aWR0aDogMnZoO1xuICAgIG1pbi1oZWlnaHQ6IDJ2aDtcbn1cblxuLm1pc3MtaGl0IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbi5kZXN0cm95ZWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYm9yZGVyOiAxcHggcmVkIHNvbGlkO1xufVxuXG4ubGl2ZSB7fVxuXG4ueC1jZWxsLFxuLnktY2VsbCB7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBvcGFjaXR5OiAwLjU7XG59XG5cbi5tYXJpbmUtc2VjdG9yIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGJvcmRlcjogbWluKDAuMXZoLCAwLjF2dykgcmdiYSgwLCAwLCAyNTUsIDAuMikgc29saWQ7XG59XG5cbi5zaGlwIHtcbiAgICAtLXg6IDBweDtcbiAgICAtLXk6IDBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS14KSwgdmFyKC0teSkpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICAgIG1hcmdpbi10b3A6IC0xcHg7XG4gICAgYm9yZGVyOiBtaW4oMC4xdmgsIDAuMXZ3KSByZ2JhKDAsIDAsIDI1NSwgMSkgc29saWQ7XG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgdG91Y2gtYWN0aW9uOiBub25lO1xufVxuXG4uZHJhZ2dhYmxlIHt9XG5cbi5ob3Jpem9udGFsIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAyZnIpO1xufVxuXG4udmVydGljYWwge1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDJmcik7XG59XG5cbi5kZWNrIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjEpO1xuICAgIHotaW5kZXg6IDk5OTtcbn1cblxuLmRlY2s+c3ZnIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLm1pbmktc2hpcCB7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiBtaW4tY29udGVudCAhaW1wb3J0YW50O1xufVxuXG4ubWluaS1jZWxsIHtcbiAgICBtaW4td2lkdGg6IDF2aDtcbiAgICBtaW4taGVpZ2h0OiAxdmg7XG4gICAgd2lkdGg6IG1pbigydmgsIDAuOHZ3KTtcbiAgICBoZWlnaHQ6IG1pbigydmgsIDAuOHZ3KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMCwgMC4xKTtcbiAgICBib3JkZXI6IG1pbigwLjF2aCwgMC4xdncpIHJnYmEoMCwgMjU1LCAyNTUsIDEpIHNvbGlkO1xufVxuXG4uZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiBtaW4oNHZoLCAxLjZ2dyk7XG59XG5cbi5yYW5kb20tbW9kZSxcbi5tYW51YWwtbW9kZSB7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgYmx1ZTtcbiAgICBjb2xvcjogYmx1ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yYW5kb20tbW9kZTpob3Zlcixcbi5tYW51YWwtbW9kZTpob3ZlciB7XG4gICAgY29sb3I6IHJnYigxMjIsIDIzMSwgNzIpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgcmdiKDEyMiwgMjMxLCA3Mik7XG59XG5cbi50aW1lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiBtaW4oMnZoLCAwLjh2dyk7XG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcbn1cblxuLnRpbWVyPnN2ZyB7XG4gICAgZGlzcGxheTogZ3JpZDtcblxuICAgIHdpZHRoOiAxMDB2dztcbn1cblxuLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLm51bGwtb3BhY2l0eSB7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLnBvcHVwLXdpbixcbi5wb3B1cC1sb3NlIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWluLWNvbnRlbnQpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcGFkZGluZzogbWluKDF2aCwgMXZ3KTtcbiAgICB6LWluZGV4OiAxMDAwO1xufVxuXG4udGV4dCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiBtaW4oMTB2aCwgMTB2dyk7XG59XG5cbi53aW4sXG4ubG9zZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBtaW4tY29udGVudCk7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgei1pbmRleDogMjAwMDtcbn1cblxuLmdpZi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgd2lkdGg6IG1pbigxMDB2aCwgMTAwdncpO1xuICAgIGhlaWdodDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogbWluKDU2dmgsIDIyLjR2dyk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uc2VsZWN0ZWQge1xuICAgIG9wYWNpdHk6IDAuMDEgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1hc3BlY3QtcmF0aW86IDEuMDAwMDEvMSkge1xuICAgIC5tYWluIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcbiAgICB9XG5cbiAgICAuc2hpcHlhcmQge1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJ2aDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4tYXNwZWN0LXJhdGlvOiAxLzEpIHtcbiAgICAubWFpbiB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XG4gICAgfVxuXG4gICAgLmFpLWJvYXJkIHtcbiAgICAgICAgYWxpZ24tc2VsZjogc3RhcnQ7XG4gICAgfVxufVxuXG4uY3Jvc3Mge1xuICAgIGJvcmRlcjogMXB4IHJlZCBzb2xpZDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy92aWV3cy9zdHlsZXMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztJQUdJLFVBQVU7SUFDVixTQUFTO0lBQ1QsU0FBUztJQUNULFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwrQ0FBK0M7SUFDL0MsV0FBVztJQUNYLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLDBDQUEwQztJQUMxQyxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxh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QUVJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBOztJQUVJLHdCQUF3QjtJQUN4QiwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhOztJQUViLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBOztJQUVJLGVBQWU7SUFDZixhQUFhO0lBQ2IsaURBQWlEO0lBQ2pELFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLE1BQU07SUFDTixPQUFPO0lBQ1AscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWiwwQkFBMEI7QUFDOUI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLDBDQUEwQztJQUMxQyxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QixTQUFTO0lBQ1QsaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSTtRQUNJLDJDQUEyQztJQUMvQzs7SUFFQTtRQUNJLG9CQUFvQjtRQUNwQixtQkFBbUI7SUFDdkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksOENBQThDO0lBQ2xEOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICBmb250LXNpemU6IG1pbigydmgsIDJ2dyk7XFxuICAgIC0tYm9hcmQtd2lkdGg6IDA7XFxuICAgIC0tYm9hcmQtaGVpZ2h0OiAwO1xcbiAgICAtLWNlbGwtc2l6ZTogbWluKDV2aCwgMnZ3KTtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxufVxcblxcbi53cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnIgbWluLWNvbnRlbnQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHJvdy1nYXA6IG1pbigydmgsIDAuOHZ3KTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxufVxcblxcbnNwYW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwYWRkaW5nOiBtaW4oMXZoLCAwLjR2dyk7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgbWluLWNvbnRlbnQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IG1pbigydmgsIDAuOHZ3KTtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4udGlwcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yKTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogbWluKDF2aCwgMXZ3KTtcXG4gICAgYm9yZGVyLXJhZGl1czogbWluKDJ2aCwgMC44dncpO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4uZXhpdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5tYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNoaXB5YXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCBtaW4tY29udGVudCk7XFxuICAgIHJvdy1nYXA6IG1pbig2dmgsIDIuNHZ3KTtcXG4gICAgcGFkZGluZzogbWluKDJ2aCwgMC44dncpO1xcbiAgICB3aWR0aDogbWluKDQwdmgsIDE2dncpO1xcbiAgICBoZWlnaHQ6IG1pbig0MHZoLCAxNnZ3KTtcXG4gICAgbWF4LXdpZHRoOiBtaW4oNTB2aCwgMjB2dyk7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmRvY2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2x1bW4tZ2FwOiBtaW4oNHZoLCAxLjZ2dyk7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxufVxcblxcbi5ib2FyZF9fYXhpcy13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgbWluLWNvbnRlbnQ7XFxuICAgIHJvdy1nYXA6IG1pbigydmgsIDAuOHZ3KTtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IG1pbig1dmgsIDJ2dyk7XFxufVxcblxcbi5heGlzLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xcbn1cXG5cXG4uYm9hcmQtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICAnYXhpcy14IGF4aXMteCBheGlzLXgnXFxuICAgICAgICAnc2hpcHlhcmQgYXhpcy15IGJvYXJkJztcXG59XFxuXFxuLngtYXhpcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXJlYTogYXhpcy14O1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS1ib2FyZC13aWR0aCksXFxuICAgICAgICAgICAgbWF4KHZhcigtLWNlbGwtc2l6ZSksIDJ2aCkpO1xcbn1cXG5cXG4ueS1heGlzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hcmVhOiBheGlzLXk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KHZhcigtLWJvYXJkLWhlaWdodCksIDJmcik7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hcmVhOiBib2FyZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQodmFyKC0tYm9hcmQtd2lkdGgpLCAyZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCh2YXIoLS1ib2FyZC1oZWlnaHQpLCAyZnIpO1xcbiAgICBib3JkZXI6IG1pbigwLjV2aCwgMC4ydncpIHJnYmEoMCwgMCwgMjU1LCAwLjIpIHNvbGlkO1xcbn1cXG5cXG4ucGxheSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXJlYTogYm9hcmQ7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiBtaW4oMTB2aCwgMTB2dyk7XFxuICAgIGhlaWdodDogbWluKDEwdmgsIDEwdncpO1xcbiAgICBtaW4td2lkdGg6IDJ2aDtcXG4gICAgbWluLWhlaWdodDogMnZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExOSwgMjAyLCA0MSwgMC43MjYpO1xcbiAgICBib3JkZXI6IG1pbigxdmgsIDF2dykgcmdiKDExOSwgMjAyLCA0MSkgc29saWQ7XFxuICAgIHotaW5kZXg6IDk5ODtcXG59XFxuXFxuLmFpLW1pbmktc2hpcHlhcmQsXFxuLnBsYXllci1taW5pLXNoaXB5YXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICByb3ctZ2FwOiBtaW4oMnZoLCAwLjh2dyk7XFxuICAgIHBhZGRpbmc6IG1pbigzdmgsIDEuMnZ3KTtcXG59XFxuXFxuLmxvdy1vcGFjaXR5IHtcXG4gICAgb3BhY2l0eTogMC40O1xcbn1cXG5cXG4uYmxvY2sge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tYXJrZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxufVxcblxcbi5jZWxsIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IHZhcigtLWNlbGwtc2l6ZSk7XFxuICAgIGhlaWdodDogdmFyKC0tY2VsbC1zaXplKTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgbWluLXdpZHRoOiAydmg7XFxuICAgIG1pbi1oZWlnaHQ6IDJ2aDtcXG59XFxuXFxuLm1pc3MtaGl0IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zcmMvdmlld3MvaW1hZ2VzL2RvdC5zdmcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG59XFxuXFxuLmRlc3Ryb3llZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJvcmRlcjogMXB4IHJlZCBzb2xpZDtcXG59XFxuXFxuLmxpdmUge31cXG5cXG4ueC1jZWxsLFxcbi55LWNlbGwge1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4ubWFyaW5lLXNlY3RvciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJvcmRlcjogbWluKDAuMXZoLCAwLjF2dykgcmdiYSgwLCAwLCAyNTUsIDAuMikgc29saWQ7XFxufVxcblxcbi5zaGlwIHtcXG4gICAgLS14OiAwcHg7XFxuICAgIC0teTogMHB4O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS14KSwgdmFyKC0teSkpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogLTFweDtcXG4gICAgbWFyZ2luLXRvcDogLTFweDtcXG4gICAgYm9yZGVyOiBtaW4oMC4xdmgsIDAuMXZ3KSByZ2JhKDAsIDAsIDI1NSwgMSkgc29saWQ7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgdG91Y2gtYWN0aW9uOiBub25lO1xcbn1cXG5cXG4uZHJhZ2dhYmxlIHt9XFxuXFxuLmhvcml6b250YWwge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAyZnIpO1xcbn1cXG5cXG4udmVydGljYWwge1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAyZnIpO1xcbn1cXG5cXG4uZGVjayB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjEpO1xcbiAgICB6LWluZGV4OiA5OTk7XFxufVxcblxcbi5kZWNrPnN2ZyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5taW5pLXNoaXAge1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50ICFpbXBvcnRhbnQ7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudCAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWluaS1jZWxsIHtcXG4gICAgbWluLXdpZHRoOiAxdmg7XFxuICAgIG1pbi1oZWlnaHQ6IDF2aDtcXG4gICAgd2lkdGg6IG1pbigydmgsIDAuOHZ3KTtcXG4gICAgaGVpZ2h0OiBtaW4oMnZoLCAwLjh2dyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAwLCAwLjEpO1xcbiAgICBib3JkZXI6IG1pbigwLjF2aCwgMC4xdncpIHJnYmEoMCwgMjU1LCAyNTUsIDEpIHNvbGlkO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IG1pbig0dmgsIDEuNnZ3KTtcXG59XFxuXFxuLnJhbmRvbS1tb2RlLFxcbi5tYW51YWwtbW9kZSB7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgYmx1ZTtcXG4gICAgY29sb3I6IGJsdWU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJhbmRvbS1tb2RlOmhvdmVyLFxcbi5tYW51YWwtbW9kZTpob3ZlciB7XFxuICAgIGNvbG9yOiByZ2IoMTIyLCAyMzEsIDcyKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCByZ2IoMTIyLCAyMzEsIDcyKTtcXG59XFxuXFxuLnRpbWVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IG1pbigydmgsIDAuOHZ3KTtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG59XFxuXFxuLnRpbWVyPnN2ZyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuXFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5udWxsLW9wYWNpdHkge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4ucG9wdXAtd2luLFxcbi5wb3B1cC1sb3NlIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWluLWNvbnRlbnQpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBhZGRpbmc6IG1pbigxdmgsIDF2dyk7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxufVxcblxcbi50ZXh0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IG1pbigxMHZoLCAxMHZ3KTtcXG59XFxuXFxuLndpbixcXG4ubG9zZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIG1pbi1jb250ZW50KTtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB6LWluZGV4OiAyMDAwO1xcbn1cXG5cXG4uZ2lmLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogbWluKDEwMHZoLCAxMDB2dyk7XFxuICAgIGhlaWdodDogMDtcXG4gICAgcGFkZGluZy1ib3R0b206IG1pbig1NnZoLCAyMi40dncpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgICBvcGFjaXR5OiAwLjAxICFpbXBvcnRhbnQ7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtYXNwZWN0LXJhdGlvOiAxLjAwMDAxLzEpIHtcXG4gICAgLm1haW4ge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcXG4gICAgfVxcblxcbiAgICAuc2hpcHlhcmQge1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnZoO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4tYXNwZWN0LXJhdGlvOiAxLzEpIHtcXG4gICAgLm1haW4ge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcXG4gICAgfVxcblxcbiAgICAuYWktYm9hcmQge1xcbiAgICAgICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICAgIH1cXG59XFxuXFxuLmNyb3NzIHtcXG4gICAgYm9yZGVyOiAxcHggcmVkIHNvbGlkO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBnYW1lIH0gZnJvbSAnLi4vLi4nO1xuaW1wb3J0IHsgU2Vzc2lvbiB9IGZyb20gJy4uLy4uL21vZGVscy9zZXNzaW9uJztcbmltcG9ydCB7IHJlbW92ZUhpZGRlbiwgc2V0SGlkZGVuIH0gZnJvbSAnLi4vLi4vdmlld3MvYW5pbWF0aW9ucy9jaGFuZ2VWaXNpYmxlJztcbmltcG9ydCB7IHZpZXdTaGlweWFyZCB9IGZyb20gJy4uLy4uL3ZpZXdzL25vZGVzL3NoaXB5YXJkJztcblxuZXhwb3J0IGNvbnN0IHNldExpc3RlbmVyc0ZvckxpbmtzID0gKCkgPT4ge1xuICAgIGNvbnN0IG1hbnVhbE1vZGVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hbnVhbC1tb2RlJyk7XG4gICAgY29uc3QgcmFuZG9tTW9kZUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZG9tLW1vZGUnKTtcbiAgICBjb25zdCBzaGlweWFyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlweWFyZCcpO1xuXG4gICAgY29uc3Qgb3Blbk1hbnVhbE1vZGUgPSBtYW51YWxNb2RlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIFNlc3Npb24ubWFudWFsTW9kZSA9IHRydWU7XG4gICAgICAgIGdhbWUucGxheWVyLmdldEdhbWVib2FyZCgpLnJlc2V0KCk7XG4gICAgICAgIHZpZXdTaGlweWFyZChnYW1lLnBsYXllci5nZXRTaGlweWFyZCgpKTtcbiAgICAgICAgc2V0SGlkZGVuKGdhbWUuYWkuZ2V0R2FtZWJvYXJkKCkuZ2V0Tm9kZSgpKTtcbiAgICAgICAgcmVtb3ZlSGlkZGVuKHNoaXB5YXJkKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG9wZW5SYW5kb21Nb2RlID0gcmFuZG9tTW9kZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBTZXNzaW9uLm1hbnVhbE1vZGUgPSBmYWxzZTtcbiAgICAgICAgcmVtb3ZlSGlkZGVuKGdhbWUuYWkuZ2V0R2FtZWJvYXJkKCkuZ2V0Tm9kZSgpKTtcbiAgICAgICAgc2V0SGlkZGVuKHNoaXB5YXJkKTtcbiAgICAgICAgZ2FtZS5wbGF5ZXIuZ2V0R2FtZWJvYXJkKCkucmFuZG9tRmlsbGluZ09mU2hpcHMoKTtcbiAgICB9KTtcbn07XG4iLCJpbXBvcnQgeyBnYW1lIH0gZnJvbSAnLi4vLi4nO1xuaW1wb3J0IHsgY2xpY2tFZmZlY3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvZWxlbWVudHMvYXVkaW9FZmZlY3RzJztcblxuZXhwb3J0IGNvbnN0IHNldExpc3RlbmVyc0ZvclBsYXlCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXknKTtcbiAgICBjb25zdCBjbGljayA9IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGNsaWNrRWZmZWN0LnBsYXkoKTtcbiAgICAgICAgZ2FtZS5wbGF5KCk7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0TGlzdGVuZXJzRm9yRXhpdEJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXhpdCcpO1xuXG4gICAgY29uc3QgY2xpY2sgPSBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjbGlja0VmZmVjdC5wbGF5KCk7XG4gICAgICAgIGdhbWUuZW5kKCk7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0TGlzdGVuZXJzRm9yQ2VsbHMgPSAoKSA9PiB7XG4gICAgY29uc3QgY2VsbHMgPSBnYW1lLmFpLmdldEdhbWVib2FyZCgpLmdldFVuc3RydWN0ZWRDb250YWluZXIoKTtcbiAgICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBjZWxsLmdldENlbGxOb2RlKCk7XG4gICAgICAgIG5vZGUuc3R5bGUuekluZGV4ID0gMTAwMDtcbiAgICAgICAgY29uc3QgY2xpY2sgPSBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGdhbWUuZ2FtZUhhbmRsZXIuY2hlY2tDZWxsKGNlbGwpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG4iLCJpbXBvcnQgeyBnYW1lIH0gZnJvbSAnLi4vLi4nO1xuaW1wb3J0IHsgaGlkZGVuUG9wdXAgfSBmcm9tICcuLi8uLi92aWV3cy9ub2Rlcy9wb3B1cHMnO1xuXG5leHBvcnQgY29uc3Qgc2V0TGlzdGVuZXJzZm9yUG9wdXBzID0gKCkgPT4ge1xuICAgIGNvbnN0IHBvcHVwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cCcpO1xuICAgIHBvcHVwcy5mb3JFYWNoKChwb3B1cCkgPT4ge1xuICAgICAgICBjb25zdCBjbGljayA9IHBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGhpZGRlblBvcHVwKHBvcHVwKTtcbiAgICAgICAgICAgIGdhbWUuZW5kKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcbiIsImltcG9ydCB7IENvb3JkaW5hdGVzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2dhbWUnO1xuaW1wb3J0IHsgU2Vzc2lvbiwgcmVzZXRTZXNzaW9uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Nlc3Npb24nO1xuaW1wb3J0IHsgdmlld0RyYWdTaGlwRm9yTW9iaWxlLCB2aWV3U2hpcCB9IGZyb20gJy4uLy4uL3ZpZXdzL25vZGVzL3NoaXAnO1xuaW1wb3J0IHsgc2hpcERyYWdFbmQgfSBmcm9tICcuLi9zaGlwJztcblxuZXhwb3J0IGNvbnN0IHNldExpc3RlbmVyc0ZvclNoaXBzID0gKHNoaXBzKSA9PiB7XG4gICAgY29uc3QgYm9yZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1ib2FyZCcpO1xuXG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICBjb25zdCBkZWNrcyA9IHNoaXAuZ2V0Qm9keSgpO1xuICAgICAgICBkZWNrcy5mb3JFYWNoKChkZWNrKSA9PiB7XG4gICAgICAgICAgICBkZWNrLmdldENlbGxOb2RlKCkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2dCkgPT4ge1xuICAgICAgICAgICAgICAgIFNlc3Npb24uaW5kZXggPSBkZWNrLmdldE51bWJlcigpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGRlY2suZ2V0Q2VsbE5vZGUoKS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGV2dCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgbGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0IH0gPSBkZWNrLmdldENlbGxOb2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICAgICAgICBjb25zdCBjZW50ZXJYID0gbGVmdCArIHdpZHRoIC8gMlxuICAgICAgICAgICAgICAgIGNvbnN0IGNlbnRlclkgPSB0b3AgKyBoZWlnaHQgLyAyXG4gICAgICAgICAgICAgICAgQ29vcmRpbmF0ZXMuc2V0Q29vcmRpbmF0ZXMoY2VudGVyWCwgY2VudGVyWSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZGVjay5nZXRDZWxsTm9kZSgpLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKGV2dCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBldmVudCA9IG5ldyBFdmVudCgnbW91c2Vkb3duJyk7XG4gICAgICAgICAgICAgICAgZGVjay5nZXRDZWxsTm9kZSgpLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNoaXAuZ2V0Q29udGFpbmVyKCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHNoaXAuZ2V0SGVhZCgpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgU2Vzc2lvbi5hY3RpdmVTaGlwID0gc2hpcDtcbiAgICAgICAgICAgICAgICBTZXNzaW9uLmN1cnJlbnRFbGVtZW50ID0gc2hpcC5nZXRIZWFkKCkuZ2V0Q2VsbE5vZGUoKTtcbiAgICAgICAgICAgICAgICBzaGlwLm9yaWVudGF0aW9uU3dpdGNoKCk7XG4gICAgICAgICAgICAgICAgbGV0IGlzVmlldyA9IHZpZXdTaGlwKHNoaXAsIHNoaXAuZ2V0SGVhZCgpKTtcblxuICAgICAgICAgICAgICAgIGlmIChpc1ZpZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hpcC5zZXRPcmllbnRhdGlvbigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNoaXAub3JpZW50YXRpb25Td2l0Y2goKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXNldFNlc3Npb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2hpcC5nZXRDb250YWluZXIoKS5hZGRFdmVudExpc3RlbmVyKGBkcmFnc3RhcnRgLCAoZXZ0KSA9PiB7XG4gICAgICAgICAgICBldnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoYHNlbGVjdGVkYCk7XG4gICAgICAgICAgICBTZXNzaW9uLmFjdGl2ZVNoaXAgPSBzaGlwO1xuICAgICAgICB9KTtcblxuICAgICAgICBzaGlwLmdldENvbnRhaW5lcigpLmFkZEV2ZW50TGlzdGVuZXIoYGRyYWdlbmRgLCAoZXZ0KSA9PiB7XG4gICAgICAgICAgICBDb29yZGluYXRlcy5yZXNldCgpO1xuICAgICAgICAgICAgZXZ0LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKGBzZWxlY3RlZGApO1xuICAgICAgICAgICAgc2hpcC5nZXRDb250YWluZXIoKS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS15JywgYDBweGApO1xuICAgICAgICAgICAgc2hpcC5nZXRDb250YWluZXIoKS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS14JywgYDBweGApO1xuICAgICAgICAgICAgc2hpcERyYWdFbmQoKTtcbiAgICAgICAgICAgIHJlc2V0U2Vzc2lvbigpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzaGlwLmdldENvbnRhaW5lcigpLmFkZEV2ZW50TGlzdGVuZXIoYHRvdWNoc3RhcnRgLCAoZXZ0KSA9PiB7XG4gICAgICAgICAgICBTZXNzaW9uLmFjdGl2ZVNoaXAgPSBzaGlwO1xuICAgICAgICB9KTtcblxuICAgICAgICBzaGlwLmdldENvbnRhaW5lcigpLmFkZEV2ZW50TGlzdGVuZXIoYHRvdWNoZW5kYCwgKGV2dCkgPT4ge1xuICAgICAgICAgICAgbGV0IGV2ZW50ID0gbmV3IERyYWdFdmVudCgnZHJhZ2VuZCcpO1xuICAgICAgICAgICAgc2hpcC5nZXRDb250YWluZXIoKS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2hpcC5nZXRDb250YWluZXIoKS5hZGRFdmVudExpc3RlbmVyKGB0b3VjaG1vdmVgLCAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGN1cnNvclggPSBlLnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgICAgIGxldCBjdXJzb3JZID0gZS50b3VjaGVzWzBdLmNsaWVudFk7XG4gICAgICAgICAgICBzZXRDdXJyZW50RWxlbWVudEZvck1vYmlsZURyYWcoY3Vyc29yWCwgY3Vyc29yWSk7XG4gICAgICAgICAgICB2aWV3RHJhZ1NoaXBGb3JNb2JpbGUoY3Vyc29yWCwgY3Vyc29yWSwgc2hpcC5nZXRDb250YWluZXIoKSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgYm9yZGVyLmFkZEV2ZW50TGlzdGVuZXIoYGRyYWdvdmVyYCwgKGV2dCkgPT4ge1xuICAgICAgICBTZXNzaW9uLmN1cnJlbnRFbGVtZW50ID0gZXZ0LnRhcmdldDtcbiAgICB9KTtcblxuICAgIGNvbnN0IHNldEN1cnJlbnRFbGVtZW50Rm9yTW9iaWxlRHJhZyA9IChjdXJzb3JYLCBjdXJzb3JZKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQoY3Vyc29yWCwgY3Vyc29yWSk7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ21hcmluZS1zZWN0b3InKSkge1xuICAgICAgICAgICAgICAgIFNlc3Npb24uY3VycmVudEVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn07XG4iLCJpbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9tb2RlbHMvZ2FtZUNvbmZpZyc7XG5pbXBvcnQgeyBTZXNzaW9uIH0gZnJvbSAnLi4vbW9kZWxzL3Nlc3Npb24nO1xuaW1wb3J0IHsgdmlld1NoaXAgfSBmcm9tICcuLi92aWV3cy9ub2Rlcy9zaGlwJztcblxuZXhwb3J0IGNvbnN0IHNoaXBEcmFnRW5kID0gKCkgPT4ge1xuICAgIGxldCBpc01vdmVhYmxlID0gZmFsc2U7XG4gICAgbGV0IGlzQWx0ZXJNb3ZhYmxlID0gZmFsc2U7XG4gICAgbGV0IGJvZHkgPSBTZXNzaW9uLmFjdGl2ZVNoaXAuZ2V0Qm9keSgpO1xuICAgIFxuICAgIGlmIChTZXNzaW9uLmN1cnJlbnRFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGlzTW92ZWFibGUgPSBTZXNzaW9uLmN1cnJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhgbWFyaW5lLXNlY3RvcmApO1xuICAgICAgICBpc0FsdGVyTW92YWJsZSA9IFNlc3Npb24uY3VycmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGBkZWNrYCk7XG4gICAgfVxuXG4gICAgaWYgKCFpc01vdmVhYmxlICYmICFpc0FsdGVyTW92YWJsZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGlzTW92ZWFibGUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDb25maWcuR2FtZWJvYXJkLmhlaWdodDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IENvbmZpZy5HYW1lYm9hcmQud2lkdGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgU2Vzc2lvbi5hY3RpdmVTaGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2V0Qm9hcmQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmdldFN0cnVjdGVkQ29udGFpbmVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgIFtqXVtpXS5nZXRDZWxsTm9kZSgpID09PSBTZXNzaW9uLmN1cnJlbnRFbGVtZW50XG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhZGRTaGlwT25Cb2FyZChTZXNzaW9uLmluZGV4LCBqLCBpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzQWx0ZXJNb3ZhYmxlKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9keS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGJvZHlbaV0uZ2V0Q2VsbE5vZGUoKSA9PT0gU2Vzc2lvbi5jdXJyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIFNlc3Npb24uZG91YmxlSW5kZXggPSBTZXNzaW9uLmluZGV4IC0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoU2Vzc2lvbi5kb3VibGVJbmRleCAhPT0gJ3NoaXAnKSB7XG4gICAgICAgICAgICBsZXQgaGVhZCA9IFNlc3Npb24uYWN0aXZlU2hpcC5nZXRIZWFkKCkuZ2V0Q2VsbE5vZGUoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQ29uZmlnLkdhbWVib2FyZC5oZWlnaHQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgQ29uZmlnLkdhbWVib2FyZC53aWR0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIFNlc3Npb24uYWN0aXZlU2hpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRCb2FyZCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldFN0cnVjdGVkQ29udGFpbmVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbal1baV0uZ2V0Q2VsbE5vZGUoKSA9PT0gaGVhZFxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhZGRTaGlwT25Cb2FyZChTZXNzaW9uLmRvdWJsZUluZGV4LCBqLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmNvbnN0IGFkZFNoaXBPbkJvYXJkID0gKGluZGV4LCB5LCB4KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2JiYmN4dnhjeGN4JylcbiAgICBsZXQgZGF0YSA9IGdldERhdGEoaW5kZXgsIHksIHgpO1xuICAgIHJldHVybiB2aWV3U2hpcE9uQm9hcmQoZGF0YSk7XG59O1xuXG5jb25zdCBnZXREYXRhID0gKGluZGV4LCB4LCB5KSA9PiB7XG4gICAgcmV0dXJuIFNlc3Npb24uYWN0aXZlU2hpcC5pc0hvcml6b250YWwoKVxuICAgICAgICA/IHsgeDogeCwgeTogeSAtIGluZGV4IH1cbiAgICAgICAgOiB7IHg6IHggLSBpbmRleCwgeTogeSB9O1xufTtcblxuY29uc3Qgdmlld1NoaXBPbkJvYXJkID0gKGRhdGEpID0+IHtcbiAgICByZXR1cm4gdmlld1NoaXAoXG4gICAgICAgIFNlc3Npb24uYWN0aXZlU2hpcCxcbiAgICAgICAgU2Vzc2lvbi5hY3RpdmVTaGlwLmdldEJvYXJkKCkuZ2V0U3RydWN0ZWRDb250YWluZXIoKVtkYXRhLnhdW2RhdGEueV0sXG4gICAgKTtcbn07XG4iLCJleHBvcnQgY29uc3QgcmFuZG9tSW50RnJvbUludGVydmFsID0gKG1pbiwgbWF4KSA9PiB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlQ2hpbGRzID0gKG5vZGUpID0+IHtcbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICB3aGlsZSAobm9kZS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBub2RlLnJlbW92ZUNoaWxkKG5vZGUubGFzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBhZGRDbGFzc2VzID0gKG5vZGUsIC4uLmNsYXNzZXMpID0+IHtcbiAgICBmb3IgKGxldCBjdXJDbGFzcyBvZiBjbGFzc2VzKSB7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChjdXJDbGFzcyk7XG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHNldEF0dHJpYnV0ZXMgPSAoZSwgYXRycykgPT4ge1xuICAgIGZvciAobGV0IGF0ciBvZiBhdHJzKSB7XG4gICAgICAgIGUuc2V0QXR0cmlidXRlKGF0ci5uYW1lLCBhdHIudmFsKTtcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgYXBwZW5kQ2hpbGRzID0gKG5vZGUsIC4uLmNoaWxkcykgPT4ge1xuICAgIGZvciAobGV0IGNoaWxkIG9mIGNoaWxkcykge1xuICAgICAgICBub2RlLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICB9XG59O1xuIiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vbW9kZWxzL2dhbWUnO1xuaW1wb3J0ICcuL3ZpZXdzL3N0eWxlcy9tYWluLmNzcyc7XG5cbmV4cG9ydCBjb25zdCBnYW1lID0gR2FtZSgpO1xuZ2FtZS5zdGFydCgpO1xuIiwiY29uc3QgQWxwaGFiZXQgPSAoZmlyc3RDaGFyQ29kZSwgbGFzdENoYXJDb2RlKSA9PiB7XG4gICAgY29uc3QgbG9uZyA9IGxhc3RDaGFyQ29kZSAtIGZpcnN0Q2hhckNvZGUgKyAxO1xuICAgIGNvbnN0IGNvZGVzID0gQXJyYXkuZnJvbShBcnJheShsb25nKS5rZXlzKCksICh4KSA9PiB4ICsgZmlyc3RDaGFyQ29kZSk7XG5cbiAgICBjb25zdCBpc1RoaXNBbHBoYWJldCA9IChjaGFyQ29kZSkgPT4ge1xuICAgICAgICBpZiAoY2hhckNvZGUgPj0gZmlyc3RDaGFyQ29kZSAmJiBjaGFyQ29kZSA8PSBsYXN0Q2hhckNvZGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgZmlyc3RDaGFyQ29kZSwgbGFzdENoYXJDb2RlLCBsb25nLCBpc1RoaXNBbHBoYWJldCwgY29kZXMgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBBbHBoYWJldHMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGVuZyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWxwaGFiZXQgPSBBbHBoYWJldCg5NywgMTIyKTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYWxwaGFiZXQpO1xuICAgIH07XG5cbiAgICBjb25zdCBydXMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFscGhhYmV0ID0gQWxwaGFiZXQoMTA3MiwgMTEwMyk7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKGFscGhhYmV0KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgZW5nLCBydXMgfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyByZW1vdmVDaGlsZHMgfSBmcm9tICcuLi9oZWxwZXIvaGVscGVyJztcbmltcG9ydCB7IHNldE5vcm1hbE9wYWNpdHkgfSBmcm9tICcuLi92aWV3cy9hbmltYXRpb25zL2NoYW5nZVZpc2libGUnO1xuaW1wb3J0IHsgZ2V0Tm9kZSB9IGZyb20gJy4uL3ZpZXdzL25vZGVzL2ZhY3RvcnknO1xuXG5leHBvcnQgY29uc3QgQ2VsbCA9ICh4ID0gLTEsIHkgPSAtMSwgbmFtZSA9ICdjZWxsJykgPT4ge1xuICAgIGxldCBoaXQgPSBmYWxzZTtcbiAgICBsZXQgcGFyZW50ID0gJ2ZyZWUnO1xuICAgIGxldCBub2RlID0gZ2V0Tm9kZShuYW1lLCAnY2VsbCcpO1xuICAgIGxldCBsaW5rZWREZWNrID0gJ2ZyZWUnO1xuXG4gICAgY29uc3Qgc2V0TGlua2VkRGVjayA9IChkZWNrKSA9PiB7XG4gICAgICAgIGxpbmtlZERlY2sgPSBkZWNrO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRMaW5rZWREZWNrID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbGlua2VkRGVjaztcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0VGhlSGl0ID0gKCkgPT4ge1xuICAgICAgICBoaXQgPSB0cnVlO1xuICAgIH07XG5cbiAgICBjb25zdCBpc0hpdCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGhpdDtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0UGFyZW50ID0gKG5QYXJlbnQpID0+IHtcbiAgICAgICAgcGFyZW50ID0gblBhcmVudDtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UGFyZW50ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRDZWxsTm9kZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFhZID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4geyB4LCB5IH07XG4gICAgfTtcblxuICAgIGNvbnN0IHNldFhZID0gKG54LCBueSkgPT4ge1xuICAgICAgICB4ID0gbng7XG4gICAgICAgIHkgPSBueTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgICAgIGhpdCA9IGZhbHNlO1xuICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ21pc3MtaGl0Jyk7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnZGVzdHJveWVkJyk7XG4gICAgICAgIHJlbW92ZUNoaWxkcyhub2RlKTtcbiAgICAgICAgc2V0Tm9ybWFsT3BhY2l0eShub2RlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0VGhlSGl0LFxuICAgICAgICBpc0hpdCxcbiAgICAgICAgc2V0UGFyZW50LFxuICAgICAgICBnZXRQYXJlbnQsXG4gICAgICAgIGdldENlbGxOb2RlLFxuICAgICAgICBnZXRYWSxcbiAgICAgICAgc2V0WFksXG4gICAgICAgIHNldExpbmtlZERlY2ssXG4gICAgICAgIGdldExpbmtlZERlY2ssXG4gICAgICAgIHJlc2V0LFxuICAgIH07XG59O1xuXG5leHBvcnQgY29uc3QgRGVjayA9IChudW1iZXIpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBDZWxsKC0xLCAtMSwgJ2RlY2snKTtcblxuICAgIGNvbnN0IGdldE51bWJlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICB9O1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvdG90eXBlLCB7IGdldE51bWJlciB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBNYXJpbmVTZWN0b3IgPSAoeSwgeCkgPT4ge1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IENlbGwoeSwgeCwgJ21hcmluZS1zZWN0b3InKTtcbiAgICBsZXQgb2NjdXBhbnQgPSAnZnJlZSc7XG5cbiAgICBjb25zdCBvY2N1cHkgPSAobk9jY3VwYW50KSA9PiB7XG4gICAgICAgIG9jY3VwYW50ID0gbk9jY3VwYW50O1xuICAgIH07XG5cbiAgICBjb25zdCBjbGVhciA9ICgpID0+IHtcbiAgICAgICAgb2NjdXBhbnQgPSAnZnJlZSc7XG4gICAgICAgIHByb3RvdHlwZS5yZXNldCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBpc0ZyZWUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBvY2N1cGFudCA9PT0gJ2ZyZWUnO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRPY2N1cGFudCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG9jY3VwYW50O1xuICAgIH07XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm90b3R5cGUsIHsgaXNGcmVlLCBjbGVhciwgb2NjdXB5LCBnZXRPY2N1cGFudCB9KTtcbn07XG4iLCJleHBvcnQgY29uc3QgQ2VsbEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZ2V0QmVmb3JlID0gKHgsIHksIHBhcmVudCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFt5XVstLXhdO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFt5XVsrK3hdO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldEFmdGVyID0gKHgsIHksIHBhcmVudCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFt5XVsrK3hdO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFt5XVstLXhdO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldE92ZXIgPSAoeCwgeSwgcGFyZW50KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50Wy0teV1beF07XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50WysreV1beF07XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0VW5kZXIgPSAoeCwgeSwgcGFyZW50KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50WysreV1beF07XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50Wy0teV1beF07XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0RGlhZzEgPSAoeCwgeSwgcGFyZW50KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50Wy0teV1bLS14XTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbKyt5XVsrK3hdO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldERpYWcyID0gKHgsIHksIHBhcmVudCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFstLXldWysreF07XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50WysreV1bLS14XTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBnZXREaWFnMyA9ICh4LCB5LCBwYXJlbnQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbKyt5XVsrK3hdO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFstLXldWy0teF07XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0RGlhZzQgPSAoeCwgeSwgcGFyZW50KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50WysreV1bLS14XTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbLS15XVsrK3hdO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldENlbGxBcm91bmRBcmVhID0gKHgsIHksIHBhcmVudCkgPT4ge1xuICAgICAgICBsZXQgY2VsbHMgPSBbXTtcbiAgICAgICAgY2VsbHMucHVzaChnZXRCZWZvcmUoeCwgeSwgcGFyZW50KSk7XG4gICAgICAgIGNlbGxzLnB1c2goZ2V0QWZ0ZXIoeCwgeSwgcGFyZW50KSk7XG4gICAgICAgIGNlbGxzLnB1c2goZ2V0T3Zlcih4LCB5LCBwYXJlbnQpKTtcbiAgICAgICAgY2VsbHMucHVzaChnZXRVbmRlcih4LCB5LCBwYXJlbnQpKTtcbiAgICAgICAgY2VsbHMucHVzaChnZXREaWFnMSh4LCB5LCBwYXJlbnQpKTtcbiAgICAgICAgY2VsbHMucHVzaChnZXREaWFnMih4LCB5LCBwYXJlbnQpKTtcbiAgICAgICAgY2VsbHMucHVzaChnZXREaWFnMyh4LCB5LCBwYXJlbnQpKTtcbiAgICAgICAgY2VsbHMucHVzaChnZXREaWFnNCh4LCB5LCBwYXJlbnQpKTtcbiAgICAgICAgY2VsbHMgPSBjZWxscy5maWx0ZXIoKGNlbGwpID0+IGNlbGwgIT09IHVuZGVmaW5lZCk7XG4gICAgICAgIHJldHVybiBjZWxscztcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0RGlhZHMgPSAoeCwgeSwgcGFyZW50KSA9PiB7XG4gICAgICAgIGxldCBjZWxscyA9IFtdO1xuICAgICAgICBjZWxscy5wdXNoKGdldERpYWcxKHgsIHksIHBhcmVudCkpO1xuICAgICAgICBjZWxscy5wdXNoKGdldERpYWcyKHgsIHksIHBhcmVudCkpO1xuICAgICAgICBjZWxscy5wdXNoKGdldERpYWczKHgsIHksIHBhcmVudCkpO1xuICAgICAgICBjZWxscy5wdXNoKGdldERpYWc0KHgsIHksIHBhcmVudCkpO1xuICAgICAgICBjZWxscyA9IGNlbGxzLmZpbHRlcigoY2VsbCkgPT4gY2VsbCAhPT0gdW5kZWZpbmVkKTtcbiAgICAgICAgcmV0dXJuIGNlbGxzO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBnZXRDZWxsQXJvdW5kQXJlYSwgZ2V0RGlhZHMgfTtcbn07XG4iLCJleHBvcnQgY29uc3QgQ3Jvc3NBdHRyaWJ1dGVzID0gKCgpID0+IHtcbiAgICBjb25zdCBsaW5lID0gW1xuICAgICAgICB7IG5hbWU6ICdzdHJva2UnLCB2YWw6ICdyZWQnIH0sXG4gICAgICAgIHsgbmFtZTogJ3N0cm9rZS13aWR0aCcsIHZhbDogJzUlJyB9LFxuICAgICAgICB7IG5hbWU6ICdzdHJva2UtbGluZWNhcCcsIHZhbDogJ3JvdW5kJyB9LFxuICAgICAgICB7IG5hbWU6ICdzdHJva2UtZGFzaGFycmF5JywgdmFsOiAnMTIwJScgfSxcbiAgICAgICAgeyBuYW1lOiAnc3Ryb2tlLWRhc2hvZmZzZXQnLCB2YWw6ICcxMjAlJyB9LFxuICAgIF07XG4gICAgY29uc3QgbGVmdERpYWcgPSBbXG4gICAgICAgIHsgbmFtZTogJ3gxJywgdmFsOiAnMTAlJyB9LFxuICAgICAgICB7IG5hbWU6ICd5MScsIHZhbDogJzEwJScgfSxcbiAgICAgICAgeyBuYW1lOiAneDInLCB2YWw6ICc5MCUnIH0sXG4gICAgICAgIHsgbmFtZTogJ3kyJywgdmFsOiAnOTAlJyB9LFxuICAgIF07XG4gICAgY29uc3QgcmlnaHREaWFnID0gW1xuICAgICAgICB7IG5hbWU6ICd4MicsIHZhbDogJzEwJScgfSxcbiAgICAgICAgeyBuYW1lOiAneTInLCB2YWw6ICc5MCUnIH0sXG4gICAgICAgIHsgbmFtZTogJ3gxJywgdmFsOiAnOTAlJyB9LFxuICAgICAgICB7IG5hbWU6ICd5MScsIHZhbDogJzEwJScgfSxcbiAgICBdO1xuICAgIHJldHVybiB7IGxpbmUsIGxlZnREaWFnLCByaWdodERpYWcgfTtcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBIb3Jpem9udGFsTGluZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgaG9yaXpvbnRhbCA9IFtcbiAgICAgICAgeyBuYW1lOiAnc3Ryb2tlJywgdmFsOiAncmVkJyB9LFxuICAgICAgICB7IG5hbWU6ICdzdHJva2Utd2lkdGgnLCB2YWw6ICdtaW4oM3ZoICwzdncpJyB9LFxuICAgICAgICB7IG5hbWU6ICdzdHJva2UtbGluZWNhcCcsIHZhbDogJ3JvdW5kJyB9LFxuICAgICAgICB7IG5hbWU6ICdzdHJva2UtZGFzaGFycmF5JywgdmFsOiAnMTAwdncnIH0sXG4gICAgICAgIHsgbmFtZTogJ3N0cm9rZS1kYXNob2Zmc2V0JywgdmFsOiAnMTAwdncnIH0sXG4gICAgICAgIHsgbmFtZTogJ3gxJywgdmFsOiAnMHZ3JyB9LFxuICAgICAgICB7IG5hbWU6ICd5MScsIHZhbDogJzB2dycgfSxcbiAgICAgICAgeyBuYW1lOiAneDInLCB2YWw6ICcxMDB2dycgfSxcbiAgICAgICAgeyBuYW1lOiAneTInLCB2YWw6ICcwdncnIH0sXG4gICAgXTtcbiAgICByZXR1cm4geyBob3Jpem9udGFsIH07XG59KSgpO1xuIiwiaW1wb3J0IGNyb3NzQXVkaW8gZnJvbSAnLi4vLi4vdmlld3MvYXVkaW8vY3Jvc3MubXAzJztcbmltcG9ydCBtaXNzSGl0IGZyb20gJy4uLy4uL3ZpZXdzL2F1ZGlvL3Nob3QubXAzJztcbmltcG9ydCBib29tU2hpcCBmcm9tICcuLi8uLi92aWV3cy9hdWRpby9ib29tLm1wMyc7XG5pbXBvcnQgY2xpY2sgZnJvbSAnLi4vLi4vdmlld3MvYXVkaW8vY2xpY2tQbGF5Lm1wMyc7XG5pbXBvcnQgdGltZXIgZnJvbSAnLi4vLi4vdmlld3MvYXVkaW8vdGltZXIubXAzJztcbmltcG9ydCB3aW5Tb3VuZCBmcm9tICcuLi8uLi92aWV3cy9hdWRpby93aW4ubXAzJztcbmltcG9ydCBsb3NlU291bmQgZnJvbSAnLi4vLi4vdmlld3MvYXVkaW8vbG9zZS5tcDMnO1xuXG5leHBvcnQgY29uc3QgZHJhd0Nyb3NzID0gKCgpID0+IHtcbiAgICBsZXQgYXVkaW8gPSBuZXcgQXVkaW8oY3Jvc3NBdWRpbyk7XG4gICAgYXVkaW8ucGxheWJhY2tSYXRlID0gMztcbiAgICBhdWRpby52b2x1bWUgPSAwLjU7XG4gICAgcmV0dXJuIGF1ZGlvO1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IG1pc3NFZmZlY3QgPSAoKCkgPT4ge1xuICAgIGxldCBhdWRpbyA9IG5ldyBBdWRpbyhtaXNzSGl0KTtcbiAgICBhdWRpby5wbGF5YmFja1JhdGUgPSAyO1xuICAgIGF1ZGlvLnZvbHVtZSA9IDAuNDtcbiAgICByZXR1cm4gYXVkaW87XG59KSgpO1xuXG5leHBvcnQgY29uc3Qga2lsbFNoaXBFZmZlY3QgPSAoKCkgPT4ge1xuICAgIGxldCBhdWRpbyA9IG5ldyBBdWRpbyhib29tU2hpcCk7XG4gICAgYXVkaW8udm9sdW1lID0gMC4yO1xuICAgIHJldHVybiBhdWRpbztcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBjbGlja0VmZmVjdCA9ICgoKSA9PiB7XG4gICAgbGV0IGF1ZGlvID0gbmV3IEF1ZGlvKGNsaWNrKTtcbiAgICBhdWRpby52b2x1bWUgPSAxO1xuICAgIHJldHVybiBhdWRpbztcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCB0aW1lckVmZmVjdCA9ICgoKSA9PiB7XG4gICAgbGV0IGF1ZGlvID0gbmV3IEF1ZGlvKHRpbWVyKTtcbiAgICBhdWRpby52b2x1bWUgPSAxO1xuICAgIHJldHVybiBhdWRpbztcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCB3aW4gPSAoKCkgPT4ge1xuICAgIGxldCBhdWRpbyA9IG5ldyBBdWRpbyh3aW5Tb3VuZCk7XG4gICAgYXVkaW8udm9sdW1lID0gMTtcbiAgICByZXR1cm4gYXVkaW87XG59KSgpO1xuXG5leHBvcnQgY29uc3QgbG9zZSA9ICgoKSA9PiB7XG4gICAgbGV0IGF1ZGlvID0gbmV3IEF1ZGlvKGxvc2VTb3VuZCk7XG4gICAgYXVkaW8udm9sdW1lID0gMTtcbiAgICByZXR1cm4gYXVkaW87XG59KSgpO1xuIiwiaW1wb3J0IHsgY3JlYXRlQ3Jvc3NTVkcsIHZpZXdDcm9zcyB9IGZyb20gJy4uLy4uL3ZpZXdzL25vZGVzL21hcmtlcnMnO1xuaW1wb3J0IHsgY3JlYXRlVGltZXJTVkcsIHZpZXdUaW1lciB9IGZyb20gJy4uLy4uL3ZpZXdzL25vZGVzL3RpbWVyJztcblxuZXhwb3J0IGNvbnN0IFRlbXBsYXRlID0gKHN2ZykgPT4ge1xuICAgIGxldCBhbmltYXRpb25zO1xuICAgIGNvbnN0IGdldFN2ZyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHN2ZztcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgICAgIGFuaW1hdGlvbnMuZm9yRWFjaCgoYW5pbWF0aW9uKSA9PiB7XG4gICAgICAgICAgICBhbmltYXRpb24uZmluaXNoKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXRBbmltYXRpb25zID0gKHZhbCkgPT4ge1xuICAgICAgICBhbmltYXRpb25zID0gdmFsO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBzZXRBbmltYXRpb25zLCBnZXRTdmcsIGFuaW1hdGlvbnMsIHJlc2V0IH07XG59O1xuXG5leHBvcnQgY29uc3QgQ3Jvc3MgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gVGVtcGxhdGUoY3JlYXRlQ3Jvc3NTVkcoKSk7XG5cbiAgICBjb25zdCB2aWV3ID0gKCkgPT4ge1xuICAgICAgICBwcm90b3R5cGUuc2V0QW5pbWF0aW9ucyh2aWV3Q3Jvc3MocHJvdG90eXBlLmdldFN2ZygpKSk7XG4gICAgfTtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3RvdHlwZSwgeyB2aWV3IH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IFRpbWVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IFRlbXBsYXRlKGNyZWF0ZVRpbWVyU1ZHKCkpO1xuXG4gICAgY29uc3QgdmlldyA9ICgpID0+IHtcbiAgICAgICAgcHJvdG90eXBlLnNldEFuaW1hdGlvbnModmlld1RpbWVyKHByb3RvdHlwZS5nZXRTdmcoKSkpO1xuICAgIH07XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm90b3R5cGUsIHsgdmlldyB9KTtcbn07XG4iLCJpbXBvcnQgeyBzZXRMaXN0ZW5lcnNGb3JMaW5rcyB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9mb3JMaW5rcyc7XG5pbXBvcnQge1xuICAgIHNldExpc3RlbmVyc0ZvckNlbGxzLFxuICAgIHNldExpc3RlbmVyc0ZvckV4aXRCdXR0b24sXG4gICAgc2V0TGlzdGVuZXJzRm9yUGxheUJ1dHRvbixcbn0gZnJvbSAnLi4vY29udHJvbGxlcnMvbGlzdGVuZXJzL2ZvclBsYXknO1xuaW1wb3J0IHsgc2V0TGlzdGVuZXJzZm9yUG9wdXBzIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvbGlzdGVuZXJzL2ZvclBvcHVwcyc7XG5pbXBvcnQgeyBzZXRMaXN0ZW5lcnNGb3JTaGlwcyB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9mb3JTaGlwcyc7XG5pbXBvcnQge1xuICAgIHJlbW92ZUhpZGRlbixcbiAgICBzZXRIaWRkZW4sXG4gICAgc2V0TG93T3BhY2l0eSxcbn0gZnJvbSAnLi4vdmlld3MvYW5pbWF0aW9ucy9jaGFuZ2VWaXNpYmxlJztcbmltcG9ydCB7IHZpZXdBY2N1cmF0ZUhpdCwgdmlld01pc3NIaXQgfSBmcm9tICcuLi92aWV3cy9ub2Rlcy9oaXRzJztcbmltcG9ydCB7IHZpZXdMb3NlUG9wdXAsIHZpZXdXaW5Qb3B1cCB9IGZyb20gJy4uL3ZpZXdzL25vZGVzL3BvcHVwcyc7XG5pbXBvcnQgeyB2aWV3UHJvZmlsZSB9IGZyb20gJy4uL3ZpZXdzL25vZGVzL3Byb2ZpbGUnO1xuaW1wb3J0IHsgdmlld1NoaXB5YXJkIH0gZnJvbSAnLi4vdmlld3Mvbm9kZXMvc2hpcHlhcmQnO1xuaW1wb3J0IHtcbiAgICBoaWRkZW5JbnRlcmZhY2VCZWZvcmVTdGFydFBsYXksXG4gICAgc2V0QWlNb3ZlRGVzaWduLFxuICAgIHNldE1pbmlTaGlweWFyZERlc2lnbixcbiAgICBzZXRQbGF5ZXJNb3ZlRGVzaWduLFxuICAgIHZpZXdJbnRlcmZhY2VBZnRlckVuZEdhbWUsXG59IGZyb20gJy4uL3ZpZXdzL25vZGVzL3VpJztcbmltcG9ydCB7IENlbGxIYW5kbGVyIH0gZnJvbSAnLi9jZWxsSGFuZGxlcic7XG5pbXBvcnQgeyBraWxsU2hpcEVmZmVjdCwgbWlzc0VmZmVjdCB9IGZyb20gJy4vZWxlbWVudHMvYXVkaW9FZmZlY3RzJztcbmltcG9ydCB7IFByb2ZpbGUgfSBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgeyBUaW1lTWFuaXB1bGF0b3JzIH0gZnJvbSAnLi90aW1lTWFuaXB1bGF0b3JzJztcblxuZXhwb3J0IGNvbnN0IEdhbWUgPSAoKSA9PiB7XG4gICAgbGV0IHBsYXllciA9IFByb2ZpbGUoMSwgJ1BsYXllcicsICdwbGF5ZXItYm9hcmQnLCAnLmFpLW1pbmktc2hpcHlhcmQnKTtcbiAgICBsZXQgYWkgPSBQcm9maWxlKDAsICdBSScsICdhaS1ib2FyZCcsICcucGxheWVyLW1pbmktc2hpcHlhcmQnKTtcbiAgICBjb25zdCB0aW1lTWFuaXB1bGF0b3JzID0gVGltZU1hbmlwdWxhdG9ycygpO1xuICAgIGNvbnN0IGdhbWVIYW5kbGVyID0gR2FtZUhhbmRsZXIoYWksIHBsYXllciwgdGltZU1hbmlwdWxhdG9ycyk7XG5cbiAgICBjb25zdCB2aWV3RGVmYXVsSW50ZXJmYWNlcyA9ICgpID0+IHtcbiAgICAgICAgdmlld1Byb2ZpbGUocGxheWVyKTtcbiAgICAgICAgdmlld1Byb2ZpbGUoYWkpO1xuICAgICAgICB2aWV3U2hpcHlhcmQocGxheWVyLmdldFNoaXB5YXJkKCkpO1xuICAgICAgICB2aWV3U2hpcHlhcmQocGxheWVyLmdldE1pbmlTaGlweWFyZCgpKTtcbiAgICAgICAgdmlld1NoaXB5YXJkKGFpLmdldE1pbmlTaGlweWFyZCgpKTtcbiAgICAgICAgc2V0TWluaVNoaXB5YXJkRGVzaWduKHBsYXllci5nZXRNaW5pU2hpcHlhcmQoKSk7XG4gICAgICAgIHNldE1pbmlTaGlweWFyZERlc2lnbihhaS5nZXRNaW5pU2hpcHlhcmQoKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldERlZmF1bHRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIHNldExpc3RlbmVyc0ZvclNoaXBzKHBsYXllci5nZXRTaGlweWFyZCgpLmdldEFsbFNoaXBzKCkpO1xuICAgICAgICBzZXRMaXN0ZW5lcnNGb3JMaW5rcygpO1xuICAgICAgICBzZXRMaXN0ZW5lcnNGb3JQbGF5QnV0dG9uKCk7XG4gICAgICAgIHNldExpc3RlbmVyc0ZvckV4aXRCdXR0b24oKTtcbiAgICAgICAgc2V0TGlzdGVuZXJzZm9yUG9wdXBzKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldEdhbWVQbGF5TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICBzZXRMaXN0ZW5lcnNGb3JDZWxscygpO1xuICAgIH07XG5cbiAgICBjb25zdCBzdGFydCA9ICgpID0+IHtcbiAgICAgICAgc2V0RGVmYXVsdExpc3RlbmVycygpO1xuICAgICAgICB2aWV3RGVmYXVsSW50ZXJmYWNlcygpO1xuICAgICAgICBnYW1lSGFuZGxlci5maWxsQm9hcmRzVG9SYW5kb21TaGlwcygpO1xuICAgICAgICBhaS5nZXRHYW1lYm9hcmQoKS5oaWRkZW5TaGlwcygpO1xuICAgIH07XG5cbiAgICBjb25zdCBwbGF5ID0gKCkgPT4ge1xuICAgICAgICBnYW1lSGFuZGxlci5zZXREZWZhdWx0U2V0dGluZ3MoKTtcbiAgICAgICAgc2V0R2FtZVBsYXlMaXN0ZW5lcnMoKTtcbiAgICAgICAgaGlkZGVuSW50ZXJmYWNlQmVmb3JlU3RhcnRQbGF5KCk7XG4gICAgICAgIHBsYXlHYW1lU3RhdGUoKTtcbiAgICAgICAgcmVtb3ZlSGlkZGVuKGFpLmdldE1pbmlTaGlweWFyZCgpLmdldE5vZGUoKSk7XG4gICAgICAgIHJlbW92ZUhpZGRlbihwbGF5ZXIuZ2V0TWluaVNoaXB5YXJkKCkuZ2V0Tm9kZSgpKTtcbiAgICAgICAgZ2FtZUhhbmRsZXIucGxheWVyTW92ZSgpO1xuICAgICAgICB0aW1lTWFuaXB1bGF0b3JzLnNldFRpbWVPZlRoZU1vdmUoKTtcbiAgICAgICAgc2V0TWluaVNoaXB5YXJkRGVzaWduKHBsYXllci5nZXRNaW5pU2hpcHlhcmQoKSk7XG4gICAgICAgIHNldE1pbmlTaGlweWFyZERlc2lnbihhaS5nZXRNaW5pU2hpcHlhcmQoKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGVuZCA9ICgpID0+IHtcbiAgICAgICAgc2V0SGlkZGVuKGFpLmdldE1pbmlTaGlweWFyZCgpLmdldE5vZGUoKSk7XG4gICAgICAgIHNldEhpZGRlbihwbGF5ZXIuZ2V0TWluaVNoaXB5YXJkKCkuZ2V0Tm9kZSgpKTtcbiAgICAgICAgYWkuZ2V0TWluaVNoaXB5YXJkKCkucmVzZXQoKTtcbiAgICAgICAgcGxheWVyLmdldE1pbmlTaGlweWFyZCgpLnJlc2V0KCk7XG4gICAgICAgIHRpbWVNYW5pcHVsYXRvcnMucmVzZXQoKTtcbiAgICAgICAgdmlld0ludGVyZmFjZUFmdGVyRW5kR2FtZSgpO1xuICAgICAgICBlbmRHYW1lU3RhdGUoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcGxheUdhbWVTdGF0ZSA9ICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLngtYXhpcycpLmNsYXNzTGlzdC5hZGQoJ2NvcnJlY3QnKTtcbiAgICAgICAgcGxheWVyLmdldEdhbWVib2FyZCgpLmJsb2NrU2hpcHMoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZW5kR2FtZVN0YXRlID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcueC1heGlzJykuY2xhc3NMaXN0LnJlbW92ZSgnY29ycmVjdCcpO1xuICAgICAgICBhaS5nZXRHYW1lYm9hcmQoKS5ibG9jaygpO1xuICAgICAgICBhaS5nZXRHYW1lYm9hcmQoKS5yZXNldCgpO1xuICAgICAgICBwbGF5ZXIuZ2V0R2FtZWJvYXJkKCkudW5ibG9ja1NoaXBzKCk7XG4gICAgICAgIHBsYXllci5nZXRHYW1lYm9hcmQoKS5yZXNldCgpO1xuICAgICAgICBnYW1lSGFuZGxlci5maWxsQm9hcmRzVG9SYW5kb21TaGlwcygpO1xuICAgICAgICBhaS5nZXRHYW1lYm9hcmQoKS5oaWRkZW5TaGlwcygpO1xuICAgICAgICBzZXRBaU1vdmVEZXNpZ24oYWksIHBsYXllcik7XG4gICAgfTtcblxuICAgIHJldHVybiB7IHN0YXJ0LCBwbGF5LCBlbmQsIGFpLCBwbGF5ZXIsIGdhbWVIYW5kbGVyIH07XG59O1xuXG5jb25zdCBHYW1lSGFuZGxlciA9IChhaSwgcGxheWVyLCB0aW1lTWFuaXB1bGF0b3JzKSA9PiB7XG4gICAgbGV0IG1vdmU7XG4gICAgbGV0IHBsYXllckNlbGxzID0gWy4uLnBsYXllci5nZXRHYW1lYm9hcmQoKS5nZXRVbnN0cnVjdGVkQ29udGFpbmVyKCldO1xuICAgIGxldCBhaUNlbGxzID0gWy4uLmFpLmdldEdhbWVib2FyZCgpLmdldFVuc3RydWN0ZWRDb250YWluZXIoKV07XG5cbiAgICBjb25zdCBzZXREZWZhdWx0U2V0dGluZ3MgPSAoKSA9PiB7XG4gICAgICAgIG1vdmUgPSAncGxheWVyJztcbiAgICAgICAgcGxheWVyQ2VsbHMgPSBbLi4ucGxheWVyLmdldEdhbWVib2FyZCgpLmdldFVuc3RydWN0ZWRDb250YWluZXIoKV07XG4gICAgICAgIGFpQ2VsbHMgPSBbLi4uYWkuZ2V0R2FtZWJvYXJkKCkuZ2V0VW5zdHJ1Y3RlZENvbnRhaW5lcigpXTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0QWN0aXZlUGxheWVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbW92ZSA9PT0gJ2FpJyA/IGFpIDogcGxheWVyO1xuICAgIH07XG5cbiAgICBjb25zdCBzd2l0Y2hNb3ZlID0gKCkgPT4ge1xuICAgICAgICB0aW1lTWFuaXB1bGF0b3JzLnJlc2V0KCk7XG4gICAgICAgIGlmIChpc0VuZEdhbWUoKSkge1xuICAgICAgICAgICAgb3BlblBvcHVwKCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAobW92ZSA9PT0gJ2FpJykge1xuICAgICAgICAgICAgdGltZU1hbmlwdWxhdG9ycy5zZXRUaW1lT2ZUaGVNb3ZlKCk7XG4gICAgICAgICAgICBtb3ZlID0gJ3BsYXllcic7XG4gICAgICAgICAgICBwbGF5ZXJNb3ZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb3ZlID0gJ2FpJztcbiAgICAgICAgICAgIGFpTW92ZSgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGlzRW5kR2FtZSA9ICgpID0+IHtcbiAgICAgICAgbGV0IGlzRW5kID0gaXNQbGF5ZXJMb3NlKHBsYXllcikgfHwgaXNQbGF5ZXJMb3NlKGFpKTtcbiAgICAgICAgcmV0dXJuIGlzRW5kO1xuICAgIH07XG5cbiAgICBjb25zdCBpc1BsYXllckxvc2UgPSAocGxheWVyKSA9PiB7XG4gICAgICAgIGxldCBpc0xvc2UgPSB0cnVlO1xuICAgICAgICBjb25zdCBzaGlwcyA9IHBsYXllci5nZXRTaGlweWFyZCgpLmdldEFsbFNoaXBzKCk7XG4gICAgICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIGlmIChzaGlwLmlzTGl2ZSgpKSB7XG4gICAgICAgICAgICAgICAgaXNMb3NlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaXNMb3NlO1xuICAgIH07XG5cbiAgICBjb25zdCBwbGF5ZXJNb3ZlID0gKCkgPT4ge1xuICAgICAgICBhaS5nZXRHYW1lYm9hcmQoKS51bmJsb2NrKCk7XG4gICAgICAgIHNldFBsYXllck1vdmVEZXNpZ24oYWksIHBsYXllcik7XG4gICAgfTtcblxuICAgIGNvbnN0IGNoZWNrQ2VsbCA9IChjZWxsKSA9PiB7XG4gICAgICAgIGlmIChhaUNlbGxzLmluY2x1ZGVzKGNlbGwpKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGFpQ2VsbHMuaW5kZXhPZihjZWxsKTtcbiAgICAgICAgICAgIGFpLmdldEdhbWVib2FyZCgpLmJsb2NrKCk7XG4gICAgICAgICAgICB0YWtlSGl0KGFpQ2VsbHMuc3BsaWNlKGluZGV4LCAxKVswXSk7XG4gICAgICAgICAgICB0aW1lTWFuaXB1bGF0b3JzLnNldFRpbWVCZXR3ZWVuTW92ZXMoNTAwKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBhaU1vdmUgPSAoKSA9PiB7XG4gICAgICAgIGFpLmdldEdhbWVib2FyZCgpLmJsb2NrKCk7XG4gICAgICAgIHNldEFpTW92ZURlc2lnbihhaSwgcGxheWVyKTtcbiAgICAgICAgdGltZU1hbmlwdWxhdG9ycy5zZXRBaVNwZWVkT2ZUb3VnaHQocGxheWVyQ2VsbHMpO1xuICAgIH07XG5cbiAgICBjb25zdCB0YWtlSGl0ID0gKGNlbGwpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcCA9IGNlbGwuZ2V0T2NjdXBhbnQoKTtcbiAgICAgICAgY2VsbC5zZXRUaGVIaXQoKTtcbiAgICAgICAgaWYgKHNoaXAgPT09ICdmcmVlJykge1xuICAgICAgICAgICAgdmlld01pc3NIaXQoY2VsbCk7XG4gICAgICAgICAgICBtaXNzRWZmZWN0LnBsYXkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZXdBY2N1cmF0ZUhpdChjZWxsKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjaGVja0xpdmVTaGlwKHNoaXApKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpdEFsbERpYWdzKGNlbGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtb3ZlID0gbW92ZSA9PT0gJ2FpJyA/ICdwbGF5ZXInIDogJ2FpJztcbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgY2hlY2tMaXZlU2hpcCA9IChzaGlwKSA9PiB7XG4gICAgICAgIGlmICghc2hpcC5pc0xpdmUoKSkge1xuICAgICAgICAgICAga2lsbFNoaXBFZmZlY3QucGxheSgpO1xuICAgICAgICAgICAgc2hpcC5raWxsKCk7XG4gICAgICAgICAgICBsZXQgbWluaVNoaXAgPSBnZXRNaW5pU2hpcChzaGlwKTtcbiAgICAgICAgICAgIG1pbmlTaGlwLmtpbGwoKTtcbiAgICAgICAgICAgIGhpdEFsbEFyZWFBcm91bmRTaGlwKHNoaXApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaGlwLmlzTGl2ZSgpO1xuICAgIH07XG5cbiAgICBjb25zdCBoaXRBbGxBcmVhQXJvdW5kU2hpcCA9IChzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IGFyZWEgPSBzaGlwLmdldFdhdGVyQXJlYXMoKS5nZXRBcmVhQXJvdW5kVGhlU2hpcCgpO1xuICAgICAgICBhcmVhLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgIGlmICghY2VsbC5pc0hpdCgpKSB7XG4gICAgICAgICAgICAgICAgc2V0TG93T3BhY2l0eShjZWxsLmdldENlbGxOb2RlKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmlld01pc3NIaXQoY2VsbCk7XG4gICAgICAgICAgICByZW1vdmVDZWxsKGNlbGwpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlQ2VsbCA9IChjZWxsKSA9PiB7XG4gICAgICAgIGxldCBjZWxscyA9IG1vdmUgPT09ICdhaScgPyBwbGF5ZXJDZWxscyA6IGFpQ2VsbHM7XG4gICAgICAgIGxldCBpbmRleCA9IGNlbGxzLmluZGV4T2YoY2VsbCk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBjZWxscy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhpdEFsbERpYWdzID0gKGhpdENlbGwpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IENlbGxIYW5kbGVyKCk7XG4gICAgICAgIGNvbnN0IHggPSBoaXRDZWxsLmdldFhZKCkueDtcbiAgICAgICAgY29uc3QgeSA9IGhpdENlbGwuZ2V0WFkoKS55O1xuICAgICAgICBjb25zdCBvcHBvbmVudCA9IG1vdmUgPT09ICdhaScgPyBwbGF5ZXIgOiBhaTtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gb3Bwb25lbnQuZ2V0R2FtZWJvYXJkKCkuZ2V0U3RydWN0ZWRDb250YWluZXIoKTtcbiAgICAgICAgY29uc3QgY2VsbHMgPSBoYW5kbGVyLmdldERpYWRzKHgsIHksIHBhcmVudCk7XG4gICAgICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgIGlmIChjZWxsICE9PSBoaXRDZWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjZWxsLmlzSGl0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0TG93T3BhY2l0eShjZWxsLmdldENlbGxOb2RlKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2aWV3TWlzc0hpdChjZWxsKTtcbiAgICAgICAgICAgICAgICByZW1vdmVDZWxsKGNlbGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0TWluaVNoaXAgPSAoc2hpcCkgPT4ge1xuICAgICAgICBjb25zdCB0eXBlID0gc2hpcC5nZXRUeXBlKCk7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVBsYXllciA9IGdldEFjdGl2ZVBsYXllcigpO1xuICAgICAgICBjb25zdCBzaGlwcyA9IGFjdGl2ZVBsYXllci5nZXRNaW5pU2hpcHlhcmQoKS5nZXRTaGlwc09mVHlwZSh0eXBlKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHNoaXBzW2ldLmlzTGl2ZSgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNoaXBzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGZpbGxCb2FyZHNUb1JhbmRvbVNoaXBzID0gKCkgPT4ge1xuICAgICAgICBhaS5nZXRHYW1lYm9hcmQoKS5yYW5kb21GaWxsaW5nT2ZTaGlwcygpO1xuICAgICAgICBwbGF5ZXIuZ2V0R2FtZWJvYXJkKCkucmFuZG9tRmlsbGluZ09mU2hpcHMoKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb3BlblBvcHVwID0gKCkgPT4ge1xuICAgICAgICBtb3ZlID09PSAncGxheWVyJyA/IHZpZXdMb3NlUG9wdXAoKSA6IHZpZXdXaW5Qb3B1cCgpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjaGVja0NlbGwsXG4gICAgICAgIHBsYXllck1vdmUsXG4gICAgICAgIHNldERlZmF1bHRTZXR0aW5ncyxcbiAgICAgICAgc3dpdGNoTW92ZSxcbiAgICAgICAgdGFrZUhpdCxcbiAgICAgICAgaXNFbmRHYW1lLFxuICAgICAgICBmaWxsQm9hcmRzVG9SYW5kb21TaGlwcyxcbiAgICB9O1xufTtcblxuXG5leHBvcnQgY29uc3QgQ29vcmRpbmF0ZXMgPSAoKCkgPT4ge1xuICAgIGxldCBzaW5nbGVUb25lID0gMDtcbiAgICBsZXQgeCA9IDA7XG4gICAgbGV0IHkgPSAwO1xuXG4gICAgY29uc3Qgc2V0Q29vcmRpbmF0ZXMgPSAobngsIG55KSA9PiB7XG4gICAgICAgIGlmIChzaW5nbGVUb25lID09PSAwKSB7XG4gICAgICAgICAgICBzaW5nbGVUb25lID0gMTtcbiAgICAgICAgICAgIHggPSBueDtcbiAgICAgICAgICAgIHkgPSBueTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICAgICAgICBzaW5nbGVUb25lID0gMDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRYWSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgeCwgeSB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IHNldENvb3JkaW5hdGVzLCBnZXRYWSwgcmVzZXQgfTtcbn0pKCk7IiwiaW1wb3J0IHsgc2V0TnVsbE9wYWNpdHkgfSBmcm9tICcuLi92aWV3cy9hbmltYXRpb25zL2NoYW5nZVZpc2libGUnO1xuaW1wb3J0IHsgdmlld1NoaXBPblJhbmRvbUNlbGwgfSBmcm9tICcuLi92aWV3cy9ub2Rlcy9zaGlwJztcbmltcG9ydCB7IE1hcmluZVNlY3RvciB9IGZyb20gJy4vY2VsbCc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuL2dhbWVDb25maWcnO1xuXG5leHBvcnQgY29uc3QgR2FtZWJvYXJkID0gKG5hbWUsIHBsYXllcikgPT4ge1xuICAgIGNvbnN0IHdpZHRoID0gQ29uZmlnLkdhbWVib2FyZC53aWR0aDtcbiAgICBjb25zdCBoZWlnaHQgPSBDb25maWcuR2FtZWJvYXJkLmhlaWdodDtcbiAgICBjb25zdCBjb250YWluZXJzID0gZmlsbEJvYXJkKHdpZHRoLCBoZWlnaHQpO1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfWApO1xuXG4gICAgY29uc3QgZ2V0U3RydWN0ZWRDb250YWluZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBjb250YWluZXJzLmdldFN0cnVjdGVkKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFVuc3RydWN0ZWRDb250YWluZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBjb250YWluZXJzLmdldFVuc3RydWN0ZWQoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0U2l6ZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgd2lkdGgsIGhlaWdodCB9O1xuICAgIH07XG5cbiAgICBjb25zdCBnZXROb2RlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UGxheWVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcGxheWVyO1xuICAgIH07XG5cbiAgICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICAgICAgY29udGFpbmVycy5nZXRVbnN0cnVjdGVkKCkuZm9yRWFjaCgoc2VjdG9yKSA9PiB7XG4gICAgICAgICAgICBzZWN0b3IuY2xlYXIoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHBsYXllci5nZXRTaGlweWFyZCgpLnJlc2V0KCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJhbmRvbUZpbGxpbmdPZlNoaXBzID0gKCkgPT4ge1xuICAgICAgICByZXNldCgpO1xuICAgICAgICBsZXQgc2hpcHMgPSBwbGF5ZXIuZ2V0U2hpcHlhcmQoKS5nZXRBbGxTaGlwcygpO1xuXG4gICAgICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIHNoaXAuc2V0UmFuZG9tT3JpZW50YXRpb24oKTtcbiAgICAgICAgICAgIHZpZXdTaGlwT25SYW5kb21DZWxsKHNoaXAsIFsuLi5nZXRVbnN0cnVjdGVkQ29udGFpbmVyKCldKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGJsb2NrU2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIG5vZGUucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAnKS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrJyk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCB1bmJsb2NrU2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIG5vZGUucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAnKS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICBzaGlwLmNsYXNzTGlzdC5yZW1vdmUoJ2Jsb2NrJyk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBoaWRkZW5TaGlwcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpO1xuICAgICAgICBib2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcCcpLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIHNoaXAuc3R5bGUuYm9yZGVyID0gJzBweCBibHVlIHNvbGlkJztcbiAgICAgICAgfSk7XG4gICAgICAgIGJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWNrJykuZm9yRWFjaCgoZGVjaykgPT4ge1xuICAgICAgICAgICAgc2V0TnVsbE9wYWNpdHkoZGVjayk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBibG9jayA9ICgpID0+IHtcbiAgICAgICAgbm9kZS5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKS5jbGFzc0xpc3QuYWRkKCdibG9jaycpO1xuICAgIH07XG5cbiAgICBjb25zdCB1bmJsb2NrID0gKCkgPT4ge1xuICAgICAgICBub2RlLnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2Jsb2NrJyk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHJhbmRvbUZpbGxpbmdPZlNoaXBzLFxuICAgICAgICByZXNldCxcbiAgICAgICAgZ2V0UGxheWVyLFxuICAgICAgICBnZXRTdHJ1Y3RlZENvbnRhaW5lcixcbiAgICAgICAgZ2V0VW5zdHJ1Y3RlZENvbnRhaW5lcixcbiAgICAgICAgZ2V0U2l6ZSxcbiAgICAgICAgZ2V0Tm9kZSxcbiAgICAgICAgYmxvY2tTaGlwcyxcbiAgICAgICAgdW5ibG9ja1NoaXBzLFxuICAgICAgICBoaWRkZW5TaGlwcyxcbiAgICAgICAgYmxvY2ssXG4gICAgICAgIHVuYmxvY2ssXG4gICAgfTtcbn07XG5cbmNvbnN0IGZpbGxCb2FyZCA9ICh3aWR0aCwgaGVpZ2h0KSA9PiB7XG4gICAgbGV0IHN0cnVjdGVkID0gW107XG4gICAgbGV0IHVuc3RydWN0ZWQgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgbGV0IGxpbmUgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB3aWR0aDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gTWFyaW5lU2VjdG9yKGosIGkpO1xuICAgICAgICAgICAgbGluZVtqXSA9IGNlbGw7XG4gICAgICAgICAgICB1bnN0cnVjdGVkLnB1c2goY2VsbCk7XG4gICAgICAgIH1cbiAgICAgICAgc3RydWN0ZWRbaV0gPSBsaW5lO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFN0cnVjdGVkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc3RydWN0ZWQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFVuc3RydWN0ZWQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB1bnN0cnVjdGVkO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBnZXRTdHJ1Y3RlZCwgZ2V0VW5zdHJ1Y3RlZCB9O1xufTtcbiIsImV4cG9ydCBjb25zdCBDb25maWcgPSAoKCkgPT4ge1xuICAgIGNvbnN0IEdhbWVib2FyZCA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gMTA7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IDEwO1xuICAgICAgICByZXR1cm4geyB3aWR0aCwgaGVpZ2h0IH07XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IEVsZW1lbnRzID0gKCgpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcFR5cGVzID0gWydmcmVnYXRzJywgJ2NhcmF2ZWxzJywgJ2RyYWtrYXJzJywgJ2JvYXRzJ107XG4gICAgICAgIGNvbnN0IG51bWJlck9mID0gKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZyZWdhdGVzID0gMTtcbiAgICAgICAgICAgIGNvbnN0IGNhcmF2ZWxzID0gMjtcbiAgICAgICAgICAgIGNvbnN0IGRyYWtrYXJzID0gMztcbiAgICAgICAgICAgIGNvbnN0IGJvYXRzID0gNDtcbiAgICAgICAgICAgIHJldHVybiB7IGZyZWdhdGVzLCBjYXJhdmVscywgZHJha2thcnMsIGJvYXRzIH07XG4gICAgICAgIH0pKCk7XG5cbiAgICAgICAgcmV0dXJuIHsgbnVtYmVyT2YsIHNoaXBUeXBlcyB9O1xuICAgIH0pKCk7XG5cbiAgICByZXR1cm4geyBHYW1lYm9hcmQsIEVsZW1lbnRzIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1lQm9hcmQnO1xuaW1wb3J0IHsgU2hpcHlhcmQgfSBmcm9tICcuL3NoaXB5YXJkJztcblxuY29uc3QgUGxheWVyID0gKGlkLCBuYW1lKSA9PiB7XG4gICAgY29uc3QgZ2V0SWQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfTtcblxuICAgIHJldHVybiB7IGdldElkLCBnZXROYW1lIH07XG59O1xuXG5leHBvcnQgY29uc3QgUHJvZmlsZSA9IChpZCwgbmFtZSwgbm9kZUlkLCBtaW5pU2hpcHlhcmRJZCkgPT4ge1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IFBsYXllcihpZCwgbmFtZSk7XG5cbiAgICBsZXQgZ2FtZWJvYXJkID0gR2FtZWJvYXJkKG5vZGVJZCwgcHJvdG90eXBlKTtcbiAgICBsZXQgc2hpcHlhcmQgPSBTaGlweWFyZChwcm90b3R5cGUpO1xuICAgIGxldCBtaW5pU2hpcHlhcmQgPSBTaGlweWFyZChcbiAgICAgICAgcHJvdG90eXBlLFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1pbmlTaGlweWFyZElkKSxcbiAgICApO1xuXG4gICAgY29uc3QgZ2V0R2FtZWJvYXJkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZ2FtZWJvYXJkO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRTaGlweWFyZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHNoaXB5YXJkO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRNaW5pU2hpcHlhcmQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBtaW5pU2hpcHlhcmQ7XG4gICAgfTtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3RvdHlwZSwge1xuICAgICAgICBnZXRHYW1lYm9hcmQsXG4gICAgICAgIGdldFNoaXB5YXJkLFxuICAgICAgICBnZXRNaW5pU2hpcHlhcmQsXG4gICAgfSk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IFNlc3Npb24gPSAoKCkgPT4ge1xuICAgIGxldCBhY3RpdmVTaGlwID0gbnVsbDtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGxldCBkb3VibGVJbmRleCA9ICdzaGlwJztcbiAgICBsZXQgY3VycmVudEVsZW1lbnQgPSBudWxsO1xuICAgIGxldCBjaG9pc2VkQ2VsbCA9IG51bGw7XG4gICAgbGV0IG1hbnVhbE1vZGUgPSBmYWxzZTtcbiAgICByZXR1cm4ge1xuICAgICAgICBtYW51YWxNb2RlLFxuICAgICAgICBhY3RpdmVTaGlwLFxuICAgICAgICBpbmRleCxcbiAgICAgICAgZG91YmxlSW5kZXgsXG4gICAgICAgIGN1cnJlbnRFbGVtZW50LFxuICAgICAgICBjaG9pc2VkQ2VsbCxcbiAgICB9O1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IHJlc2V0U2Vzc2lvbiA9ICgpID0+IHtcbiAgICBTZXNzaW9uLmFjdGl2ZVNoaXAgPSBudWxsO1xuICAgIFNlc3Npb24uaW5kZXggPSAwO1xuICAgIFNlc3Npb24uZG91YmxlSW5kZXggPSAnc2hpcCc7XG4gICAgU2Vzc2lvbi5jdXJyZW50RWxlbWVudCA9IG51bGw7XG59O1xuIiwiaW1wb3J0IHsgcmFuZG9tSW50RnJvbUludGVydmFsIH0gZnJvbSAnLi4vaGVscGVyL2hlbHBlcic7XG5pbXBvcnQgeyBzZXRMb3dPcGFjaXR5IH0gZnJvbSAnLi4vdmlld3MvYW5pbWF0aW9ucy9jaGFuZ2VWaXNpYmxlJztcbmltcG9ydCB7IGdldE5vZGUgfSBmcm9tICcuLi92aWV3cy9ub2Rlcy9mYWN0b3J5JztcbmltcG9ydCB7XG4gICAgcmVzZXRTaGlwU3R5bGUsXG4gICAgc2V0RGVhdGhTdHlsZU9uU2hpcCxcbiAgICBzZXRTdGFuZGFydEhvcml6b250YWxTaGlwRGVzaWduLFxuICAgIHNldFN0YW5kYXJ0VmVydGljYWxTaGlwRGVzaWduLFxufSBmcm9tICcuLi92aWV3cy9ub2Rlcy9zaGlwJztcbmltcG9ydCB7IERlY2sgfSBmcm9tICcuL2NlbGwnO1xuaW1wb3J0IHsgU2hpcFdhdGVyQXJlYXMgfSBmcm9tICcuL3dhdGVyQXJlYXMnO1xuXG5leHBvcnQgY29uc3QgU2hpcCA9IChsZW5ndGgsIHBsYXllciwgdHlwZSkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGdldE5vZGUoJ3NoaXAnLCAnaG9yaXpvbnRhbCcpO1xuICAgIGxldCBib2R5ID0gW107XG4gICAgbGV0IGxpdmUgPSB0cnVlO1xuICAgIGxldCBob3Jpem9udGFsID0gdHJ1ZTtcbiAgICBsZXQgaGVhZCA9IG51bGw7XG4gICAgbGV0IHNoaXAgPSB7fTtcbiAgICBsZXQgc2hpcFdhdGVyQXJlYXMgPSBTaGlwV2F0ZXJBcmVhcyhwbGF5ZXIsIHNoaXApO1xuXG4gICAgY29uc3Qgc2V0WW91cnNlbGYgPSAodGhpc1NoaXApID0+IHtcbiAgICAgICAgc2hpcCA9IHRoaXNTaGlwO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRZb3Vyc2VsZiA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHNoaXA7XG4gICAgfTtcblxuICAgIGNvbnN0IGZpbGxDb250YWluZXIgPSAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBkZWNrID0gRGVjayhpKTtcbiAgICAgICAgICAgIGJvZHkucHVzaChkZWNrKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWNrLmdldENlbGxOb2RlKCkpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHNldE9yaWVudGF0aW9uID0gKCkgPT4ge1xuICAgICAgICBpZiAoY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnaG9yaXpvbnRhbCcpKSB7XG4gICAgICAgICAgICBzZXRWZXJ0aWNhbCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3ZlcnRpY2FsJykpIHtcbiAgICAgICAgICAgIHNldEhvcml6b250YWwoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCB0YWtlRG93bldhdGVyQXJlYXMgPSAoKSA9PiB7XG4gICAgICAgIHNoaXBXYXRlckFyZWFzLmNsZWFyQXJlYXMoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgbGF1bmNoU2hpcE9uV2F0ZXIgPSAobkhlYWQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCB3YXRlckFyZWFzID0gZ2V0V2F0ZXJBcmVhKG5IZWFkKTtcbiAgICAgICAgICAgIGxldCBhY2Vzc2liaWxpdHkgPSB3YXRlckFyZWFzLmNoZWNrQXJlYSgpO1xuICAgICAgICAgICAgaWYgKGFjZXNzaWJpbGl0eSkge1xuICAgICAgICAgICAgICAgIHRha2VEb3duV2F0ZXJBcmVhcygpO1xuICAgICAgICAgICAgICAgIHNoaXBXYXRlckFyZWFzID0gd2F0ZXJBcmVhcztcbiAgICAgICAgICAgICAgICBsaW5rU2hpcFdpdGhGaWVsZCgpO1xuICAgICAgICAgICAgICAgIHNoaXBXYXRlckFyZWFzLm9jY3VweUFyZWFzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWNlc3NpYmlsaXR5O1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGxpbmtTaGlwV2l0aEZpZWxkID0gKCkgPT4ge1xuICAgICAgICBsZXQgYXJlYSA9IHNoaXBXYXRlckFyZWFzLmdldEFyZWFVbmRlclRoZVNoaXAoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgeHkgPSBhcmVhW2ldLmdldFhZKCk7XG4gICAgICAgICAgICBib2R5W2ldLnNldFhZKHh5LngsIHh5LnkpO1xuICAgICAgICAgICAgYXJlYVtpXS5zZXRMaW5rZWREZWNrKGJvZHlbaV0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFdhdGVyQXJlYSA9IChoZWFkKSA9PiB7XG4gICAgICAgIGxldCBib2FyZCA9IGdldEJvYXJkKCkuZ2V0U3RydWN0ZWRDb250YWluZXIoKTtcbiAgICAgICAgbGV0IGFyZWFzID0gU2hpcFdhdGVyQXJlYXMocGxheWVyLCBzaGlwKTtcbiAgICAgICAgbGV0IHggPSBoZWFkLmdldFhZKCkueDtcbiAgICAgICAgbGV0IHkgPSBoZWFkLmdldFhZKCkueTtcbiAgICAgICAgbGV0IG5lY2Vzc2FyeVNlY3RvcnMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbmVjZXNzYXJ5U2VjdG9ycy5wdXNoKGJvYXJkW3ldW3hdKTtcbiAgICAgICAgICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICAgICAgICAgICAgeCsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB5Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXJlYXMuc2V0QXJlYXMobmVjZXNzYXJ5U2VjdG9ycyk7XG4gICAgICAgIHJldHVybiBhcmVhcztcbiAgICB9O1xuXG4gICAgY29uc3QgaXNMaXZlID0gKCkgPT4ge1xuICAgICAgICBsaXZlID0gZmFsc2U7XG5cbiAgICAgICAgYm9keS5mb3JFYWNoKChkZWNrKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWRlY2suaXNIaXQoKSkge1xuICAgICAgICAgICAgICAgIGxpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbGl2ZTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0Qm9keSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGJvZHk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldENvbnRhaW5lciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0SGVhZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGhlYWQ7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldEhlYWQgPSAobkhlYWQpID0+IHtcbiAgICAgICAgaGVhZCA9IG5IZWFkO1xuICAgIH07XG5cbiAgICBjb25zdCBpc0hvcml6b250YWwgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBob3Jpem9udGFsO1xuICAgIH07XG5cbiAgICBjb25zdCBvcmllbnRhdGlvblN3aXRjaCA9ICgpID0+IHtcbiAgICAgICAgaG9yaXpvbnRhbCA9ICFob3Jpem9udGFsO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXRWZXJ0aWNhbCA9ICgpID0+IHtcbiAgICAgICAgc2V0U3RhbmRhcnRWZXJ0aWNhbFNoaXBEZXNpZ24oY29udGFpbmVyLCBsZW5ndGgpO1xuICAgICAgICBob3Jpem9udGFsID0gZmFsc2U7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldEhvcml6b250YWwgPSAoKSA9PiB7XG4gICAgICAgIHNldFN0YW5kYXJ0SG9yaXpvbnRhbFNoaXBEZXNpZ24oY29udGFpbmVyLCBsZW5ndGgpO1xuICAgICAgICBob3Jpem9udGFsID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0UmFuZG9tT3JpZW50YXRpb24gPSAoKSA9PiB7XG4gICAgICAgIHJhbmRvbUludEZyb21JbnRlcnZhbCgwLCAxKSA9PT0gMSA/IHNldEhvcml6b250YWwoKSA6IHNldFZlcnRpY2FsKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldEJvYXJkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcGxheWVyLmdldEdhbWVib2FyZCgpO1xuICAgIH07XG5cbiAgICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICAgICAgaGVhZCA9IG51bGw7XG4gICAgICAgIGlmICghY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnbWluaS1zaGlwJykpIHtcbiAgICAgICAgICAgIHNldEhvcml6b250YWwoKTtcbiAgICAgICAgfVxuICAgICAgICByZXNldEJvZHkoKTtcbiAgICAgICAgc2hpcFdhdGVyQXJlYXMuY2xlYXJBcmVhcygpO1xuICAgICAgICBzaGlwV2F0ZXJBcmVhcyA9IFNoaXBXYXRlckFyZWFzKHBsYXllciwgc2hpcCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc2V0Qm9keSA9ICgpID0+IHtcbiAgICAgICAgcmVzZXRTaGlwU3R5bGUoY29udGFpbmVyKTtcbiAgICAgICAgYm9keS5mb3JFYWNoKChkZWNrKSA9PiB7XG4gICAgICAgICAgICBkZWNrLnJlc2V0KCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRUeXBlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9O1xuXG4gICAgY29uc3Qga2lsbCA9ICgpID0+IHtcbiAgICAgICAgYm9keS5mb3JFYWNoKChkZWNrKSA9PiB7XG4gICAgICAgICAgICBzZXRMb3dPcGFjaXR5KGRlY2suZ2V0Q2VsbE5vZGUoKSk7XG4gICAgICAgICAgICBkZWNrLnNldFRoZUhpdCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2V0RGVhdGhTdHlsZU9uU2hpcChjb250YWluZXIpO1xuICAgICAgICBsaXZlID0gZmFsc2U7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFdhdGVyQXJlYXMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzaGlwV2F0ZXJBcmVhcztcbiAgICB9O1xuXG4gICAgZmlsbENvbnRhaW5lcigpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0UmFuZG9tT3JpZW50YXRpb24sXG4gICAgICAgIHJlc2V0LFxuICAgICAgICBzZXRIb3Jpem9udGFsLFxuICAgICAgICBzZXRWZXJ0aWNhbCxcbiAgICAgICAgZ2V0Qm9hcmQsXG4gICAgICAgIHRha2VEb3duV2F0ZXJBcmVhcyxcbiAgICAgICAgbGF1bmNoU2hpcE9uV2F0ZXIsXG4gICAgICAgIG9yaWVudGF0aW9uU3dpdGNoLFxuICAgICAgICBzZXRPcmllbnRhdGlvbixcbiAgICAgICAgaXNMaXZlLFxuICAgICAgICBnZXRCb2R5LFxuICAgICAgICBnZXRDb250YWluZXIsXG4gICAgICAgIGdldEhlYWQsXG4gICAgICAgIHNldEhlYWQsXG4gICAgICAgIGlzSG9yaXpvbnRhbCxcbiAgICAgICAgc2V0WW91cnNlbGYsXG4gICAgICAgIGdldFlvdXJzZWxmLFxuICAgICAgICBnZXRUeXBlLFxuICAgICAgICBraWxsLFxuICAgICAgICBnZXRXYXRlckFyZWFzLFxuICAgIH07XG59O1xuXG5leHBvcnQgY29uc3QgRnJlZ2F0ID0gKG1hcmtlcikgPT4ge1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IFNoaXAoNCwgbWFya2VyLCAnZnJlZ2F0cycpO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3RvdHlwZSwgbWFya2VyKTtcbn07XG5cbmV4cG9ydCBjb25zdCBDYXJhdmVsID0gKG1hcmtlcikgPT4ge1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IFNoaXAoMywgbWFya2VyLCAnY2FyYXZlbHMnKTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm90b3R5cGUpO1xufTtcblxuZXhwb3J0IGNvbnN0IERyYWtrYXIgPSAobWFya2VyKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gU2hpcCgyLCBtYXJrZXIsICdkcmFra2FycycpO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3RvdHlwZSk7XG59O1xuXG5leHBvcnQgY29uc3QgQm9hdCA9IChtYXJrZXIpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBTaGlwKDEsIG1hcmtlciwgJ2JvYXRzJyk7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvdG90eXBlKTtcbn07XG4iLCJpbXBvcnQgeyBDb25maWcgfSBmcm9tICcuL2dhbWVDb25maWcnO1xuaW1wb3J0IHsgQm9hdCwgQ2FyYXZlbCwgRHJha2thciwgRnJlZ2F0IH0gZnJvbSAnLi9zaGlwJztcblxuZXhwb3J0IGNvbnN0IFNoaXB5YXJkID0gKFxuICAgIHBsYXllcixcbiAgICBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXB5YXJkJyksXG4pID0+IHtcbiAgICBjb25zdCBmcmVnYXRzID0gRG9jayhDb25maWcuRWxlbWVudHMubnVtYmVyT2YuZnJlZ2F0ZXMsICdGcmVnYXQnLCBwbGF5ZXIpO1xuICAgIGNvbnN0IGNhcmF2ZWxzID0gRG9jayhDb25maWcuRWxlbWVudHMubnVtYmVyT2YuY2FyYXZlbHMsICdDYXJhdmVsJywgcGxheWVyKTtcbiAgICBjb25zdCBkcmFra2FycyA9IERvY2soQ29uZmlnLkVsZW1lbnRzLm51bWJlck9mLmRyYWtrYXJzLCAnRHJha2thcicsIHBsYXllcik7XG4gICAgY29uc3QgYm9hdHMgPSBEb2NrKENvbmZpZy5FbGVtZW50cy5udW1iZXJPZi5ib2F0cywgJ0JvYXQnLCBwbGF5ZXIpO1xuICAgIGNvbnN0IHNoaXBzID0gZnJlZ2F0c1xuICAgICAgICAuZ2V0U2hpcHMoKVxuICAgICAgICAuY29uY2F0KFxuICAgICAgICAgICAgY2FyYXZlbHNcbiAgICAgICAgICAgICAgICAuZ2V0U2hpcHMoKVxuICAgICAgICAgICAgICAgIC5jb25jYXQoZHJha2thcnMuZ2V0U2hpcHMoKS5jb25jYXQoYm9hdHMuZ2V0U2hpcHMoKSkpLFxuICAgICAgICApO1xuXG4gICAgY29uc3QgZ2V0U2hpcHNPZlR5cGUgPSAodHlwZSkgPT4ge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2ZyZWdhdHMnOlxuICAgICAgICAgICAgICAgIHJldHVybiBmcmVnYXRzLmdldFNoaXBzKCk7XG4gICAgICAgICAgICBjYXNlICdjYXJhdmVscyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhcmF2ZWxzLmdldFNoaXBzKCk7XG4gICAgICAgICAgICBjYXNlICdkcmFra2Fycyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRyYWtrYXJzLmdldFNoaXBzKCk7XG4gICAgICAgICAgICBjYXNlICdib2F0cyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJvYXRzLmdldFNoaXBzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0RG9ja1dpdGhGcmVnYXRzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZnJlZ2F0cztcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0RG9ja1dpdGhDYXJhdmVscyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNhcmF2ZWxzO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXREb2NrV2l0aERyYWtrYXJzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZHJha2thcnM7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldERvY2tXaXRoQm9hdHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBib2F0cztcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UGxheWVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcGxheWVyO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRBbGxTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHNoaXBzO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXROb2RlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuXG4gICAgY29uc3QgaXNFbXB0eSA9ICgpID0+IHtcbiAgICAgICAgbGV0IGxhdW5jaGVkU2hpcHMgPSBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwJyk7XG4gICAgICAgIHJldHVybiBsYXVuY2hlZFNoaXBzLmxlbmd0aCA9PT0gMDtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIHNoaXAucmVzZXQoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldFNoaXBzT2ZUeXBlLFxuICAgICAgICBpc0VtcHR5LFxuICAgICAgICByZXNldCxcbiAgICAgICAgZ2V0QWxsU2hpcHMsXG4gICAgICAgIGdldFBsYXllcixcbiAgICAgICAgZ2V0RG9ja1dpdGhGcmVnYXRzLFxuICAgICAgICBnZXREb2NrV2l0aENhcmF2ZWxzLFxuICAgICAgICBnZXREb2NrV2l0aERyYWtrYXJzLFxuICAgICAgICBnZXREb2NrV2l0aEJvYXRzLFxuICAgICAgICBnZXROb2RlLFxuICAgIH07XG59O1xuXG5jb25zdCBEb2NrID0gKGNvdW50LCBzaGlwQmx1ZVByaW50LCBwbGF5ZXIpID0+IHtcbiAgICBjb25zdCBzaGlwcyA9IFtdO1xuXG4gICAgY29uc3QgZmlsbERvY2sgPSAoY291bnQsIHNoaXBCbHVlUHJpbnQpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzaGlwID0gYnVpbGRTaGlwKHNoaXBCbHVlUHJpbnQpO1xuICAgICAgICAgICAgc2hpcHMucHVzaChzaGlwKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBidWlsZFNoaXAgPSAoYmx1ZVByaW50KSA9PiB7XG4gICAgICAgIHN3aXRjaCAoYmx1ZVByaW50KSB7XG4gICAgICAgICAgICBjYXNlICdGcmVnYXQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBGcmVnYXQocGxheWVyKTtcbiAgICAgICAgICAgIGNhc2UgJ0NhcmF2ZWwnOlxuICAgICAgICAgICAgICAgIHJldHVybiBDYXJhdmVsKHBsYXllcik7XG4gICAgICAgICAgICBjYXNlICdEcmFra2FyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gRHJha2thcihwbGF5ZXIpO1xuICAgICAgICAgICAgY2FzZSAnQm9hdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEJvYXQocGxheWVyKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NvcnJ5LCBpbGxlZ2FsIHNoaXAgYmx1ZXByaW50Jyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZmlsbERvY2soY291bnQsIHNoaXBCbHVlUHJpbnQpO1xuXG4gICAgY29uc3QgZ2V0U2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzaGlwcztcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgZ2V0U2hpcHMgfTtcbn07XG4iLCJpbXBvcnQgeyBnYW1lIH0gZnJvbSAnLi4nO1xuaW1wb3J0IHsgZ2V0UmFuZG9tQ2VsbCB9IGZyb20gJy4uL3ZpZXdzL25vZGVzL3NoaXAnO1xuaW1wb3J0IHsgdGltZXJFZmZlY3QgfSBmcm9tICcuL2VsZW1lbnRzL2F1ZGlvRWZmZWN0cyc7XG5pbXBvcnQgeyBUaW1lciB9IGZyb20gJy4vZWxlbWVudHMvdGVtcGxhdGVzJztcblxuZXhwb3J0IGNvbnN0IFRpbWVNYW5pcHVsYXRvcnMgPSAoKSA9PiB7XG4gICAgbGV0IHRpbWVPZlRoZU1vdmU7XG4gICAgbGV0IGFpU3BlZWRPZlRvdWdodDtcbiAgICBsZXQgdGltZUJldHdlZW5Nb3ZlcztcbiAgICBsZXQgYWxhcm07XG4gICAgbGV0IHRpbWVyID0gVGltZXIoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZXInKS5hcHBlbmRDaGlsZCh0aW1lci5nZXRTdmcoKSk7XG5cbiAgICBjb25zdCBzZXRBaVNwZWVkT2ZUb3VnaHQgPSAoY2VsbHMpID0+IHtcbiAgICAgICAgYWlTcGVlZE9mVG91Z2h0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBnYW1lLmdhbWVIYW5kbGVyLnRha2VIaXQoZ2V0UmFuZG9tQ2VsbChjZWxscykpO1xuICAgICAgICAgICAgc2V0VGltZUJldHdlZW5Nb3ZlcygxMDAwKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldFRpbWVCZXR3ZWVuTW92ZXMgPSAodGltZW91dCkgPT4ge1xuICAgICAgICB0aW1lQmV0d2Vlbk1vdmVzID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBnYW1lLmdhbWVIYW5kbGVyLnN3aXRjaE1vdmUoKTtcbiAgICAgICAgfSwgdGltZW91dCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldFRpbWVPZlRoZU1vdmUgPSAoKSA9PiB7XG4gICAgICAgIHRpbWVyLnZpZXcoKTtcbiAgICAgICAgdGltZU9mVGhlTW92ZSA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGdhbWUuZ2FtZUhhbmRsZXIuc3dpdGNoTW92ZSgpO1xuICAgICAgICB9LCAxNTAwMCk7XG4gICAgICAgIGFsYXJtID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aW1lckVmZmVjdC5wbGF5KCk7XG4gICAgICAgIH0sIDEwMDAwKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgICAgIHRpbWVyLnJlc2V0KCk7XG4gICAgICAgIGNsZWFyVGltZW91dChhaVNwZWVkT2ZUb3VnaHQpO1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZUJldHdlZW5Nb3Zlcyk7XG4gICAgICAgIGNsZWFyVGltZW91dChhbGFybSk7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGltZU9mVGhlTW92ZSk7XG4gICAgfTtcblxuICAgIHJldHVybiB7IHNldEFpU3BlZWRPZlRvdWdodCwgc2V0VGltZUJldHdlZW5Nb3Zlcywgc2V0VGltZU9mVGhlTW92ZSwgcmVzZXQgfTtcbn07XG4iLCJpbXBvcnQgeyBDZWxsSGFuZGxlciB9IGZyb20gJy4vY2VsbEhhbmRsZXInO1xuXG5leHBvcnQgY29uc3QgU2hpcFdhdGVyQXJlYXMgPSAocGxheWVyLCBzaGlwKSA9PiB7XG4gICAgbGV0IHVuZGVyVGhlU2hpcCA9IFtdO1xuICAgIGxldCBhcm91bmRUaGVTaGlwID0gW107XG5cbiAgICBjb25zdCBnZXRBcmVhVW5kZXJUaGVTaGlwID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdW5kZXJUaGVTaGlwO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRBcmVhQXJvdW5kVGhlU2hpcCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGFyb3VuZFRoZVNoaXA7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldEFyZWFzID0gKGFyZWEpID0+IHtcbiAgICAgICAgdW5kZXJUaGVTaGlwID0gYXJlYTtcbiAgICAgICAgYXJvdW5kVGhlU2hpcCA9IHNldEFyZWFBcm91bmRUaGVTaGlwKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldEFyZWFBcm91bmRUaGVTaGlwID0gKCkgPT4ge1xuICAgICAgICBsZXQgaGFuZGxlciA9IENlbGxIYW5kbGVyKCk7XG4gICAgICAgIGxldCBhcmVhcyA9IFtdO1xuICAgICAgICBsZXQgcGFyZW50ID0gcGxheWVyLmdldEdhbWVib2FyZCgpLmdldFN0cnVjdGVkQ29udGFpbmVyKCk7XG4gICAgICAgIHVuZGVyVGhlU2hpcC5mb3JFYWNoKChzZWN0b3IpID0+IHtcbiAgICAgICAgICAgIGxldCBjb29yZGluYXRlcyA9IHNlY3Rvci5nZXRYWSgpO1xuICAgICAgICAgICAgbGV0IGFyZWEgPSBoYW5kbGVyLmdldENlbGxBcm91bmRBcmVhKFxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzLngsXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMueSxcbiAgICAgICAgICAgICAgICBwYXJlbnQsXG4gICAgICAgICAgICAgICAgc2hpcCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBhcmVhcyA9IGFyZWFzLmNvbmNhdChhcmVhKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoYXJlYXMpKS5maWx0ZXIoXG4gICAgICAgICAgICAoeCkgPT4gIXVuZGVyVGhlU2hpcC5pbmNsdWRlcyh4KSxcbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb2NjdXB5QXJlYXMgPSAoKSA9PiB7XG4gICAgICAgIHVuZGVyVGhlU2hpcC5mb3JFYWNoKChzZWN0b3IpID0+IHtcbiAgICAgICAgICAgIGlmIChzZWN0b3IuaXNGcmVlKCkpIHtcbiAgICAgICAgICAgICAgICBzZWN0b3Iub2NjdXB5KHNoaXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2hlY2tBcmVhID0gKCkgPT4ge1xuICAgICAgICBsZXQgYWNlc3NpYmlsaXR5ID0gdHJ1ZTtcbiAgICAgICAgbGV0IGFyZWFzID0gdW5kZXJUaGVTaGlwLmNvbmNhdChhcm91bmRUaGVTaGlwKTtcblxuICAgICAgICBhcmVhcy5mb3JFYWNoKChzZWN0b3IpID0+IHtcbiAgICAgICAgICAgIGlmICghc2VjdG9yLmlzRnJlZSgpICYmIHNlY3Rvci5nZXRPY2N1cGFudCgpICE9PSBzaGlwKSB7XG4gICAgICAgICAgICAgICAgYWNlc3NpYmlsaXR5ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhY2Vzc2liaWxpdHk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNsZWFyQXJlYXMgPSAoKSA9PiB7XG4gICAgICAgIGxldCBhcmVhcyA9IHVuZGVyVGhlU2hpcC5jb25jYXQoYXJvdW5kVGhlU2hpcCk7XG4gICAgICAgIGFyZWFzLmZvckVhY2goKHNlY3RvcikgPT4ge1xuICAgICAgICAgICAgc2VjdG9yLmNsZWFyKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjbGVhckFyZWFzLFxuICAgICAgICBjaGVja0FyZWEsXG4gICAgICAgIGdldEFyZWFVbmRlclRoZVNoaXAsXG4gICAgICAgIGdldEFyZWFBcm91bmRUaGVTaGlwLFxuICAgICAgICBzZXRBcmVhcyxcbiAgICAgICAgb2NjdXB5QXJlYXMsXG4gICAgfTtcbn07XG4iLCJleHBvcnQgY29uc3QgQW5pbWF0aW9ucyA9ICgoKSA9PiB7XG4gICAgY29uc3QgdHJhbnNmb3JtID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgeCA9IChlLCB4MCwgeDEsIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyBsZWZ0OiBgJHt4MH1gIH0sIHsgbGVmdDogYCR7eDF9YCB9XSwge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBkdXIsXG4gICAgICAgICAgICAgICAgZmlsbDogZmlsbCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHkgPSAoZSwgeTAsIHkxLCBkdXIsIGZpbGwgPSAnbm9uZScpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBlLmFuaW1hdGUoW3sgdG9wOiBgJHt5MH1gIH0sIHsgdG9wOiBgJHt5MX1gIH1dLCB7XG4gICAgICAgICAgICAgICAgZHVyYXRpb246IGR1cixcbiAgICAgICAgICAgICAgICBmaWxsOiBmaWxsLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgcm90YXRlID0gKGUsIHJvdGF0ZTEsIHJvdGF0ZTIsIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIHsgdHJhbnNmb3JtOiBgcm90YXRlKCR7cm90YXRlMX1kZWcpYCB9LFxuICAgICAgICAgICAgICAgICAgICB7IHRyYW5zZm9ybTogYHJvdGF0ZSgke3JvdGF0ZTJ9ZGVnKWAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHsgZHVyYXRpb246IGR1ciwgZmlsbDogZmlsbCB9LFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4geyB4LCB5LCByb3RhdGUgfTtcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IChlLCBjb2xvcjEsIGNvbG9yMiwgZHVyLCBmaWxsID0gJ25vbmUnKSA9PiB7XG4gICAgICAgIHJldHVybiBlLmFuaW1hdGUoW3sgYmFja2dyb3VuZDogY29sb3IxIH0sIHsgYmFja2dyb3VuZDogY29sb3IyIH1dLCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyLFxuICAgICAgICAgICAgZmlsbDogZmlsbCxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9wYWNpdHkgPSAoZSwgb3BhY2l0eTEsIG9wYWNpdHkyLCBkdXIsIGZpbGwgPSAnbm9uZScpID0+IHtcbiAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyBvcGFjaXR5OiBvcGFjaXR5MSB9LCB7IG9wYWNpdHk6IG9wYWNpdHkyIH1dLCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyLFxuICAgICAgICAgICAgZmlsbDogZmlsbCxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGN1c3RvbSA9IChlLCBkdXIsIGZpbGwgPSAnbm9uZScsIC4uLmtleUZyYW1lcykgPT4ge1xuICAgICAgICByZXR1cm4gZS5hbmltYXRlKC4uLmtleUZyYW1lcywgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4geyB0cmFuc2Zvcm0sIGJhY2tncm91bmQsIG9wYWNpdHksIGN1c3RvbSB9O1xufSkoKTtcbiIsImV4cG9ydCBjb25zdCBzZXRIaWRkZW4gPSAobm9kZSkgPT4ge1xuICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlSGlkZGVuID0gKG5vZGUpID0+IHtcbiAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldExvd09wYWNpdHkgPSAobm9kZSkgPT4ge1xuICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnbG93LW9wYWNpdHknKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXROb3JtYWxPcGFjaXR5ID0gKG5vZGUpID0+IHtcbiAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2xvdy1vcGFjaXR5Jyk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlTnVsbE9wYWNpdHkgPSAobm9kZSkgPT4ge1xuICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnbnVsbC1vcGFjaXR5Jyk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0TnVsbE9wYWNpdHkgPSAobm9kZSkgPT4ge1xuICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnbnVsbC1vcGFjaXR5Jyk7XG59O1xuIiwiaW1wb3J0IHsgQW5pbWF0aW9ucyB9IGZyb20gJy4vYW5pbWF0aW9ucyc7XG5cbmV4cG9ydCBjb25zdCBkcmF3Q3Jvc3MgPSAoZSwgZHVyLCBmaWxsLCAuLi5rZXlGcmFtZXMpID0+IHtcbiAgICBBbmltYXRpb25zLmN1c3RvbShlLmZpcnN0Q2hpbGQsIGR1ciwgZmlsbCwgLi4ua2V5RnJhbWVzKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmV0dXJuIEFuaW1hdGlvbnMuY3VzdG9tKGUubGFzdENoaWxkLCBkdXIsIGZpbGwsIC4uLmtleUZyYW1lcyk7XG4gICAgfSwgZHVyKTtcbn07XG4iLCJpbXBvcnQgeyBBbmltYXRpb25zIH0gZnJvbSAnLi9hbmltYXRpb25zJztcblxuZXhwb3J0IGNvbnN0IGNvbG9yc1RpbWVyID0gKGUsIGR1ciwgZmlsbCwgLi4ua2V5RnJhbWVzKSA9PiB7XG4gICAgcmV0dXJuIEFuaW1hdGlvbnMuY3VzdG9tKGUsIGR1ciwgZmlsbCwgLi4ua2V5RnJhbWVzKTtcbn07XG5cbmV4cG9ydCBjb25zdCBkcmF3VGltZXIgPSAoZSwgZHVyLCBmaWxsLCAuLi5rZXlGcmFtZXMpID0+IHtcbiAgICByZXR1cm4gQW5pbWF0aW9ucy5jdXN0b20oZSwgZHVyLCBmaWxsLCAuLi5rZXlGcmFtZXMpO1xufTtcbiIsImV4cG9ydCBjb25zdCBzZXREcmFnZ2FibGUgPSAobm9kZSkgPT4ge1xuICAgIG5vZGUuZHJhZ2dhYmxlID0gdHJ1ZTtcbn07XG4iLCJpbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi8uLi9tb2RlbHMvZ2FtZUNvbmZpZyc7XG5pbXBvcnQgeyBzZXREcmFnZ2FibGUgfSBmcm9tICcuL3NldERyYWdnYWJsZSc7XG5cbmV4cG9ydCBjb25zdCBzZXREcmFnZ2FibGVGb3JTaGlwcyA9ICgpID0+IHtcbiAgICBDb25maWcuRWxlbWVudHMuc2hpcFR5cGVzLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgZm9yVHlwZSh0eXBlKTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGZvclR5cGUgPSAodHlwZSkgPT4ge1xuICAgIGNvbnN0IGRvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0eXBlfWApO1xuICAgIGNvbnN0IHNoaXBzID0gQXJyYXkuZnJvbShkb2NrLmNoaWxkcmVuKTtcblxuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgc2V0RHJhZ2dhYmxlKHNoaXApO1xuICAgIH0pO1xufTtcbiIsImltcG9ydCB7IEFscGhhYmV0cyB9IGZyb20gJy4uLy4uL21vZGVscy9hbHBoYWJldHMnO1xuaW1wb3J0IHsgZ2V0Tm9kZSB9IGZyb20gJy4vZmFjdG9yeSc7XG5cbmNvbnN0IGFscGhhYmV0ID0gQWxwaGFiZXRzLnJ1cygpLmNvZGVzO1xuXG5leHBvcnQgY29uc3Qgdmlld0F4aXMgPSAoYm9hcmQpID0+IHtcbiAgICBjb25zdCBub2RlID0gYm9hcmQuZ2V0Tm9kZSgpO1xuICAgIGNvbnN0IHhBeGlzID0gbm9kZS5xdWVyeVNlbGVjdG9yKCcueC1heGlzJyk7XG4gICAgY29uc3QgeUF4aXMgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy55LWF4aXMnKTtcbiAgICBjb25zdCBzaXplID0gYm9hcmQuZ2V0U2l6ZSgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplLndpZHRoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGdldE5vZGUoJ3gtY2VsbCcsICdjZWxsJyk7XG4gICAgICAgIGNvbnN0IGxldHRlciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoYWxwaGFiZXRbaV0pLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBsZXR0ZXI7XG4gICAgICAgIHhBeGlzLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZS5oZWlnaHQ7IGkrKykge1xuICAgICAgICBjb25zdCBjZWxsID0gZ2V0Tm9kZSgneS1jZWxsJywgJ2NlbGwnKTtcbiAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGk7XG4gICAgICAgIHlBeGlzLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgIH1cbn07XG4iLCJleHBvcnQgY29uc3QgZ2V0Tm9kZSA9ICguLi5uYW1lcykgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAgIGlmIChuYW1lICE9PSAnJykge1xuICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKG5hbWUpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG5vZGU7XG59O1xuIiwiaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2dhbWVDb25maWcnO1xuXG5leHBvcnQgY29uc3Qgdmlld0JvYXJkID0gKGJvYXJkKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gYm9hcmQuZ2V0VW5zdHJ1Y3RlZENvbnRhaW5lcigpO1xuICAgIGNvbnN0IGJvYXJkd3IgPSBib2FyZC5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLmJvYXJkJyk7XG4gICAgY29udGFpbmVyLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgYm9hcmR3ci5hcHBlbmRDaGlsZChjZWxsLmdldENlbGxOb2RlKCkpO1xuICAgIH0pO1xufTtcblxuY29uc3QgU3R5bGVQcmVzZXRzID0gKCgpID0+IHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgICctLWJvYXJkLXdpZHRoJyxcbiAgICAgICAgQ29uZmlnLkdhbWVib2FyZC53aWR0aCxcbiAgICApO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgJy0tYm9hcmQtaGVpZ2h0JyxcbiAgICAgICAgQ29uZmlnLkdhbWVib2FyZC5oZWlnaHQsXG4gICAgKTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBkcmF3Q3Jvc3MgfSBmcm9tICcuLi8uLi9tb2RlbHMvZWxlbWVudHMvYXVkaW9FZmZlY3RzJztcbmltcG9ydCB7IENyb3NzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2VsZW1lbnRzL3RlbXBsYXRlcyc7XG5pbXBvcnQgeyByZW1vdmVOdWxsT3BhY2l0eSB9IGZyb20gJy4uL2FuaW1hdGlvbnMvY2hhbmdlVmlzaWJsZSc7XG5cbmV4cG9ydCBjb25zdCB2aWV3TWlzc0hpdCA9IChjZWxsKSA9PiB7XG4gICAgY2VsbC5nZXRDZWxsTm9kZSgpLmNsYXNzTGlzdC5hZGQoJ21pc3MtaGl0Jyk7XG59O1xuXG5leHBvcnQgY29uc3Qgdmlld0FjY3VyYXRlSGl0ID0gKGNlbGwpID0+IHtcbiAgICBjb25zdCBkZWNrID0gY2VsbC5nZXRMaW5rZWREZWNrKCk7XG4gICAgcmVtb3ZlTnVsbE9wYWNpdHkoZGVjay5nZXRDZWxsTm9kZSgpKTtcbiAgICBkZWNrLnNldFRoZUhpdCgpO1xuICAgIGFwcGVuZENyb3NzU3ZnKGRlY2spO1xuICAgIGRyYXdDcm9zcy5wbGF5KCk7XG59O1xuXG5leHBvcnQgY29uc3QgYXBwZW5kQ3Jvc3NTdmcgPSAoZGVjaykgPT4ge1xuICAgIGxldCBjcm9zcyA9IENyb3NzKCk7XG4gICAgZGVjay5nZXRDZWxsTm9kZSgpLmNsYXNzTGlzdC5hZGQoJ2Rlc3Ryb3llZCcpO1xuICAgIGRlY2suZ2V0Q2VsbE5vZGUoKS5hcHBlbmRDaGlsZChjcm9zcy5nZXRTdmcoKSk7XG4gICAgY3Jvc3MudmlldygpO1xufTtcbiIsImltcG9ydCB7IGFwcGVuZENoaWxkcywgc2V0QXR0cmlidXRlcyB9IGZyb20gJy4uLy4uL2hlbHBlci9oZWxwZXInO1xuaW1wb3J0IHsgQ3Jvc3NBdHRyaWJ1dGVzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2VsZW1lbnRzL2F0dHJpYnV0ZXMnO1xuaW1wb3J0IHsgZHJhd0Nyb3NzIH0gZnJvbSAnLi4vYW5pbWF0aW9ucy9tYXJrZXJzJztcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNyb3NzU1ZHID0gKCkgPT4ge1xuICAgIGxldCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgIGxldCBsZWZ0TGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcbiAgICAgICAgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcbiAgICAgICAgJ2xpbmUnLFxuICAgICk7XG4gICAgbGV0IHJpZ2h0TGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcbiAgICAgICAgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcbiAgICAgICAgJ2xpbmUnLFxuICAgICk7XG4gICAgYXBwZW5kQ2hpbGRzKHN2ZywgbGVmdExpbmUsIHJpZ2h0TGluZSk7XG4gICAgc2V0QXR0cmlidXRlcyhcbiAgICAgICAgbGVmdExpbmUsXG4gICAgICAgIENyb3NzQXR0cmlidXRlcy5saW5lLmNvbmNhdChDcm9zc0F0dHJpYnV0ZXMubGVmdERpYWcpLFxuICAgICk7XG4gICAgc2V0QXR0cmlidXRlcyhcbiAgICAgICAgcmlnaHRMaW5lLFxuICAgICAgICBDcm9zc0F0dHJpYnV0ZXMubGluZS5jb25jYXQoQ3Jvc3NBdHRyaWJ1dGVzLnJpZ2h0RGlhZyksXG4gICAgKTtcbiAgICByZXR1cm4gc3ZnO1xufTtcblxuZXhwb3J0IGNvbnN0IHZpZXdDcm9zcyA9IChzdmcpID0+IHtcbiAgICBjb25zdCBhbmltYXRpb25zID0gW1xuICAgICAgICBkcmF3Q3Jvc3Moc3ZnLCAyMDAsICdmb3J3YXJkcycsIFtcbiAgICAgICAgICAgIHsgc3Ryb2tlRGFzaG9mZnNldDogJ21pbig1dmggLDJ2dyknIH0sXG4gICAgICAgICAgICB7IHN0cm9rZURhc2hvZmZzZXQ6ICdtaW4oMHZoICwwdncpJyB9LFxuICAgICAgICBdKSxcbiAgICBdO1xuICAgIHJldHVybiBhbmltYXRpb25zO1xufTtcbiIsImltcG9ydCB7IGxvc2UsIHdpbiB9IGZyb20gJy4uLy4uL21vZGVscy9lbGVtZW50cy9hdWRpb0VmZmVjdHMnO1xuXG5leHBvcnQgY29uc3Qgdmlld1dpblBvcHVwID0gKCkgPT4ge1xuICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLXdpbicpO1xuICAgIHBvcHVwLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgIHBvcHVwLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgd2luLnBsYXkoKTtcbn07XG5cbmV4cG9ydCBjb25zdCB2aWV3TG9zZVBvcHVwID0gKCkgPT4ge1xuICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLWxvc2UnKTtcbiAgICBwb3B1cC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICBwb3B1cC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIGxvc2UucGxheSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGhpZGRlblBvcHVwID0gKHBvcHVwKSA9PiB7XG4gICAgcG9wdXAuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgcG9wdXAuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIHdpbi5wYXVzZSgpO1xuICAgIGxvc2UucGF1c2UoKTtcbn07XG4iLCJpbXBvcnQgeyB2aWV3QXhpcyB9IGZyb20gJy4vYXhpcyc7XG5pbXBvcnQgeyB2aWV3Qm9hcmQgfSBmcm9tICcuL2dhbWVib2FyZCc7XG5cbmV4cG9ydCBjb25zdCB2aWV3UHJvZmlsZSA9IChwcm9maWxlKSA9PiB7XG4gICAgdmlld0JvYXJkKHByb2ZpbGUuZ2V0R2FtZWJvYXJkKCkpO1xuICAgIHZpZXdBeGlzKHByb2ZpbGUuZ2V0R2FtZWJvYXJkKCkpO1xufTtcbiIsImltcG9ydCB7IGdhbWUgfSBmcm9tICcuLi8uLic7XG5pbXBvcnQgeyByYW5kb21JbnRGcm9tSW50ZXJ2YWwgfSBmcm9tICcuLi8uLi9oZWxwZXIvaGVscGVyJztcbmltcG9ydCB7IENvb3JkaW5hdGVzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2dhbWUnO1xuaW1wb3J0IHsgU2Vzc2lvbiB9IGZyb20gJy4uLy4uL21vZGVscy9zZXNzaW9uJztcbmltcG9ydCB7IHJlbW92ZUhpZGRlbiwgc2V0SGlkZGVuIH0gZnJvbSAnLi4vYW5pbWF0aW9ucy9jaGFuZ2VWaXNpYmxlJztcblxuZXhwb3J0IGNvbnN0IHZpZXdTaGlwID0gKHNoaXAsIGhlYWQpID0+IHtcbiAgICBsZXQgaXNWaWV3ID0gc2hpcC5sYXVuY2hTaGlwT25XYXRlcihoZWFkKTtcbiAgICBpZiAoaXNWaWV3KSB7XG4gICAgICAgIHNoaXAuc2V0SGVhZChoZWFkKTtcbiAgICAgICAgaGVhZC5nZXRDZWxsTm9kZSgpLmFwcGVuZENoaWxkKHNoaXAuZ2V0Q29udGFpbmVyKCkpO1xuICAgICAgICBjaGVja1NoaXB5YXJkKCk7XG4gICAgfVxuICAgIHJldHVybiBpc1ZpZXc7XG59O1xuXG5jb25zdCBjaGVja1NoaXB5YXJkID0gKCkgPT4ge1xuICAgIGlmIChTZXNzaW9uLm1hbnVhbE1vZGUpIHtcbiAgICAgICAgaWYgKGdhbWUucGxheWVyLmdldFNoaXB5YXJkKCkuaXNFbXB0eSgpKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjbG9zZU1hbnVhbE1lbnUoKTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5jb25zdCBjbG9zZU1hbnVhbE1lbnUgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcHlhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcHlhcmQnKTtcbiAgICByZW1vdmVIaWRkZW4oZ2FtZS5haS5nZXRHYW1lYm9hcmQoKS5nZXROb2RlKCkpO1xuICAgIHNldEhpZGRlbihzaGlweWFyZCk7XG59O1xuXG5leHBvcnQgY29uc3Qgdmlld1NoaXBPblJhbmRvbUNlbGwgPSAoc2hpcCwgY2VsbHMpID0+IHtcbiAgICBsZXQgY2VsbCA9IGdldFJhbmRvbUNlbGwoY2VsbHMpO1xuICAgIGxldCBpc1ZpZXcgPSB2aWV3U2hpcChzaGlwLCBjZWxsKTtcbiAgICByZXR1cm4gaXNWaWV3ID8gdHJ1ZSA6IHZpZXdTaGlwT25SYW5kb21DZWxsKHNoaXAsIGNlbGxzKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRSYW5kb21DZWxsID0gKGNlbGxzKSA9PiB7XG4gICAgbGV0IGluZGV4ID0gcmFuZG9tSW50RnJvbUludGVydmFsKDAsIGNlbGxzLmxlbmd0aCAtIDEpO1xuICAgIHJldHVybiBjZWxscy5zcGxpY2UoaW5kZXgsIDEpWzBdO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldFN0YW5kYXJ0SG9yaXpvbnRhbFNoaXBEZXNpZ24gPSAoY29udGFpbmVyLCBsZW5ndGgpID0+IHtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndmVydGljYWwnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG9yaXpvbnRhbCcpO1xuICAgIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9IGBtaW4oJHtsZW5ndGggKiA1fXZoLCR7bGVuZ3RoICogMn12dylgO1xuICAgIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBgbWluKDV2aCwydncpYDtcbiAgICBjb250YWluZXIuc3R5bGUubWluSGVpZ2h0ID0gYDJ2aGA7XG4gICAgY29udGFpbmVyLnN0eWxlLm1pbldpZHRoID0gYCR7bGVuZ3RoICogMn12aGA7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0U3RhbmRhcnRWZXJ0aWNhbFNoaXBEZXNpZ24gPSAoY29udGFpbmVyLCBsZW5ndGgpID0+IHtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaG9yaXpvbnRhbCcpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd2ZXJ0aWNhbCcpO1xuICAgIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBgbWluKCR7bGVuZ3RoICogNX12aCwke2xlbmd0aCAqIDJ9dncpYDtcbiAgICBjb250YWluZXIuc3R5bGUud2lkdGggPSBgbWluKDV2aCwydncpYDtcbiAgICBjb250YWluZXIuc3R5bGUubWluSGVpZ2h0ID0gYCR7bGVuZ3RoICogMn12aGA7XG4gICAgY29udGFpbmVyLnN0eWxlLm1pbldpZHRoID0gYDJ2aGA7XG59O1xuXG5leHBvcnQgY29uc3QgcmVzZXRTaGlwU3R5bGUgPSAoY29udGFpbmVyKSA9PiB7XG4gICAgY29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgY29udGFpbmVyLnN0eWxlLmJvcmRlciA9ICdtaW4oMC4xdmgsIDAuMXZ3KSByZ2JhKDAsIDAsIDI1NSwgMSkgc29saWQnO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldERlYXRoU3R5bGVPblNoaXAgPSAoY29udGFpbmVyKSA9PiB7XG4gICAgY29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSAnMC4zJztcbiAgICBjb250YWluZXIuc3R5bGUuYm9yZGVyID0gJ21pbigwLjF2aCwgMC4xdncpIHJnYmEoMjU1LCAwLCAwLCAxKSBzb2xpZCc7XG59O1xuXG5cbmV4cG9ydCBjb25zdCB2aWV3RHJhZ1NoaXBGb3JNb2JpbGUgPSAoY3Vyc29yWCwgY3Vyc29yWSwgY29udGFpbmVyKSA9PiB7XG4gICAgbGV0IHggPSBjdXJzb3JYIC0gQ29vcmRpbmF0ZXMuZ2V0WFkoKS54O1xuICAgIGxldCB5ID0gY3Vyc29yWSAtIENvb3JkaW5hdGVzLmdldFhZKCkueTtcbiAgICBjb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoJy0teScsIGAke3l9cHhgKTtcbiAgICBjb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoJy0teCcsIGAke3h9cHhgKTtcbn0iLCJpbXBvcnQgeyBnYW1lIH0gZnJvbSAnLi4vLi4nO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2dhbWVDb25maWcnO1xuaW1wb3J0IHsgc2V0RHJhZ2dhYmxlRm9yU2hpcHMgfSBmcm9tICcuLi9kcmFnQW5kRHJvcC9zaGlwcyc7XG5cbmV4cG9ydCBjb25zdCB2aWV3U2hpcHlhcmQgPSAoc2hpcHlhcmQpID0+IHtcbiAgICBmaWxsU2hpcHlhcmROb2RlKHNoaXB5YXJkKTtcbiAgICBzZXREcmFnZ2FibGVGb3JTaGlwcygpO1xufTtcblxuY29uc3QgZmlsbFNoaXB5YXJkTm9kZSA9IChzaGlweWFyZCkgPT4ge1xuICAgIENvbmZpZy5FbGVtZW50cy5zaGlwVHlwZXMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgICBhZGRUeXBlKHR5cGUsIHNoaXB5YXJkKTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGFkZFR5cGUgPSAodHlwZSwgc2hpcHlhcmQpID0+IHtcbiAgICBjb25zdCBkb2NrID0gc2hpcHlhcmQuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoYC4ke3R5cGV9YCk7XG4gICAgY29uc3Qgc2hpcHMgPSBzaGlweWFyZC5nZXRTaGlwc09mVHlwZSh0eXBlKTtcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgIGRvY2suYXBwZW5kQ2hpbGQoc2hpcC5nZXRDb250YWluZXIoKSk7XG4gICAgfSk7XG59O1xuIiwiaW1wb3J0IHsgYXBwZW5kQ2hpbGRzLCBzZXRBdHRyaWJ1dGVzIH0gZnJvbSAnLi4vLi4vaGVscGVyL2hlbHBlcic7XG5pbXBvcnQgeyBIb3Jpem9udGFsTGluZSB9IGZyb20gJy4uLy4uL21vZGVscy9lbGVtZW50cy9hdHRyaWJ1dGVzJztcbmltcG9ydCB7IGNvbG9yc1RpbWVyLCBkcmF3VGltZXIgfSBmcm9tICcuLi9hbmltYXRpb25zL3RpbWVyJztcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRpbWVyU1ZHID0gKCkgPT4ge1xuICAgIGxldCB0aW1lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgbGV0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ2xpbmUnKTtcbiAgICBzZXRBdHRyaWJ1dGVzKGxpbmUsIEhvcml6b250YWxMaW5lLmhvcml6b250YWwpO1xuICAgIGFwcGVuZENoaWxkcyh0aW1lciwgbGluZSk7XG4gICAgcmV0dXJuIHRpbWVyO1xufTtcblxuZXhwb3J0IGNvbnN0IHZpZXdUaW1lciA9IChzdmcpID0+IHtcbiAgICBjb25zdCBhbmltYXRpb25zID0gW1xuICAgICAgICBjb2xvcnNUaW1lcihzdmcubGFzdENoaWxkLCAxNTAwMCwgJ25vbmUnLCBbXG4gICAgICAgICAgICB7IHN0cm9rZTogJ2dyZWVuJyB9LFxuICAgICAgICAgICAgeyBzdHJva2U6ICdvcmFuZ2UnIH0sXG4gICAgICAgICAgICB7IHN0cm9rZTogJ3JlZCcgfSxcbiAgICAgICAgXSksXG4gICAgICAgIGRyYXdUaW1lcihzdmcubGFzdENoaWxkLCAxNTAwMCwgJ25vbmUnLCBbXG4gICAgICAgICAgICB7IHN0cm9rZURhc2hvZmZzZXQ6ICc5OXZ3JyB9LFxuICAgICAgICAgICAgeyBzdHJva2VEYXNob2Zmc2V0OiAnMHZ3JyB9LFxuICAgICAgICBdKSxcbiAgICBdO1xuICAgIHJldHVybiBhbmltYXRpb25zO1xufTtcbiIsImltcG9ydCB7XG4gICAgcmVtb3ZlSGlkZGVuLFxuICAgIHNldEhpZGRlbixcbiAgICBzZXRMb3dPcGFjaXR5LFxuICAgIHNldE5vcm1hbE9wYWNpdHksXG59IGZyb20gJy4uL2FuaW1hdGlvbnMvY2hhbmdlVmlzaWJsZSc7XG5cbmV4cG9ydCBjb25zdCBoaWRkZW5JbnRlcmZhY2VCZWZvcmVTdGFydFBsYXkgPSAoKSA9PiB7XG4gICAgc2V0SGlkZGVuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5JykpO1xuICAgIHNldEhpZGRlbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJykpO1xuICAgIHNldEhpZGRlbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGlwcycpKTtcbiAgICByZW1vdmVIaWRkZW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV4aXQnKSk7XG59O1xuXG5leHBvcnQgY29uc3Qgdmlld0ludGVyZmFjZUFmdGVyRW5kR2FtZSA9ICgpID0+IHtcbiAgICByZW1vdmVIaWRkZW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXknKSk7XG4gICAgcmVtb3ZlSGlkZGVuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXInKSk7XG4gICAgcmVtb3ZlSGlkZGVuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXBzJykpO1xuICAgIHNldEhpZGRlbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXhpdCcpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRQbGF5ZXJNb3ZlRGVzaWduID0gKGFpLCBwbGF5ZXIpID0+IHtcbiAgICBzZXROb3JtYWxPcGFjaXR5KGFpLmdldEdhbWVib2FyZCgpLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcueC1heGlzJykpO1xuICAgIHNldE5vcm1hbE9wYWNpdHkoYWkuZ2V0R2FtZWJvYXJkKCkuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy55LWF4aXMnKSk7XG4gICAgc2V0Tm9ybWFsT3BhY2l0eShhaS5nZXRHYW1lYm9hcmQoKS5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLmJvYXJkJykpO1xuICAgIHNldExvd09wYWNpdHkocGxheWVyLmdldEdhbWVib2FyZCgpLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcueC1heGlzJykpO1xuICAgIHNldExvd09wYWNpdHkocGxheWVyLmdldEdhbWVib2FyZCgpLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcueS1heGlzJykpO1xuICAgIHNldExvd09wYWNpdHkocGxheWVyLmdldEdhbWVib2FyZCgpLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0QWlNb3ZlRGVzaWduID0gKGFpLCBwbGF5ZXIpID0+IHtcbiAgICBzZXROb3JtYWxPcGFjaXR5KHBsYXllci5nZXRHYW1lYm9hcmQoKS5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLngtYXhpcycpKTtcbiAgICBzZXROb3JtYWxPcGFjaXR5KHBsYXllci5nZXRHYW1lYm9hcmQoKS5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLnktYXhpcycpKTtcbiAgICBzZXROb3JtYWxPcGFjaXR5KHBsYXllci5nZXRHYW1lYm9hcmQoKS5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLmJvYXJkJykpO1xuICAgIHNldExvd09wYWNpdHkoYWkuZ2V0R2FtZWJvYXJkKCkuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy54LWF4aXMnKSk7XG4gICAgc2V0TG93T3BhY2l0eShhaS5nZXRHYW1lYm9hcmQoKS5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLnktYXhpcycpKTtcbiAgICBzZXRMb3dPcGFjaXR5KGFpLmdldEdhbWVib2FyZCgpLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0TWluaVNoaXB5YXJkRGVzaWduID0gKHNoaXB5YXJkKSA9PiB7XG4gICAgY29uc3QgZGVja3MgPSBzaGlweWFyZC5nZXROb2RlKCkucXVlcnlTZWxlY3RvckFsbCgnLmRlY2snKTtcbiAgICBjb25zdCBzaGlwcyA9IHNoaXB5YXJkLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcCcpO1xuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKCdtaW5pLXNoaXAnKTtcbiAgICB9KTtcbiAgICBkZWNrcy5mb3JFYWNoKChkZWNrKSA9PiB7XG4gICAgICAgIGRlY2suY2xhc3NMaXN0LmFkZCgnbWluaS1jZWxsJyk7XG4gICAgfSk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9