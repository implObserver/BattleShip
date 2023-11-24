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
    --cell-size: min(5vh, 5vw);
}

html {
    font-family: Roboto;
}

.wrapper {
    display: grid;
    grid-template-rows: min-content min-content min-content;
    max-width: 100%;
    max-height: 100%;
    row-gap: min(2vh, 2vw);
    height: min-content;
}

span {
    padding: min(1vh, 1vw);
    height: min-content;
    min-width: max-content;
}

.header {
    display: grid;
    grid-template-columns: 1fr 1fr min-content;
    justify-items: center;
    width: 100%;
    height: min-content;
    padding: min(2vh, 2vw);
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
    border-radius: min(2vh, 2vw);
    height: min-content;
}

.exit {
    display: grid;
}

.main {
    display: grid;
    width: 100%;
    max-width: inherit;
    justify-content: center;
    align-items: center;
    height: max-content;
}

.shipyard {
    display: grid;
    align-content: center;
    grid-template-rows: repeat(4, min-content);
    row-gap: min(6vh, 6vw);
    padding: min(2vh, 2vw);
    width: min(40vh, 40vw);
    height: min(40vh, 40vw);
    max-width: min(50vh, 50vw);
}

.dock {
    display: flex;
    column-gap: min(4vh, 4vw);
    height: min-content;
}

.selected {
    opacity: 0.01 !important;
}

.board__axis-wrapper {
    display: grid;
    grid-template-rows: min-content min-content;
    row-gap: min(2vh, 2vw);
    width: min-content;
    height: min-content;
    padding: min(5vh, 5vw);
}

.axis-wrapper {
    display: grid;
    width: min-content;
    grid-template-rows: min-content 1fr;
}

.x-axis {
    display: grid;
    width: min-content;
    padding-left: min(5.5vh, 5.5vw);
    grid-template-columns: repeat(var(--board-width), 2fr);
}

.correct {
    padding-left: min(32vh, 32vw);
}

.board-wrapper {
    display: grid;
    grid-template-columns: min-content min-content;
    grid-template-areas: 'player-mini-shipyard axis-y board ai-mini-shipyard';
}

.y-axis {
    display: grid;
    grid-area: axis-y;
    grid-template-rows: repeat(var(--board-height), 2fr);
}

.board {
    grid-area: board;
    display: inline-grid;
    grid-template-columns: repeat(var(--board-width), 2fr);
    grid-template-rows: repeat(var(--board-height), 2fr);
    border: min(0.5vh, 0.5vw) rgba(0, 0, 255, 0.2) solid;

}

.play {
    grid-area: board;
    display: grid;
    justify-self: center;
    align-self: center;
    width: min(10vh, 10vw);
    height: min(10vh, 10vw);
    background-color: rgba(119, 202, 41, 0.726);
    border: min(1vh, 1vw) rgb(119, 202, 41) solid;
    z-index: 998;
}

.ai-mini-shipyard,
.player-mini-shipyard {
    display: grid;
    width: min-content;
    height: min-content;
    row-gap: min(2vh, 2vw);
    padding: min(3vh, 3vw);
}

.ai-mini-shipyard {
    grid-area: ai-mini-shipyard;
}

.player-mini-shipyard {
    grid-area: player-mini-shipyard;
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
    justify-content: center;
    padding-left: min(5vh, 5vw);
}

.cell {
    display: grid;
    width: var(--cell-size);
    height: var(--cell-size);
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}

.miss-hit {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: 100% 100%;
}

.destroyed {
    background-color: rgba(247, 190, 190, 0.473) !important;
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
    display: grid;
    align-content: center;
    justify-content: center;
    height: min-content;
    width: min-content;
    margin-left: -1px;
    margin-top: -1px;
    border: min(0.3vh, 0.3vw) rgba(0, 0, 255, 1) solid;
}

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

.mini-ship {
    height: min-content !important;
    width: min-content !important;
}

.mini-cell {
    width: min(2vh, 2vw);
    height: min(2vh, 2vw);
    background-color: rgba(0, 255, 0, 0.1);
    border: min(0.3vh, 0.3vw) rgba(0, 255, 255, 1) solid;
}

.footer {
    display: grid;
    grid-template-columns: min-content min-content;
    width: 100%;
    justify-content: center;
    gap: min(4vh, 4vw);
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
    height: min(2vh, 2vw);
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
    width: 100vh;
    height: 0;
    padding-bottom: 56vh;
    position: relative;
    pointer-events: none;
}

@media screen and (max-aspect-ratio: 1/1.0000001) {
    .main {
        grid-template-rows: min-content min-content;
    }
}

@media screen and (min-aspect-ratio: 2/1) {
    .main {
        grid-template-columns: min-content min-content;
    }
}`, "",{"version":3,"sources":["webpack://./src/views/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    border: 0;\n    height: 100%;\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n}\n\n:root {\n    font-size: min(2vh, 2vw);\n    --board-width: 0;\n    --board-height: 0;\n    --cell-size: min(5vh, 5vw);\n}\n\nhtml {\n    font-family: Roboto;\n}\n\n.wrapper {\n    display: grid;\n    grid-template-rows: min-content min-content min-content;\n    max-width: 100%;\n    max-height: 100%;\n    row-gap: min(2vh, 2vw);\n    height: min-content;\n}\n\nspan {\n    padding: min(1vh, 1vw);\n    height: min-content;\n    min-width: max-content;\n}\n\n.header {\n    display: grid;\n    grid-template-columns: 1fr 1fr min-content;\n    justify-items: center;\n    width: 100%;\n    height: min-content;\n    padding: min(2vh, 2vw);\n}\n\n.title {\n    display: grid;\n    font-size: 3rem;\n}\n\n.tips {\n    display: grid;\n    background-color: rgba(128, 128, 128, 0.2);\n    align-items: center;\n    padding: min(1vh, 1vw);\n    border-radius: min(2vh, 2vw);\n    height: min-content;\n}\n\n.exit {\n    display: grid;\n}\n\n.main {\n    display: grid;\n    width: 100%;\n    max-width: inherit;\n    justify-content: center;\n    align-items: center;\n    height: max-content;\n}\n\n.shipyard {\n    display: grid;\n    align-content: center;\n    grid-template-rows: repeat(4, min-content);\n    row-gap: min(6vh, 6vw);\n    padding: min(2vh, 2vw);\n    width: min(40vh, 40vw);\n    height: min(40vh, 40vw);\n    max-width: min(50vh, 50vw);\n}\n\n.dock {\n    display: flex;\n    column-gap: min(4vh, 4vw);\n    height: min-content;\n}\n\n.selected {\n    opacity: 0.01 !important;\n}\n\n.board__axis-wrapper {\n    display: grid;\n    grid-template-rows: min-content min-content;\n    row-gap: min(2vh, 2vw);\n    width: min-content;\n    height: min-content;\n    padding: min(5vh, 5vw);\n}\n\n.axis-wrapper {\n    display: grid;\n    width: min-content;\n    grid-template-rows: min-content 1fr;\n}\n\n.x-axis {\n    display: grid;\n    width: min-content;\n    padding-left: min(5.5vh, 5.5vw);\n    grid-template-columns: repeat(var(--board-width), 2fr);\n}\n\n.correct {\n    padding-left: min(32vh, 32vw);\n}\n\n.board-wrapper {\n    display: grid;\n    grid-template-columns: min-content min-content;\n    grid-template-areas: 'player-mini-shipyard axis-y board ai-mini-shipyard';\n}\n\n.y-axis {\n    display: grid;\n    grid-area: axis-y;\n    grid-template-rows: repeat(var(--board-height), 2fr);\n}\n\n.board {\n    grid-area: board;\n    display: inline-grid;\n    grid-template-columns: repeat(var(--board-width), 2fr);\n    grid-template-rows: repeat(var(--board-height), 2fr);\n    border: min(0.5vh, 0.5vw) rgba(0, 0, 255, 0.2) solid;\n\n}\n\n.play {\n    grid-area: board;\n    display: grid;\n    justify-self: center;\n    align-self: center;\n    width: min(10vh, 10vw);\n    height: min(10vh, 10vw);\n    background-color: rgba(119, 202, 41, 0.726);\n    border: min(1vh, 1vw) rgb(119, 202, 41) solid;\n    z-index: 998;\n}\n\n.ai-mini-shipyard,\n.player-mini-shipyard {\n    display: grid;\n    width: min-content;\n    height: min-content;\n    row-gap: min(2vh, 2vw);\n    padding: min(3vh, 3vw);\n}\n\n.ai-mini-shipyard {\n    grid-area: ai-mini-shipyard;\n}\n\n.player-mini-shipyard {\n    grid-area: player-mini-shipyard;\n}\n\n.low-opacity {\n    opacity: 0.4;\n}\n\n.block {\n    pointer-events: none;\n}\n\n.hidden {\n    display: none;\n}\n\n.marker {\n    display: grid;\n    justify-content: center;\n    padding-left: min(5vh, 5vw);\n}\n\n.cell {\n    display: grid;\n    width: var(--cell-size);\n    height: var(--cell-size);\n    user-select: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n}\n\n.miss-hit {\n    background-image: url(/src/views/images/dot.svg);\n    background-size: 100% 100%;\n}\n\n.destroyed {\n    background-color: rgba(247, 190, 190, 0.473) !important;\n}\n\n.live {}\n\n.x-cell,\n.y-cell {\n    justify-items: center;\n    align-content: center;\n    opacity: 0.5;\n}\n\n.marine-sector {\n    display: grid;\n    border: min(0.1vh, 0.1vw) rgba(0, 0, 255, 0.2) solid;\n}\n\n.ship {\n    display: grid;\n    align-content: center;\n    justify-content: center;\n    height: min-content;\n    width: min-content;\n    margin-left: -1px;\n    margin-top: -1px;\n    border: min(0.3vh, 0.3vw) rgba(0, 0, 255, 1) solid;\n}\n\n.horizontal {\n    grid-template-columns: repeat(4, 2fr);\n}\n\n.vertical {\n    grid-template-rows: repeat(4, 2fr);\n}\n\n.deck {\n    display: grid;\n    background-color: rgba(0, 0, 255, 0.1);\n    z-index: 999;\n}\n\n.mini-ship {\n    height: min-content !important;\n    width: min-content !important;\n}\n\n.mini-cell {\n    width: min(2vh, 2vw);\n    height: min(2vh, 2vw);\n    background-color: rgba(0, 255, 0, 0.1);\n    border: min(0.3vh, 0.3vw) rgba(0, 255, 255, 1) solid;\n}\n\n.footer {\n    display: grid;\n    grid-template-columns: min-content min-content;\n    width: 100%;\n    justify-content: center;\n    gap: min(4vh, 4vw);\n}\n\n.random-mode,\n.manual-mode {\n    height: min-content;\n    display: grid;\n    border-bottom: 1px dotted blue;\n    color: blue;\n    cursor: pointer;\n}\n\n.random-mode:hover,\n.manual-mode:hover {\n    color: rgb(122, 231, 72);\n    border-bottom: 1px dotted rgb(122, 231, 72);\n}\n\n.timer {\n    display: grid;\n    width: 100vw;\n    height: min(2vh, 2vw);\n    justify-self: start;\n}\n\n.timer>svg {\n    display: grid;\n    width: 100vw;\n}\n\n.hidden {\n    display: none;\n}\n\n.null-opacity {\n    opacity: 0;\n}\n\n.popup-win,\n.popup-lose {\n    position: fixed;\n    display: grid;\n    grid-template-rows: repeat(auto-fit, min-content);\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.8);\n    top: 0;\n    left: 0;\n    justify-items: center;\n    align-items: center;\n    visibility: hidden;\n    opacity: 0;\n    padding: min(1vh, 1vw);\n    z-index: 1000;\n}\n\n.text {\n    display: grid;\n    color: white;\n    font-size: min(10vh, 10vw);\n}\n\n.win,\n.lose {\n    display: grid;\n    grid-template-rows: repeat(3, min-content);\n    height: min-content;\n    justify-items: center;\n    z-index: 2000;\n}\n\n.gif-container {\n    display: flex;\n    justify-self: center;\n    width: 100vh;\n    height: 0;\n    padding-bottom: 56vh;\n    position: relative;\n    pointer-events: none;\n}\n\n@media screen and (max-aspect-ratio: 1/1.0000001) {\n    .main {\n        grid-template-rows: min-content min-content;\n    }\n}\n\n@media screen and (min-aspect-ratio: 2/1) {\n    .main {\n        grid-template-columns: min-content min-content;\n    }\n}"],"sourceRoot":""}]);
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
    const click = button.addEventListener('click', e => {
        _models_elements_audioEffects__WEBPACK_IMPORTED_MODULE_1__.clickEffect.play();
        ___WEBPACK_IMPORTED_MODULE_0__.game.play();
    })
}

const setListenersForExitButton = () => {
    const button = document.querySelector('.exit');

    const click = button.addEventListener('click', e => {
        _models_elements_audioEffects__WEBPACK_IMPORTED_MODULE_1__.clickEffect.play();
        ___WEBPACK_IMPORTED_MODULE_0__.game.end();
    })
}

const setListenersForCells = () => {
    const cells = ___WEBPACK_IMPORTED_MODULE_0__.game.ai.getGameboard().getUnstructedContainer();
    cells.forEach(cell => {
        const node = cell.getCellNode();
        node.style.zIndex = 1000;
        const click = node.addEventListener('click', e => {
            ___WEBPACK_IMPORTED_MODULE_0__.game.gameHandler.checkCell(cell);
        })
    })
}

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
/* harmony import */ var _views_nodes_popups__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../views/nodes/popups */ "./src/views/nodes/popups.js");


const setListenersforPopups = () => {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
        const click = popup.addEventListener('click', e => {
            (0,_views_nodes_popups__WEBPACK_IMPORTED_MODULE_0__.hiddenPopup)(popup);
        })
    });
}

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
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./src/index.js");
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
            evt.target.classList.remove(`selected`);
            (0,_ship__WEBPACK_IMPORTED_MODULE_3__.shipDragEnd)();
            (0,_models_session__WEBPACK_IMPORTED_MODULE_1__.resetSession)();
        });
    });

    border.addEventListener(`dragover`, (evt) => {
        _models_session__WEBPACK_IMPORTED_MODULE_1__.Session.currentElement = evt.target;
    });
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
}

const setAttributes = (e, atrs) => {
    for (let atr of atrs) {
        e.setAttribute(atr.name, atr.val);
    }
}

const appendChilds = (node, ...childs) => {
    for (let child of childs) {
        node.appendChild(child);
    }
}

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
/* harmony import */ var _views_styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/styles/main.css */ "./src/views/styles/main.css");
/* harmony import */ var _models_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/player */ "./src/models/player.js");
/* harmony import */ var _views_nodes_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/nodes/profile */ "./src/views/nodes/profile.js");
/* harmony import */ var _controllers_listeners_forLinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controllers/listeners/forLinks */ "./src/controllers/listeners/forLinks.js");
/* harmony import */ var _views_nodes_shipyard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/nodes/shipyard */ "./src/views/nodes/shipyard.js");
/* harmony import */ var _controllers_listeners_forShips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controllers/listeners/forShips */ "./src/controllers/listeners/forShips.js");
/* harmony import */ var _models_game__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/game */ "./src/models/game.js");








const game = (0,_models_game__WEBPACK_IMPORTED_MODULE_6__.Game)();
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
    }

    const getLinkedDeck = () => {
        return linkedDeck;
    }

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
    }

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
        reset
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
    }

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
        { name: 'stroke-width', val: '0.5vh' },
        { name: 'stroke-linecap', val: 'round' },
        { name: 'stroke-dasharray', val: '5vh' },
        { name: 'stroke-dashoffset', val: '5vh' }
    ];
    const leftDiag = [
        { name: 'x1', val: '1vh' },
        { name: 'y1', val: '1vh' },
        { name: 'x2', val: '4vh' },
        { name: 'y2', val: '4vh' },
    ];
    const rightDiag = [
        { name: 'x2', val: '1vh' },
        { name: 'y2', val: '4vh' },
        { name: 'x1', val: '4vh' },
        { name: 'y1', val: '1vh' },
    ];
    return { line, leftDiag, rightDiag };
})();

const HorizontalLine = (() => {
    const horizontal = [
        { name: 'stroke', val: 'red' },
        { name: 'stroke-width', val: '3vh' },
        { name: 'stroke-linecap', val: 'round' },
        { name: 'stroke-dasharray', val: '100vw' },
        { name: 'stroke-dashoffset', val: '100vw' },
        { name: 'x1', val: '0vw' },
        { name: 'y1', val: '0vw' },
        { name: 'x2', val: '100vw' },
        { name: 'y2', val: '0vw' },
    ]
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
/* harmony export */   nextMoveEffect: () => (/* binding */ nextMoveEffect),
/* harmony export */   timerEffect: () => (/* binding */ timerEffect),
/* harmony export */   win: () => (/* binding */ win)
/* harmony export */ });
/* harmony import */ var _views_audio_cross_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../views/audio/cross.mp3 */ "./src/views/audio/cross.mp3");
/* harmony import */ var _views_audio_nextMove_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../views/audio/nextMove.mp3 */ "./src/views/audio/nextMove.mp3");
/* harmony import */ var _views_audio_shot_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../views/audio/shot.mp3 */ "./src/views/audio/shot.mp3");
/* harmony import */ var _views_audio_boom_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../views/audio/boom.mp3 */ "./src/views/audio/boom.mp3");
/* harmony import */ var _views_audio_clickPlay_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../views/audio/clickPlay.mp3 */ "./src/views/audio/clickPlay.mp3");
/* harmony import */ var _views_audio_timer_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../views/audio/timer.mp3 */ "./src/views/audio/timer.mp3");
/* harmony import */ var _views_audio_win_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../views/audio/win.mp3 */ "./src/views/audio/win.mp3");
/* harmony import */ var _views_audio_lose_mp3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../views/audio/lose.mp3 */ "./src/views/audio/lose.mp3");









const drawCross = (() => {
    let audio = new Audio(_views_audio_cross_mp3__WEBPACK_IMPORTED_MODULE_0__)
    audio.playbackRate = 3;
    audio.volume = 0.5;
    return audio;
})();

const nextMoveEffect = (() => {
    let audio = new Audio(_views_audio_nextMove_mp3__WEBPACK_IMPORTED_MODULE_1__);
    audio.playbackRate = 2;
    return audio;
})();

const missEffect = (() => {
    let audio = new Audio(_views_audio_shot_mp3__WEBPACK_IMPORTED_MODULE_2__);
    audio.playbackRate = 2;
    audio.volume = 0.4;
    return audio;
})();

const killShipEffect = (() => {
    let audio = new Audio(_views_audio_boom_mp3__WEBPACK_IMPORTED_MODULE_3__);
    audio.volume = 0.2;
    return audio;
})();

const clickEffect = (() => {
    let audio = new Audio(_views_audio_clickPlay_mp3__WEBPACK_IMPORTED_MODULE_4__);
    audio.volume = 1;
    return audio;
})();

const timerEffect = (() => {
    let audio = new Audio(_views_audio_timer_mp3__WEBPACK_IMPORTED_MODULE_5__);
    audio.volume = 1;
    return audio;
})();

const win = (() => {
    let audio = new Audio(_views_audio_win_mp3__WEBPACK_IMPORTED_MODULE_6__);
    audio.volume = 1;
    return audio;
})();

const lose = (() => {
    let audio = new Audio(_views_audio_lose_mp3__WEBPACK_IMPORTED_MODULE_7__);
    audio.volume = 1;
    return audio;
})();

/*export const aiCross = (() => {
    let audio = new Audio('../audio/terminatorCross.mp3');
    audio.playbackRate = 2.3;
    return audio;
})();

export const winRound = (() => {
    let audio = new Audio('../audio/winRound.mp3');
    audio.volume = 0.5;
    return audio;
})();

export const draw = (() => {
    let audio = new Audio('../audio/wow.mp3');
    audio.volume = 0.5;
    return audio;
})();

export const win = (() => {
    let audio = new Audio('../audio/win.mp3');
    return audio;
})();

export const timer = (() => {
    let audio = new Audio('../audio/timer.mp3');
    return audio;
})();

export const lose = (() => {
    let audio = new Audio('../audio/terminatorEnd.mp3');
    return audio;
})();*/

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
    }

    const reset = () => {
        animations.forEach(animation => {
            animation.finish();
        })
    }

    const setAnimations = (val) => {
        animations = val;
    }

    return { setAnimations, getSvg, animations, reset };
}

const Cross = () => {
    const prototype = Template((0,_views_nodes_markers__WEBPACK_IMPORTED_MODULE_0__.createCrossSVG)());

    const view = () => {
        prototype.setAnimations((0,_views_nodes_markers__WEBPACK_IMPORTED_MODULE_0__.viewCross)(prototype.getSvg()));
    }

    return Object.assign(prototype, { view });
}

const Timer = () => {
    const prototype = Template((0,_views_nodes_timer__WEBPACK_IMPORTED_MODULE_1__.createTimerSVG)());

    const view = () => {
        prototype.setAnimations((0,_views_nodes_timer__WEBPACK_IMPORTED_MODULE_1__.viewTimer)(prototype.getSvg()));
    }

    return Object.assign(prototype, { view });
}

/***/ }),

/***/ "./src/models/game.js":
/*!****************************!*\
  !*** ./src/models/game.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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
/* harmony import */ var _elements_templates__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./elements/templates */ "./src/models/elements/templates.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./player */ "./src/models/player.js");
/* harmony import */ var _timeManipulators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./timeManipulators */ "./src/models/timeManipulators.js");
















const Game = () => {
    let player = (0,_player__WEBPACK_IMPORTED_MODULE_13__.Profile)(1, 'Player', 'player-board', '.ai-mini-shipyard');
    let ai = (0,_player__WEBPACK_IMPORTED_MODULE_13__.Profile)(0, 'AI', 'ai-board', '.player-mini-shipyard');
    const timeManipulators = (0,_timeManipulators__WEBPACK_IMPORTED_MODULE_14__.TimeManipulators)();
    const gameHandler = GameHandler(ai, player, timeManipulators);

    const viewDefaulInterfaces = () => {
        (0,_views_nodes_profile__WEBPACK_IMPORTED_MODULE_7__.viewProfile)(player);
        (0,_views_nodes_profile__WEBPACK_IMPORTED_MODULE_7__.viewProfile)(ai);
        (0,_views_nodes_shipyard__WEBPACK_IMPORTED_MODULE_8__.viewShipyard)(player.getShipyard());
        (0,_views_nodes_shipyard__WEBPACK_IMPORTED_MODULE_8__.viewShipyard)(player.getMiniShipyard());
        (0,_views_nodes_shipyard__WEBPACK_IMPORTED_MODULE_8__.viewShipyard)(ai.getMiniShipyard());
        (0,_views_nodes_ui__WEBPACK_IMPORTED_MODULE_9__.setMiniShipyardDesign)(player.getMiniShipyard())
        ;(0,_views_nodes_ui__WEBPACK_IMPORTED_MODULE_9__.setMiniShipyardDesign)(ai.getMiniShipyard())
    }

    const setDefaultListeners = () => {
        ;(0,_controllers_listeners_forShips__WEBPACK_IMPORTED_MODULE_3__.setListenersForShips)(player.getShipyard().getAllShips());
        (0,_controllers_listeners_forLinks__WEBPACK_IMPORTED_MODULE_0__.setListenersForLinks)();
        (0,_controllers_listeners_forPlay__WEBPACK_IMPORTED_MODULE_1__.setListenersForPlayButton)();
        (0,_controllers_listeners_forPlay__WEBPACK_IMPORTED_MODULE_1__.setListenersForExitButton)();
        (0,_controllers_listeners_forPopups__WEBPACK_IMPORTED_MODULE_2__.setListenersforPopups)();
    }

    const setGamePlayListeners = () => {
        ;(0,_controllers_listeners_forPlay__WEBPACK_IMPORTED_MODULE_1__.setListenersForCells)();
    }

    const start = () => {
        setDefaultListeners();
        viewDefaulInterfaces();
        gameHandler.fillBoardsToRandomShips();
        //ai.getGameboard().hiddenShips();
    }

    const play = () => {
        gameHandler.setDefaultSettings();
        setGamePlayListeners();
        (0,_views_nodes_ui__WEBPACK_IMPORTED_MODULE_9__.hiddenInterfaceBeforeStartPlay)();
        playGameState();
        (0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_4__.removeHidden)(ai.getMiniShipyard().getNode())
        ;(0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_4__.removeHidden)(player.getMiniShipyard().getNode())
        gameHandler.playerMove();
        timeManipulators.setTimeOfTheMove();
    }

    const end = () => {
        ;(0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_4__.setHidden)(ai.getMiniShipyard().getNode())
        ;(0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_4__.setHidden)(player.getMiniShipyard().getNode())
        ai.getMiniShipyard().reset()
        player.getMiniShipyard().reset()
        timeManipulators.reset();
        (0,_views_nodes_ui__WEBPACK_IMPORTED_MODULE_9__.viewInterfaceAfterEndGame)();
        endGameState();
    }

    const playGameState = () => {
        document.querySelector('.x-axis').classList.add('correct')
        player.getGameboard().blockShips();
    }

    const endGameState = () => {
        document.querySelector('.x-axis').classList.remove('correct')
        ai.getGameboard().block();
        ai.getGameboard().reset();
        player.getGameboard().unblockShips();
        player.getGameboard().reset();
        gameHandler.fillBoardsToRandomShips();
        ai.getGameboard().hiddenShips();
        (0,_views_nodes_ui__WEBPACK_IMPORTED_MODULE_9__.setAiMoveDesign)(ai, player)
    }

    return { start, play, end, ai, player, gameHandler }
}

const GameHandler = (ai, player, timeManipulators) => {
    let move;
    let playerCells = [...player.getGameboard().getUnstructedContainer()];
    let aiCells = [...ai.getGameboard().getUnstructedContainer()];

    const setDefaultSettings = () => {
        move = 'player';
        playerCells = [...player.getGameboard().getUnstructedContainer()];
        aiCells = [...ai.getGameboard().getUnstructedContainer()];
    }

    const getActivePlayer = () => {
        return move === 'ai' ? ai : player;
    }

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
    }

    const isEndGame = () => {
        let isEnd = isPlayerLose(player) || isPlayerLose(ai);
        return isEnd;
    }

    const isPlayerLose = (player) => {
        let isLose = true;
        const ships = player.getShipyard().getAllShips();
        ships.forEach(ship => {
            if (ship.isLive()) {
                isLose = false;
            }
        })
        return isLose;
    }

    const playerMove = () => {
        ai.getGameboard().unblock();
        (0,_views_nodes_ui__WEBPACK_IMPORTED_MODULE_9__.setPlayerMoveDesign)(ai, player);
    }

    const checkCell = (cell) => {
        if (aiCells.includes(cell)) {
            const index = aiCells.indexOf(cell);
            ai.getGameboard().block();
            takeHit(aiCells.splice(index, 1)[0]);
            timeManipulators.setTimeBetweenMoves(500);
        }
    }

    const aiMove = () => {
        ai.getGameboard().block();
        (0,_views_nodes_ui__WEBPACK_IMPORTED_MODULE_9__.setAiMoveDesign)(ai, player);
        timeManipulators.setAiSpeedOfTought(playerCells);
    }

    const takeHit = (cell) => {
        const ship = cell.getOccupant();
        cell.setTheHit();
        if (ship === 'free') {
            (0,_views_nodes_hits__WEBPACK_IMPORTED_MODULE_5__.viewMissHit)(cell);
        } else {
            (0,_views_nodes_hits__WEBPACK_IMPORTED_MODULE_5__.viewAccurateHit)(cell);
            if (checkLiveShip(ship)) {
                hitAllDiags(cell);
            }
            move = move === 'ai' ? 'player' : 'ai';
        }
    }

    const checkLiveShip = (ship) => {
        if (!ship.isLive()) {
            _elements_audioEffects__WEBPACK_IMPORTED_MODULE_11__.killShipEffect.play();
            (0,_views_nodes_ui__WEBPACK_IMPORTED_MODULE_9__.setKilledShipDesign)(ship);
            let miniShip = getMiniShip(ship);
            miniShip.kill();
            hitAllAreaAroundShip(ship)
        }
        return ship.isLive();
    }

    const hitAllAreaAroundShip = (ship) => {
        const area = ship.getWaterAreas().getAreaAroundTheShip();
        area.forEach(cell => {
            if (!cell.isHit()) {
                (0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_4__.setLowOpacity)(cell.getCellNode());
            }
            (0,_views_nodes_hits__WEBPACK_IMPORTED_MODULE_5__.viewMissHit)(cell);
            removeCell(cell);
        });
    }

    const removeCell = (cell) => {
        let cells = move === 'ai' ? playerCells : aiCells;
        let index = cells.indexOf(cell);
        if (index > -1) {
            cells.splice(index, 1);
        }
    }

    const hitAllDiags = (hitCell) => {
        const handler = (0,_cellHandler__WEBPACK_IMPORTED_MODULE_10__.CellHandler)();
        const x = hitCell.getXY().x;
        const y = hitCell.getXY().y;
        const opponent = move === 'ai' ? player : ai;
        const parent = opponent.getGameboard().getStructedContainer();
        const cells = handler.getDiads(x, y, parent);
        cells.forEach(cell => {
            if (cell !== hitCell) {
                if (!cell.isHit()) {
                    (0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_4__.setLowOpacity)(cell.getCellNode());
                }
                (0,_views_nodes_hits__WEBPACK_IMPORTED_MODULE_5__.viewMissHit)(cell);
                removeCell(cell);
            }
        });
    }

    const getMiniShip = (ship) => {
        const type = ship.getType();
        const activePlayer = getActivePlayer();
        const ships = activePlayer.getMiniShipyard().getShipsOfType(type);
        for (let i = 0; i < ships.length; i++) {
            if (ships[i].isLive()) {
                return ships[i];
            }
        }
    }

    const fillBoardsToRandomShips = () => {
        ai.getGameboard().randomFillingOfShips();
        player.getGameboard().randomFillingOfShips();
    }

    const openPopup = () => {
        move === 'player' ? (0,_views_nodes_popups__WEBPACK_IMPORTED_MODULE_6__.viewLosePopup)() : (0,_views_nodes_popups__WEBPACK_IMPORTED_MODULE_6__.viewWinPopup)()
    }

    return { checkCell, playerMove, setDefaultSettings, switchMove, takeHit, isEndGame, fillBoardsToRandomShips };
}

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
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/helper */ "./src/helper/helper.js");
/* harmony import */ var _views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/animations/changeVisible */ "./src/views/animations/changeVisible.js");
/* harmony import */ var _views_nodes_ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/nodes/ship */ "./src/views/nodes/ship.js");
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cell */ "./src/models/cell.js");
/* harmony import */ var _gameConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gameConfig */ "./src/models/gameConfig.js");







const Gameboard = (name, player) => {
    const width = _gameConfig__WEBPACK_IMPORTED_MODULE_5__.Config.Gameboard.width;
    const height = _gameConfig__WEBPACK_IMPORTED_MODULE_5__.Config.Gameboard.height;
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
            (0,_views_nodes_ship__WEBPACK_IMPORTED_MODULE_3__.viewShipOnRandomCell)(ship, [...getUnstructedContainer()]);
        });
    };

    const blockShips = () => {
        node.querySelectorAll('.ship').forEach(ship => {
            ship.classList.add('block');
        });
    }

    const unblockShips = () => {
        node.querySelectorAll('.ship').forEach(ship => {
            ship.classList.remove('block');
        });
    }

    const hiddenShips = () => {
        const board = node.querySelector('.board');
        board.querySelectorAll('.ship').forEach(ship => {
            ship.style.border = '0px blue solid';
        });
        board.querySelectorAll('.deck').forEach(deck => {
            (0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_2__.setNullOpacity)(deck)
        });
    }

    const block = () => {
        node.querySelector('.board').classList.add('block');
    }

    const unblock = () => {
        node.querySelector('.board').classList.remove('block');
    }

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
        unblock
    };
};

const fillBoard = (width, height) => {
    let structed = [];
    let unstructed = [];

    for (let i = 0; i < height; i++) {
        let line = [];
        for (let j = 0; j < width; j++) {
            const cell = (0,_cell__WEBPACK_IMPORTED_MODULE_4__.MarineSector)(j, i);
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
    let miniShipyard = (0,_shipyard__WEBPACK_IMPORTED_MODULE_1__.Shipyard)(prototype, document.querySelector(miniShipyardId));

    const getGameboard = () => {
        return gameboard;
    };

    const getShipyard = () => {
        return shipyard;
    };

    const getMiniShipyard = () => {
        return miniShipyard;
    }

    return Object.assign(prototype, { getGameboard, getShipyard, getMiniShipyard });
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
    return { manualMode, activeShip, index, doubleIndex, currentElement, choisedCell };
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
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cell */ "./src/models/cell.js");
/* harmony import */ var _elements_templates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elements/templates */ "./src/models/elements/templates.js");
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
    }

    const getYourself = () => {
        return ship;
    }

    const fillContainer = () => {
        for (let i = 0; i < length; i++) {
            let deck = (0,_cell__WEBPACK_IMPORTED_MODULE_3__.Deck)(i);
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
    }

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
        container.classList.remove('horizontal');
        container.classList.add('vertical');
        container.style.height = `min(${length * 5}vh,${length * 5}vw)`;
        container.style.width = `min(5vh,5vw)`;
        horizontal = false;
    };

    const setHorizontal = () => {
        container.classList.remove('vertical');
        container.classList.add('horizontal');
        container.style.width = `min(${length * 5}vh,${length * 5}vw)`;
        container.style.height = `min(5vh,5vw)`;
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
        setHorizontal();
        resetBody();
        shipWaterAreas.clearAreas();
        shipWaterAreas = (0,_waterAreas__WEBPACK_IMPORTED_MODULE_5__.ShipWaterAreas)(player, ship);
    };

    const resetBody = () => {
        container.style.opacity = '1';
        container.style.border = 'min(0.3vh, 0.3vw) rgba(0, 0, 255, 1) solid';
        body.forEach(deck => {
            deck.reset();
        })
    }

    const getType = () => {
        return type;
    }

    const kill = () => {
        body.forEach(deck => {
            ;(0,_views_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__.setLowOpacity)(deck.getCellNode());
            deck.setTheHit();
        })
        container.style.opacity = '0.3';
        container.style.border = '0.5vh rgba(255, 0, 0, 1) solid';
        live = false;
    }

    const getWaterAreas = () => {
        return shipWaterAreas
    }

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
        getWaterAreas
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



const Shipyard = (player, node = document.querySelector('.shipyard')) => {
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
    }

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
        getNode
    };
};

const Dock = (count, shipBluePrint, player) => {
    const ships = [];

    const fillDock = (count, shipBluePrint) => {
        for (let i = 0; i < count; i++) {
            const ship = buildShip(shipBluePrint);
            ship.setYourself(ship);
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
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/helper */ "./src/helper/helper.js");
/* harmony import */ var _views_nodes_ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/nodes/ship */ "./src/views/nodes/ship.js");
/* harmony import */ var _elements_audioEffects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements/audioEffects */ "./src/models/elements/audioEffects.js");
/* harmony import */ var _elements_templates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elements/templates */ "./src/models/elements/templates.js");







const TimeManipulators = () => {
    let timeOfTheMove;
    let aiSpeedOfTought;
    let timeBetweenMoves;
    let alarm;
    let timer = (0,_elements_templates__WEBPACK_IMPORTED_MODULE_4__.Timer)();
    document.querySelector('.timer').appendChild(timer.getSvg());

    const setAiSpeedOfTought = (cells) => {
        aiSpeedOfTought = setTimeout(() => {
            ___WEBPACK_IMPORTED_MODULE_0__.game.gameHandler.takeHit((0,_views_nodes_ship__WEBPACK_IMPORTED_MODULE_2__.getRandomCell)(cells));
            setTimeBetweenMoves(1000);
        }, 1000);
    }

    const setTimeBetweenMoves = (timeout) => {
        timeBetweenMoves = setTimeout(() => {
            ___WEBPACK_IMPORTED_MODULE_0__.game.gameHandler.switchMove();
        }, timeout);
    }

    const setTimeOfTheMove = () => {
        timer.view();
        timeOfTheMove = setInterval(() => {
            ___WEBPACK_IMPORTED_MODULE_0__.game.gameHandler.switchMove();
        }, 15000);
        alarm = setTimeout(() => {
            _elements_audioEffects__WEBPACK_IMPORTED_MODULE_3__.timerEffect.play();
        }, 10000);
    }

    const reset = () => {
        timer.reset();
        clearTimeout(aiSpeedOfTought);
        clearTimeout(timeBetweenMoves);
        clearTimeout(alarm);
        clearInterval(timeOfTheMove);
    }

    return { setAiSpeedOfTought, setTimeBetweenMoves, setTimeOfTheMove, reset }
}

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
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session */ "./src/models/session.js");



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
            return e.animate([{ left: `${x0}` }, { left: `${x1}` }], { duration: dur, fill: fill });
        }

        const y = (e, y0, y1, dur, fill = 'none') => {
            return e.animate([{ top: `${y0}` }, { top: `${y1}` }], { duration: dur, fill: fill });
        }

        const rotate = (e, rotate1, rotate2, dur, fill = 'none') => {
            return e.animate([{ transform: `rotate(${rotate1}deg)` }, { transform: `rotate(${rotate2}deg)` }], { duration: dur, fill: fill });
        }

        return { x, y, rotate };
    })();

    const background = (e, color1, color2, dur, fill = 'none') => {
        return e.animate([{ background: color1 }, { background: color2 }], { duration: dur, fill: fill });
    }

    const opacity = (e, opacity1, opacity2, dur, fill = 'none') => {
        return e.animate([{ opacity: opacity1 }, { opacity: opacity2 }], { duration: dur, fill: fill });
    }

    const custom = (e, dur, fill = 'none', ...keyFrames) => {
        return e.animate(...keyFrames, { duration: dur, fill: fill });
    }

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
}

const setNormalOpacity = (node) => {
    node.classList.remove('low-opacity');
}

const removeNullOpacity = (node) => {
    node.classList.remove('null-opacity');
}

const setNullOpacity = (node) => {
    node.classList.add('null-opacity');
}

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
}


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
}

const drawTimer = (e, dur, fill, ...keyFrames) => {
    return _animations__WEBPACK_IMPORTED_MODULE_0__.Animations.custom(e, dur, fill, ...keyFrames);
}


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
    _models_elements_audioEffects__WEBPACK_IMPORTED_MODULE_0__.missEffect.play();
    cell.getCellNode().classList.add('miss-hit');
}

const viewAccurateHit = (cell) => {
    const deck = cell.getLinkedDeck();
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_2__.removeNullOpacity)(deck.getCellNode());
    deck.setTheHit();
    appendCrossSvg(deck);
    _models_elements_audioEffects__WEBPACK_IMPORTED_MODULE_0__.drawCross.play();
}

const appendCrossSvg = (deck) => {
    let cross = (0,_models_elements_templates__WEBPACK_IMPORTED_MODULE_1__.Cross)();
    cross.view();
    deck.getCellNode().appendChild(cross.getSvg());
}

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
/* harmony import */ var _models_elements_templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/elements/templates */ "./src/models/elements/templates.js");
/* harmony import */ var _animations_markers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animations/markers */ "./src/views/animations/markers.js");





const createCrossSVG = () => {
    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    let leftLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    let rightLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.appendChilds)(svg, leftLine, rightLine);
    (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.setAttributes)(leftLine, _models_elements_attributes__WEBPACK_IMPORTED_MODULE_1__.CrossAttributes.line.concat(_models_elements_attributes__WEBPACK_IMPORTED_MODULE_1__.CrossAttributes.leftDiag));
    (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__.setAttributes)(rightLine, _models_elements_attributes__WEBPACK_IMPORTED_MODULE_1__.CrossAttributes.line.concat(_models_elements_attributes__WEBPACK_IMPORTED_MODULE_1__.CrossAttributes.rightDiag));
    return svg;
}

const viewCross = (svg) => {
    const animations = [
        (0,_animations_markers__WEBPACK_IMPORTED_MODULE_3__.drawCross)(svg, 200, 'forwards', [{ strokeDashoffset: '5vh' }, { strokeDashoffset: '0vh' }])
    ]
    return animations;
}

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
}

const viewLosePopup = () => {
    const popup = document.querySelector('.popup-lose');
    popup.style.opacity = 1;
    popup.style.visibility = 'visible';
    _models_elements_audioEffects__WEBPACK_IMPORTED_MODULE_0__.lose.play();
}

const hiddenPopup = (popup) => {
    popup.style.opacity = 0;
    popup.style.visibility = 'hidden';
    _models_elements_audioEffects__WEBPACK_IMPORTED_MODULE_0__.win.pause();
    _models_elements_audioEffects__WEBPACK_IMPORTED_MODULE_0__.lose.pause();
}

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
/* harmony export */   viewShip: () => (/* binding */ viewShip),
/* harmony export */   viewShipOnRandomCell: () => (/* binding */ viewShipOnRandomCell)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./src/index.js");
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helper/helper */ "./src/helper/helper.js");
/* harmony import */ var _models_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/session */ "./src/models/session.js");
/* harmony import */ var _animations_changeVisible__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animations/changeVisible */ "./src/views/animations/changeVisible.js");





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
    if (_models_session__WEBPACK_IMPORTED_MODULE_2__.Session.manualMode) {
        if (___WEBPACK_IMPORTED_MODULE_0__.game.player.getShipyard().isEmpty()) {
            setTimeout(() => {
                closeManualMenu();
            }, 500);
        }
    }
};

const closeManualMenu = () => {
    const shipyard = document.querySelector('.shipyard');
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_3__.removeHidden)(___WEBPACK_IMPORTED_MODULE_0__.game.ai.getGameboard().getNode());
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_3__.setHidden)(shipyard);
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
}

const viewTimer = (svg) => {
    const animations = [
        (0,_animations_timer__WEBPACK_IMPORTED_MODULE_2__.colorsTimer)(svg.lastChild, 15000, 'none', [{ stroke: 'green' }, { stroke: 'orange' }, { stroke: 'red' }]),
        (0,_animations_timer__WEBPACK_IMPORTED_MODULE_2__.drawTimer)(svg.lastChild, 15000, 'none', [{ strokeDashoffset: '99vw' }, { strokeDashoffset: '0vw' }])
    ]
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
/* harmony export */   setKilledMiniShipDesign: () => (/* binding */ setKilledMiniShipDesign),
/* harmony export */   setKilledShipDesign: () => (/* binding */ setKilledShipDesign),
/* harmony export */   setMiniShipyardDesign: () => (/* binding */ setMiniShipyardDesign),
/* harmony export */   setPlayerMoveDesign: () => (/* binding */ setPlayerMoveDesign),
/* harmony export */   viewInterfaceAfterEndGame: () => (/* binding */ viewInterfaceAfterEndGame)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./src/index.js");
/* harmony import */ var _animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../animations/changeVisible */ "./src/views/animations/changeVisible.js");



const hiddenInterfaceBeforeStartPlay = () => {
    (0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__.setHidden)(document.querySelector('.play'))
    ;(0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__.setHidden)(document.querySelector('.footer'))
    ;(0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__.setHidden)(document.querySelector('.tips'))
    ;(0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__.removeHidden)(document.querySelector('.exit'))
}

const viewInterfaceAfterEndGame = () => {
    ;(0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__.removeHidden)(document.querySelector('.play'))
    ;(0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__.removeHidden)(document.querySelector('.footer'))
    ;(0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__.removeHidden)(document.querySelector('.tips'))
    ;(0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__.setHidden)(document.querySelector('.exit'))
}

const setPlayerMoveDesign = (ai, player) => {
    ;(0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__.setNormalOpacity)(ai.getGameboard().getNode().querySelector('.x-axis'))
    ;(0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__.setNormalOpacity)(ai.getGameboard().getNode().querySelector('.y-axis'))
    ;(0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__.setNormalOpacity)(ai.getGameboard().getNode().querySelector('.board'))
    ;(0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__.setLowOpacity)(player.getGameboard().getNode().querySelector('.x-axis'))
    ;(0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__.setLowOpacity)(player.getGameboard().getNode().querySelector('.y-axis'))
    ;(0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__.setLowOpacity)(player.getGameboard().getNode().querySelector('.board'))
}

const setAiMoveDesign = (ai, player) => {
    ;(0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__.setNormalOpacity)(player.getGameboard().getNode().querySelector('.x-axis'))
    ;(0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__.setNormalOpacity)(player.getGameboard().getNode().querySelector('.y-axis'))
    ;(0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__.setNormalOpacity)(player.getGameboard().getNode().querySelector('.board'))
    ;(0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__.setLowOpacity)(ai.getGameboard().getNode().querySelector('.x-axis'))
    ;(0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__.setLowOpacity)(ai.getGameboard().getNode().querySelector('.y-axis'))
    ;(0,_animations_changeVisible__WEBPACK_IMPORTED_MODULE_1__.setLowOpacity)(ai.getGameboard().getNode().querySelector('.board'))
}

const setMiniShipyardDesign = (shipyard) => {
    const decks = shipyard.getNode().querySelectorAll('.deck');
    const ships = shipyard.getNode().querySelectorAll('.ship');
    ships.forEach(ship => {
        ship.classList.add('mini-ship')
    })
    decks.forEach(deck => {
        deck.classList.add('mini-cell')
    })
}

const setKilledShipDesign = (ship) => {
    ship.getContainer().style.opacity = '0.3';
    ship.getContainer().style.border = '0.5vh rgba(255, 0, 0, 1) solid';
}

const setKilledMiniShipDesign = (ship) => {
    
}

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

/***/ "./src/views/audio/nextMove.mp3":
/*!**************************************!*\
  !*** ./src/views/audio/nextMove.mp3 ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f62433d71c95d6cc082a.mp3";

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

module.exports = __webpack_require__.p + "a2255edc88b45ff33e7a.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNnSDtBQUNqQjtBQUNPO0FBQ3RHLDRDQUE0Qyx1SUFBNEM7QUFDeEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDhGQUE4RixVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFdBQVcsTUFBTSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sbURBQW1ELGlCQUFpQixnQkFBZ0IsZ0JBQWdCLG1CQUFtQiw2QkFBNkIsa0NBQWtDLHFDQUFxQyxHQUFHLFdBQVcsK0JBQStCLHVCQUF1Qix3QkFBd0IsaUNBQWlDLEdBQUcsVUFBVSwwQkFBMEIsR0FBRyxjQUFjLG9CQUFvQiw4REFBOEQsc0JBQXNCLHVCQUF1Qiw2QkFBNkIsMEJBQTBCLEdBQUcsVUFBVSw2QkFBNkIsMEJBQTBCLDZCQUE2QixHQUFHLGFBQWEsb0JBQW9CLGlEQUFpRCw0QkFBNEIsa0JBQWtCLDBCQUEwQiw2QkFBNkIsR0FBRyxZQUFZLG9CQUFvQixzQkFBc0IsR0FBRyxXQUFXLG9CQUFvQixpREFBaUQsMEJBQTBCLDZCQUE2QixtQ0FBbUMsMEJBQTBCLEdBQUcsV0FBVyxvQkFBb0IsR0FBRyxXQUFXLG9CQUFvQixrQkFBa0IseUJBQXlCLDhCQUE4QiwwQkFBMEIsMEJBQTBCLEdBQUcsZUFBZSxvQkFBb0IsNEJBQTRCLGlEQUFpRCw2QkFBNkIsNkJBQTZCLDZCQUE2Qiw4QkFBOEIsaUNBQWlDLEdBQUcsV0FBVyxvQkFBb0IsZ0NBQWdDLDBCQUEwQixHQUFHLGVBQWUsK0JBQStCLEdBQUcsMEJBQTBCLG9CQUFvQixrREFBa0QsNkJBQTZCLHlCQUF5QiwwQkFBMEIsNkJBQTZCLEdBQUcsbUJBQW1CLG9CQUFvQix5QkFBeUIsMENBQTBDLEdBQUcsYUFBYSxvQkFBb0IseUJBQXlCLHNDQUFzQyw2REFBNkQsR0FBRyxjQUFjLG9DQUFvQyxHQUFHLG9CQUFvQixvQkFBb0IscURBQXFELGdGQUFnRixHQUFHLGFBQWEsb0JBQW9CLHdCQUF3QiwyREFBMkQsR0FBRyxZQUFZLHVCQUF1QiwyQkFBMkIsNkRBQTZELDJEQUEyRCwyREFBMkQsS0FBSyxXQUFXLHVCQUF1QixvQkFBb0IsMkJBQTJCLHlCQUF5Qiw2QkFBNkIsOEJBQThCLGtEQUFrRCxvREFBb0QsbUJBQW1CLEdBQUcsK0NBQStDLG9CQUFvQix5QkFBeUIsMEJBQTBCLDZCQUE2Qiw2QkFBNkIsR0FBRyx1QkFBdUIsa0NBQWtDLEdBQUcsMkJBQTJCLHNDQUFzQyxHQUFHLGtCQUFrQixtQkFBbUIsR0FBRyxZQUFZLDJCQUEyQixHQUFHLGFBQWEsb0JBQW9CLEdBQUcsYUFBYSxvQkFBb0IsOEJBQThCLGtDQUFrQyxHQUFHLFdBQVcsb0JBQW9CLDhCQUE4QiwrQkFBK0Isd0JBQXdCLGdDQUFnQyw2QkFBNkIsNEJBQTRCLEdBQUcsZUFBZSx1REFBdUQsaUNBQWlDLEdBQUcsZ0JBQWdCLDhEQUE4RCxHQUFHLFlBQVksdUJBQXVCLDRCQUE0Qiw0QkFBNEIsbUJBQW1CLEdBQUcsb0JBQW9CLG9CQUFvQiwyREFBMkQsR0FBRyxXQUFXLG9CQUFvQiw0QkFBNEIsOEJBQThCLDBCQUEwQix5QkFBeUIsd0JBQXdCLHVCQUF1Qix5REFBeUQsR0FBRyxpQkFBaUIsNENBQTRDLEdBQUcsZUFBZSx5Q0FBeUMsR0FBRyxXQUFXLG9CQUFvQiw2Q0FBNkMsbUJBQW1CLEdBQUcsZ0JBQWdCLHFDQUFxQyxvQ0FBb0MsR0FBRyxnQkFBZ0IsMkJBQTJCLDRCQUE0Qiw2Q0FBNkMsMkRBQTJELEdBQUcsYUFBYSxvQkFBb0IscURBQXFELGtCQUFrQiw4QkFBOEIseUJBQXlCLEdBQUcsaUNBQWlDLDBCQUEwQixvQkFBb0IscUNBQXFDLGtCQUFrQixzQkFBc0IsR0FBRyw2Q0FBNkMsK0JBQStCLGtEQUFrRCxHQUFHLFlBQVksb0JBQW9CLG1CQUFtQiw0QkFBNEIsMEJBQTBCLEdBQUcsZ0JBQWdCLG9CQUFvQixtQkFBbUIsR0FBRyxhQUFhLG9CQUFvQixHQUFHLG1CQUFtQixpQkFBaUIsR0FBRyw4QkFBOEIsc0JBQXNCLG9CQUFvQix3REFBd0Qsa0JBQWtCLG1CQUFtQiwyQ0FBMkMsYUFBYSxjQUFjLDRCQUE0QiwwQkFBMEIseUJBQXlCLGlCQUFpQiw2QkFBNkIsb0JBQW9CLEdBQUcsV0FBVyxvQkFBb0IsbUJBQW1CLGlDQUFpQyxHQUFHLGtCQUFrQixvQkFBb0IsaURBQWlELDBCQUEwQiw0QkFBNEIsb0JBQW9CLEdBQUcsb0JBQW9CLG9CQUFvQiwyQkFBMkIsbUJBQW1CLGdCQUFnQiwyQkFBMkIseUJBQXlCLDJCQUEyQixHQUFHLHVEQUF1RCxhQUFhLHNEQUFzRCxPQUFPLEdBQUcsK0NBQStDLGFBQWEseURBQXlELE9BQU8sR0FBRyxtQkFBbUI7QUFDaCtTO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDN1cxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUFxRztBQUNyRyxNQUEyRjtBQUMzRixNQUFrRztBQUNsRyxNQUFxSDtBQUNySCxNQUE4RztBQUM5RyxNQUE4RztBQUM5RyxNQUF3RztBQUN4RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHFGQUFPOzs7O0FBSWtEO0FBQzFFLE9BQU8saUVBQWUscUZBQU8sSUFBSSxxRkFBTyxVQUFVLHFGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiNkI7QUFDa0I7QUFDZ0M7QUFDckI7O0FBRW5EO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxvREFBTztBQUNmLFFBQVEsbUNBQUk7QUFDWixRQUFRLG1FQUFZLENBQUMsbUNBQUk7QUFDekIsUUFBUSwwRUFBUyxDQUFDLG1DQUFJO0FBQ3RCLFFBQVEsNkVBQVk7QUFDcEIsS0FBSzs7QUFFTDtBQUNBLFFBQVEsb0RBQU87QUFDZixRQUFRLDZFQUFZLENBQUMsbUNBQUk7QUFDekIsUUFBUSwwRUFBUztBQUNqQixRQUFRLG1DQUFJO0FBQ1osS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEI2QjtBQUNvQzs7QUFFMUQ7QUFDUDtBQUNBO0FBQ0EsUUFBUSxzRUFBVztBQUNuQixRQUFRLG1DQUFJO0FBQ1osS0FBSztBQUNMOztBQUVPO0FBQ1A7O0FBRUE7QUFDQSxRQUFRLHNFQUFXO0FBQ25CLFFBQVEsbUNBQUk7QUFDWixLQUFLO0FBQ0w7O0FBRU87QUFDUCxrQkFBa0IsbUNBQUk7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1DQUFJO0FBQ2hCLFNBQVM7QUFDVCxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7OztBQzdCdUQ7O0FBRWhEO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsWUFBWSxnRUFBVztBQUN2QixTQUFTO0FBQ1QsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUNkI7QUFDZ0M7QUFDWDtBQUNaOztBQUUvQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isb0RBQU87QUFDdkIsYUFBYTtBQUNiLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLGdCQUFnQixvREFBTztBQUN2QixnQkFBZ0Isb0RBQU87QUFDdkI7QUFDQSw2QkFBNkIsMkRBQVE7O0FBRXJDO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQSxnQkFBZ0IsNkRBQVk7QUFDNUI7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxZQUFZLG9EQUFPO0FBQ25CLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFlBQVksa0RBQVc7QUFDdkIsWUFBWSw2REFBWTtBQUN4QixTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBLFFBQVEsb0RBQU87QUFDZixLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DOEM7QUFDRjtBQUNHOztBQUV4QztBQUNQO0FBQ0E7QUFDQSxlQUFlLG9EQUFPO0FBQ3RCLFFBQVEsb0RBQU87QUFDZixxQkFBcUIsb0RBQU87QUFDNUIseUJBQXlCLG9EQUFPO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixJQUFJLHNEQUFNLG1CQUFtQjtBQUNyRCw0QkFBNEIsSUFBSSxzREFBTSxrQkFBa0I7QUFDeEQ7QUFDQSxvQkFBb0Isb0RBQU87QUFDM0I7QUFDQTtBQUNBLGlEQUFpRCxvREFBTztBQUN4RDtBQUNBLDBDQUEwQyxvREFBTztBQUNqRDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sd0JBQXdCLGlCQUFpQjtBQUN6QywwQ0FBMEMsb0RBQU87QUFDakQsZ0JBQWdCLG9EQUFPLGVBQWUsb0RBQU87QUFDN0M7QUFDQTtBQUNBLFlBQVksb0RBQU87QUFDbkIsdUJBQXVCLG9EQUFPO0FBQzlCLDRCQUE0QixJQUFJLHNEQUFNLG1CQUFtQjtBQUN6RCxnQ0FBZ0MsSUFBSSxzREFBTSxrQkFBa0I7QUFDNUQ7QUFDQSx3QkFBd0Isb0RBQU87QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsb0RBQU87QUFDckQ7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxvREFBTztBQUNsQixZQUFZO0FBQ1osWUFBWTtBQUNaOztBQUVBO0FBQ0EsV0FBVywyREFBUTtBQUNuQixRQUFRLG9EQUFPO0FBQ2YsUUFBUSxvREFBTztBQUNmO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QmlDO0FBQ1M7QUFDVTtBQUNvQjtBQUNsQjtBQUNrQjtBQUNuQzs7QUFFOUIsYUFBYSxrREFBSTtBQUN4Qjs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCK0M7QUFDcUI7QUFDcEI7O0FBRTFDO0FBQ1A7QUFDQTtBQUNBLGVBQWUsNkRBQU87QUFDdEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0REFBWTtBQUNwQixRQUFRLGlGQUFnQjtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBc0MsV0FBVztBQUNqRDs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXNDLG9DQUFvQztBQUMxRTs7Ozs7Ozs7Ozs7Ozs7O0FDckdPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRk87QUFDUDtBQUNBLFVBQVUsNEJBQTRCO0FBQ3RDLFVBQVUsb0NBQW9DO0FBQzlDLFVBQVUsc0NBQXNDO0FBQ2hELFVBQVUsc0NBQXNDO0FBQ2hELFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVSx3QkFBd0I7QUFDbEMsVUFBVSx3QkFBd0I7QUFDbEMsVUFBVSx3QkFBd0I7QUFDbEMsVUFBVSx3QkFBd0I7QUFDbEM7QUFDQTtBQUNBLFVBQVUsd0JBQXdCO0FBQ2xDLFVBQVUsd0JBQXdCO0FBQ2xDLFVBQVUsd0JBQXdCO0FBQ2xDLFVBQVUsd0JBQXdCO0FBQ2xDO0FBQ0EsYUFBYTtBQUNiLENBQUM7O0FBRU07QUFDUDtBQUNBLFVBQVUsNEJBQTRCO0FBQ3RDLFVBQVUsa0NBQWtDO0FBQzVDLFVBQVUsc0NBQXNDO0FBQ2hELFVBQVUsd0NBQXdDO0FBQ2xELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUsd0JBQXdCO0FBQ2xDLFVBQVUsd0JBQXdCO0FBQ2xDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsd0JBQXdCO0FBQ2xDO0FBQ0EsYUFBYTtBQUNiLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENvRDtBQUNDO0FBQ0w7QUFDQztBQUNFO0FBQ0o7QUFDQztBQUNFOztBQUU1QztBQUNQLDBCQUEwQixtREFBVTtBQUNwQztBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVNO0FBQ1AsMEJBQTBCLHNEQUFRO0FBQ2xDO0FBQ0E7QUFDQSxDQUFDOztBQUVNO0FBQ1AsMEJBQTBCLGtEQUFPO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRU07QUFDUCwwQkFBMEIsa0RBQVE7QUFDbEM7QUFDQTtBQUNBLENBQUM7O0FBRU07QUFDUCwwQkFBMEIsdURBQUs7QUFDL0I7QUFDQTtBQUNBLENBQUM7O0FBRU07QUFDUCwwQkFBMEIsbURBQUs7QUFDL0I7QUFDQTtBQUNBLENBQUM7O0FBRU07QUFDUCwwQkFBMEIsaURBQVE7QUFDbEM7QUFDQTtBQUNBLENBQUM7O0FBRU07QUFDUCwwQkFBMEIsa0RBQVM7QUFDbkM7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUZpRTtBQUNGOztBQUU3RDtBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiOztBQUVPO0FBQ1AsK0JBQStCLG9FQUFjOztBQUU3QztBQUNBLGdDQUFnQywrREFBUztBQUN6Qzs7QUFFQSxzQ0FBc0MsTUFBTTtBQUM1Qzs7QUFFTztBQUNQLCtCQUErQixrRUFBYzs7QUFFN0M7QUFDQSxnQ0FBZ0MsNkRBQVM7QUFDekM7O0FBRUEsc0NBQXNDLE1BQU07QUFDNUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEN5RTtBQUNxRDtBQUNuRDtBQUNGO0FBQ3FDO0FBQzNDO0FBQ0M7QUFDZjtBQUNFO0FBQ3lIO0FBQ3BJO0FBQ29EO0FBQ25EO0FBQ1Y7QUFDbUI7O0FBRS9DO0FBQ1AsaUJBQWlCLGlEQUFPO0FBQ3hCLGFBQWEsaURBQU87QUFDcEIsNkJBQTZCLG9FQUFnQjtBQUM3Qzs7QUFFQTtBQUNBLFFBQVEsaUVBQVc7QUFDbkIsUUFBUSxpRUFBVztBQUNuQixRQUFRLG1FQUFZO0FBQ3BCLFFBQVEsbUVBQVk7QUFDcEIsUUFBUSxtRUFBWTtBQUNwQixRQUFRLHNFQUFxQjtBQUM3QixRQUFRLHVFQUFxQjtBQUM3Qjs7QUFFQTtBQUNBLFFBQVEsc0ZBQW9CO0FBQzVCLFFBQVEscUZBQW9CO0FBQzVCLFFBQVEseUZBQXlCO0FBQ2pDLFFBQVEseUZBQXlCO0FBQ2pDLFFBQVEsdUZBQXFCO0FBQzdCOztBQUVBO0FBQ0EsUUFBUSxxRkFBb0I7QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0VBQThCO0FBQ3RDO0FBQ0EsUUFBUSw2RUFBWTtBQUNwQixRQUFRLDhFQUFZO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsMkVBQVM7QUFDakIsUUFBUSwyRUFBUztBQUNqQjtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBFQUF5QjtBQUNqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdFQUFlO0FBQ3ZCOztBQUVBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLG9FQUFtQjtBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLGdFQUFlO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDhEQUFXO0FBQ3ZCLFVBQVU7QUFDVixZQUFZLGtFQUFlO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxtRUFBYztBQUMxQixZQUFZLG9FQUFtQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsOEVBQWE7QUFDN0I7QUFDQSxZQUFZLDhEQUFXO0FBQ3ZCO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLDBEQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsOEVBQWE7QUFDakM7QUFDQSxnQkFBZ0IsOERBQVc7QUFDM0I7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixrQkFBa0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixrRUFBYSxLQUFLLGlFQUFZO0FBQzFEOztBQUVBLGFBQWE7QUFDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoUDZCO0FBQzRCO0FBQ29DO0FBQ3hCO0FBQy9CO0FBQ0E7O0FBRS9CO0FBQ1Asa0JBQWtCLCtDQUFNO0FBQ3hCLG1CQUFtQiwrQ0FBTTtBQUN6QjtBQUNBLDRDQUE0QyxLQUFLOztBQUVqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLHVFQUFvQjtBQUNoQyxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFlBQVksK0VBQWM7QUFDMUIsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBLHdCQUF3QixXQUFXO0FBQ25DLHlCQUF5QixtREFBWTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiOzs7Ozs7Ozs7Ozs7Ozs7QUN2SE87QUFDUDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixTQUFTOztBQUVULGlCQUFpQjtBQUNqQixLQUFLOztBQUVMLGFBQWE7QUFDYixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCdUM7QUFDRjs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjs7QUFFTztBQUNQOztBQUVBLG9CQUFvQixxREFBUztBQUM3QixtQkFBbUIsbURBQVE7QUFDM0IsdUJBQXVCLG1EQUFROztBQUUvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBc0MsNENBQTRDO0FBQ2xGOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLENBQUM7O0FBRU07QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZnVFO0FBQ0w7QUFDakI7QUFDbkI7QUFDZTtBQUNDOztBQUV2QztBQUNQLHNCQUFzQiw2REFBTztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDJEQUFjOztBQUV2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLFlBQVk7QUFDcEMsdUJBQXVCLDJDQUFJO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsWUFBWTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsMkRBQWM7QUFDbEM7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFlBQVk7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXLEtBQUssV0FBVztBQUNuRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFdBQVcsS0FBSyxXQUFXO0FBQ2xFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEscUVBQXFCO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDJEQUFjO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLCtFQUFhO0FBQ3pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pPc0M7QUFDa0I7O0FBRWpEO0FBQ1AseUJBQXlCLCtDQUFNO0FBQy9CLDBCQUEwQiwrQ0FBTTtBQUNoQywwQkFBMEIsK0NBQU07QUFDaEMsdUJBQXVCLCtDQUFNO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsV0FBVztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw2Q0FBTTtBQUM3QjtBQUNBLHVCQUF1Qiw4Q0FBTztBQUM5QjtBQUNBLHVCQUF1Qiw4Q0FBTztBQUM5QjtBQUNBLHVCQUF1QiwyQ0FBSTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25IMEI7QUFDc0I7QUFDSTtBQUNFO0FBQ1Q7OztBQUd0QztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDBEQUFLO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQSxZQUFZLG1DQUFJLHFCQUFxQixnRUFBYTtBQUNsRDtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxtQ0FBSTtBQUNoQixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtQ0FBSTtBQUNoQixTQUFTO0FBQ1Q7QUFDQSxZQUFZLCtEQUFXO0FBQ3ZCLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQzRDO0FBQ1I7O0FBRTdCO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLHlEQUFXO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzRU87QUFDUDtBQUNBO0FBQ0EsZ0NBQWdDLFNBQVMsR0FBRyxHQUFHLElBQUksU0FBUyxHQUFHLEdBQUcsS0FBSywyQkFBMkI7QUFDbEc7O0FBRUE7QUFDQSxnQ0FBZ0MsUUFBUSxHQUFHLEdBQUcsSUFBSSxRQUFRLEdBQUcsR0FBRyxLQUFLLDJCQUEyQjtBQUNoRzs7QUFFQTtBQUNBLGdDQUFnQyxxQkFBcUIsUUFBUSxPQUFPLElBQUkscUJBQXFCLFFBQVEsT0FBTyxLQUFLLDJCQUEyQjtBQUM1STs7QUFFQSxpQkFBaUI7QUFDakIsS0FBSzs7QUFFTDtBQUNBLDRCQUE0QixvQkFBb0IsSUFBSSxvQkFBb0IsS0FBSywyQkFBMkI7QUFDeEc7O0FBRUE7QUFDQSw0QkFBNEIsbUJBQW1CLElBQUksbUJBQW1CLEtBQUssMkJBQTJCO0FBQ3RHOztBQUVBO0FBQ0EseUNBQXlDLDJCQUEyQjtBQUNwRTs7QUFFQSxhQUFhO0FBQ2IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Qk07QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RCMEM7O0FBRW5DO0FBQ1AsSUFBSSxtREFBVTtBQUNkO0FBQ0EsZUFBZSxtREFBVTtBQUN6QixLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUDBDOztBQUVuQztBQUNQLFdBQVcsbURBQVU7QUFDckI7O0FBRU87QUFDUCxXQUFXLG1EQUFVO0FBQ3JCOzs7Ozs7Ozs7Ozs7Ozs7QUNSTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmlEO0FBQ0g7O0FBRXZDO0FBQ1AsSUFBSSxzREFBTTtBQUNWO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsNENBQTRDLEtBQUs7QUFDakQ7O0FBRUE7QUFDQSxRQUFRLDJEQUFZO0FBQ3BCLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQm1EO0FBQ2Y7O0FBRXBDLGlCQUFpQix3REFBUzs7QUFFbkI7QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDLHFCQUFxQixpREFBTztBQUM1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsaUJBQWlCO0FBQ3JDLHFCQUFxQixpREFBTztBQUM1QjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDUmlEOztBQUUxQztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQU07QUFDZDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFNO0FBQ2Q7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CMEU7QUFDbkI7QUFDUTs7QUFFekQ7QUFDUCxJQUFJLHFFQUFVO0FBQ2Q7QUFDQTs7QUFFTztBQUNQO0FBQ0EsSUFBSSw0RUFBaUI7QUFDckI7QUFDQTtBQUNBLElBQUksb0VBQVM7QUFDYjs7QUFFTztBQUNQLGdCQUFnQixpRUFBSztBQUNyQjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQmtFO0FBQ0M7QUFDWDtBQUNOOztBQUUzQztBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQVk7QUFDaEIsSUFBSSw2REFBYSxXQUFXLHdFQUFlLGFBQWEsd0VBQWU7QUFDdkUsSUFBSSw2REFBYSxZQUFZLHdFQUFlLGFBQWEsd0VBQWU7QUFDeEU7QUFDQTs7QUFFTztBQUNQO0FBQ0EsUUFBUSw4REFBUywwQkFBMEIseUJBQXlCLElBQUkseUJBQXlCO0FBQ2pHO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQitEOztBQUV4RDtBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUksOERBQUc7QUFDUDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUksK0RBQUk7QUFDUjs7QUFFTztBQUNQO0FBQ0E7QUFDQSxJQUFJLDhEQUFHO0FBQ1AsSUFBSSwrREFBSTtBQUNSOzs7Ozs7Ozs7Ozs7Ozs7O0FDckJrQztBQUNNOztBQUVqQztBQUNQLElBQUkscURBQVM7QUFDYixJQUFJLCtDQUFRO0FBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ042QjtBQUMrQjtBQUNiO0FBQ3VCOztBQUUvRDtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLG9EQUFPO0FBQ2YsWUFBWSxtQ0FBSTtBQUNoQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSx1RUFBWSxDQUFDLG1DQUFJO0FBQ3JCLElBQUksb0VBQVM7QUFDYjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1AsZ0JBQWdCLHFFQUFxQjtBQUNyQztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDNkI7QUFDb0I7QUFDVzs7QUFFckQ7QUFDUDtBQUNBLElBQUksd0VBQW9CO0FBQ3hCOztBQUVBO0FBQ0EsSUFBSSxzREFBTTtBQUNWO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0Esc0RBQXNELEtBQUs7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJrRTtBQUNBO0FBQ0w7O0FBRXREO0FBQ1A7QUFDQTtBQUNBLElBQUksNkRBQWEsT0FBTyx1RUFBYztBQUN0QyxJQUFJLDREQUFZO0FBQ2hCO0FBQ0E7O0FBRU87QUFDUDtBQUNBLFFBQVEsOERBQVcsa0NBQWtDLGlCQUFpQixJQUFJLGtCQUFrQixJQUFJLGVBQWU7QUFDL0csUUFBUSw0REFBUyxrQ0FBa0MsMEJBQTBCLElBQUkseUJBQXlCO0FBQzFHO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCNkI7QUFDMEU7O0FBRWhHO0FBQ1AsSUFBSSxvRUFBUztBQUNiLElBQUkscUVBQVM7QUFDYixJQUFJLHFFQUFTO0FBQ2IsSUFBSSx3RUFBWTtBQUNoQjs7QUFFTztBQUNQLElBQUksd0VBQVk7QUFDaEIsSUFBSSx3RUFBWTtBQUNoQixJQUFJLHdFQUFZO0FBQ2hCLElBQUkscUVBQVM7QUFDYjs7QUFFTztBQUNQLElBQUksNEVBQWdCO0FBQ3BCLElBQUksNEVBQWdCO0FBQ3BCLElBQUksNEVBQWdCO0FBQ3BCLElBQUkseUVBQWE7QUFDakIsSUFBSSx5RUFBYTtBQUNqQixJQUFJLHlFQUFhO0FBQ2pCOztBQUVPO0FBQ1AsSUFBSSw0RUFBZ0I7QUFDcEIsSUFBSSw0RUFBZ0I7QUFDcEIsSUFBSSw0RUFBZ0I7QUFDcEIsSUFBSSx5RUFBYTtBQUNqQixJQUFJLHlFQUFhO0FBQ2pCLElBQUkseUVBQWE7QUFDakI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3Mvc3R5bGVzL21haW4uY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL3N0eWxlcy9tYWluLmNzcz84OWY2Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yTGlua3MuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yUGxheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9mb3JQb3B1cHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yU2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb250cm9sbGVycy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaGVscGVyL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL2FscGhhYmV0cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9jZWxsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL2NlbGxIYW5kbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL2VsZW1lbnRzL2F0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvZWxlbWVudHMvYXVkaW9FZmZlY3RzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL2VsZW1lbnRzL3RlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9nYW1lQ29uZmlnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9zZXNzaW9uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvc2hpcHlhcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvdGltZU1hbmlwdWxhdG9ycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy93YXRlckFyZWFzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3MvYW5pbWF0aW9ucy9hbmltYXRpb25zLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3MvYW5pbWF0aW9ucy9jaGFuZ2VWaXNpYmxlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3MvYW5pbWF0aW9ucy9tYXJrZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3MvYW5pbWF0aW9ucy90aW1lci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL2RyYWdBbmREcm9wL3NldERyYWdnYWJsZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL2RyYWdBbmREcm9wL3NoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3Mvbm9kZXMvYXhpcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL25vZGVzL2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9ub2Rlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9ub2Rlcy9oaXRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3Mvbm9kZXMvbWFya2Vycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL25vZGVzL3BvcHVwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL25vZGVzL3Byb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9ub2Rlcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3Mvbm9kZXMvc2hpcHlhcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9ub2Rlcy90aW1lci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL25vZGVzL3VpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL3ZpZXdzL2ltYWdlcy9kb3Quc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG46cm9vdCB7XG4gICAgZm9udC1zaXplOiBtaW4oMnZoLCAydncpO1xuICAgIC0tYm9hcmQtd2lkdGg6IDA7XG4gICAgLS1ib2FyZC1oZWlnaHQ6IDA7XG4gICAgLS1jZWxsLXNpemU6IG1pbig1dmgsIDV2dyk7XG59XG5cbmh0bWwge1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG59XG5cbi53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgcm93LWdhcDogbWluKDJ2aCwgMnZ3KTtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xufVxuXG5zcGFuIHtcbiAgICBwYWRkaW5nOiBtaW4oMXZoLCAxdncpO1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcbn1cblxuLmhlYWRlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgbWluLWNvbnRlbnQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgcGFkZGluZzogbWluKDJ2aCwgMnZ3KTtcbn1cblxuLnRpdGxlIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuLnRpcHMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjIpO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogbWluKDF2aCwgMXZ3KTtcbiAgICBib3JkZXItcmFkaXVzOiBtaW4oMnZoLCAydncpO1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG59XG5cbi5leGl0IHtcbiAgICBkaXNwbGF5OiBncmlkO1xufVxuXG4ubWFpbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xufVxuXG4uc2hpcHlhcmQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIG1pbi1jb250ZW50KTtcbiAgICByb3ctZ2FwOiBtaW4oNnZoLCA2dncpO1xuICAgIHBhZGRpbmc6IG1pbigydmgsIDJ2dyk7XG4gICAgd2lkdGg6IG1pbig0MHZoLCA0MHZ3KTtcbiAgICBoZWlnaHQ6IG1pbig0MHZoLCA0MHZ3KTtcbiAgICBtYXgtd2lkdGg6IG1pbig1MHZoLCA1MHZ3KTtcbn1cblxuLmRvY2sge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sdW1uLWdhcDogbWluKDR2aCwgNHZ3KTtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xufVxuXG4uc2VsZWN0ZWQge1xuICAgIG9wYWNpdHk6IDAuMDEgIWltcG9ydGFudDtcbn1cblxuLmJvYXJkX19heGlzLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcbiAgICByb3ctZ2FwOiBtaW4oMnZoLCAydncpO1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICAgIHBhZGRpbmc6IG1pbig1dmgsIDV2dyk7XG59XG5cbi5heGlzLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xufVxuXG4ueC1heGlzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICBwYWRkaW5nLWxlZnQ6IG1pbig1LjV2aCwgNS41dncpO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KHZhcigtLWJvYXJkLXdpZHRoKSwgMmZyKTtcbn1cblxuLmNvcnJlY3Qge1xuICAgIHBhZGRpbmctbGVmdDogbWluKDMydmgsIDMydncpO1xufVxuXG4uYm9hcmQtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdwbGF5ZXItbWluaS1zaGlweWFyZCBheGlzLXkgYm9hcmQgYWktbWluaS1zaGlweWFyZCc7XG59XG5cbi55LWF4aXMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hcmVhOiBheGlzLXk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQodmFyKC0tYm9hcmQtaGVpZ2h0KSwgMmZyKTtcbn1cblxuLmJvYXJkIHtcbiAgICBncmlkLWFyZWE6IGJvYXJkO1xuICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KHZhcigtLWJvYXJkLXdpZHRoKSwgMmZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCh2YXIoLS1ib2FyZC1oZWlnaHQpLCAyZnIpO1xuICAgIGJvcmRlcjogbWluKDAuNXZoLCAwLjV2dykgcmdiYSgwLCAwLCAyNTUsIDAuMikgc29saWQ7XG5cbn1cblxuLnBsYXkge1xuICAgIGdyaWQtYXJlYTogYm9hcmQ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgd2lkdGg6IG1pbigxMHZoLCAxMHZ3KTtcbiAgICBoZWlnaHQ6IG1pbigxMHZoLCAxMHZ3KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExOSwgMjAyLCA0MSwgMC43MjYpO1xuICAgIGJvcmRlcjogbWluKDF2aCwgMXZ3KSByZ2IoMTE5LCAyMDIsIDQxKSBzb2xpZDtcbiAgICB6LWluZGV4OiA5OTg7XG59XG5cbi5haS1taW5pLXNoaXB5YXJkLFxuLnBsYXllci1taW5pLXNoaXB5YXJkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICAgIHJvdy1nYXA6IG1pbigydmgsIDJ2dyk7XG4gICAgcGFkZGluZzogbWluKDN2aCwgM3Z3KTtcbn1cblxuLmFpLW1pbmktc2hpcHlhcmQge1xuICAgIGdyaWQtYXJlYTogYWktbWluaS1zaGlweWFyZDtcbn1cblxuLnBsYXllci1taW5pLXNoaXB5YXJkIHtcbiAgICBncmlkLWFyZWE6IHBsYXllci1taW5pLXNoaXB5YXJkO1xufVxuXG4ubG93LW9wYWNpdHkge1xuICAgIG9wYWNpdHk6IDAuNDtcbn1cblxuLmJsb2NrIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLm1hcmtlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IG1pbig1dmgsIDV2dyk7XG59XG5cbi5jZWxsIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiB2YXIoLS1jZWxsLXNpemUpO1xuICAgIGhlaWdodDogdmFyKC0tY2VsbC1zaXplKTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ubWlzcy1oaXQge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuLmRlc3Ryb3llZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsIDE5MCwgMTkwLCAwLjQ3MykgIWltcG9ydGFudDtcbn1cblxuLmxpdmUge31cblxuLngtY2VsbCxcbi55LWNlbGwge1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgb3BhY2l0eTogMC41O1xufVxuXG4ubWFyaW5lLXNlY3RvciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBib3JkZXI6IG1pbigwLjF2aCwgMC4xdncpIHJnYmEoMCwgMCwgMjU1LCAwLjIpIHNvbGlkO1xufVxuXG4uc2hpcCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IC0xcHg7XG4gICAgbWFyZ2luLXRvcDogLTFweDtcbiAgICBib3JkZXI6IG1pbigwLjN2aCwgMC4zdncpIHJnYmEoMCwgMCwgMjU1LCAxKSBzb2xpZDtcbn1cblxuLmhvcml6b250YWwge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDJmcik7XG59XG5cbi52ZXJ0aWNhbCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMmZyKTtcbn1cblxuLmRlY2sge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuMSk7XG4gICAgei1pbmRleDogOTk5O1xufVxuXG4ubWluaS1zaGlwIHtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IG1pbi1jb250ZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5taW5pLWNlbGwge1xuICAgIHdpZHRoOiBtaW4oMnZoLCAydncpO1xuICAgIGhlaWdodDogbWluKDJ2aCwgMnZ3KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMCwgMC4xKTtcbiAgICBib3JkZXI6IG1pbigwLjN2aCwgMC4zdncpIHJnYmEoMCwgMjU1LCAyNTUsIDEpIHNvbGlkO1xufVxuXG4uZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiBtaW4oNHZoLCA0dncpO1xufVxuXG4ucmFuZG9tLW1vZGUsXG4ubWFudWFsLW1vZGUge1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIGJsdWU7XG4gICAgY29sb3I6IGJsdWU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucmFuZG9tLW1vZGU6aG92ZXIsXG4ubWFudWFsLW1vZGU6aG92ZXIge1xuICAgIGNvbG9yOiByZ2IoMTIyLCAyMzEsIDcyKTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHJnYigxMjIsIDIzMSwgNzIpO1xufVxuXG4udGltZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogbWluKDJ2aCwgMnZ3KTtcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xufVxuXG4udGltZXI+c3ZnIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiAxMDB2dztcbn1cblxuLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLm51bGwtb3BhY2l0eSB7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLnBvcHVwLXdpbixcbi5wb3B1cC1sb3NlIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWluLWNvbnRlbnQpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcGFkZGluZzogbWluKDF2aCwgMXZ3KTtcbiAgICB6LWluZGV4OiAxMDAwO1xufVxuXG4udGV4dCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiBtaW4oMTB2aCwgMTB2dyk7XG59XG5cbi53aW4sXG4ubG9zZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBtaW4tY29udGVudCk7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgei1pbmRleDogMjAwMDtcbn1cblxuLmdpZi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMHZoO1xuICAgIGhlaWdodDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNTZ2aDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtYXNwZWN0LXJhdGlvOiAxLzEuMDAwMDAwMSkge1xuICAgIC5tYWluIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4tYXNwZWN0LXJhdGlvOiAyLzEpIHtcbiAgICAubWFpbiB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3ZpZXdzL3N0eWxlcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0lBR0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxTQUFTO0lBQ1QsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVEQUF1RDtJQUN2RCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLG1CQUFt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SUFDeEIsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBOztJQUVJLGVBQWU7SUFDZixhQUFhO0lBQ2IsaURBQWlEO0lBQ2pELFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLE1BQU07SUFDTixPQUFPO0lBQ1AscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWiwwQkFBMEI7QUFDOUI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLDBDQUEwQztJQUMxQyxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixTQUFTO0lBQ1Qsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSTtRQUNJLDJDQUEyQztJQUMvQztBQUNKOztBQUVBO0lBQ0k7UUFDSSw4Q0FBOEM7SUFDbEQ7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIGZvbnQtc2l6ZTogbWluKDJ2aCwgMnZ3KTtcXG4gICAgLS1ib2FyZC13aWR0aDogMDtcXG4gICAgLS1ib2FyZC1oZWlnaHQ6IDA7XFxuICAgIC0tY2VsbC1zaXplOiBtaW4oNXZoLCA1dncpO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxuICAgIHJvdy1nYXA6IG1pbigydmgsIDJ2dyk7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxufVxcblxcbnNwYW4ge1xcbiAgICBwYWRkaW5nOiBtaW4oMXZoLCAxdncpO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIG1pbi1jb250ZW50O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBwYWRkaW5nOiBtaW4oMnZoLCAydncpO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi50aXBzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjIpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiBtaW4oMXZoLCAxdncpO1xcbiAgICBib3JkZXItcmFkaXVzOiBtaW4oMnZoLCAydncpO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4uZXhpdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5tYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogaW5oZXJpdDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxufVxcblxcbi5zaGlweWFyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgbWluLWNvbnRlbnQpO1xcbiAgICByb3ctZ2FwOiBtaW4oNnZoLCA2dncpO1xcbiAgICBwYWRkaW5nOiBtaW4oMnZoLCAydncpO1xcbiAgICB3aWR0aDogbWluKDQwdmgsIDQwdncpO1xcbiAgICBoZWlnaHQ6IG1pbig0MHZoLCA0MHZ3KTtcXG4gICAgbWF4LXdpZHRoOiBtaW4oNTB2aCwgNTB2dyk7XFxufVxcblxcbi5kb2NrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sdW1uLWdhcDogbWluKDR2aCwgNHZ3KTtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gICAgb3BhY2l0eTogMC4wMSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYm9hcmRfX2F4aXMtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XFxuICAgIHJvdy1nYXA6IG1pbigydmgsIDJ2dyk7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgcGFkZGluZzogbWluKDV2aCwgNXZ3KTtcXG59XFxuXFxuLmF4aXMtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxufVxcblxcbi54LWF4aXMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIHBhZGRpbmctbGVmdDogbWluKDUuNXZoLCA1LjV2dyk7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KHZhcigtLWJvYXJkLXdpZHRoKSwgMmZyKTtcXG59XFxuXFxuLmNvcnJlY3Qge1xcbiAgICBwYWRkaW5nLWxlZnQ6IG1pbigzMnZoLCAzMnZ3KTtcXG59XFxuXFxuLmJvYXJkLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAncGxheWVyLW1pbmktc2hpcHlhcmQgYXhpcy15IGJvYXJkIGFpLW1pbmktc2hpcHlhcmQnO1xcbn1cXG5cXG4ueS1heGlzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hcmVhOiBheGlzLXk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KHZhcigtLWJvYXJkLWhlaWdodCksIDJmcik7XFxufVxcblxcbi5ib2FyZCB7XFxuICAgIGdyaWQtYXJlYTogYm9hcmQ7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS1ib2FyZC13aWR0aCksIDJmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KHZhcigtLWJvYXJkLWhlaWdodCksIDJmcik7XFxuICAgIGJvcmRlcjogbWluKDAuNXZoLCAwLjV2dykgcmdiYSgwLCAwLCAyNTUsIDAuMikgc29saWQ7XFxuXFxufVxcblxcbi5wbGF5IHtcXG4gICAgZ3JpZC1hcmVhOiBib2FyZDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IG1pbigxMHZoLCAxMHZ3KTtcXG4gICAgaGVpZ2h0OiBtaW4oMTB2aCwgMTB2dyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTE5LCAyMDIsIDQxLCAwLjcyNik7XFxuICAgIGJvcmRlcjogbWluKDF2aCwgMXZ3KSByZ2IoMTE5LCAyMDIsIDQxKSBzb2xpZDtcXG4gICAgei1pbmRleDogOTk4O1xcbn1cXG5cXG4uYWktbWluaS1zaGlweWFyZCxcXG4ucGxheWVyLW1pbmktc2hpcHlhcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIHJvdy1nYXA6IG1pbigydmgsIDJ2dyk7XFxuICAgIHBhZGRpbmc6IG1pbigzdmgsIDN2dyk7XFxufVxcblxcbi5haS1taW5pLXNoaXB5YXJkIHtcXG4gICAgZ3JpZC1hcmVhOiBhaS1taW5pLXNoaXB5YXJkO1xcbn1cXG5cXG4ucGxheWVyLW1pbmktc2hpcHlhcmQge1xcbiAgICBncmlkLWFyZWE6IHBsYXllci1taW5pLXNoaXB5YXJkO1xcbn1cXG5cXG4ubG93LW9wYWNpdHkge1xcbiAgICBvcGFjaXR5OiAwLjQ7XFxufVxcblxcbi5ibG9jayB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1hcmtlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IG1pbig1dmgsIDV2dyk7XFxufVxcblxcbi5jZWxsIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IHZhcigtLWNlbGwtc2l6ZSk7XFxuICAgIGhlaWdodDogdmFyKC0tY2VsbC1zaXplKTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLm1pc3MtaGl0IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zcmMvdmlld3MvaW1hZ2VzL2RvdC5zdmcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG59XFxuXFxuLmRlc3Ryb3llZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LCAxOTAsIDE5MCwgMC40NzMpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5saXZlIHt9XFxuXFxuLngtY2VsbCxcXG4ueS1jZWxsIHtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLm1hcmluZS1zZWN0b3Ige1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBib3JkZXI6IG1pbigwLjF2aCwgMC4xdncpIHJnYmEoMCwgMCwgMjU1LCAwLjIpIHNvbGlkO1xcbn1cXG5cXG4uc2hpcCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xcHg7XFxuICAgIG1hcmdpbi10b3A6IC0xcHg7XFxuICAgIGJvcmRlcjogbWluKDAuM3ZoLCAwLjN2dykgcmdiYSgwLCAwLCAyNTUsIDEpIHNvbGlkO1xcbn1cXG5cXG4uaG9yaXpvbnRhbCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDJmcik7XFxufVxcblxcbi52ZXJ0aWNhbCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDJmcik7XFxufVxcblxcbi5kZWNrIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuMSk7XFxuICAgIHotaW5kZXg6IDk5OTtcXG59XFxuXFxuLm1pbmktc2hpcCB7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQgIWltcG9ydGFudDtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5taW5pLWNlbGwge1xcbiAgICB3aWR0aDogbWluKDJ2aCwgMnZ3KTtcXG4gICAgaGVpZ2h0OiBtaW4oMnZoLCAydncpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMCwgMC4xKTtcXG4gICAgYm9yZGVyOiBtaW4oMC4zdmgsIDAuM3Z3KSByZ2JhKDAsIDI1NSwgMjU1LCAxKSBzb2xpZDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiBtaW4oNHZoLCA0dncpO1xcbn1cXG5cXG4ucmFuZG9tLW1vZGUsXFxuLm1hbnVhbC1tb2RlIHtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCBibHVlO1xcbiAgICBjb2xvcjogYmx1ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucmFuZG9tLW1vZGU6aG92ZXIsXFxuLm1hbnVhbC1tb2RlOmhvdmVyIHtcXG4gICAgY29sb3I6IHJnYigxMjIsIDIzMSwgNzIpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHJnYigxMjIsIDIzMSwgNzIpO1xcbn1cXG5cXG4udGltZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogbWluKDJ2aCwgMnZ3KTtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG59XFxuXFxuLnRpbWVyPnN2ZyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5udWxsLW9wYWNpdHkge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4ucG9wdXAtd2luLFxcbi5wb3B1cC1sb3NlIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWluLWNvbnRlbnQpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBhZGRpbmc6IG1pbigxdmgsIDF2dyk7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxufVxcblxcbi50ZXh0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IG1pbigxMHZoLCAxMHZ3KTtcXG59XFxuXFxuLndpbixcXG4ubG9zZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIG1pbi1jb250ZW50KTtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB6LWluZGV4OiAyMDAwO1xcbn1cXG5cXG4uZ2lmLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwdmg7XFxuICAgIGhlaWdodDogMDtcXG4gICAgcGFkZGluZy1ib3R0b206IDU2dmg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtYXNwZWN0LXJhdGlvOiAxLzEuMDAwMDAwMSkge1xcbiAgICAubWFpbiB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4tYXNwZWN0LXJhdGlvOiAyLzEpIHtcXG4gICAgLm1haW4ge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBnYW1lIH0gZnJvbSAnLi4vLi4nO1xuaW1wb3J0IHsgU2Vzc2lvbiB9IGZyb20gJy4uLy4uL21vZGVscy9zZXNzaW9uJztcbmltcG9ydCB7IHJlbW92ZUhpZGRlbiwgc2V0SGlkZGVuIH0gZnJvbSAnLi4vLi4vdmlld3MvYW5pbWF0aW9ucy9jaGFuZ2VWaXNpYmxlJztcbmltcG9ydCB7IHZpZXdTaGlweWFyZCB9IGZyb20gJy4uLy4uL3ZpZXdzL25vZGVzL3NoaXB5YXJkJztcblxuZXhwb3J0IGNvbnN0IHNldExpc3RlbmVyc0ZvckxpbmtzID0gKCkgPT4ge1xuICAgIGNvbnN0IG1hbnVhbE1vZGVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hbnVhbC1tb2RlJyk7XG4gICAgY29uc3QgcmFuZG9tTW9kZUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZG9tLW1vZGUnKTtcbiAgICBjb25zdCBzaGlweWFyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlweWFyZCcpO1xuXG4gICAgY29uc3Qgb3Blbk1hbnVhbE1vZGUgPSBtYW51YWxNb2RlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIFNlc3Npb24ubWFudWFsTW9kZSA9IHRydWU7XG4gICAgICAgIGdhbWUucGxheWVyLmdldEdhbWVib2FyZCgpLnJlc2V0KCk7XG4gICAgICAgIHZpZXdTaGlweWFyZChnYW1lLnBsYXllci5nZXRTaGlweWFyZCgpKTtcbiAgICAgICAgc2V0SGlkZGVuKGdhbWUuYWkuZ2V0R2FtZWJvYXJkKCkuZ2V0Tm9kZSgpKTtcbiAgICAgICAgcmVtb3ZlSGlkZGVuKHNoaXB5YXJkKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG9wZW5SYW5kb21Nb2RlID0gcmFuZG9tTW9kZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBTZXNzaW9uLm1hbnVhbE1vZGUgPSBmYWxzZTtcbiAgICAgICAgcmVtb3ZlSGlkZGVuKGdhbWUuYWkuZ2V0R2FtZWJvYXJkKCkuZ2V0Tm9kZSgpKTtcbiAgICAgICAgc2V0SGlkZGVuKHNoaXB5YXJkKTtcbiAgICAgICAgZ2FtZS5wbGF5ZXIuZ2V0R2FtZWJvYXJkKCkucmFuZG9tRmlsbGluZ09mU2hpcHMoKTtcbiAgICB9KTtcbn07XG4iLCJpbXBvcnQgeyBnYW1lIH0gZnJvbSBcIi4uLy4uXCI7XG5pbXBvcnQgeyBjbGlja0VmZmVjdCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZWxlbWVudHMvYXVkaW9FZmZlY3RzXCI7XG5cbmV4cG9ydCBjb25zdCBzZXRMaXN0ZW5lcnNGb3JQbGF5QnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5Jyk7XG4gICAgY29uc3QgY2xpY2sgPSBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgY2xpY2tFZmZlY3QucGxheSgpO1xuICAgICAgICBnYW1lLnBsYXkoKTtcbiAgICB9KVxufVxuXG5leHBvcnQgY29uc3Qgc2V0TGlzdGVuZXJzRm9yRXhpdEJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXhpdCcpO1xuXG4gICAgY29uc3QgY2xpY2sgPSBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgY2xpY2tFZmZlY3QucGxheSgpO1xuICAgICAgICBnYW1lLmVuZCgpO1xuICAgIH0pXG59XG5cbmV4cG9ydCBjb25zdCBzZXRMaXN0ZW5lcnNGb3JDZWxscyA9ICgpID0+IHtcbiAgICBjb25zdCBjZWxscyA9IGdhbWUuYWkuZ2V0R2FtZWJvYXJkKCkuZ2V0VW5zdHJ1Y3RlZENvbnRhaW5lcigpO1xuICAgIGNlbGxzLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBjZWxsLmdldENlbGxOb2RlKCk7XG4gICAgICAgIG5vZGUuc3R5bGUuekluZGV4ID0gMTAwMDtcbiAgICAgICAgY29uc3QgY2xpY2sgPSBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBnYW1lLmdhbWVIYW5kbGVyLmNoZWNrQ2VsbChjZWxsKTtcbiAgICAgICAgfSlcbiAgICB9KVxufSIsImltcG9ydCB7IGhpZGRlblBvcHVwIH0gZnJvbSBcIi4uLy4uL3ZpZXdzL25vZGVzL3BvcHVwc1wiO1xuXG5leHBvcnQgY29uc3Qgc2V0TGlzdGVuZXJzZm9yUG9wdXBzID0gKCkgPT4ge1xuICAgIGNvbnN0IHBvcHVwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cCcpO1xuICAgIHBvcHVwcy5mb3JFYWNoKHBvcHVwID0+IHtcbiAgICAgICAgY29uc3QgY2xpY2sgPSBwb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgaGlkZGVuUG9wdXAocG9wdXApO1xuICAgICAgICB9KVxuICAgIH0pO1xufSIsImltcG9ydCB7IGdhbWUgfSBmcm9tICcuLi8uLic7XG5pbXBvcnQgeyBTZXNzaW9uLCByZXNldFNlc3Npb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvc2Vzc2lvbic7XG5pbXBvcnQgeyB2aWV3U2hpcCB9IGZyb20gJy4uLy4uL3ZpZXdzL25vZGVzL3NoaXAnO1xuaW1wb3J0IHsgc2hpcERyYWdFbmQgfSBmcm9tICcuLi9zaGlwJztcblxuZXhwb3J0IGNvbnN0IHNldExpc3RlbmVyc0ZvclNoaXBzID0gKHNoaXBzKSA9PiB7XG4gICAgY29uc3QgYm9yZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1ib2FyZCcpO1xuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgY29uc3QgZGVja3MgPSBzaGlwLmdldEJvZHkoKTtcbiAgICAgICAgZGVja3MuZm9yRWFjaCgoZGVjaykgPT4ge1xuICAgICAgICAgICAgZGVjay5nZXRDZWxsTm9kZSgpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldnQpID0+IHtcbiAgICAgICAgICAgICAgICBTZXNzaW9uLmluZGV4ID0gZGVjay5nZXROdW1iZXIoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBzaGlwLmdldENvbnRhaW5lcigpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChzaGlwLmdldEhlYWQoKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIFNlc3Npb24uYWN0aXZlU2hpcCA9IHNoaXA7XG4gICAgICAgICAgICAgICAgU2Vzc2lvbi5jdXJyZW50RWxlbWVudCA9IHNoaXAuZ2V0SGVhZCgpLmdldENlbGxOb2RlKCk7XG4gICAgICAgICAgICAgICAgc2hpcC5vcmllbnRhdGlvblN3aXRjaCgpO1xuICAgICAgICAgICAgICAgIGxldCBpc1ZpZXcgPSB2aWV3U2hpcChzaGlwLCBzaGlwLmdldEhlYWQoKSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNWaWV3KSB7XG4gICAgICAgICAgICAgICAgICAgIHNoaXAuc2V0T3JpZW50YXRpb24oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzaGlwLm9yaWVudGF0aW9uU3dpdGNoKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmVzZXRTZXNzaW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNoaXAuZ2V0Q29udGFpbmVyKCkuYWRkRXZlbnRMaXN0ZW5lcihgZHJhZ3N0YXJ0YCwgKGV2dCkgPT4ge1xuICAgICAgICAgICAgZXZ0LnRhcmdldC5jbGFzc0xpc3QuYWRkKGBzZWxlY3RlZGApO1xuICAgICAgICAgICAgU2Vzc2lvbi5hY3RpdmVTaGlwID0gc2hpcDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2hpcC5nZXRDb250YWluZXIoKS5hZGRFdmVudExpc3RlbmVyKGBkcmFnZW5kYCwgKGV2dCkgPT4ge1xuICAgICAgICAgICAgZXZ0LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKGBzZWxlY3RlZGApO1xuICAgICAgICAgICAgc2hpcERyYWdFbmQoKTtcbiAgICAgICAgICAgIHJlc2V0U2Vzc2lvbigpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGJvcmRlci5hZGRFdmVudExpc3RlbmVyKGBkcmFnb3ZlcmAsIChldnQpID0+IHtcbiAgICAgICAgU2Vzc2lvbi5jdXJyZW50RWxlbWVudCA9IGV2dC50YXJnZXQ7XG4gICAgfSk7XG59O1xuIiwiaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vbW9kZWxzL2dhbWVDb25maWcnO1xuaW1wb3J0IHsgU2Vzc2lvbiB9IGZyb20gJy4uL21vZGVscy9zZXNzaW9uJztcbmltcG9ydCB7IHZpZXdTaGlwIH0gZnJvbSAnLi4vdmlld3Mvbm9kZXMvc2hpcCc7XG5cbmV4cG9ydCBjb25zdCBzaGlwRHJhZ0VuZCA9ICgpID0+IHtcbiAgICBsZXQgaXNNb3ZlYWJsZSA9IGZhbHNlO1xuICAgIGxldCBpc0FsdGVyTW92YWJsZSA9IGZhbHNlO1xuICAgIGxldCBib2R5ID0gU2Vzc2lvbi5hY3RpdmVTaGlwLmdldEJvZHkoKTtcbiAgICBpZiAoU2Vzc2lvbi5jdXJyZW50RWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBpc01vdmVhYmxlID0gU2Vzc2lvbi5jdXJyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoYG1hcmluZS1zZWN0b3JgKTtcbiAgICAgICAgaXNBbHRlck1vdmFibGUgPSBTZXNzaW9uLmN1cnJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhgZGVja2ApO1xuICAgIH1cblxuICAgIGlmICghaXNNb3ZlYWJsZSAmJiAhaXNBbHRlck1vdmFibGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChpc01vdmVhYmxlKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQ29uZmlnLkdhbWVib2FyZC5oZWlnaHQ7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBDb25maWcuR2FtZWJvYXJkLndpZHRoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIFNlc3Npb24uYWN0aXZlU2hpcFxuICAgICAgICAgICAgICAgICAgICAgICAgLmdldEJvYXJkKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRTdHJ1Y3RlZENvbnRhaW5lcigpXG4gICAgICAgICAgICAgICAgICAgICAgICBbal1baV0uZ2V0Q2VsbE5vZGUoKSA9PT0gU2Vzc2lvbi5jdXJyZW50RWxlbWVudFxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWRkU2hpcE9uQm9hcmQoU2Vzc2lvbi5pbmRleCwgaiwgaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChpc0FsdGVyTW92YWJsZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvZHkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChib2R5W2ldLmdldENlbGxOb2RlKCkgPT09IFNlc3Npb24uY3VycmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBTZXNzaW9uLmRvdWJsZUluZGV4ID0gU2Vzc2lvbi5pbmRleCAtIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFNlc3Npb24uZG91YmxlSW5kZXggIT09ICdzaGlwJykge1xuICAgICAgICAgICAgbGV0IGhlYWQgPSBTZXNzaW9uLmFjdGl2ZVNoaXAuZ2V0SGVhZCgpLmdldENlbGxOb2RlKCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IENvbmZpZy5HYW1lYm9hcmQuaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IENvbmZpZy5HYW1lYm9hcmQud2lkdGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBTZXNzaW9uLmFjdGl2ZVNoaXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0Qm9hcmQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRTdHJ1Y3RlZENvbnRhaW5lcigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2pdW2ldLmdldENlbGxOb2RlKCkgPT09IGhlYWRcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWRkU2hpcE9uQm9hcmQoU2Vzc2lvbi5kb3VibGVJbmRleCwgaiwgaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5jb25zdCBhZGRTaGlwT25Cb2FyZCA9IChpbmRleCwgeSwgeCkgPT4ge1xuICAgIGxldCBkYXRhID0gZ2V0RGF0YShpbmRleCwgeSwgeCk7XG4gICAgcmV0dXJuIHZpZXdTaGlwT25Cb2FyZChkYXRhKTtcbn07XG5cbmNvbnN0IGdldERhdGEgPSAoaW5kZXgsIHgsIHkpID0+IHtcbiAgICByZXR1cm4gU2Vzc2lvbi5hY3RpdmVTaGlwLmlzSG9yaXpvbnRhbCgpXG4gICAgICAgID8geyB4OiB4LCB5OiB5IC0gaW5kZXggfVxuICAgICAgICA6IHsgeDogeCAtIGluZGV4LCB5OiB5IH07XG59O1xuXG5jb25zdCB2aWV3U2hpcE9uQm9hcmQgPSAoZGF0YSkgPT4ge1xuICAgIHJldHVybiB2aWV3U2hpcChcbiAgICAgICAgU2Vzc2lvbi5hY3RpdmVTaGlwLFxuICAgICAgICBTZXNzaW9uLmFjdGl2ZVNoaXAuZ2V0Qm9hcmQoKS5nZXRTdHJ1Y3RlZENvbnRhaW5lcigpW2RhdGEueF1bZGF0YS55XSxcbiAgICApO1xufTtcbiIsImV4cG9ydCBjb25zdCByYW5kb21JbnRGcm9tSW50ZXJ2YWwgPSAobWluLCBtYXgpID0+IHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVDaGlsZHMgPSAobm9kZSkgPT4ge1xuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIHdoaWxlIChub2RlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQobm9kZS5sYXN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGFkZENsYXNzZXMgPSAobm9kZSwgLi4uY2xhc3NlcykgPT4ge1xuICAgIGZvciAobGV0IGN1ckNsYXNzIG9mIGNsYXNzZXMpIHtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKGN1ckNsYXNzKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBzZXRBdHRyaWJ1dGVzID0gKGUsIGF0cnMpID0+IHtcbiAgICBmb3IgKGxldCBhdHIgb2YgYXRycykge1xuICAgICAgICBlLnNldEF0dHJpYnV0ZShhdHIubmFtZSwgYXRyLnZhbCk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgYXBwZW5kQ2hpbGRzID0gKG5vZGUsIC4uLmNoaWxkcykgPT4ge1xuICAgIGZvciAobGV0IGNoaWxkIG9mIGNoaWxkcykge1xuICAgICAgICBub2RlLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICB9XG59IiwiaW1wb3J0ICcuL3ZpZXdzL3N0eWxlcy9tYWluLmNzcyc7XG5pbXBvcnQgeyBQcm9maWxlIH0gZnJvbSAnLi9tb2RlbHMvcGxheWVyJztcbmltcG9ydCB7IHZpZXdQcm9maWxlIH0gZnJvbSAnLi92aWV3cy9ub2Rlcy9wcm9maWxlJztcbmltcG9ydCB7IHNldExpc3RlbmVyc0ZvckxpbmtzIH0gZnJvbSAnLi9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yTGlua3MnO1xuaW1wb3J0IHsgdmlld1NoaXB5YXJkIH0gZnJvbSAnLi92aWV3cy9ub2Rlcy9zaGlweWFyZCc7XG5pbXBvcnQgeyBzZXRMaXN0ZW5lcnNGb3JTaGlwcyB9IGZyb20gJy4vY29udHJvbGxlcnMvbGlzdGVuZXJzL2ZvclNoaXBzJztcbmltcG9ydCB7IEdhbWUgfSBmcm9tICcuL21vZGVscy9nYW1lJztcblxuZXhwb3J0IGNvbnN0IGdhbWUgPSBHYW1lKCk7XG5nYW1lLnN0YXJ0KCk7IiwiY29uc3QgQWxwaGFiZXQgPSAoZmlyc3RDaGFyQ29kZSwgbGFzdENoYXJDb2RlKSA9PiB7XG4gICAgY29uc3QgbG9uZyA9IGxhc3RDaGFyQ29kZSAtIGZpcnN0Q2hhckNvZGUgKyAxO1xuICAgIGNvbnN0IGNvZGVzID0gQXJyYXkuZnJvbShBcnJheShsb25nKS5rZXlzKCksICh4KSA9PiB4ICsgZmlyc3RDaGFyQ29kZSk7XG5cbiAgICBjb25zdCBpc1RoaXNBbHBoYWJldCA9IChjaGFyQ29kZSkgPT4ge1xuICAgICAgICBpZiAoY2hhckNvZGUgPj0gZmlyc3RDaGFyQ29kZSAmJiBjaGFyQ29kZSA8PSBsYXN0Q2hhckNvZGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgZmlyc3RDaGFyQ29kZSwgbGFzdENoYXJDb2RlLCBsb25nLCBpc1RoaXNBbHBoYWJldCwgY29kZXMgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBBbHBoYWJldHMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGVuZyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWxwaGFiZXQgPSBBbHBoYWJldCg5NywgMTIyKTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYWxwaGFiZXQpO1xuICAgIH07XG5cbiAgICBjb25zdCBydXMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFscGhhYmV0ID0gQWxwaGFiZXQoMTA3MiwgMTEwMyk7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKGFscGhhYmV0KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgZW5nLCBydXMgfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyByZW1vdmVDaGlsZHMgfSBmcm9tICcuLi9oZWxwZXIvaGVscGVyJztcbmltcG9ydCB7IHNldE5vcm1hbE9wYWNpdHkgfSBmcm9tICcuLi92aWV3cy9hbmltYXRpb25zL2NoYW5nZVZpc2libGUnO1xuaW1wb3J0IHsgZ2V0Tm9kZSB9IGZyb20gJy4uL3ZpZXdzL25vZGVzL2ZhY3RvcnknO1xuXG5leHBvcnQgY29uc3QgQ2VsbCA9ICh4ID0gLTEsIHkgPSAtMSwgbmFtZSA9ICdjZWxsJykgPT4ge1xuICAgIGxldCBoaXQgPSBmYWxzZTtcbiAgICBsZXQgcGFyZW50ID0gJ2ZyZWUnO1xuICAgIGxldCBub2RlID0gZ2V0Tm9kZShuYW1lLCAnY2VsbCcpO1xuICAgIGxldCBsaW5rZWREZWNrID0gJ2ZyZWUnO1xuXG4gICAgY29uc3Qgc2V0TGlua2VkRGVjayA9IChkZWNrKSA9PiB7XG4gICAgICAgIGxpbmtlZERlY2sgPSBkZWNrO1xuICAgIH1cblxuICAgIGNvbnN0IGdldExpbmtlZERlY2sgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBsaW5rZWREZWNrO1xuICAgIH1cblxuICAgIGNvbnN0IHNldFRoZUhpdCA9ICgpID0+IHtcbiAgICAgICAgaGl0ID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgY29uc3QgaXNIaXQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBoaXQ7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldFBhcmVudCA9IChuUGFyZW50KSA9PiB7XG4gICAgICAgIHBhcmVudCA9IG5QYXJlbnQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFBhcmVudCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0Q2VsbE5vZGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRYWSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgeCwgeSB9O1xuICAgIH07XG5cbiAgICBjb25zdCBzZXRYWSA9IChueCwgbnkpID0+IHtcbiAgICAgICAgeCA9IG54O1xuICAgICAgICB5ID0gbnk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICAgICAgICBoaXQgPSBmYWxzZTtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdtaXNzLWhpdCcpO1xuICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2Rlc3Ryb3llZCcpO1xuICAgICAgICByZW1vdmVDaGlsZHMobm9kZSk7XG4gICAgICAgIHNldE5vcm1hbE9wYWNpdHkobm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0VGhlSGl0LFxuICAgICAgICBpc0hpdCxcbiAgICAgICAgc2V0UGFyZW50LFxuICAgICAgICBnZXRQYXJlbnQsXG4gICAgICAgIGdldENlbGxOb2RlLFxuICAgICAgICBnZXRYWSxcbiAgICAgICAgc2V0WFksXG4gICAgICAgIHNldExpbmtlZERlY2ssXG4gICAgICAgIGdldExpbmtlZERlY2ssXG4gICAgICAgIHJlc2V0XG4gICAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBEZWNrID0gKG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IENlbGwoLTEsIC0xLCAnZGVjaycpO1xuXG4gICAgY29uc3QgZ2V0TnVtYmVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbnVtYmVyO1xuICAgIH07XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm90b3R5cGUsIHsgZ2V0TnVtYmVyIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IE1hcmluZVNlY3RvciA9ICh5LCB4KSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gQ2VsbCh5LCB4LCAnbWFyaW5lLXNlY3RvcicpO1xuICAgIGxldCBvY2N1cGFudCA9ICdmcmVlJztcblxuICAgIGNvbnN0IG9jY3VweSA9IChuT2NjdXBhbnQpID0+IHtcbiAgICAgICAgb2NjdXBhbnQgPSBuT2NjdXBhbnQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGNsZWFyID0gKCkgPT4ge1xuICAgICAgICBvY2N1cGFudCA9ICdmcmVlJztcbiAgICAgICAgcHJvdG90eXBlLnJlc2V0KCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGlzRnJlZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG9jY3VwYW50ID09PSAnZnJlZSc7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldE9jY3VwYW50ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gb2NjdXBhbnQ7XG4gICAgfTtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3RvdHlwZSwgeyBpc0ZyZWUsIGNsZWFyLCBvY2N1cHksIGdldE9jY3VwYW50IH0pO1xufTtcbiIsImV4cG9ydCBjb25zdCBDZWxsSGFuZGxlciA9ICgpID0+IHtcbiAgICBjb25zdCBnZXRCZWZvcmUgPSAoeCwgeSwgcGFyZW50KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50W3ldWy0teF07XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50W3ldWysreF07XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0QWZ0ZXIgPSAoeCwgeSwgcGFyZW50KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50W3ldWysreF07XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50W3ldWy0teF07XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0T3ZlciA9ICh4LCB5LCBwYXJlbnQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbLS15XVt4XTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbKyt5XVt4XTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBnZXRVbmRlciA9ICh4LCB5LCBwYXJlbnQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbKyt5XVt4XTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbLS15XVt4XTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBnZXREaWFnMSA9ICh4LCB5LCBwYXJlbnQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbLS15XVstLXhdO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFsrK3ldWysreF07XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0RGlhZzIgPSAoeCwgeSwgcGFyZW50KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50Wy0teV1bKyt4XTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbKyt5XVstLXhdO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldERpYWczID0gKHgsIHksIHBhcmVudCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFsrK3ldWysreF07XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50Wy0teV1bLS14XTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBnZXREaWFnNCA9ICh4LCB5LCBwYXJlbnQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbKyt5XVstLXhdO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFstLXldWysreF07XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0Q2VsbEFyb3VuZEFyZWEgPSAoeCwgeSwgcGFyZW50KSA9PiB7XG4gICAgICAgIGxldCBjZWxscyA9IFtdO1xuICAgICAgICBjZWxscy5wdXNoKGdldEJlZm9yZSh4LCB5LCBwYXJlbnQpKTtcbiAgICAgICAgY2VsbHMucHVzaChnZXRBZnRlcih4LCB5LCBwYXJlbnQpKTtcbiAgICAgICAgY2VsbHMucHVzaChnZXRPdmVyKHgsIHksIHBhcmVudCkpO1xuICAgICAgICBjZWxscy5wdXNoKGdldFVuZGVyKHgsIHksIHBhcmVudCkpO1xuICAgICAgICBjZWxscy5wdXNoKGdldERpYWcxKHgsIHksIHBhcmVudCkpO1xuICAgICAgICBjZWxscy5wdXNoKGdldERpYWcyKHgsIHksIHBhcmVudCkpO1xuICAgICAgICBjZWxscy5wdXNoKGdldERpYWczKHgsIHksIHBhcmVudCkpO1xuICAgICAgICBjZWxscy5wdXNoKGdldERpYWc0KHgsIHksIHBhcmVudCkpO1xuICAgICAgICBjZWxscyA9IGNlbGxzLmZpbHRlcigoY2VsbCkgPT4gY2VsbCAhPT0gdW5kZWZpbmVkKTtcbiAgICAgICAgcmV0dXJuIGNlbGxzO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXREaWFkcyA9ICh4LCB5LCBwYXJlbnQpID0+IHtcbiAgICAgICAgbGV0IGNlbGxzID0gW107XG4gICAgICAgIGNlbGxzLnB1c2goZ2V0RGlhZzEoeCwgeSwgcGFyZW50KSk7XG4gICAgICAgIGNlbGxzLnB1c2goZ2V0RGlhZzIoeCwgeSwgcGFyZW50KSk7XG4gICAgICAgIGNlbGxzLnB1c2goZ2V0RGlhZzMoeCwgeSwgcGFyZW50KSk7XG4gICAgICAgIGNlbGxzLnB1c2goZ2V0RGlhZzQoeCwgeSwgcGFyZW50KSk7XG4gICAgICAgIGNlbGxzID0gY2VsbHMuZmlsdGVyKChjZWxsKSA9PiBjZWxsICE9PSB1bmRlZmluZWQpO1xuICAgICAgICByZXR1cm4gY2VsbHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZ2V0Q2VsbEFyb3VuZEFyZWEsIGdldERpYWRzIH07XG59O1xuIiwiZXhwb3J0IGNvbnN0IENyb3NzQXR0cmlidXRlcyA9ICgoKSA9PiB7XG4gICAgY29uc3QgbGluZSA9IFtcbiAgICAgICAgeyBuYW1lOiAnc3Ryb2tlJywgdmFsOiAncmVkJyB9LFxuICAgICAgICB7IG5hbWU6ICdzdHJva2Utd2lkdGgnLCB2YWw6ICcwLjV2aCcgfSxcbiAgICAgICAgeyBuYW1lOiAnc3Ryb2tlLWxpbmVjYXAnLCB2YWw6ICdyb3VuZCcgfSxcbiAgICAgICAgeyBuYW1lOiAnc3Ryb2tlLWRhc2hhcnJheScsIHZhbDogJzV2aCcgfSxcbiAgICAgICAgeyBuYW1lOiAnc3Ryb2tlLWRhc2hvZmZzZXQnLCB2YWw6ICc1dmgnIH1cbiAgICBdO1xuICAgIGNvbnN0IGxlZnREaWFnID0gW1xuICAgICAgICB7IG5hbWU6ICd4MScsIHZhbDogJzF2aCcgfSxcbiAgICAgICAgeyBuYW1lOiAneTEnLCB2YWw6ICcxdmgnIH0sXG4gICAgICAgIHsgbmFtZTogJ3gyJywgdmFsOiAnNHZoJyB9LFxuICAgICAgICB7IG5hbWU6ICd5MicsIHZhbDogJzR2aCcgfSxcbiAgICBdO1xuICAgIGNvbnN0IHJpZ2h0RGlhZyA9IFtcbiAgICAgICAgeyBuYW1lOiAneDInLCB2YWw6ICcxdmgnIH0sXG4gICAgICAgIHsgbmFtZTogJ3kyJywgdmFsOiAnNHZoJyB9LFxuICAgICAgICB7IG5hbWU6ICd4MScsIHZhbDogJzR2aCcgfSxcbiAgICAgICAgeyBuYW1lOiAneTEnLCB2YWw6ICcxdmgnIH0sXG4gICAgXTtcbiAgICByZXR1cm4geyBsaW5lLCBsZWZ0RGlhZywgcmlnaHREaWFnIH07XG59KSgpO1xuXG5leHBvcnQgY29uc3QgSG9yaXpvbnRhbExpbmUgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGhvcml6b250YWwgPSBbXG4gICAgICAgIHsgbmFtZTogJ3N0cm9rZScsIHZhbDogJ3JlZCcgfSxcbiAgICAgICAgeyBuYW1lOiAnc3Ryb2tlLXdpZHRoJywgdmFsOiAnM3ZoJyB9LFxuICAgICAgICB7IG5hbWU6ICdzdHJva2UtbGluZWNhcCcsIHZhbDogJ3JvdW5kJyB9LFxuICAgICAgICB7IG5hbWU6ICdzdHJva2UtZGFzaGFycmF5JywgdmFsOiAnMTAwdncnIH0sXG4gICAgICAgIHsgbmFtZTogJ3N0cm9rZS1kYXNob2Zmc2V0JywgdmFsOiAnMTAwdncnIH0sXG4gICAgICAgIHsgbmFtZTogJ3gxJywgdmFsOiAnMHZ3JyB9LFxuICAgICAgICB7IG5hbWU6ICd5MScsIHZhbDogJzB2dycgfSxcbiAgICAgICAgeyBuYW1lOiAneDInLCB2YWw6ICcxMDB2dycgfSxcbiAgICAgICAgeyBuYW1lOiAneTInLCB2YWw6ICcwdncnIH0sXG4gICAgXVxuICAgIHJldHVybiB7IGhvcml6b250YWwgfTtcbn0pKCk7IiwiaW1wb3J0IGNyb3NzQXVkaW8gZnJvbSAnLi4vLi4vdmlld3MvYXVkaW8vY3Jvc3MubXAzJztcbmltcG9ydCBuZXh0TW92ZSBmcm9tICcuLi8uLi92aWV3cy9hdWRpby9uZXh0TW92ZS5tcDMnO1xuaW1wb3J0IG1pc3NIaXQgZnJvbSAnLi4vLi4vdmlld3MvYXVkaW8vc2hvdC5tcDMnO1xuaW1wb3J0IGJvb21TaGlwIGZyb20gJy4uLy4uL3ZpZXdzL2F1ZGlvL2Jvb20ubXAzJztcbmltcG9ydCBjbGljayBmcm9tICcuLi8uLi92aWV3cy9hdWRpby9jbGlja1BsYXkubXAzJztcbmltcG9ydCB0aW1lciBmcm9tICcuLi8uLi92aWV3cy9hdWRpby90aW1lci5tcDMnO1xuaW1wb3J0IHdpblNvdW5kIGZyb20gJy4uLy4uL3ZpZXdzL2F1ZGlvL3dpbi5tcDMnO1xuaW1wb3J0IGxvc2VTb3VuZCBmcm9tICcuLi8uLi92aWV3cy9hdWRpby9sb3NlLm1wMyc7XG5cbmV4cG9ydCBjb25zdCBkcmF3Q3Jvc3MgPSAoKCkgPT4ge1xuICAgIGxldCBhdWRpbyA9IG5ldyBBdWRpbyhjcm9zc0F1ZGlvKVxuICAgIGF1ZGlvLnBsYXliYWNrUmF0ZSA9IDM7XG4gICAgYXVkaW8udm9sdW1lID0gMC41O1xuICAgIHJldHVybiBhdWRpbztcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBuZXh0TW92ZUVmZmVjdCA9ICgoKSA9PiB7XG4gICAgbGV0IGF1ZGlvID0gbmV3IEF1ZGlvKG5leHRNb3ZlKTtcbiAgICBhdWRpby5wbGF5YmFja1JhdGUgPSAyO1xuICAgIHJldHVybiBhdWRpbztcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBtaXNzRWZmZWN0ID0gKCgpID0+IHtcbiAgICBsZXQgYXVkaW8gPSBuZXcgQXVkaW8obWlzc0hpdCk7XG4gICAgYXVkaW8ucGxheWJhY2tSYXRlID0gMjtcbiAgICBhdWRpby52b2x1bWUgPSAwLjQ7XG4gICAgcmV0dXJuIGF1ZGlvO1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IGtpbGxTaGlwRWZmZWN0ID0gKCgpID0+IHtcbiAgICBsZXQgYXVkaW8gPSBuZXcgQXVkaW8oYm9vbVNoaXApO1xuICAgIGF1ZGlvLnZvbHVtZSA9IDAuMjtcbiAgICByZXR1cm4gYXVkaW87XG59KSgpO1xuXG5leHBvcnQgY29uc3QgY2xpY2tFZmZlY3QgPSAoKCkgPT4ge1xuICAgIGxldCBhdWRpbyA9IG5ldyBBdWRpbyhjbGljayk7XG4gICAgYXVkaW8udm9sdW1lID0gMTtcbiAgICByZXR1cm4gYXVkaW87XG59KSgpO1xuXG5leHBvcnQgY29uc3QgdGltZXJFZmZlY3QgPSAoKCkgPT4ge1xuICAgIGxldCBhdWRpbyA9IG5ldyBBdWRpbyh0aW1lcik7XG4gICAgYXVkaW8udm9sdW1lID0gMTtcbiAgICByZXR1cm4gYXVkaW87XG59KSgpO1xuXG5leHBvcnQgY29uc3Qgd2luID0gKCgpID0+IHtcbiAgICBsZXQgYXVkaW8gPSBuZXcgQXVkaW8od2luU291bmQpO1xuICAgIGF1ZGlvLnZvbHVtZSA9IDE7XG4gICAgcmV0dXJuIGF1ZGlvO1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IGxvc2UgPSAoKCkgPT4ge1xuICAgIGxldCBhdWRpbyA9IG5ldyBBdWRpbyhsb3NlU291bmQpO1xuICAgIGF1ZGlvLnZvbHVtZSA9IDE7XG4gICAgcmV0dXJuIGF1ZGlvO1xufSkoKTtcblxuLypleHBvcnQgY29uc3QgYWlDcm9zcyA9ICgoKSA9PiB7XG4gICAgbGV0IGF1ZGlvID0gbmV3IEF1ZGlvKCcuLi9hdWRpby90ZXJtaW5hdG9yQ3Jvc3MubXAzJyk7XG4gICAgYXVkaW8ucGxheWJhY2tSYXRlID0gMi4zO1xuICAgIHJldHVybiBhdWRpbztcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCB3aW5Sb3VuZCA9ICgoKSA9PiB7XG4gICAgbGV0IGF1ZGlvID0gbmV3IEF1ZGlvKCcuLi9hdWRpby93aW5Sb3VuZC5tcDMnKTtcbiAgICBhdWRpby52b2x1bWUgPSAwLjU7XG4gICAgcmV0dXJuIGF1ZGlvO1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IGRyYXcgPSAoKCkgPT4ge1xuICAgIGxldCBhdWRpbyA9IG5ldyBBdWRpbygnLi4vYXVkaW8vd293Lm1wMycpO1xuICAgIGF1ZGlvLnZvbHVtZSA9IDAuNTtcbiAgICByZXR1cm4gYXVkaW87XG59KSgpO1xuXG5leHBvcnQgY29uc3Qgd2luID0gKCgpID0+IHtcbiAgICBsZXQgYXVkaW8gPSBuZXcgQXVkaW8oJy4uL2F1ZGlvL3dpbi5tcDMnKTtcbiAgICByZXR1cm4gYXVkaW87XG59KSgpO1xuXG5leHBvcnQgY29uc3QgdGltZXIgPSAoKCkgPT4ge1xuICAgIGxldCBhdWRpbyA9IG5ldyBBdWRpbygnLi4vYXVkaW8vdGltZXIubXAzJyk7XG4gICAgcmV0dXJuIGF1ZGlvO1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IGxvc2UgPSAoKCkgPT4ge1xuICAgIGxldCBhdWRpbyA9IG5ldyBBdWRpbygnLi4vYXVkaW8vdGVybWluYXRvckVuZC5tcDMnKTtcbiAgICByZXR1cm4gYXVkaW87XG59KSgpOyovIiwiaW1wb3J0IHsgY3JlYXRlQ3Jvc3NTVkcsIHZpZXdDcm9zcyB9IGZyb20gXCIuLi8uLi92aWV3cy9ub2Rlcy9tYXJrZXJzXCI7XG5pbXBvcnQgeyBjcmVhdGVUaW1lclNWRywgdmlld1RpbWVyIH0gZnJvbSBcIi4uLy4uL3ZpZXdzL25vZGVzL3RpbWVyXCI7XG5cbmV4cG9ydCBjb25zdCBUZW1wbGF0ZSA9IChzdmcpID0+IHtcbiAgICBsZXQgYW5pbWF0aW9ucztcbiAgICBjb25zdCBnZXRTdmcgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzdmc7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgICAgIGFuaW1hdGlvbnMuZm9yRWFjaChhbmltYXRpb24gPT4ge1xuICAgICAgICAgICAgYW5pbWF0aW9uLmZpbmlzaCgpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHNldEFuaW1hdGlvbnMgPSAodmFsKSA9PiB7XG4gICAgICAgIGFuaW1hdGlvbnMgPSB2YWw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc2V0QW5pbWF0aW9ucywgZ2V0U3ZnLCBhbmltYXRpb25zLCByZXNldCB9O1xufVxuXG5leHBvcnQgY29uc3QgQ3Jvc3MgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gVGVtcGxhdGUoY3JlYXRlQ3Jvc3NTVkcoKSk7XG5cbiAgICBjb25zdCB2aWV3ID0gKCkgPT4ge1xuICAgICAgICBwcm90b3R5cGUuc2V0QW5pbWF0aW9ucyh2aWV3Q3Jvc3MocHJvdG90eXBlLmdldFN2ZygpKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvdG90eXBlLCB7IHZpZXcgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBUaW1lciA9ICgpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBUZW1wbGF0ZShjcmVhdGVUaW1lclNWRygpKTtcblxuICAgIGNvbnN0IHZpZXcgPSAoKSA9PiB7XG4gICAgICAgIHByb3RvdHlwZS5zZXRBbmltYXRpb25zKHZpZXdUaW1lcihwcm90b3R5cGUuZ2V0U3ZnKCkpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm90b3R5cGUsIHsgdmlldyB9KTtcbn0iLCJpbXBvcnQgeyBzZXRMaXN0ZW5lcnNGb3JMaW5rcyB9IGZyb20gXCIuLi9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yTGlua3NcIjtcbmltcG9ydCB7IHNldExpc3RlbmVyc0ZvckNlbGxzLCBzZXRMaXN0ZW5lcnNGb3JFeGl0QnV0dG9uLCBzZXRMaXN0ZW5lcnNGb3JQbGF5QnV0dG9uIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9mb3JQbGF5XCI7XG5pbXBvcnQgeyBzZXRMaXN0ZW5lcnNmb3JQb3B1cHMgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvbGlzdGVuZXJzL2ZvclBvcHVwc1wiO1xuaW1wb3J0IHsgc2V0TGlzdGVuZXJzRm9yU2hpcHMgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvbGlzdGVuZXJzL2ZvclNoaXBzXCI7XG5pbXBvcnQgeyByZW1vdmVIaWRkZW4sIHJlbW92ZU51bGxPcGFjaXR5LCBzZXRIaWRkZW4sIHNldExvd09wYWNpdHkgfSBmcm9tIFwiLi4vdmlld3MvYW5pbWF0aW9ucy9jaGFuZ2VWaXNpYmxlXCI7XG5pbXBvcnQgeyB2aWV3QWNjdXJhdGVIaXQsIHZpZXdNaXNzSGl0IH0gZnJvbSBcIi4uL3ZpZXdzL25vZGVzL2hpdHNcIjtcbmltcG9ydCB7IHZpZXdMb3NlUG9wdXAsIHZpZXdXaW5Qb3B1cCB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9wb3B1cHNcIjtcbmltcG9ydCB7IHZpZXdQcm9maWxlIH0gZnJvbSBcIi4uL3ZpZXdzL25vZGVzL3Byb2ZpbGVcIjtcbmltcG9ydCB7IHZpZXdTaGlweWFyZCB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9zaGlweWFyZFwiO1xuaW1wb3J0IHsgaGlkZGVuSW50ZXJmYWNlQmVmb3JlU3RhcnRQbGF5LCBzZXRBaU1vdmVEZXNpZ24sIHNldEtpbGxlZFNoaXBEZXNpZ24sIHNldE1pbmlTaGlweWFyZERlc2lnbiwgc2V0UGxheWVyTW92ZURlc2lnbiwgdmlld0ludGVyZmFjZUFmdGVyRW5kR2FtZSB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy91aVwiO1xuaW1wb3J0IHsgQ2VsbEhhbmRsZXIgfSBmcm9tIFwiLi9jZWxsSGFuZGxlclwiO1xuaW1wb3J0IHsgZHJhd0Nyb3NzLCBraWxsU2hpcEVmZmVjdCwgbWlzc0VmZmVjdCwgbmV4dE1vdmVFZmZlY3QgfSBmcm9tIFwiLi9lbGVtZW50cy9hdWRpb0VmZmVjdHNcIjtcbmltcG9ydCB7IENyb3NzIH0gZnJvbSBcIi4vZWxlbWVudHMvdGVtcGxhdGVzXCI7XG5pbXBvcnQgeyBQcm9maWxlIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgeyBUaW1lTWFuaXB1bGF0b3JzIH0gZnJvbSBcIi4vdGltZU1hbmlwdWxhdG9yc1wiO1xuXG5leHBvcnQgY29uc3QgR2FtZSA9ICgpID0+IHtcbiAgICBsZXQgcGxheWVyID0gUHJvZmlsZSgxLCAnUGxheWVyJywgJ3BsYXllci1ib2FyZCcsICcuYWktbWluaS1zaGlweWFyZCcpO1xuICAgIGxldCBhaSA9IFByb2ZpbGUoMCwgJ0FJJywgJ2FpLWJvYXJkJywgJy5wbGF5ZXItbWluaS1zaGlweWFyZCcpO1xuICAgIGNvbnN0IHRpbWVNYW5pcHVsYXRvcnMgPSBUaW1lTWFuaXB1bGF0b3JzKCk7XG4gICAgY29uc3QgZ2FtZUhhbmRsZXIgPSBHYW1lSGFuZGxlcihhaSwgcGxheWVyLCB0aW1lTWFuaXB1bGF0b3JzKTtcblxuICAgIGNvbnN0IHZpZXdEZWZhdWxJbnRlcmZhY2VzID0gKCkgPT4ge1xuICAgICAgICB2aWV3UHJvZmlsZShwbGF5ZXIpO1xuICAgICAgICB2aWV3UHJvZmlsZShhaSk7XG4gICAgICAgIHZpZXdTaGlweWFyZChwbGF5ZXIuZ2V0U2hpcHlhcmQoKSk7XG4gICAgICAgIHZpZXdTaGlweWFyZChwbGF5ZXIuZ2V0TWluaVNoaXB5YXJkKCkpO1xuICAgICAgICB2aWV3U2hpcHlhcmQoYWkuZ2V0TWluaVNoaXB5YXJkKCkpO1xuICAgICAgICBzZXRNaW5pU2hpcHlhcmREZXNpZ24ocGxheWVyLmdldE1pbmlTaGlweWFyZCgpKVxuICAgICAgICBzZXRNaW5pU2hpcHlhcmREZXNpZ24oYWkuZ2V0TWluaVNoaXB5YXJkKCkpXG4gICAgfVxuXG4gICAgY29uc3Qgc2V0RGVmYXVsdExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgc2V0TGlzdGVuZXJzRm9yU2hpcHMocGxheWVyLmdldFNoaXB5YXJkKCkuZ2V0QWxsU2hpcHMoKSk7XG4gICAgICAgIHNldExpc3RlbmVyc0ZvckxpbmtzKCk7XG4gICAgICAgIHNldExpc3RlbmVyc0ZvclBsYXlCdXR0b24oKTtcbiAgICAgICAgc2V0TGlzdGVuZXJzRm9yRXhpdEJ1dHRvbigpO1xuICAgICAgICBzZXRMaXN0ZW5lcnNmb3JQb3B1cHMoKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRHYW1lUGxheUxpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgc2V0TGlzdGVuZXJzRm9yQ2VsbHMoKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdGFydCA9ICgpID0+IHtcbiAgICAgICAgc2V0RGVmYXVsdExpc3RlbmVycygpO1xuICAgICAgICB2aWV3RGVmYXVsSW50ZXJmYWNlcygpO1xuICAgICAgICBnYW1lSGFuZGxlci5maWxsQm9hcmRzVG9SYW5kb21TaGlwcygpO1xuICAgICAgICAvL2FpLmdldEdhbWVib2FyZCgpLmhpZGRlblNoaXBzKCk7XG4gICAgfVxuXG4gICAgY29uc3QgcGxheSA9ICgpID0+IHtcbiAgICAgICAgZ2FtZUhhbmRsZXIuc2V0RGVmYXVsdFNldHRpbmdzKCk7XG4gICAgICAgIHNldEdhbWVQbGF5TGlzdGVuZXJzKCk7XG4gICAgICAgIGhpZGRlbkludGVyZmFjZUJlZm9yZVN0YXJ0UGxheSgpO1xuICAgICAgICBwbGF5R2FtZVN0YXRlKCk7XG4gICAgICAgIHJlbW92ZUhpZGRlbihhaS5nZXRNaW5pU2hpcHlhcmQoKS5nZXROb2RlKCkpXG4gICAgICAgIHJlbW92ZUhpZGRlbihwbGF5ZXIuZ2V0TWluaVNoaXB5YXJkKCkuZ2V0Tm9kZSgpKVxuICAgICAgICBnYW1lSGFuZGxlci5wbGF5ZXJNb3ZlKCk7XG4gICAgICAgIHRpbWVNYW5pcHVsYXRvcnMuc2V0VGltZU9mVGhlTW92ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGVuZCA9ICgpID0+IHtcbiAgICAgICAgc2V0SGlkZGVuKGFpLmdldE1pbmlTaGlweWFyZCgpLmdldE5vZGUoKSlcbiAgICAgICAgc2V0SGlkZGVuKHBsYXllci5nZXRNaW5pU2hpcHlhcmQoKS5nZXROb2RlKCkpXG4gICAgICAgIGFpLmdldE1pbmlTaGlweWFyZCgpLnJlc2V0KClcbiAgICAgICAgcGxheWVyLmdldE1pbmlTaGlweWFyZCgpLnJlc2V0KClcbiAgICAgICAgdGltZU1hbmlwdWxhdG9ycy5yZXNldCgpO1xuICAgICAgICB2aWV3SW50ZXJmYWNlQWZ0ZXJFbmRHYW1lKCk7XG4gICAgICAgIGVuZEdhbWVTdGF0ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IHBsYXlHYW1lU3RhdGUgPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy54LWF4aXMnKS5jbGFzc0xpc3QuYWRkKCdjb3JyZWN0JylcbiAgICAgICAgcGxheWVyLmdldEdhbWVib2FyZCgpLmJsb2NrU2hpcHMoKTtcbiAgICB9XG5cbiAgICBjb25zdCBlbmRHYW1lU3RhdGUgPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy54LWF4aXMnKS5jbGFzc0xpc3QucmVtb3ZlKCdjb3JyZWN0JylcbiAgICAgICAgYWkuZ2V0R2FtZWJvYXJkKCkuYmxvY2soKTtcbiAgICAgICAgYWkuZ2V0R2FtZWJvYXJkKCkucmVzZXQoKTtcbiAgICAgICAgcGxheWVyLmdldEdhbWVib2FyZCgpLnVuYmxvY2tTaGlwcygpO1xuICAgICAgICBwbGF5ZXIuZ2V0R2FtZWJvYXJkKCkucmVzZXQoKTtcbiAgICAgICAgZ2FtZUhhbmRsZXIuZmlsbEJvYXJkc1RvUmFuZG9tU2hpcHMoKTtcbiAgICAgICAgYWkuZ2V0R2FtZWJvYXJkKCkuaGlkZGVuU2hpcHMoKTtcbiAgICAgICAgc2V0QWlNb3ZlRGVzaWduKGFpLCBwbGF5ZXIpXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc3RhcnQsIHBsYXksIGVuZCwgYWksIHBsYXllciwgZ2FtZUhhbmRsZXIgfVxufVxuXG5jb25zdCBHYW1lSGFuZGxlciA9IChhaSwgcGxheWVyLCB0aW1lTWFuaXB1bGF0b3JzKSA9PiB7XG4gICAgbGV0IG1vdmU7XG4gICAgbGV0IHBsYXllckNlbGxzID0gWy4uLnBsYXllci5nZXRHYW1lYm9hcmQoKS5nZXRVbnN0cnVjdGVkQ29udGFpbmVyKCldO1xuICAgIGxldCBhaUNlbGxzID0gWy4uLmFpLmdldEdhbWVib2FyZCgpLmdldFVuc3RydWN0ZWRDb250YWluZXIoKV07XG5cbiAgICBjb25zdCBzZXREZWZhdWx0U2V0dGluZ3MgPSAoKSA9PiB7XG4gICAgICAgIG1vdmUgPSAncGxheWVyJztcbiAgICAgICAgcGxheWVyQ2VsbHMgPSBbLi4ucGxheWVyLmdldEdhbWVib2FyZCgpLmdldFVuc3RydWN0ZWRDb250YWluZXIoKV07XG4gICAgICAgIGFpQ2VsbHMgPSBbLi4uYWkuZ2V0R2FtZWJvYXJkKCkuZ2V0VW5zdHJ1Y3RlZENvbnRhaW5lcigpXTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRBY3RpdmVQbGF5ZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBtb3ZlID09PSAnYWknID8gYWkgOiBwbGF5ZXI7XG4gICAgfVxuXG4gICAgY29uc3Qgc3dpdGNoTW92ZSA9ICgpID0+IHtcbiAgICAgICAgdGltZU1hbmlwdWxhdG9ycy5yZXNldCgpO1xuICAgICAgICBpZiAoaXNFbmRHYW1lKCkpIHtcbiAgICAgICAgICAgIG9wZW5Qb3B1cCgpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKG1vdmUgPT09ICdhaScpIHtcbiAgICAgICAgICAgIHRpbWVNYW5pcHVsYXRvcnMuc2V0VGltZU9mVGhlTW92ZSgpO1xuICAgICAgICAgICAgbW92ZSA9ICdwbGF5ZXInO1xuICAgICAgICAgICAgcGxheWVyTW92ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW92ZSA9ICdhaSc7XG4gICAgICAgICAgICBhaU1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGlzRW5kR2FtZSA9ICgpID0+IHtcbiAgICAgICAgbGV0IGlzRW5kID0gaXNQbGF5ZXJMb3NlKHBsYXllcikgfHwgaXNQbGF5ZXJMb3NlKGFpKTtcbiAgICAgICAgcmV0dXJuIGlzRW5kO1xuICAgIH1cblxuICAgIGNvbnN0IGlzUGxheWVyTG9zZSA9IChwbGF5ZXIpID0+IHtcbiAgICAgICAgbGV0IGlzTG9zZSA9IHRydWU7XG4gICAgICAgIGNvbnN0IHNoaXBzID0gcGxheWVyLmdldFNoaXB5YXJkKCkuZ2V0QWxsU2hpcHMoKTtcbiAgICAgICAgc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIGlmIChzaGlwLmlzTGl2ZSgpKSB7XG4gICAgICAgICAgICAgICAgaXNMb3NlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBpc0xvc2U7XG4gICAgfVxuXG4gICAgY29uc3QgcGxheWVyTW92ZSA9ICgpID0+IHtcbiAgICAgICAgYWkuZ2V0R2FtZWJvYXJkKCkudW5ibG9jaygpO1xuICAgICAgICBzZXRQbGF5ZXJNb3ZlRGVzaWduKGFpLCBwbGF5ZXIpO1xuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrQ2VsbCA9IChjZWxsKSA9PiB7XG4gICAgICAgIGlmIChhaUNlbGxzLmluY2x1ZGVzKGNlbGwpKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGFpQ2VsbHMuaW5kZXhPZihjZWxsKTtcbiAgICAgICAgICAgIGFpLmdldEdhbWVib2FyZCgpLmJsb2NrKCk7XG4gICAgICAgICAgICB0YWtlSGl0KGFpQ2VsbHMuc3BsaWNlKGluZGV4LCAxKVswXSk7XG4gICAgICAgICAgICB0aW1lTWFuaXB1bGF0b3JzLnNldFRpbWVCZXR3ZWVuTW92ZXMoNTAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFpTW92ZSA9ICgpID0+IHtcbiAgICAgICAgYWkuZ2V0R2FtZWJvYXJkKCkuYmxvY2soKTtcbiAgICAgICAgc2V0QWlNb3ZlRGVzaWduKGFpLCBwbGF5ZXIpO1xuICAgICAgICB0aW1lTWFuaXB1bGF0b3JzLnNldEFpU3BlZWRPZlRvdWdodChwbGF5ZXJDZWxscyk7XG4gICAgfVxuXG4gICAgY29uc3QgdGFrZUhpdCA9IChjZWxsKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBjZWxsLmdldE9jY3VwYW50KCk7XG4gICAgICAgIGNlbGwuc2V0VGhlSGl0KCk7XG4gICAgICAgIGlmIChzaGlwID09PSAnZnJlZScpIHtcbiAgICAgICAgICAgIHZpZXdNaXNzSGl0KGNlbGwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlld0FjY3VyYXRlSGl0KGNlbGwpO1xuICAgICAgICAgICAgaWYgKGNoZWNrTGl2ZVNoaXAoc2hpcCkpIHtcbiAgICAgICAgICAgICAgICBoaXRBbGxEaWFncyhjZWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1vdmUgPSBtb3ZlID09PSAnYWknID8gJ3BsYXllcicgOiAnYWknO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2hlY2tMaXZlU2hpcCA9IChzaGlwKSA9PiB7XG4gICAgICAgIGlmICghc2hpcC5pc0xpdmUoKSkge1xuICAgICAgICAgICAga2lsbFNoaXBFZmZlY3QucGxheSgpO1xuICAgICAgICAgICAgc2V0S2lsbGVkU2hpcERlc2lnbihzaGlwKTtcbiAgICAgICAgICAgIGxldCBtaW5pU2hpcCA9IGdldE1pbmlTaGlwKHNoaXApO1xuICAgICAgICAgICAgbWluaVNoaXAua2lsbCgpO1xuICAgICAgICAgICAgaGl0QWxsQXJlYUFyb3VuZFNoaXAoc2hpcClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2hpcC5pc0xpdmUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBoaXRBbGxBcmVhQXJvdW5kU2hpcCA9IChzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IGFyZWEgPSBzaGlwLmdldFdhdGVyQXJlYXMoKS5nZXRBcmVhQXJvdW5kVGhlU2hpcCgpO1xuICAgICAgICBhcmVhLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgICAgICBpZiAoIWNlbGwuaXNIaXQoKSkge1xuICAgICAgICAgICAgICAgIHNldExvd09wYWNpdHkoY2VsbC5nZXRDZWxsTm9kZSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZpZXdNaXNzSGl0KGNlbGwpO1xuICAgICAgICAgICAgcmVtb3ZlQ2VsbChjZWxsKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlQ2VsbCA9IChjZWxsKSA9PiB7XG4gICAgICAgIGxldCBjZWxscyA9IG1vdmUgPT09ICdhaScgPyBwbGF5ZXJDZWxscyA6IGFpQ2VsbHM7XG4gICAgICAgIGxldCBpbmRleCA9IGNlbGxzLmluZGV4T2YoY2VsbCk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBjZWxscy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGl0QWxsRGlhZ3MgPSAoaGl0Q2VsbCkgPT4ge1xuICAgICAgICBjb25zdCBoYW5kbGVyID0gQ2VsbEhhbmRsZXIoKTtcbiAgICAgICAgY29uc3QgeCA9IGhpdENlbGwuZ2V0WFkoKS54O1xuICAgICAgICBjb25zdCB5ID0gaGl0Q2VsbC5nZXRYWSgpLnk7XG4gICAgICAgIGNvbnN0IG9wcG9uZW50ID0gbW92ZSA9PT0gJ2FpJyA/IHBsYXllciA6IGFpO1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBvcHBvbmVudC5nZXRHYW1lYm9hcmQoKS5nZXRTdHJ1Y3RlZENvbnRhaW5lcigpO1xuICAgICAgICBjb25zdCBjZWxscyA9IGhhbmRsZXIuZ2V0RGlhZHMoeCwgeSwgcGFyZW50KTtcbiAgICAgICAgY2VsbHMuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgIGlmIChjZWxsICE9PSBoaXRDZWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjZWxsLmlzSGl0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0TG93T3BhY2l0eShjZWxsLmdldENlbGxOb2RlKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2aWV3TWlzc0hpdChjZWxsKTtcbiAgICAgICAgICAgICAgICByZW1vdmVDZWxsKGNlbGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRNaW5pU2hpcCA9IChzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBzaGlwLmdldFR5cGUoKTtcbiAgICAgICAgY29uc3QgYWN0aXZlUGxheWVyID0gZ2V0QWN0aXZlUGxheWVyKCk7XG4gICAgICAgIGNvbnN0IHNoaXBzID0gYWN0aXZlUGxheWVyLmdldE1pbmlTaGlweWFyZCgpLmdldFNoaXBzT2ZUeXBlKHR5cGUpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc2hpcHNbaV0uaXNMaXZlKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2hpcHNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBmaWxsQm9hcmRzVG9SYW5kb21TaGlwcyA9ICgpID0+IHtcbiAgICAgICAgYWkuZ2V0R2FtZWJvYXJkKCkucmFuZG9tRmlsbGluZ09mU2hpcHMoKTtcbiAgICAgICAgcGxheWVyLmdldEdhbWVib2FyZCgpLnJhbmRvbUZpbGxpbmdPZlNoaXBzKCk7XG4gICAgfVxuXG4gICAgY29uc3Qgb3BlblBvcHVwID0gKCkgPT4ge1xuICAgICAgICBtb3ZlID09PSAncGxheWVyJyA/IHZpZXdMb3NlUG9wdXAoKSA6IHZpZXdXaW5Qb3B1cCgpXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY2hlY2tDZWxsLCBwbGF5ZXJNb3ZlLCBzZXREZWZhdWx0U2V0dGluZ3MsIHN3aXRjaE1vdmUsIHRha2VIaXQsIGlzRW5kR2FtZSwgZmlsbEJvYXJkc1RvUmFuZG9tU2hpcHMgfTtcbn0iLCJpbXBvcnQgeyBwbGF5ZXIxIH0gZnJvbSAnLi4nO1xuaW1wb3J0IHsgcmFuZG9tSW50RnJvbUludGVydmFsIH0gZnJvbSAnLi4vaGVscGVyL2hlbHBlcic7XG5pbXBvcnQgeyBzZXRIaWRkZW4sIHNldExvd09wYWNpdHksIHNldE51bGxPcGFjaXR5IH0gZnJvbSAnLi4vdmlld3MvYW5pbWF0aW9ucy9jaGFuZ2VWaXNpYmxlJztcbmltcG9ydCB7IHZpZXdTaGlwLCB2aWV3U2hpcE9uUmFuZG9tQ2VsbCB9IGZyb20gJy4uL3ZpZXdzL25vZGVzL3NoaXAnO1xuaW1wb3J0IHsgTWFyaW5lU2VjdG9yIH0gZnJvbSAnLi9jZWxsJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vZ2FtZUNvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBHYW1lYm9hcmQgPSAobmFtZSwgcGxheWVyKSA9PiB7XG4gICAgY29uc3Qgd2lkdGggPSBDb25maWcuR2FtZWJvYXJkLndpZHRoO1xuICAgIGNvbnN0IGhlaWdodCA9IENvbmZpZy5HYW1lYm9hcmQuaGVpZ2h0O1xuICAgIGNvbnN0IGNvbnRhaW5lcnMgPSBmaWxsQm9hcmQod2lkdGgsIGhlaWdodCk7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9YCk7XG5cbiAgICBjb25zdCBnZXRTdHJ1Y3RlZENvbnRhaW5lciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcnMuZ2V0U3RydWN0ZWQoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0VW5zdHJ1Y3RlZENvbnRhaW5lciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcnMuZ2V0VW5zdHJ1Y3RlZCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRTaXplID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4geyB3aWR0aCwgaGVpZ2h0IH07XG4gICAgfTtcblxuICAgIGNvbnN0IGdldE5vZGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRQbGF5ZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwbGF5ZXI7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICAgICAgICBjb250YWluZXJzLmdldFVuc3RydWN0ZWQoKS5mb3JFYWNoKChzZWN0b3IpID0+IHtcbiAgICAgICAgICAgIHNlY3Rvci5jbGVhcigpO1xuICAgICAgICB9KTtcbiAgICAgICAgcGxheWVyLmdldFNoaXB5YXJkKCkucmVzZXQoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmFuZG9tRmlsbGluZ09mU2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIGxldCBzaGlwcyA9IHBsYXllci5nZXRTaGlweWFyZCgpLmdldEFsbFNoaXBzKCk7XG5cbiAgICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgc2hpcC5zZXRSYW5kb21PcmllbnRhdGlvbigpO1xuICAgICAgICAgICAgdmlld1NoaXBPblJhbmRvbUNlbGwoc2hpcCwgWy4uLmdldFVuc3RydWN0ZWRDb250YWluZXIoKV0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgYmxvY2tTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgbm9kZS5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcCcpLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHVuYmxvY2tTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgbm9kZS5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcCcpLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgICAgICBzaGlwLmNsYXNzTGlzdC5yZW1vdmUoJ2Jsb2NrJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGhpZGRlblNoaXBzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBib2FyZCA9IG5vZGUucXVlcnlTZWxlY3RvcignLmJvYXJkJyk7XG4gICAgICAgIGJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwJykuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIHNoaXAuc3R5bGUuYm9yZGVyID0gJzBweCBibHVlIHNvbGlkJztcbiAgICAgICAgfSk7XG4gICAgICAgIGJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWNrJykuZm9yRWFjaChkZWNrID0+IHtcbiAgICAgICAgICAgIHNldE51bGxPcGFjaXR5KGRlY2spXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGJsb2NrID0gKCkgPT4ge1xuICAgICAgICBub2RlLnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrJyk7XG4gICAgfVxuXG4gICAgY29uc3QgdW5ibG9jayA9ICgpID0+IHtcbiAgICAgICAgbm9kZS5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKS5jbGFzc0xpc3QucmVtb3ZlKCdibG9jaycpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHJhbmRvbUZpbGxpbmdPZlNoaXBzLFxuICAgICAgICByZXNldCxcbiAgICAgICAgZ2V0UGxheWVyLFxuICAgICAgICBnZXRTdHJ1Y3RlZENvbnRhaW5lcixcbiAgICAgICAgZ2V0VW5zdHJ1Y3RlZENvbnRhaW5lcixcbiAgICAgICAgZ2V0U2l6ZSxcbiAgICAgICAgZ2V0Tm9kZSxcbiAgICAgICAgYmxvY2tTaGlwcyxcbiAgICAgICAgdW5ibG9ja1NoaXBzLFxuICAgICAgICBoaWRkZW5TaGlwcyxcbiAgICAgICAgYmxvY2ssXG4gICAgICAgIHVuYmxvY2tcbiAgICB9O1xufTtcblxuY29uc3QgZmlsbEJvYXJkID0gKHdpZHRoLCBoZWlnaHQpID0+IHtcbiAgICBsZXQgc3RydWN0ZWQgPSBbXTtcbiAgICBsZXQgdW5zdHJ1Y3RlZCA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoZWlnaHQ7IGkrKykge1xuICAgICAgICBsZXQgbGluZSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHdpZHRoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBNYXJpbmVTZWN0b3IoaiwgaSk7XG4gICAgICAgICAgICBsaW5lW2pdID0gY2VsbDtcbiAgICAgICAgICAgIHVuc3RydWN0ZWQucHVzaChjZWxsKTtcbiAgICAgICAgfVxuICAgICAgICBzdHJ1Y3RlZFtpXSA9IGxpbmU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0U3RydWN0ZWQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzdHJ1Y3RlZDtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0VW5zdHJ1Y3RlZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHVuc3RydWN0ZWQ7XG4gICAgfTtcblxuICAgIHJldHVybiB7IGdldFN0cnVjdGVkLCBnZXRVbnN0cnVjdGVkIH07XG59O1xuIiwiZXhwb3J0IGNvbnN0IENvbmZpZyA9ICgoKSA9PiB7XG4gICAgY29uc3QgR2FtZWJvYXJkID0gKCgpID0+IHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSAxMDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gMTA7XG4gICAgICAgIHJldHVybiB7IHdpZHRoLCBoZWlnaHQgfTtcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgRWxlbWVudHMgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwVHlwZXMgPSBbJ2ZyZWdhdHMnLCAnY2FyYXZlbHMnLCAnZHJha2thcnMnLCAnYm9hdHMnXTtcbiAgICAgICAgY29uc3QgbnVtYmVyT2YgPSAoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZnJlZ2F0ZXMgPSAxO1xuICAgICAgICAgICAgY29uc3QgY2FyYXZlbHMgPSAyO1xuICAgICAgICAgICAgY29uc3QgZHJha2thcnMgPSAzO1xuICAgICAgICAgICAgY29uc3QgYm9hdHMgPSA0O1xuICAgICAgICAgICAgcmV0dXJuIHsgZnJlZ2F0ZXMsIGNhcmF2ZWxzLCBkcmFra2FycywgYm9hdHMgfTtcbiAgICAgICAgfSkoKTtcblxuICAgICAgICByZXR1cm4geyBudW1iZXJPZiwgc2hpcFR5cGVzIH07XG4gICAgfSkoKTtcblxuICAgIHJldHVybiB7IEdhbWVib2FyZCwgRWxlbWVudHMgfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tICcuL2dhbWVCb2FyZCc7XG5pbXBvcnQgeyBTaGlweWFyZCB9IGZyb20gJy4vc2hpcHlhcmQnO1xuXG5jb25zdCBQbGF5ZXIgPSAoaWQsIG5hbWUpID0+IHtcbiAgICBjb25zdCBnZXRJZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgZ2V0SWQsIGdldE5hbWUgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBQcm9maWxlID0gKGlkLCBuYW1lLCBub2RlSWQsIG1pbmlTaGlweWFyZElkKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gUGxheWVyKGlkLCBuYW1lKTtcblxuICAgIGxldCBnYW1lYm9hcmQgPSBHYW1lYm9hcmQobm9kZUlkLCBwcm90b3R5cGUpO1xuICAgIGxldCBzaGlweWFyZCA9IFNoaXB5YXJkKHByb3RvdHlwZSk7XG4gICAgbGV0IG1pbmlTaGlweWFyZCA9IFNoaXB5YXJkKHByb3RvdHlwZSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihtaW5pU2hpcHlhcmRJZCkpO1xuXG4gICAgY29uc3QgZ2V0R2FtZWJvYXJkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZ2FtZWJvYXJkO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRTaGlweWFyZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHNoaXB5YXJkO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRNaW5pU2hpcHlhcmQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBtaW5pU2hpcHlhcmQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvdG90eXBlLCB7IGdldEdhbWVib2FyZCwgZ2V0U2hpcHlhcmQsIGdldE1pbmlTaGlweWFyZCB9KTtcbn07XG4iLCJleHBvcnQgY29uc3QgU2Vzc2lvbiA9ICgoKSA9PiB7XG4gICAgbGV0IGFjdGl2ZVNoaXAgPSBudWxsO1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgbGV0IGRvdWJsZUluZGV4ID0gJ3NoaXAnO1xuICAgIGxldCBjdXJyZW50RWxlbWVudCA9IG51bGw7XG4gICAgbGV0IGNob2lzZWRDZWxsID0gbnVsbDtcbiAgICBsZXQgbWFudWFsTW9kZSA9IGZhbHNlO1xuICAgIHJldHVybiB7IG1hbnVhbE1vZGUsIGFjdGl2ZVNoaXAsIGluZGV4LCBkb3VibGVJbmRleCwgY3VycmVudEVsZW1lbnQsIGNob2lzZWRDZWxsIH07XG59KSgpO1xuXG5leHBvcnQgY29uc3QgcmVzZXRTZXNzaW9uID0gKCkgPT4ge1xuICAgIFNlc3Npb24uYWN0aXZlU2hpcCA9IG51bGw7XG4gICAgU2Vzc2lvbi5pbmRleCA9IDA7XG4gICAgU2Vzc2lvbi5kb3VibGVJbmRleCA9ICdzaGlwJztcbiAgICBTZXNzaW9uLmN1cnJlbnRFbGVtZW50ID0gbnVsbDtcbn07XG4iLCJpbXBvcnQgeyByYW5kb21JbnRGcm9tSW50ZXJ2YWwsIHJlbW92ZUNoaWxkcyB9IGZyb20gJy4uL2hlbHBlci9oZWxwZXInO1xuaW1wb3J0IHsgc2V0TG93T3BhY2l0eSB9IGZyb20gJy4uL3ZpZXdzL2FuaW1hdGlvbnMvY2hhbmdlVmlzaWJsZSc7XG5pbXBvcnQgeyBnZXROb2RlIH0gZnJvbSAnLi4vdmlld3Mvbm9kZXMvZmFjdG9yeSc7XG5pbXBvcnQgeyBEZWNrIH0gZnJvbSAnLi9jZWxsJztcbmltcG9ydCB7IENyb3NzIH0gZnJvbSAnLi9lbGVtZW50cy90ZW1wbGF0ZXMnO1xuaW1wb3J0IHsgU2hpcFdhdGVyQXJlYXMgfSBmcm9tICcuL3dhdGVyQXJlYXMnO1xuXG5leHBvcnQgY29uc3QgU2hpcCA9IChsZW5ndGgsIHBsYXllciwgdHlwZSkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGdldE5vZGUoJ3NoaXAnLCAnaG9yaXpvbnRhbCcpO1xuICAgIGxldCBib2R5ID0gW107XG4gICAgbGV0IGxpdmUgPSB0cnVlO1xuICAgIGxldCBob3Jpem9udGFsID0gdHJ1ZTtcbiAgICBsZXQgaGVhZCA9IG51bGw7XG4gICAgbGV0IHNoaXAgPSB7fTtcbiAgICBsZXQgc2hpcFdhdGVyQXJlYXMgPSBTaGlwV2F0ZXJBcmVhcyhwbGF5ZXIsIHNoaXApO1xuXG4gICAgY29uc3Qgc2V0WW91cnNlbGYgPSAodGhpc1NoaXApID0+IHtcbiAgICAgICAgc2hpcCA9IHRoaXNTaGlwO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFlvdXJzZWxmID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc2hpcDtcbiAgICB9XG5cbiAgICBjb25zdCBmaWxsQ29udGFpbmVyID0gKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZGVjayA9IERlY2soaSk7XG4gICAgICAgICAgICBib2R5LnB1c2goZGVjayk7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVjay5nZXRDZWxsTm9kZSgpKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBzZXRPcmllbnRhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgaWYgKGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2hvcml6b250YWwnKSkge1xuICAgICAgICAgICAgc2V0VmVydGljYWwoKTtcbiAgICAgICAgfSBlbHNlIGlmIChjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCd2ZXJ0aWNhbCcpKSB7XG4gICAgICAgICAgICBzZXRIb3Jpem9udGFsKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgdGFrZURvd25XYXRlckFyZWFzID0gKCkgPT4ge1xuICAgICAgICBzaGlwV2F0ZXJBcmVhcy5jbGVhckFyZWFzKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGxhdW5jaFNoaXBPbldhdGVyID0gKG5IZWFkKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgd2F0ZXJBcmVhcyA9IGdldFdhdGVyQXJlYShuSGVhZCk7XG4gICAgICAgICAgICBsZXQgYWNlc3NpYmlsaXR5ID0gd2F0ZXJBcmVhcy5jaGVja0FyZWEoKTtcbiAgICAgICAgICAgIGlmIChhY2Vzc2liaWxpdHkpIHtcbiAgICAgICAgICAgICAgICB0YWtlRG93bldhdGVyQXJlYXMoKTtcbiAgICAgICAgICAgICAgICBzaGlwV2F0ZXJBcmVhcyA9IHdhdGVyQXJlYXM7XG4gICAgICAgICAgICAgICAgbGlua1NoaXBXaXRoRmllbGQoKTtcbiAgICAgICAgICAgICAgICBzaGlwV2F0ZXJBcmVhcy5vY2N1cHlBcmVhcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFjZXNzaWJpbGl0eTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBsaW5rU2hpcFdpdGhGaWVsZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGFyZWEgPSBzaGlwV2F0ZXJBcmVhcy5nZXRBcmVhVW5kZXJUaGVTaGlwKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHh5ID0gYXJlYVtpXS5nZXRYWSgpO1xuICAgICAgICAgICAgYm9keVtpXS5zZXRYWSh4eS54LCB4eS55KTtcbiAgICAgICAgICAgIGFyZWFbaV0uc2V0TGlua2VkRGVjayhib2R5W2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldFdhdGVyQXJlYSA9IChoZWFkKSA9PiB7XG4gICAgICAgIGxldCBib2FyZCA9IGdldEJvYXJkKCkuZ2V0U3RydWN0ZWRDb250YWluZXIoKTtcbiAgICAgICAgbGV0IGFyZWFzID0gU2hpcFdhdGVyQXJlYXMocGxheWVyLCBzaGlwKTtcbiAgICAgICAgbGV0IHggPSBoZWFkLmdldFhZKCkueDtcbiAgICAgICAgbGV0IHkgPSBoZWFkLmdldFhZKCkueTtcbiAgICAgICAgbGV0IG5lY2Vzc2FyeVNlY3RvcnMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbmVjZXNzYXJ5U2VjdG9ycy5wdXNoKGJvYXJkW3ldW3hdKTtcbiAgICAgICAgICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICAgICAgICAgICAgeCsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB5Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXJlYXMuc2V0QXJlYXMobmVjZXNzYXJ5U2VjdG9ycyk7XG4gICAgICAgIHJldHVybiBhcmVhcztcbiAgICB9O1xuXG4gICAgY29uc3QgaXNMaXZlID0gKCkgPT4ge1xuICAgICAgICBsaXZlID0gZmFsc2U7XG5cbiAgICAgICAgYm9keS5mb3JFYWNoKChkZWNrKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWRlY2suaXNIaXQoKSkge1xuICAgICAgICAgICAgICAgIGxpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbGl2ZTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0Qm9keSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGJvZHk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldENvbnRhaW5lciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0SGVhZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGhlYWQ7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldEhlYWQgPSAobkhlYWQpID0+IHtcbiAgICAgICAgaGVhZCA9IG5IZWFkO1xuICAgIH07XG5cbiAgICBjb25zdCBpc0hvcml6b250YWwgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBob3Jpem9udGFsO1xuICAgIH07XG5cbiAgICBjb25zdCBvcmllbnRhdGlvblN3aXRjaCA9ICgpID0+IHtcbiAgICAgICAgaG9yaXpvbnRhbCA9ICFob3Jpem9udGFsO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXRWZXJ0aWNhbCA9ICgpID0+IHtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hvcml6b250YWwnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3ZlcnRpY2FsJyk7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBgbWluKCR7bGVuZ3RoICogNX12aCwke2xlbmd0aCAqIDV9dncpYDtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLndpZHRoID0gYG1pbig1dmgsNXZ3KWA7XG4gICAgICAgIGhvcml6b250YWwgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0SG9yaXpvbnRhbCA9ICgpID0+IHtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3ZlcnRpY2FsJyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdob3Jpem9udGFsJyk7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9IGBtaW4oJHtsZW5ndGggKiA1fXZoLCR7bGVuZ3RoICogNX12dylgO1xuICAgICAgICBjb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gYG1pbig1dmgsNXZ3KWA7XG4gICAgICAgIGhvcml6b250YWwgPSB0cnVlO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXRSYW5kb21PcmllbnRhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgcmFuZG9tSW50RnJvbUludGVydmFsKDAsIDEpID09PSAxID8gc2V0SG9yaXpvbnRhbCgpIDogc2V0VmVydGljYWwoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwbGF5ZXIuZ2V0R2FtZWJvYXJkKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICAgICAgICBoZWFkID0gbnVsbDtcbiAgICAgICAgc2V0SG9yaXpvbnRhbCgpO1xuICAgICAgICByZXNldEJvZHkoKTtcbiAgICAgICAgc2hpcFdhdGVyQXJlYXMuY2xlYXJBcmVhcygpO1xuICAgICAgICBzaGlwV2F0ZXJBcmVhcyA9IFNoaXBXYXRlckFyZWFzKHBsYXllciwgc2hpcCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc2V0Qm9keSA9ICgpID0+IHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5ib3JkZXIgPSAnbWluKDAuM3ZoLCAwLjN2dykgcmdiYSgwLCAwLCAyNTUsIDEpIHNvbGlkJztcbiAgICAgICAgYm9keS5mb3JFYWNoKGRlY2sgPT4ge1xuICAgICAgICAgICAgZGVjay5yZXNldCgpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGdldFR5cGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cblxuICAgIGNvbnN0IGtpbGwgPSAoKSA9PiB7XG4gICAgICAgIGJvZHkuZm9yRWFjaChkZWNrID0+IHtcbiAgICAgICAgICAgIHNldExvd09wYWNpdHkoZGVjay5nZXRDZWxsTm9kZSgpKTtcbiAgICAgICAgICAgIGRlY2suc2V0VGhlSGl0KCk7XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gJzAuMyc7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5ib3JkZXIgPSAnMC41dmggcmdiYSgyNTUsIDAsIDAsIDEpIHNvbGlkJztcbiAgICAgICAgbGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFdhdGVyQXJlYXMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzaGlwV2F0ZXJBcmVhc1xuICAgIH1cblxuICAgIGZpbGxDb250YWluZXIoKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHNldFJhbmRvbU9yaWVudGF0aW9uLFxuICAgICAgICByZXNldCxcbiAgICAgICAgc2V0SG9yaXpvbnRhbCxcbiAgICAgICAgc2V0VmVydGljYWwsXG4gICAgICAgIGdldEJvYXJkLFxuICAgICAgICB0YWtlRG93bldhdGVyQXJlYXMsXG4gICAgICAgIGxhdW5jaFNoaXBPbldhdGVyLFxuICAgICAgICBvcmllbnRhdGlvblN3aXRjaCxcbiAgICAgICAgc2V0T3JpZW50YXRpb24sXG4gICAgICAgIGlzTGl2ZSxcbiAgICAgICAgZ2V0Qm9keSxcbiAgICAgICAgZ2V0Q29udGFpbmVyLFxuICAgICAgICBnZXRIZWFkLFxuICAgICAgICBzZXRIZWFkLFxuICAgICAgICBpc0hvcml6b250YWwsXG4gICAgICAgIHNldFlvdXJzZWxmLFxuICAgICAgICBnZXRZb3Vyc2VsZixcbiAgICAgICAgZ2V0VHlwZSxcbiAgICAgICAga2lsbCxcbiAgICAgICAgZ2V0V2F0ZXJBcmVhc1xuICAgIH07XG59O1xuXG5leHBvcnQgY29uc3QgRnJlZ2F0ID0gKG1hcmtlcikgPT4ge1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IFNoaXAoNCwgbWFya2VyLCAnZnJlZ2F0cycpO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3RvdHlwZSwgbWFya2VyKTtcbn07XG5cbmV4cG9ydCBjb25zdCBDYXJhdmVsID0gKG1hcmtlcikgPT4ge1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IFNoaXAoMywgbWFya2VyLCAnY2FyYXZlbHMnKTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm90b3R5cGUpO1xufTtcblxuZXhwb3J0IGNvbnN0IERyYWtrYXIgPSAobWFya2VyKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gU2hpcCgyLCBtYXJrZXIsICdkcmFra2FycycpO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3RvdHlwZSk7XG59O1xuXG5leHBvcnQgY29uc3QgQm9hdCA9IChtYXJrZXIpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBTaGlwKDEsIG1hcmtlciwgJ2JvYXRzJyk7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvdG90eXBlKTtcbn07XG4iLCJpbXBvcnQgeyBDb25maWcgfSBmcm9tICcuL2dhbWVDb25maWcnO1xuaW1wb3J0IHsgQm9hdCwgQ2FyYXZlbCwgRHJha2thciwgRnJlZ2F0IH0gZnJvbSAnLi9zaGlwJztcblxuZXhwb3J0IGNvbnN0IFNoaXB5YXJkID0gKHBsYXllciwgbm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlweWFyZCcpKSA9PiB7XG4gICAgY29uc3QgZnJlZ2F0cyA9IERvY2soQ29uZmlnLkVsZW1lbnRzLm51bWJlck9mLmZyZWdhdGVzLCAnRnJlZ2F0JywgcGxheWVyKTtcbiAgICBjb25zdCBjYXJhdmVscyA9IERvY2soQ29uZmlnLkVsZW1lbnRzLm51bWJlck9mLmNhcmF2ZWxzLCAnQ2FyYXZlbCcsIHBsYXllcik7XG4gICAgY29uc3QgZHJha2thcnMgPSBEb2NrKENvbmZpZy5FbGVtZW50cy5udW1iZXJPZi5kcmFra2FycywgJ0RyYWtrYXInLCBwbGF5ZXIpO1xuICAgIGNvbnN0IGJvYXRzID0gRG9jayhDb25maWcuRWxlbWVudHMubnVtYmVyT2YuYm9hdHMsICdCb2F0JywgcGxheWVyKTtcbiAgICBjb25zdCBzaGlwcyA9IGZyZWdhdHNcbiAgICAgICAgLmdldFNoaXBzKClcbiAgICAgICAgLmNvbmNhdChcbiAgICAgICAgICAgIGNhcmF2ZWxzXG4gICAgICAgICAgICAgICAgLmdldFNoaXBzKClcbiAgICAgICAgICAgICAgICAuY29uY2F0KGRyYWtrYXJzLmdldFNoaXBzKCkuY29uY2F0KGJvYXRzLmdldFNoaXBzKCkpKSxcbiAgICAgICAgKTtcblxuICAgIGNvbnN0IGdldFNoaXBzT2ZUeXBlID0gKHR5cGUpID0+IHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdmcmVnYXRzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gZnJlZ2F0cy5nZXRTaGlwcygpO1xuICAgICAgICAgICAgY2FzZSAnY2FyYXZlbHMnOlxuICAgICAgICAgICAgICAgIHJldHVybiBjYXJhdmVscy5nZXRTaGlwcygpO1xuICAgICAgICAgICAgY2FzZSAnZHJha2thcnMnOlxuICAgICAgICAgICAgICAgIHJldHVybiBkcmFra2Fycy5nZXRTaGlwcygpO1xuICAgICAgICAgICAgY2FzZSAnYm9hdHMnOlxuICAgICAgICAgICAgICAgIHJldHVybiBib2F0cy5nZXRTaGlwcygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldERvY2tXaXRoRnJlZ2F0cyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGZyZWdhdHM7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldERvY2tXaXRoQ2FyYXZlbHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBjYXJhdmVscztcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0RG9ja1dpdGhEcmFra2FycyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGRyYWtrYXJzO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXREb2NrV2l0aEJvYXRzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYm9hdHM7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFBsYXllciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHBsYXllcjtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0QWxsU2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzaGlwcztcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0Tm9kZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgY29uc3QgaXNFbXB0eSA9ICgpID0+IHtcbiAgICAgICAgbGV0IGxhdW5jaGVkU2hpcHMgPSBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwJyk7XG4gICAgICAgIHJldHVybiBsYXVuY2hlZFNoaXBzLmxlbmd0aCA9PT0gMDtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIHNoaXAucmVzZXQoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldFNoaXBzT2ZUeXBlLFxuICAgICAgICBpc0VtcHR5LFxuICAgICAgICByZXNldCxcbiAgICAgICAgZ2V0QWxsU2hpcHMsXG4gICAgICAgIGdldFBsYXllcixcbiAgICAgICAgZ2V0RG9ja1dpdGhGcmVnYXRzLFxuICAgICAgICBnZXREb2NrV2l0aENhcmF2ZWxzLFxuICAgICAgICBnZXREb2NrV2l0aERyYWtrYXJzLFxuICAgICAgICBnZXREb2NrV2l0aEJvYXRzLFxuICAgICAgICBnZXROb2RlXG4gICAgfTtcbn07XG5cbmNvbnN0IERvY2sgPSAoY291bnQsIHNoaXBCbHVlUHJpbnQsIHBsYXllcikgPT4ge1xuICAgIGNvbnN0IHNoaXBzID0gW107XG5cbiAgICBjb25zdCBmaWxsRG9jayA9IChjb3VudCwgc2hpcEJsdWVQcmludCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBidWlsZFNoaXAoc2hpcEJsdWVQcmludCk7XG4gICAgICAgICAgICBzaGlwLnNldFlvdXJzZWxmKHNoaXApO1xuICAgICAgICAgICAgc2hpcHMucHVzaChzaGlwKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBidWlsZFNoaXAgPSAoYmx1ZVByaW50KSA9PiB7XG4gICAgICAgIHN3aXRjaCAoYmx1ZVByaW50KSB7XG4gICAgICAgICAgICBjYXNlICdGcmVnYXQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBGcmVnYXQocGxheWVyKTtcbiAgICAgICAgICAgIGNhc2UgJ0NhcmF2ZWwnOlxuICAgICAgICAgICAgICAgIHJldHVybiBDYXJhdmVsKHBsYXllcik7XG4gICAgICAgICAgICBjYXNlICdEcmFra2FyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gRHJha2thcihwbGF5ZXIpO1xuICAgICAgICAgICAgY2FzZSAnQm9hdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEJvYXQocGxheWVyKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NvcnJ5LCBpbGxlZ2FsIHNoaXAgYmx1ZXByaW50Jyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZmlsbERvY2soY291bnQsIHNoaXBCbHVlUHJpbnQpO1xuXG4gICAgY29uc3QgZ2V0U2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzaGlwcztcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgZ2V0U2hpcHMgfTtcbn07XG4iLCJpbXBvcnQgeyBnYW1lIH0gZnJvbSBcIi4uXCI7XG5pbXBvcnQgeyByZW1vdmVDaGlsZHMgfSBmcm9tIFwiLi4vaGVscGVyL2hlbHBlclwiO1xuaW1wb3J0IHsgZ2V0UmFuZG9tQ2VsbCB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9zaGlwXCI7XG5pbXBvcnQgeyB0aW1lckVmZmVjdCB9IGZyb20gXCIuL2VsZW1lbnRzL2F1ZGlvRWZmZWN0c1wiO1xuaW1wb3J0IHsgVGltZXIgfSBmcm9tIFwiLi9lbGVtZW50cy90ZW1wbGF0ZXNcIjtcblxuXG5leHBvcnQgY29uc3QgVGltZU1hbmlwdWxhdG9ycyA9ICgpID0+IHtcbiAgICBsZXQgdGltZU9mVGhlTW92ZTtcbiAgICBsZXQgYWlTcGVlZE9mVG91Z2h0O1xuICAgIGxldCB0aW1lQmV0d2Vlbk1vdmVzO1xuICAgIGxldCBhbGFybTtcbiAgICBsZXQgdGltZXIgPSBUaW1lcigpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lcicpLmFwcGVuZENoaWxkKHRpbWVyLmdldFN2ZygpKTtcblxuICAgIGNvbnN0IHNldEFpU3BlZWRPZlRvdWdodCA9IChjZWxscykgPT4ge1xuICAgICAgICBhaVNwZWVkT2ZUb3VnaHQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGdhbWUuZ2FtZUhhbmRsZXIudGFrZUhpdChnZXRSYW5kb21DZWxsKGNlbGxzKSk7XG4gICAgICAgICAgICBzZXRUaW1lQmV0d2Vlbk1vdmVzKDEwMDApO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRUaW1lQmV0d2Vlbk1vdmVzID0gKHRpbWVvdXQpID0+IHtcbiAgICAgICAgdGltZUJldHdlZW5Nb3ZlcyA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZ2FtZS5nYW1lSGFuZGxlci5zd2l0Y2hNb3ZlKCk7XG4gICAgICAgIH0sIHRpbWVvdXQpO1xuICAgIH1cblxuICAgIGNvbnN0IHNldFRpbWVPZlRoZU1vdmUgPSAoKSA9PiB7XG4gICAgICAgIHRpbWVyLnZpZXcoKTtcbiAgICAgICAgdGltZU9mVGhlTW92ZSA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGdhbWUuZ2FtZUhhbmRsZXIuc3dpdGNoTW92ZSgpO1xuICAgICAgICB9LCAxNTAwMCk7XG4gICAgICAgIGFsYXJtID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aW1lckVmZmVjdC5wbGF5KCk7XG4gICAgICAgIH0sIDEwMDAwKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICAgICAgdGltZXIucmVzZXQoKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGFpU3BlZWRPZlRvdWdodCk7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lQmV0d2Vlbk1vdmVzKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGFsYXJtKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lT2ZUaGVNb3ZlKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzZXRBaVNwZWVkT2ZUb3VnaHQsIHNldFRpbWVCZXR3ZWVuTW92ZXMsIHNldFRpbWVPZlRoZU1vdmUsIHJlc2V0IH1cbn0iLCJpbXBvcnQgeyBDZWxsSGFuZGxlciB9IGZyb20gJy4vY2VsbEhhbmRsZXInO1xuaW1wb3J0IHsgU2Vzc2lvbiB9IGZyb20gJy4vc2Vzc2lvbic7XG5cbmV4cG9ydCBjb25zdCBTaGlwV2F0ZXJBcmVhcyA9IChwbGF5ZXIsIHNoaXApID0+IHtcbiAgICBsZXQgdW5kZXJUaGVTaGlwID0gW107XG4gICAgbGV0IGFyb3VuZFRoZVNoaXAgPSBbXTtcblxuICAgIGNvbnN0IGdldEFyZWFVbmRlclRoZVNoaXAgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB1bmRlclRoZVNoaXA7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldEFyZWFBcm91bmRUaGVTaGlwID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYXJvdW5kVGhlU2hpcDtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0QXJlYXMgPSAoYXJlYSkgPT4ge1xuICAgICAgICB1bmRlclRoZVNoaXAgPSBhcmVhO1xuICAgICAgICBhcm91bmRUaGVTaGlwID0gc2V0QXJlYUFyb3VuZFRoZVNoaXAoKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0QXJlYUFyb3VuZFRoZVNoaXAgPSAoKSA9PiB7XG4gICAgICAgIGxldCBoYW5kbGVyID0gQ2VsbEhhbmRsZXIoKTtcbiAgICAgICAgbGV0IGFyZWFzID0gW107XG4gICAgICAgIGxldCBwYXJlbnQgPSBwbGF5ZXIuZ2V0R2FtZWJvYXJkKCkuZ2V0U3RydWN0ZWRDb250YWluZXIoKTtcbiAgICAgICAgdW5kZXJUaGVTaGlwLmZvckVhY2goKHNlY3RvcikgPT4ge1xuICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gc2VjdG9yLmdldFhZKCk7XG4gICAgICAgICAgICBsZXQgYXJlYSA9IGhhbmRsZXIuZ2V0Q2VsbEFyb3VuZEFyZWEoXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMueCxcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlcy55LFxuICAgICAgICAgICAgICAgIHBhcmVudCxcbiAgICAgICAgICAgICAgICBzaGlwLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGFyZWFzID0gYXJlYXMuY29uY2F0KGFyZWEpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChhcmVhcykpLmZpbHRlcihcbiAgICAgICAgICAgICh4KSA9PiAhdW5kZXJUaGVTaGlwLmluY2x1ZGVzKHgpLFxuICAgICAgICApO1xuICAgIH07XG5cbiAgICBjb25zdCBvY2N1cHlBcmVhcyA9ICgpID0+IHtcbiAgICAgICAgdW5kZXJUaGVTaGlwLmZvckVhY2goKHNlY3RvcikgPT4ge1xuICAgICAgICAgICAgaWYgKHNlY3Rvci5pc0ZyZWUoKSkge1xuICAgICAgICAgICAgICAgIHNlY3Rvci5vY2N1cHkoc2hpcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBjaGVja0FyZWEgPSAoKSA9PiB7XG4gICAgICAgIGxldCBhY2Vzc2liaWxpdHkgPSB0cnVlO1xuICAgICAgICBsZXQgYXJlYXMgPSB1bmRlclRoZVNoaXAuY29uY2F0KGFyb3VuZFRoZVNoaXApO1xuXG4gICAgICAgIGFyZWFzLmZvckVhY2goKHNlY3RvcikgPT4ge1xuICAgICAgICAgICAgaWYgKCFzZWN0b3IuaXNGcmVlKCkgJiYgc2VjdG9yLmdldE9jY3VwYW50KCkgIT09IHNoaXApIHtcbiAgICAgICAgICAgICAgICBhY2Vzc2liaWxpdHkgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGFjZXNzaWJpbGl0eTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2xlYXJBcmVhcyA9ICgpID0+IHtcbiAgICAgICAgbGV0IGFyZWFzID0gdW5kZXJUaGVTaGlwLmNvbmNhdChhcm91bmRUaGVTaGlwKTtcbiAgICAgICAgYXJlYXMuZm9yRWFjaCgoc2VjdG9yKSA9PiB7XG4gICAgICAgICAgICBzZWN0b3IuY2xlYXIoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGNsZWFyQXJlYXMsXG4gICAgICAgIGNoZWNrQXJlYSxcbiAgICAgICAgZ2V0QXJlYVVuZGVyVGhlU2hpcCxcbiAgICAgICAgZ2V0QXJlYUFyb3VuZFRoZVNoaXAsXG4gICAgICAgIHNldEFyZWFzLFxuICAgICAgICBvY2N1cHlBcmVhcyxcbiAgICB9O1xufTtcbiIsImV4cG9ydCBjb25zdCBBbmltYXRpb25zID0gKCgpID0+IHtcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCB4ID0gKGUsIHgwLCB4MSwgZHVyLCBmaWxsID0gJ25vbmUnKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZS5hbmltYXRlKFt7IGxlZnQ6IGAke3gwfWAgfSwgeyBsZWZ0OiBgJHt4MX1gIH1dLCB7IGR1cmF0aW9uOiBkdXIsIGZpbGw6IGZpbGwgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB5ID0gKGUsIHkwLCB5MSwgZHVyLCBmaWxsID0gJ25vbmUnKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZS5hbmltYXRlKFt7IHRvcDogYCR7eTB9YCB9LCB7IHRvcDogYCR7eTF9YCB9XSwgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgcm90YXRlID0gKGUsIHJvdGF0ZTEsIHJvdGF0ZTIsIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyB0cmFuc2Zvcm06IGByb3RhdGUoJHtyb3RhdGUxfWRlZylgIH0sIHsgdHJhbnNmb3JtOiBgcm90YXRlKCR7cm90YXRlMn1kZWcpYCB9XSwgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgeCwgeSwgcm90YXRlIH07XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGJhY2tncm91bmQgPSAoZSwgY29sb3IxLCBjb2xvcjIsIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICByZXR1cm4gZS5hbmltYXRlKFt7IGJhY2tncm91bmQ6IGNvbG9yMSB9LCB7IGJhY2tncm91bmQ6IGNvbG9yMiB9XSwgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IG9wYWNpdHkgPSAoZSwgb3BhY2l0eTEsIG9wYWNpdHkyLCBkdXIsIGZpbGwgPSAnbm9uZScpID0+IHtcbiAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyBvcGFjaXR5OiBvcGFjaXR5MSB9LCB7IG9wYWNpdHk6IG9wYWNpdHkyIH1dLCB7IGR1cmF0aW9uOiBkdXIsIGZpbGw6IGZpbGwgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgY3VzdG9tID0gKGUsIGR1ciwgZmlsbCA9ICdub25lJywgLi4ua2V5RnJhbWVzKSA9PiB7XG4gICAgICAgIHJldHVybiBlLmFuaW1hdGUoLi4ua2V5RnJhbWVzLCB7IGR1cmF0aW9uOiBkdXIsIGZpbGw6IGZpbGwgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdHJhbnNmb3JtLCBiYWNrZ3JvdW5kLCBvcGFjaXR5LCBjdXN0b20gfTtcbn0pKCk7XG4iLCJleHBvcnQgY29uc3Qgc2V0SGlkZGVuID0gKG5vZGUpID0+IHtcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUhpZGRlbiA9IChub2RlKSA9PiB7XG4gICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRMb3dPcGFjaXR5ID0gKG5vZGUpID0+IHtcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoJ2xvdy1vcGFjaXR5Jyk7XG59XG5cbmV4cG9ydCBjb25zdCBzZXROb3JtYWxPcGFjaXR5ID0gKG5vZGUpID0+IHtcbiAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2xvdy1vcGFjaXR5Jyk7XG59XG5cbmV4cG9ydCBjb25zdCByZW1vdmVOdWxsT3BhY2l0eSA9IChub2RlKSA9PiB7XG4gICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdudWxsLW9wYWNpdHknKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNldE51bGxPcGFjaXR5ID0gKG5vZGUpID0+IHtcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoJ251bGwtb3BhY2l0eScpO1xufSIsImltcG9ydCB7IEFuaW1hdGlvbnMgfSBmcm9tIFwiLi9hbmltYXRpb25zXCI7XG5cbmV4cG9ydCBjb25zdCBkcmF3Q3Jvc3MgPSAoZSwgZHVyLCBmaWxsLCAuLi5rZXlGcmFtZXMpID0+IHtcbiAgICBBbmltYXRpb25zLmN1c3RvbShlLmZpcnN0Q2hpbGQsIGR1ciwgZmlsbCwgLi4ua2V5RnJhbWVzKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmV0dXJuIEFuaW1hdGlvbnMuY3VzdG9tKGUubGFzdENoaWxkLCBkdXIsIGZpbGwsIC4uLmtleUZyYW1lcyk7XG4gICAgfSwgZHVyKTtcbn1cbiIsImltcG9ydCB7IEFuaW1hdGlvbnMgfSBmcm9tIFwiLi9hbmltYXRpb25zXCI7XG5cbmV4cG9ydCBjb25zdCBjb2xvcnNUaW1lciA9IChlLCBkdXIsIGZpbGwsIC4uLmtleUZyYW1lcykgPT4ge1xuICAgIHJldHVybiBBbmltYXRpb25zLmN1c3RvbShlLCBkdXIsIGZpbGwsIC4uLmtleUZyYW1lcyk7XG59XG5cbmV4cG9ydCBjb25zdCBkcmF3VGltZXIgPSAoZSwgZHVyLCBmaWxsLCAuLi5rZXlGcmFtZXMpID0+IHtcbiAgICByZXR1cm4gQW5pbWF0aW9ucy5jdXN0b20oZSwgZHVyLCBmaWxsLCAuLi5rZXlGcmFtZXMpO1xufVxuIiwiZXhwb3J0IGNvbnN0IHNldERyYWdnYWJsZSA9IChub2RlKSA9PiB7XG4gICAgbm9kZS5kcmFnZ2FibGUgPSB0cnVlO1xufTtcbiIsImltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uLy4uL21vZGVscy9nYW1lQ29uZmlnJztcbmltcG9ydCB7IHNldERyYWdnYWJsZSB9IGZyb20gJy4vc2V0RHJhZ2dhYmxlJztcblxuZXhwb3J0IGNvbnN0IHNldERyYWdnYWJsZUZvclNoaXBzID0gKCkgPT4ge1xuICAgIENvbmZpZy5FbGVtZW50cy5zaGlwVHlwZXMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgICBmb3JUeXBlKHR5cGUpO1xuICAgIH0pO1xufTtcblxuY29uc3QgZm9yVHlwZSA9ICh0eXBlKSA9PiB7XG4gICAgY29uc3QgZG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3R5cGV9YCk7XG4gICAgY29uc3Qgc2hpcHMgPSBBcnJheS5mcm9tKGRvY2suY2hpbGRyZW4pO1xuXG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICBzZXREcmFnZ2FibGUoc2hpcCk7XG4gICAgfSk7XG59O1xuIiwiaW1wb3J0IHsgQWxwaGFiZXRzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FscGhhYmV0cyc7XG5pbXBvcnQgeyBnZXROb2RlIH0gZnJvbSAnLi9mYWN0b3J5JztcblxuY29uc3QgYWxwaGFiZXQgPSBBbHBoYWJldHMucnVzKCkuY29kZXM7XG5cbmV4cG9ydCBjb25zdCB2aWV3QXhpcyA9IChib2FyZCkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBib2FyZC5nZXROb2RlKCk7XG4gICAgY29uc3QgeEF4aXMgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy54LWF4aXMnKTtcbiAgICBjb25zdCB5QXhpcyA9IG5vZGUucXVlcnlTZWxlY3RvcignLnktYXhpcycpO1xuICAgIGNvbnN0IHNpemUgPSBib2FyZC5nZXRTaXplKCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemUud2lkdGg7IGkrKykge1xuICAgICAgICBjb25zdCBjZWxsID0gZ2V0Tm9kZSgneC1jZWxsJywgJ2NlbGwnKTtcbiAgICAgICAgY29uc3QgbGV0dGVyID0gU3RyaW5nLmZyb21DaGFyQ29kZShhbHBoYWJldFtpXSkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGxldHRlcjtcbiAgICAgICAgeEF4aXMuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplLmhlaWdodDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBnZXROb2RlKCd5LWNlbGwnLCAnY2VsbCcpO1xuICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gaTtcbiAgICAgICAgeUF4aXMuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgfVxufTtcbiIsImV4cG9ydCBjb25zdCBnZXROb2RlID0gKC4uLm5hbWVzKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgaWYgKG5hbWUgIT09ICcnKSB7XG4gICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQobmFtZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbm9kZTtcbn07XG4iLCJpbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi8uLi9tb2RlbHMvZ2FtZUNvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCB2aWV3Qm9hcmQgPSAoYm9hcmQpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBib2FyZC5nZXRVbnN0cnVjdGVkQ29udGFpbmVyKCk7XG4gICAgY29uc3QgYm9hcmR3ciA9IGJvYXJkLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKTtcbiAgICBjb250YWluZXIuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBib2FyZHdyLmFwcGVuZENoaWxkKGNlbGwuZ2V0Q2VsbE5vZGUoKSk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBTdHlsZVByZXNldHMgPSAoKCkgPT4ge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgJy0tYm9hcmQtd2lkdGgnLFxuICAgICAgICBDb25maWcuR2FtZWJvYXJkLndpZHRoLFxuICAgICk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAnLS1ib2FyZC1oZWlnaHQnLFxuICAgICAgICBDb25maWcuR2FtZWJvYXJkLmhlaWdodCxcbiAgICApO1xufSkoKTtcbiIsImltcG9ydCB7IGRyYXdDcm9zcywgbWlzc0VmZmVjdCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZWxlbWVudHMvYXVkaW9FZmZlY3RzXCI7XG5pbXBvcnQgeyBDcm9zcyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZWxlbWVudHMvdGVtcGxhdGVzXCI7XG5pbXBvcnQgeyByZW1vdmVOdWxsT3BhY2l0eSB9IGZyb20gXCIuLi9hbmltYXRpb25zL2NoYW5nZVZpc2libGVcIjtcblxuZXhwb3J0IGNvbnN0IHZpZXdNaXNzSGl0ID0gKGNlbGwpID0+IHtcbiAgICBtaXNzRWZmZWN0LnBsYXkoKTtcbiAgICBjZWxsLmdldENlbGxOb2RlKCkuY2xhc3NMaXN0LmFkZCgnbWlzcy1oaXQnKTtcbn1cblxuZXhwb3J0IGNvbnN0IHZpZXdBY2N1cmF0ZUhpdCA9IChjZWxsKSA9PiB7XG4gICAgY29uc3QgZGVjayA9IGNlbGwuZ2V0TGlua2VkRGVjaygpO1xuICAgIHJlbW92ZU51bGxPcGFjaXR5KGRlY2suZ2V0Q2VsbE5vZGUoKSk7XG4gICAgZGVjay5zZXRUaGVIaXQoKTtcbiAgICBhcHBlbmRDcm9zc1N2ZyhkZWNrKTtcbiAgICBkcmF3Q3Jvc3MucGxheSgpO1xufVxuXG5leHBvcnQgY29uc3QgYXBwZW5kQ3Jvc3NTdmcgPSAoZGVjaykgPT4ge1xuICAgIGxldCBjcm9zcyA9IENyb3NzKCk7XG4gICAgY3Jvc3MudmlldygpO1xuICAgIGRlY2suZ2V0Q2VsbE5vZGUoKS5hcHBlbmRDaGlsZChjcm9zcy5nZXRTdmcoKSk7XG59IiwiaW1wb3J0IHsgYXBwZW5kQ2hpbGRzLCBzZXRBdHRyaWJ1dGVzIH0gZnJvbSBcIi4uLy4uL2hlbHBlci9oZWxwZXJcIjtcbmltcG9ydCB7IENyb3NzQXR0cmlidXRlcyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZWxlbWVudHMvYXR0cmlidXRlc1wiO1xuaW1wb3J0IHsgQ3Jvc3MgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VsZW1lbnRzL3RlbXBsYXRlc1wiO1xuaW1wb3J0IHsgZHJhd0Nyb3NzIH0gZnJvbSBcIi4uL2FuaW1hdGlvbnMvbWFya2Vyc1wiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlQ3Jvc3NTVkcgPSAoKSA9PiB7XG4gICAgbGV0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgbGV0IGxlZnRMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdsaW5lJyk7XG4gICAgbGV0IHJpZ2h0TGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnbGluZScpO1xuICAgIGFwcGVuZENoaWxkcyhzdmcsIGxlZnRMaW5lLCByaWdodExpbmUpO1xuICAgIHNldEF0dHJpYnV0ZXMobGVmdExpbmUsIENyb3NzQXR0cmlidXRlcy5saW5lLmNvbmNhdChDcm9zc0F0dHJpYnV0ZXMubGVmdERpYWcpKTtcbiAgICBzZXRBdHRyaWJ1dGVzKHJpZ2h0TGluZSwgQ3Jvc3NBdHRyaWJ1dGVzLmxpbmUuY29uY2F0KENyb3NzQXR0cmlidXRlcy5yaWdodERpYWcpKTtcbiAgICByZXR1cm4gc3ZnO1xufVxuXG5leHBvcnQgY29uc3Qgdmlld0Nyb3NzID0gKHN2ZykgPT4ge1xuICAgIGNvbnN0IGFuaW1hdGlvbnMgPSBbXG4gICAgICAgIGRyYXdDcm9zcyhzdmcsIDIwMCwgJ2ZvcndhcmRzJywgW3sgc3Ryb2tlRGFzaG9mZnNldDogJzV2aCcgfSwgeyBzdHJva2VEYXNob2Zmc2V0OiAnMHZoJyB9XSlcbiAgICBdXG4gICAgcmV0dXJuIGFuaW1hdGlvbnM7XG59IiwiaW1wb3J0IHsgbG9zZSwgd2luIH0gZnJvbSBcIi4uLy4uL21vZGVscy9lbGVtZW50cy9hdWRpb0VmZmVjdHNcIjtcblxuZXhwb3J0IGNvbnN0IHZpZXdXaW5Qb3B1cCA9ICgpID0+IHtcbiAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC13aW4nKTtcbiAgICBwb3B1cC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICBwb3B1cC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIHdpbi5wbGF5KCk7XG59XG5cbmV4cG9ydCBjb25zdCB2aWV3TG9zZVBvcHVwID0gKCkgPT4ge1xuICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLWxvc2UnKTtcbiAgICBwb3B1cC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICBwb3B1cC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIGxvc2UucGxheSgpO1xufVxuXG5leHBvcnQgY29uc3QgaGlkZGVuUG9wdXAgPSAocG9wdXApID0+IHtcbiAgICBwb3B1cC5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICBwb3B1cC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgd2luLnBhdXNlKCk7XG4gICAgbG9zZS5wYXVzZSgpO1xufSIsImltcG9ydCB7IHZpZXdBeGlzIH0gZnJvbSAnLi9heGlzJztcbmltcG9ydCB7IHZpZXdCb2FyZCB9IGZyb20gJy4vZ2FtZWJvYXJkJztcblxuZXhwb3J0IGNvbnN0IHZpZXdQcm9maWxlID0gKHByb2ZpbGUpID0+IHtcbiAgICB2aWV3Qm9hcmQocHJvZmlsZS5nZXRHYW1lYm9hcmQoKSk7XG4gICAgdmlld0F4aXMocHJvZmlsZS5nZXRHYW1lYm9hcmQoKSk7XG59O1xuIiwiaW1wb3J0IHsgZ2FtZSB9IGZyb20gJy4uLy4uJztcbmltcG9ydCB7IHJhbmRvbUludEZyb21JbnRlcnZhbCB9IGZyb20gJy4uLy4uL2hlbHBlci9oZWxwZXInO1xuaW1wb3J0IHsgU2Vzc2lvbiB9IGZyb20gJy4uLy4uL21vZGVscy9zZXNzaW9uJztcbmltcG9ydCB7IHJlbW92ZUhpZGRlbiwgc2V0SGlkZGVuIH0gZnJvbSAnLi4vYW5pbWF0aW9ucy9jaGFuZ2VWaXNpYmxlJztcblxuZXhwb3J0IGNvbnN0IHZpZXdTaGlwID0gKHNoaXAsIGhlYWQpID0+IHtcbiAgICBsZXQgaXNWaWV3ID0gc2hpcC5sYXVuY2hTaGlwT25XYXRlcihoZWFkKTtcbiAgICBpZiAoaXNWaWV3KSB7XG4gICAgICAgIHNoaXAuc2V0SGVhZChoZWFkKTtcbiAgICAgICAgaGVhZC5nZXRDZWxsTm9kZSgpLmFwcGVuZENoaWxkKHNoaXAuZ2V0Q29udGFpbmVyKCkpO1xuICAgICAgICBjaGVja1NoaXB5YXJkKCk7XG4gICAgfVxuICAgIHJldHVybiBpc1ZpZXc7XG59O1xuXG5jb25zdCBjaGVja1NoaXB5YXJkID0gKCkgPT4ge1xuICAgIGlmIChTZXNzaW9uLm1hbnVhbE1vZGUpIHtcbiAgICAgICAgaWYgKGdhbWUucGxheWVyLmdldFNoaXB5YXJkKCkuaXNFbXB0eSgpKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjbG9zZU1hbnVhbE1lbnUoKTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5jb25zdCBjbG9zZU1hbnVhbE1lbnUgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcHlhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcHlhcmQnKTtcbiAgICByZW1vdmVIaWRkZW4oZ2FtZS5haS5nZXRHYW1lYm9hcmQoKS5nZXROb2RlKCkpO1xuICAgIHNldEhpZGRlbihzaGlweWFyZCk7XG59O1xuXG5leHBvcnQgY29uc3Qgdmlld1NoaXBPblJhbmRvbUNlbGwgPSAoc2hpcCwgY2VsbHMpID0+IHtcbiAgICBsZXQgY2VsbCA9IGdldFJhbmRvbUNlbGwoY2VsbHMpO1xuICAgIGxldCBpc1ZpZXcgPSB2aWV3U2hpcChzaGlwLCBjZWxsKTtcbiAgICByZXR1cm4gaXNWaWV3ID8gdHJ1ZSA6IHZpZXdTaGlwT25SYW5kb21DZWxsKHNoaXAsIGNlbGxzKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRSYW5kb21DZWxsID0gKGNlbGxzKSA9PiB7XG4gICAgbGV0IGluZGV4ID0gcmFuZG9tSW50RnJvbUludGVydmFsKDAsIGNlbGxzLmxlbmd0aCAtIDEpO1xuICAgIHJldHVybiBjZWxscy5zcGxpY2UoaW5kZXgsIDEpWzBdO1xufTsiLCJpbXBvcnQgeyBnYW1lIH0gZnJvbSAnLi4vLi4nO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2dhbWVDb25maWcnO1xuaW1wb3J0IHsgc2V0RHJhZ2dhYmxlRm9yU2hpcHMgfSBmcm9tICcuLi9kcmFnQW5kRHJvcC9zaGlwcyc7XG5cbmV4cG9ydCBjb25zdCB2aWV3U2hpcHlhcmQgPSAoc2hpcHlhcmQpID0+IHtcbiAgICBmaWxsU2hpcHlhcmROb2RlKHNoaXB5YXJkKTtcbiAgICBzZXREcmFnZ2FibGVGb3JTaGlwcygpO1xufTtcblxuY29uc3QgZmlsbFNoaXB5YXJkTm9kZSA9IChzaGlweWFyZCkgPT4ge1xuICAgIENvbmZpZy5FbGVtZW50cy5zaGlwVHlwZXMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgICBhZGRUeXBlKHR5cGUsIHNoaXB5YXJkKTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGFkZFR5cGUgPSAodHlwZSwgc2hpcHlhcmQpID0+IHtcbiAgICBjb25zdCBkb2NrID0gc2hpcHlhcmQuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoYC4ke3R5cGV9YCk7XG4gICAgY29uc3Qgc2hpcHMgPSBzaGlweWFyZC5nZXRTaGlwc09mVHlwZSh0eXBlKTtcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgIGRvY2suYXBwZW5kQ2hpbGQoc2hpcC5nZXRDb250YWluZXIoKSk7XG4gICAgfSk7XG59O1xuIiwiaW1wb3J0IHsgYXBwZW5kQ2hpbGRzLCBzZXRBdHRyaWJ1dGVzIH0gZnJvbSBcIi4uLy4uL2hlbHBlci9oZWxwZXJcIjtcbmltcG9ydCB7IEhvcml6b250YWxMaW5lIH0gZnJvbSBcIi4uLy4uL21vZGVscy9lbGVtZW50cy9hdHRyaWJ1dGVzXCI7XG5pbXBvcnQgeyBjb2xvcnNUaW1lciwgZHJhd1RpbWVyIH0gZnJvbSBcIi4uL2FuaW1hdGlvbnMvdGltZXJcIjtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRpbWVyU1ZHID0gKCkgPT4ge1xuICAgIGxldCB0aW1lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgbGV0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ2xpbmUnKTtcbiAgICBzZXRBdHRyaWJ1dGVzKGxpbmUsIEhvcml6b250YWxMaW5lLmhvcml6b250YWwpO1xuICAgIGFwcGVuZENoaWxkcyh0aW1lciwgbGluZSk7XG4gICAgcmV0dXJuIHRpbWVyO1xufVxuXG5leHBvcnQgY29uc3Qgdmlld1RpbWVyID0gKHN2ZykgPT4ge1xuICAgIGNvbnN0IGFuaW1hdGlvbnMgPSBbXG4gICAgICAgIGNvbG9yc1RpbWVyKHN2Zy5sYXN0Q2hpbGQsIDE1MDAwLCAnbm9uZScsIFt7IHN0cm9rZTogJ2dyZWVuJyB9LCB7IHN0cm9rZTogJ29yYW5nZScgfSwgeyBzdHJva2U6ICdyZWQnIH1dKSxcbiAgICAgICAgZHJhd1RpbWVyKHN2Zy5sYXN0Q2hpbGQsIDE1MDAwLCAnbm9uZScsIFt7IHN0cm9rZURhc2hvZmZzZXQ6ICc5OXZ3JyB9LCB7IHN0cm9rZURhc2hvZmZzZXQ6ICcwdncnIH1dKVxuICAgIF1cbiAgICByZXR1cm4gYW5pbWF0aW9ucztcbn07IiwiaW1wb3J0IHsgZ2FtZSB9IGZyb20gXCIuLi8uLlwiO1xuaW1wb3J0IHsgcmVtb3ZlSGlkZGVuLCBzZXRIaWRkZW4sIHNldExvd09wYWNpdHksIHNldE5vcm1hbE9wYWNpdHkgfSBmcm9tIFwiLi4vYW5pbWF0aW9ucy9jaGFuZ2VWaXNpYmxlXCI7XG5cbmV4cG9ydCBjb25zdCBoaWRkZW5JbnRlcmZhY2VCZWZvcmVTdGFydFBsYXkgPSAoKSA9PiB7XG4gICAgc2V0SGlkZGVuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5JykpXG4gICAgc2V0SGlkZGVuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXInKSlcbiAgICBzZXRIaWRkZW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpcHMnKSlcbiAgICByZW1vdmVIaWRkZW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV4aXQnKSlcbn1cblxuZXhwb3J0IGNvbnN0IHZpZXdJbnRlcmZhY2VBZnRlckVuZEdhbWUgPSAoKSA9PiB7XG4gICAgcmVtb3ZlSGlkZGVuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5JykpXG4gICAgcmVtb3ZlSGlkZGVuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXInKSlcbiAgICByZW1vdmVIaWRkZW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpcHMnKSlcbiAgICBzZXRIaWRkZW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV4aXQnKSlcbn1cblxuZXhwb3J0IGNvbnN0IHNldFBsYXllck1vdmVEZXNpZ24gPSAoYWksIHBsYXllcikgPT4ge1xuICAgIHNldE5vcm1hbE9wYWNpdHkoYWkuZ2V0R2FtZWJvYXJkKCkuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy54LWF4aXMnKSlcbiAgICBzZXROb3JtYWxPcGFjaXR5KGFpLmdldEdhbWVib2FyZCgpLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcueS1heGlzJykpXG4gICAgc2V0Tm9ybWFsT3BhY2l0eShhaS5nZXRHYW1lYm9hcmQoKS5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLmJvYXJkJykpXG4gICAgc2V0TG93T3BhY2l0eShwbGF5ZXIuZ2V0R2FtZWJvYXJkKCkuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy54LWF4aXMnKSlcbiAgICBzZXRMb3dPcGFjaXR5KHBsYXllci5nZXRHYW1lYm9hcmQoKS5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLnktYXhpcycpKVxuICAgIHNldExvd09wYWNpdHkocGxheWVyLmdldEdhbWVib2FyZCgpLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKSlcbn1cblxuZXhwb3J0IGNvbnN0IHNldEFpTW92ZURlc2lnbiA9IChhaSwgcGxheWVyKSA9PiB7XG4gICAgc2V0Tm9ybWFsT3BhY2l0eShwbGF5ZXIuZ2V0R2FtZWJvYXJkKCkuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy54LWF4aXMnKSlcbiAgICBzZXROb3JtYWxPcGFjaXR5KHBsYXllci5nZXRHYW1lYm9hcmQoKS5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLnktYXhpcycpKVxuICAgIHNldE5vcm1hbE9wYWNpdHkocGxheWVyLmdldEdhbWVib2FyZCgpLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKSlcbiAgICBzZXRMb3dPcGFjaXR5KGFpLmdldEdhbWVib2FyZCgpLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcueC1heGlzJykpXG4gICAgc2V0TG93T3BhY2l0eShhaS5nZXRHYW1lYm9hcmQoKS5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLnktYXhpcycpKVxuICAgIHNldExvd09wYWNpdHkoYWkuZ2V0R2FtZWJvYXJkKCkuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpKVxufVxuXG5leHBvcnQgY29uc3Qgc2V0TWluaVNoaXB5YXJkRGVzaWduID0gKHNoaXB5YXJkKSA9PiB7XG4gICAgY29uc3QgZGVja3MgPSBzaGlweWFyZC5nZXROb2RlKCkucXVlcnlTZWxlY3RvckFsbCgnLmRlY2snKTtcbiAgICBjb25zdCBzaGlwcyA9IHNoaXB5YXJkLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcCcpO1xuICAgIHNoaXBzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZCgnbWluaS1zaGlwJylcbiAgICB9KVxuICAgIGRlY2tzLmZvckVhY2goZGVjayA9PiB7XG4gICAgICAgIGRlY2suY2xhc3NMaXN0LmFkZCgnbWluaS1jZWxsJylcbiAgICB9KVxufVxuXG5leHBvcnQgY29uc3Qgc2V0S2lsbGVkU2hpcERlc2lnbiA9IChzaGlwKSA9PiB7XG4gICAgc2hpcC5nZXRDb250YWluZXIoKS5zdHlsZS5vcGFjaXR5ID0gJzAuMyc7XG4gICAgc2hpcC5nZXRDb250YWluZXIoKS5zdHlsZS5ib3JkZXIgPSAnMC41dmggcmdiYSgyNTUsIDAsIDAsIDEpIHNvbGlkJztcbn1cblxuZXhwb3J0IGNvbnN0IHNldEtpbGxlZE1pbmlTaGlwRGVzaWduID0gKHNoaXApID0+IHtcbiAgICBcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=