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
    font-size: 1vh;
    --board-width: 0;
    --board-height: 0;
    --cell-size: min(5vh, 2vw);
}

html {
    font-family: Roboto;
}

.wrapper {
    display: grid;
    grid-template-rows: min-content min-content min-content;
    width: 100%;
    height: 100%;
    row-gap: min(2vh, 0.8vw);
    justify-items: center;
    width: min-content;
    row-gap: 10vh;
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
    width: min-content;
    max-width: inherit;
    justify-items: center;
    justify-content: center;
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

.selected {
    opacity: 0.01 !important;
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
    grid-template-columns: repeat(var(--board-width), max(var(--cell-size), 2vh));

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
    margin-left: -1px;
    margin-top: -1px;
    border: min(0.1vh, 0.1vw) rgba(0, 0, 255, 1) solid;
    width: min-content;
    height: min-content;
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

@media screen and (max-aspect-ratio: 1.00001/1) {

    .main {
        grid-template-rows: min-content min-content;
    }
}

@media screen and (min-aspect-ratio: 1/1) {
    .main {
        grid-template-columns: min-content min-content;
    }
}

.cross {
    border: 1px red solid
}`, "",{"version":3,"sources":["webpack://./src/views/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    border: 0;\n    height: 100%;\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n}\n\n:root {\n    font-size: 1vh;\n    --board-width: 0;\n    --board-height: 0;\n    --cell-size: min(5vh, 2vw);\n}\n\nhtml {\n    font-family: Roboto;\n}\n\n.wrapper {\n    display: grid;\n    grid-template-rows: min-content min-content min-content;\n    width: 100%;\n    height: 100%;\n    row-gap: min(2vh, 0.8vw);\n    justify-items: center;\n    width: min-content;\n    row-gap: 10vh;\n}\n\nspan {\n    display: grid;\n    padding: min(1vh, 0.4vw);\n    height: min-content;\n    min-width: max-content;\n}\n\n.header {\n    display: grid;\n    grid-template-columns: 1fr 1fr min-content;\n    justify-items: center;\n    width: 100%;\n    height: min-content;\n    padding: min(2vh, 0.8vw);\n}\n\n.title {\n    display: grid;\n    font-size: 3rem;\n}\n\n.tips {\n    display: grid;\n    background-color: rgba(128, 128, 128, 0.2);\n    align-items: center;\n    padding: min(1vh, 1vw);\n    border-radius: min(2vh, 0.8vw);\n    height: min-content;\n}\n\n.exit {\n    display: grid;\n}\n\n.main {\n    display: grid;\n    width: min-content;\n    max-width: inherit;\n    justify-items: center;\n    justify-content: center;\n}\n\n.shipyard {\n    display: grid;\n    align-content: center;\n    grid-template-rows: repeat(4, min-content);\n    row-gap: min(6vh, 2.4vw);\n    padding: min(2vh, 0.8vw);\n    width: min(40vh, 16vw);\n    height: min(40vh, 16vw);\n    max-width: min(50vh, 20vw);\n    align-self: center;\n}\n\n.dock {\n    display: flex;\n    column-gap: min(4vh, 1.6vw);\n    height: min-content;\n}\n\n.selected {\n    opacity: 0.01 !important;\n}\n\n.board__axis-wrapper {\n    display: grid;\n    grid-template-rows: 1fr min-content;\n    row-gap: min(2vh, 0.8vw);\n    width: min-content;\n    height: min-content;\n    justify-items: center;\n    padding: min(5vh, 2vw);\n}\n\n.axis-wrapper {\n    display: grid;\n    width: min-content;\n    grid-template-rows: min-content 1fr;\n}\n\n.board-wrapper {\n    display: grid;\n    grid-template-areas:\n        'axis-x axis-x axis-x'\n        'shipyard axis-y board';\n}\n\n.x-axis {\n    display: grid;\n    grid-area: axis-x;\n    width: min-content;\n    height: min-content;\n    justify-self: end;\n    grid-template-columns: repeat(var(--board-width), max(var(--cell-size), 2vh));\n\n}\n\n.y-axis {\n    display: grid;\n    grid-area: axis-y;\n    grid-template-rows: repeat(var(--board-height), 2fr);\n    width: min-content;\n}\n\n.board {\n    display: grid;\n    grid-area: board;\n    grid-template-columns: repeat(var(--board-width), 2fr);\n    grid-template-rows: repeat(var(--board-height), 2fr);\n    border: min(0.5vh, 0.2vw) rgba(0, 0, 255, 0.2) solid;\n\n}\n\n.play {\n    display: grid;\n    grid-area: board;\n    justify-self: center;\n    align-self: center;\n    width: min(10vh, 10vw);\n    height: min(10vh, 10vw);\n    min-width: 2vh;\n    min-height: 2vh;\n    background-color: rgba(119, 202, 41, 0.726);\n    border: min(1vh, 1vw) rgb(119, 202, 41) solid;\n    z-index: 998;\n}\n\n.ai-mini-shipyard,\n.player-mini-shipyard {\n    display: grid;\n    width: min-content;\n    height: min-content;\n    row-gap: min(2vh, 0.8vw);\n    padding: min(3vh, 1.2vw);\n}\n\n\n.low-opacity {\n    opacity: 0.4;\n}\n\n.block {\n    pointer-events: none;\n}\n\n.hidden {\n    display: none;\n}\n\n.marker {\n    display: grid;\n    justify-self: right;\n    width: min-content;\n}\n\n.cell {\n    display: grid;\n    width: var(--cell-size);\n    height: var(--cell-size);\n    user-select: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    min-width: 2vh;\n    min-height: 2vh;\n}\n\n.miss-hit {\n    background-image: url(/src/views/images/dot.svg);\n    background-size: 100% 100%;\n}\n\n.destroyed {\n    background-color: rgba(247, 190, 190, 0.473) !important;\n}\n\n.live {}\n\n.x-cell,\n.y-cell {\n    justify-items: center;\n    align-content: center;\n    opacity: 0.5;\n}\n\n.marine-sector {\n    display: grid;\n    border: min(0.1vh, 0.1vw) rgba(0, 0, 255, 0.2) solid;\n}\n\n.ship {\n    display: grid;\n    align-content: center;\n    justify-content: center;\n    margin-left: -1px;\n    margin-top: -1px;\n    border: min(0.1vh, 0.1vw) rgba(0, 0, 255, 1) solid;\n    width: min-content;\n    height: min-content;\n}\n\n.horizontal {\n    grid-template-columns: repeat(4, 2fr);\n}\n\n.vertical {\n    grid-template-rows: repeat(4, 2fr);\n}\n\n.deck {\n    display: grid;\n    background-color: rgba(0, 0, 255, 0.1);\n    z-index: 999;\n}\n\n.mini-ship {\n    height: min-content !important;\n    width: min-content !important;\n}\n\n.mini-cell {\n    min-width: 1vh;\n    min-height: 1vh;\n    width: min(2vh, 0.8vw);\n    height: min(2vh, 0.8vw);\n    background-color: rgba(0, 255, 0, 0.1);\n    border: min(0.1vh, 0.1vw) rgba(0, 255, 255, 1) solid;\n}\n\n.footer {\n    display: grid;\n    grid-template-columns: min-content min-content;\n    width: 100%;\n    justify-content: center;\n    gap: min(4vh, 1.6vw);\n}\n\n.random-mode,\n.manual-mode {\n    height: min-content;\n    display: grid;\n    border-bottom: 1px dotted blue;\n    color: blue;\n    cursor: pointer;\n}\n\n.random-mode:hover,\n.manual-mode:hover {\n    color: rgb(122, 231, 72);\n    border-bottom: 1px dotted rgb(122, 231, 72);\n}\n\n.timer {\n    display: grid;\n    width: 100vw;\n    height: min(2vh, 0.8vw);\n    justify-self: start;\n}\n\n.timer>svg {\n    display: grid;\n    width: 100vw;\n}\n\n.hidden {\n    display: none;\n}\n\n.null-opacity {\n    opacity: 0;\n}\n\n.popup-win,\n.popup-lose {\n    position: fixed;\n    display: grid;\n    grid-template-rows: repeat(auto-fit, min-content);\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.8);\n    top: 0;\n    left: 0;\n    justify-items: center;\n    align-items: center;\n    visibility: hidden;\n    opacity: 0;\n    padding: min(1vh, 1vw);\n    z-index: 1000;\n}\n\n.text {\n    display: grid;\n    color: white;\n    font-size: min(10vh, 10vw);\n}\n\n.win,\n.lose {\n    display: grid;\n    grid-template-rows: repeat(3, min-content);\n    height: min-content;\n    justify-items: center;\n    z-index: 2000;\n}\n\n.gif-container {\n    display: flex;\n    justify-self: center;\n    width: min(100vh, 100vw);\n    height: 0;\n    padding-bottom: min(56vh, 22.4vw);\n    position: relative;\n    pointer-events: none;\n}\n\n@media screen and (max-aspect-ratio: 1.00001/1) {\n\n    .main {\n        grid-template-rows: min-content min-content;\n    }\n}\n\n@media screen and (min-aspect-ratio: 1/1) {\n    .main {\n        grid-template-columns: min-content min-content;\n    }\n}\n\n.cross {\n    border: 1px red solid\n}"],"sourceRoot":""}]);
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
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./src/index.js");
/* harmony import */ var _views_nodes_popups__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../views/nodes/popups */ "./src/views/nodes/popups.js");



const setListenersforPopups = () => {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
        const click = popup.addEventListener('click', e => {
            (0,_views_nodes_popups__WEBPACK_IMPORTED_MODULE_1__.hiddenPopup)(popup);
            ___WEBPACK_IMPORTED_MODULE_0__.game.end();
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
        { name: 'stroke-width', val: 'min(0.5vh ,max(0.2vw,0.2vh))' },
        { name: 'stroke-linecap', val: 'round' },
        { name: 'stroke-dasharray', val: 'min(5vh ,max(2vw, 2vh))' },
        { name: 'stroke-dashoffset', val: 'min(5vh ,max(2vw, 2vh))' }
    ];
    const leftDiag = [
        { name: 'x1', val: 'min(1vh ,max(0.4vw, 0.4vh))' },
        { name: 'y1', val: 'min(1vh ,max(0.4vw, 0.4vh))' },
        { name: 'x2', val: 'min(4vh ,max(1.6vw, 1.6vh))' },
        { name: 'y2', val: 'min(4vh ,max(1.6vw, 1.6vh))' },
    ];
    const rightDiag = [
        { name: 'x2', val: 'min(1vh ,max(0.4vw, 0.4vh))' },
        { name: 'y2', val: 'min(4vh ,max(1.6vw, 1.6vh))' },
        { name: 'x1', val: 'min(4vh ,max(1.6vw, 1.6vh))' },
        { name: 'y1', val: 'min(1vh ,max(0.4vw, 0.4vh))' },
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
        ai.getGameboard().hiddenShips();
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
        (0,_views_nodes_ui__WEBPACK_IMPORTED_MODULE_9__.setMiniShipyardDesign)(player.getMiniShipyard())
        ;(0,_views_nodes_ui__WEBPACK_IMPORTED_MODULE_9__.setMiniShipyardDesign)(ai.getMiniShipyard())
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
    }

    const checkLiveShip = (ship) => {
        if (!ship.isLive()) {
            _elements_audioEffects__WEBPACK_IMPORTED_MODULE_11__.killShipEffect.play();
            ship.kill();
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
/* harmony import */ var _views_nodes_ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/nodes/ship */ "./src/views/nodes/ship.js");
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cell */ "./src/models/cell.js");
/* harmony import */ var _elements_templates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elements/templates */ "./src/models/elements/templates.js");
/* harmony import */ var _waterAreas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./waterAreas */ "./src/models/waterAreas.js");








const Ship = (length, player, type) => {
    const container = (0,_views_nodes_factory__WEBPACK_IMPORTED_MODULE_2__.getNode)('ship', 'horizontal');
    let body = [];
    let live = true;
    let horizontal = true;
    let head = null;
    let ship = {};
    let shipWaterAreas = (0,_waterAreas__WEBPACK_IMPORTED_MODULE_6__.ShipWaterAreas)(player, ship);

    const setYourself = (thisShip) => {
        ship = thisShip;
    }

    const getYourself = () => {
        return ship;
    }

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
    }

    const getWaterArea = (head) => {
        let board = getBoard().getStructedContainer();
        let areas = (0,_waterAreas__WEBPACK_IMPORTED_MODULE_6__.ShipWaterAreas)(player, ship);
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
        shipWaterAreas = (0,_waterAreas__WEBPACK_IMPORTED_MODULE_6__.ShipWaterAreas)(player, ship);
    };

    const resetBody = () => {
        container.style.opacity = '1';
        container.style.border = 'min(0.1vh, 0.1vw) rgba(0, 0, 255, 1) solid';
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
        container.style.border = 'min(0.1vh, 0.1vw) rgba(255, 0, 0, 1) solid';
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
    let copyCross = document.querySelector('.cross').cloneNode(true);
    copyCross.classList.remove('hidden');
    let cross = (0,_models_elements_templates__WEBPACK_IMPORTED_MODULE_1__.Cross)();
    deck.getCellNode().appendChild(cross.getSvg());
    cross.view();
    setTimeout(() => {
        deck.getCellNode().removeChild(cross.getSvg());
        deck.getCellNode().appendChild(copyCross);
    }, 500);
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
/* harmony import */ var _animations_markers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations/markers */ "./src/views/animations/markers.js");




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
        (0,_animations_markers__WEBPACK_IMPORTED_MODULE_2__.drawCross)(svg, 200, 'forwards', [{ strokeDashoffset: 'min(5vh ,2vw)' }, { strokeDashoffset: 'min(0vh ,0vw)' }])
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
/* harmony export */   setStandartHorizontalShipDesign: () => (/* binding */ setStandartHorizontalShipDesign),
/* harmony export */   setStandartVerticalShipDesign: () => (/* binding */ setStandartVerticalShipDesign),
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

const setStandartHorizontalShipDesign = (container, length) => {
    container.classList.remove('vertical');
    container.classList.add('horizontal');
    container.style.width = `min(${length * 5}vh,${length * 2}vw)`;
    container.style.height = `min(5vh,2vw)`;
    container.style.minHeight = `2vh`;
    container.style.minWidth = `${length * 2}vh`;
}

const setStandartVerticalShipDesign = (container, length) => {
    container.classList.remove('horizontal');
    container.classList.add('vertical');
    container.style.height = `min(${length * 5}vh,${length * 2}vw)`;
    container.style.width = `min(5vh,2vw)`;
    container.style.minHeight = `${length * 2}vh`;
    container.style.minWidth = `2vh`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNnSDtBQUNqQjtBQUNPO0FBQ3RHLDRDQUE0Qyx1SUFBNEM7QUFDeEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sOEZBQThGLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLE9BQU8sT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFFBQVEsS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFdBQVcsTUFBTSxZQUFZLGFBQWEs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SUFBSSx5RUFBYTtBQUNqQjs7QUFFTztBQUNQLElBQUksNEVBQWdCO0FBQ3BCLElBQUksNEVBQWdCO0FBQ3BCLElBQUksNEVBQWdCO0FBQ3BCLElBQUkseUVBQWE7QUFDakIsSUFBSSx5RUFBYTtBQUNqQixJQUFJLHlFQUFhO0FBQ2pCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3Mvc3R5bGVzL21haW4uY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL3N0eWxlcy9tYWluLmNzcz84OWY2Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yTGlua3MuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yUGxheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9mb3JQb3B1cHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yU2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb250cm9sbGVycy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaGVscGVyL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL2FscGhhYmV0cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9jZWxsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL2NlbGxIYW5kbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL2VsZW1lbnRzL2F0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvZWxlbWVudHMvYXVkaW9FZmZlY3RzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL2VsZW1lbnRzL3RlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9nYW1lQ29uZmlnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9zZXNzaW9uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvc2hpcHlhcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvdGltZU1hbmlwdWxhdG9ycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy93YXRlckFyZWFzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3MvYW5pbWF0aW9ucy9hbmltYXRpb25zLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3MvYW5pbWF0aW9ucy9jaGFuZ2VWaXNpYmxlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3MvYW5pbWF0aW9ucy9tYXJrZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3MvYW5pbWF0aW9ucy90aW1lci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL2RyYWdBbmREcm9wL3NldERyYWdnYWJsZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL2RyYWdBbmREcm9wL3NoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3Mvbm9kZXMvYXhpcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL25vZGVzL2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9ub2Rlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9ub2Rlcy9oaXRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3Mvbm9kZXMvbWFya2Vycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL25vZGVzL3BvcHVwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL25vZGVzL3Byb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9ub2Rlcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdmlld3Mvbm9kZXMvc2hpcHlhcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3cy9ub2Rlcy90aW1lci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzL25vZGVzL3VpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL3ZpZXdzL2ltYWdlcy9kb3Quc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG46cm9vdCB7XG4gICAgZm9udC1zaXplOiAxdmg7XG4gICAgLS1ib2FyZC13aWR0aDogMDtcbiAgICAtLWJvYXJkLWhlaWdodDogMDtcbiAgICAtLWNlbGwtc2l6ZTogbWluKDV2aCwgMnZ3KTtcbn1cblxuaHRtbCB7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbn1cblxuLndyYXBwZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW4tY29udGVudCBtaW4tY29udGVudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcm93LWdhcDogbWluKDJ2aCwgMC44dncpO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgcm93LWdhcDogMTB2aDtcbn1cblxuc3BhbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwYWRkaW5nOiBtaW4oMXZoLCAwLjR2dyk7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xufVxuXG4uaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciBtaW4tY29udGVudDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICBwYWRkaW5nOiBtaW4oMnZoLCAwLjh2dyk7XG59XG5cbi50aXRsZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBmb250LXNpemU6IDNyZW07XG59XG5cbi50aXBzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yKTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IG1pbigxdmgsIDF2dyk7XG4gICAgYm9yZGVyLXJhZGl1czogbWluKDJ2aCwgMC44dncpO1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG59XG5cbi5leGl0IHtcbiAgICBkaXNwbGF5OiBncmlkO1xufVxuXG4ubWFpbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnNoaXB5YXJkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCBtaW4tY29udGVudCk7XG4gICAgcm93LWdhcDogbWluKDZ2aCwgMi40dncpO1xuICAgIHBhZGRpbmc6IG1pbigydmgsIDAuOHZ3KTtcbiAgICB3aWR0aDogbWluKDQwdmgsIDE2dncpO1xuICAgIGhlaWdodDogbWluKDQwdmgsIDE2dncpO1xuICAgIG1heC13aWR0aDogbWluKDUwdmgsIDIwdncpO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmRvY2sge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sdW1uLWdhcDogbWluKDR2aCwgMS42dncpO1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG59XG5cbi5zZWxlY3RlZCB7XG4gICAgb3BhY2l0eTogMC4wMSAhaW1wb3J0YW50O1xufVxuXG4uYm9hcmRfX2F4aXMtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBtaW4tY29udGVudDtcbiAgICByb3ctZ2FwOiBtaW4oMnZoLCAwLjh2dyk7XG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IG1pbig1dmgsIDJ2dyk7XG59XG5cbi5heGlzLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xufVxuXG4uYm9hcmQtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICAnYXhpcy14IGF4aXMteCBheGlzLXgnXG4gICAgICAgICdzaGlweWFyZCBheGlzLXkgYm9hcmQnO1xufVxuXG4ueC1heGlzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtYXJlYTogYXhpcy14O1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICAgIGp1c3RpZnktc2VsZjogZW5kO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KHZhcigtLWJvYXJkLXdpZHRoKSwgbWF4KHZhcigtLWNlbGwtc2l6ZSksIDJ2aCkpO1xuXG59XG5cbi55LWF4aXMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hcmVhOiBheGlzLXk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQodmFyKC0tYm9hcmQtaGVpZ2h0KSwgMmZyKTtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG59XG5cbi5ib2FyZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWFyZWE6IGJvYXJkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KHZhcigtLWJvYXJkLXdpZHRoKSwgMmZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCh2YXIoLS1ib2FyZC1oZWlnaHQpLCAyZnIpO1xuICAgIGJvcmRlcjogbWluKDAuNXZoLCAwLjJ2dykgcmdiYSgwLCAwLCAyNTUsIDAuMikgc29saWQ7XG5cbn1cblxuLnBsYXkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hcmVhOiBib2FyZDtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgd2lkdGg6IG1pbigxMHZoLCAxMHZ3KTtcbiAgICBoZWlnaHQ6IG1pbigxMHZoLCAxMHZ3KTtcbiAgICBtaW4td2lkdGg6IDJ2aDtcbiAgICBtaW4taGVpZ2h0OiAydmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTksIDIwMiwgNDEsIDAuNzI2KTtcbiAgICBib3JkZXI6IG1pbigxdmgsIDF2dykgcmdiKDExOSwgMjAyLCA0MSkgc29saWQ7XG4gICAgei1pbmRleDogOTk4O1xufVxuXG4uYWktbWluaS1zaGlweWFyZCxcbi5wbGF5ZXItbWluaS1zaGlweWFyZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICByb3ctZ2FwOiBtaW4oMnZoLCAwLjh2dyk7XG4gICAgcGFkZGluZzogbWluKDN2aCwgMS4ydncpO1xufVxuXG5cbi5sb3ctb3BhY2l0eSB7XG4gICAgb3BhY2l0eTogMC40O1xufVxuXG4uYmxvY2sge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ubWFya2VyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xufVxuXG4uY2VsbCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDogdmFyKC0tY2VsbC1zaXplKTtcbiAgICBoZWlnaHQ6IHZhcigtLWNlbGwtc2l6ZSk7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICBtaW4td2lkdGg6IDJ2aDtcbiAgICBtaW4taGVpZ2h0OiAydmg7XG59XG5cbi5taXNzLWhpdCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG4uZGVzdHJveWVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NywgMTkwLCAxOTAsIDAuNDczKSAhaW1wb3J0YW50O1xufVxuXG4ubGl2ZSB7fVxuXG4ueC1jZWxsLFxuLnktY2VsbCB7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBvcGFjaXR5OiAwLjU7XG59XG5cbi5tYXJpbmUtc2VjdG9yIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGJvcmRlcjogbWluKDAuMXZoLCAwLjF2dykgcmdiYSgwLCAwLCAyNTUsIDAuMikgc29saWQ7XG59XG5cbi5zaGlwIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogLTFweDtcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xuICAgIGJvcmRlcjogbWluKDAuMXZoLCAwLjF2dykgcmdiYSgwLCAwLCAyNTUsIDEpIHNvbGlkO1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xufVxuXG4uaG9yaXpvbnRhbCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMmZyKTtcbn1cblxuLnZlcnRpY2FsIHtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAyZnIpO1xufVxuXG4uZGVjayB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC4xKTtcbiAgICB6LWluZGV4OiA5OTk7XG59XG5cbi5taW5pLXNoaXAge1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQgIWltcG9ydGFudDtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQgIWltcG9ydGFudDtcbn1cblxuLm1pbmktY2VsbCB7XG4gICAgbWluLXdpZHRoOiAxdmg7XG4gICAgbWluLWhlaWdodDogMXZoO1xuICAgIHdpZHRoOiBtaW4oMnZoLCAwLjh2dyk7XG4gICAgaGVpZ2h0OiBtaW4oMnZoLCAwLjh2dyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDAsIDAuMSk7XG4gICAgYm9yZGVyOiBtaW4oMC4xdmgsIDAuMXZ3KSByZ2JhKDAsIDI1NSwgMjU1LCAxKSBzb2xpZDtcbn1cblxuLmZvb3RlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogbWluKDR2aCwgMS42dncpO1xufVxuXG4ucmFuZG9tLW1vZGUsXG4ubWFudWFsLW1vZGUge1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIGJsdWU7XG4gICAgY29sb3I6IGJsdWU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucmFuZG9tLW1vZGU6aG92ZXIsXG4ubWFudWFsLW1vZGU6aG92ZXIge1xuICAgIGNvbG9yOiByZ2IoMTIyLCAyMzEsIDcyKTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHJnYigxMjIsIDIzMSwgNzIpO1xufVxuXG4udGltZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogbWluKDJ2aCwgMC44dncpO1xuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XG59XG5cbi50aW1lcj5zdmcge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgd2lkdGg6IDEwMHZ3O1xufVxuXG4uaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ubnVsbC1vcGFjaXR5IHtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG4ucG9wdXAtd2luLFxuLnBvcHVwLWxvc2Uge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBtaW4tY29udGVudCk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgb3BhY2l0eTogMDtcbiAgICBwYWRkaW5nOiBtaW4oMXZoLCAxdncpO1xuICAgIHotaW5kZXg6IDEwMDA7XG59XG5cbi50ZXh0IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IG1pbigxMHZoLCAxMHZ3KTtcbn1cblxuLndpbixcbi5sb3NlIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIG1pbi1jb250ZW50KTtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICB6LWluZGV4OiAyMDAwO1xufVxuXG4uZ2lmLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICB3aWR0aDogbWluKDEwMHZoLCAxMDB2dyk7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiBtaW4oNTZ2aCwgMjIuNHZ3KTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtYXNwZWN0LXJhdGlvOiAxLjAwMDAxLzEpIHtcblxuICAgIC5tYWluIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4tYXNwZWN0LXJhdGlvOiAxLzEpIHtcbiAgICAubWFpbiB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XG4gICAgfVxufVxuXG4uY3Jvc3Mge1xuICAgIGJvcmRlcjogMXB4IHJlZCBzb2xpZFxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3ZpZXdzL3N0eWxlcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0lBR0ksVUFBVTtJQUNWLFNB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LG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLFNBQVM7SUFDVCxpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSTtRQUNJLDJDQUEyQztJQUMvQztBQUNKOztBQUVBO0lBQ0k7UUFDSSw4Q0FBOEM7SUFDbEQ7QUFDSjs7QUFFQTtJQUNJO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICBmb250LXNpemU6IDF2aDtcXG4gICAgLS1ib2FyZC13aWR0aDogMDtcXG4gICAgLS1ib2FyZC1oZWlnaHQ6IDA7XFxuICAgIC0tY2VsbC1zaXplOiBtaW4oNXZoLCAydncpO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICByb3ctZ2FwOiBtaW4oMnZoLCAwLjh2dyk7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICByb3ctZ2FwOiAxMHZoO1xcbn1cXG5cXG5zcGFuIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGFkZGluZzogbWluKDF2aCwgMC40dncpO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIG1pbi1jb250ZW50O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBwYWRkaW5nOiBtaW4oMnZoLCAwLjh2dyk7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLnRpcHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMik7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IG1pbigxdmgsIDF2dyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IG1pbigydmgsIDAuOHZ3KTtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG59XFxuXFxuLmV4aXQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc2hpcHlhcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIG1pbi1jb250ZW50KTtcXG4gICAgcm93LWdhcDogbWluKDZ2aCwgMi40dncpO1xcbiAgICBwYWRkaW5nOiBtaW4oMnZoLCAwLjh2dyk7XFxuICAgIHdpZHRoOiBtaW4oNDB2aCwgMTZ2dyk7XFxuICAgIGhlaWdodDogbWluKDQwdmgsIDE2dncpO1xcbiAgICBtYXgtd2lkdGg6IG1pbig1MHZoLCAyMHZ3KTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uZG9jayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbHVtbi1nYXA6IG1pbig0dmgsIDEuNnZ3KTtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gICAgb3BhY2l0eTogMC4wMSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYm9hcmRfX2F4aXMtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIG1pbi1jb250ZW50O1xcbiAgICByb3ctZ2FwOiBtaW4oMnZoLCAwLjh2dyk7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiBtaW4oNXZoLCAydncpO1xcbn1cXG5cXG4uYXhpcy13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcXG59XFxuXFxuLmJvYXJkLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgJ2F4aXMteCBheGlzLXggYXhpcy14J1xcbiAgICAgICAgJ3NoaXB5YXJkIGF4aXMteSBib2FyZCc7XFxufVxcblxcbi54LWF4aXMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWFyZWE6IGF4aXMteDtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQodmFyKC0tYm9hcmQtd2lkdGgpLCBtYXgodmFyKC0tY2VsbC1zaXplKSwgMnZoKSk7XFxuXFxufVxcblxcbi55LWF4aXMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWFyZWE6IGF4aXMteTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQodmFyKC0tYm9hcmQtaGVpZ2h0KSwgMmZyKTtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWFyZWE6IGJvYXJkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS1ib2FyZC13aWR0aCksIDJmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KHZhcigtLWJvYXJkLWhlaWdodCksIDJmcik7XFxuICAgIGJvcmRlcjogbWluKDAuNXZoLCAwLjJ2dykgcmdiYSgwLCAwLCAyNTUsIDAuMikgc29saWQ7XFxuXFxufVxcblxcbi5wbGF5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hcmVhOiBib2FyZDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IG1pbigxMHZoLCAxMHZ3KTtcXG4gICAgaGVpZ2h0OiBtaW4oMTB2aCwgMTB2dyk7XFxuICAgIG1pbi13aWR0aDogMnZoO1xcbiAgICBtaW4taGVpZ2h0OiAydmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTE5LCAyMDIsIDQxLCAwLjcyNik7XFxuICAgIGJvcmRlcjogbWluKDF2aCwgMXZ3KSByZ2IoMTE5LCAyMDIsIDQxKSBzb2xpZDtcXG4gICAgei1pbmRleDogOTk4O1xcbn1cXG5cXG4uYWktbWluaS1zaGlweWFyZCxcXG4ucGxheWVyLW1pbmktc2hpcHlhcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIHJvdy1nYXA6IG1pbigydmgsIDAuOHZ3KTtcXG4gICAgcGFkZGluZzogbWluKDN2aCwgMS4ydncpO1xcbn1cXG5cXG5cXG4ubG93LW9wYWNpdHkge1xcbiAgICBvcGFjaXR5OiAwLjQ7XFxufVxcblxcbi5ibG9jayB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1hcmtlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG59XFxuXFxuLmNlbGwge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogdmFyKC0tY2VsbC1zaXplKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1jZWxsLXNpemUpO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICBtaW4td2lkdGg6IDJ2aDtcXG4gICAgbWluLWhlaWdodDogMnZoO1xcbn1cXG5cXG4ubWlzcy1oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3NyYy92aWV3cy9pbWFnZXMvZG90LnN2Zyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbn1cXG5cXG4uZGVzdHJveWVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsIDE5MCwgMTkwLCAwLjQ3MykgIWltcG9ydGFudDtcXG59XFxuXFxuLmxpdmUge31cXG5cXG4ueC1jZWxsLFxcbi55LWNlbGwge1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4ubWFyaW5lLXNlY3RvciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJvcmRlcjogbWluKDAuMXZoLCAwLjF2dykgcmdiYSgwLCAwLCAyNTUsIDAuMikgc29saWQ7XFxufVxcblxcbi5zaGlwIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xcHg7XFxuICAgIG1hcmdpbi10b3A6IC0xcHg7XFxuICAgIGJvcmRlcjogbWluKDAuMXZoLCAwLjF2dykgcmdiYSgwLCAwLCAyNTUsIDEpIHNvbGlkO1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxufVxcblxcbi5ob3Jpem9udGFsIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMmZyKTtcXG59XFxuXFxuLnZlcnRpY2FsIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMmZyKTtcXG59XFxuXFxuLmRlY2sge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC4xKTtcXG4gICAgei1pbmRleDogOTk5O1xcbn1cXG5cXG4ubWluaS1zaGlwIHtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudCAhaW1wb3J0YW50O1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQgIWltcG9ydGFudDtcXG59XFxuXFxuLm1pbmktY2VsbCB7XFxuICAgIG1pbi13aWR0aDogMXZoO1xcbiAgICBtaW4taGVpZ2h0OiAxdmg7XFxuICAgIHdpZHRoOiBtaW4oMnZoLCAwLjh2dyk7XFxuICAgIGhlaWdodDogbWluKDJ2aCwgMC44dncpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMCwgMC4xKTtcXG4gICAgYm9yZGVyOiBtaW4oMC4xdmgsIDAuMXZ3KSByZ2JhKDAsIDI1NSwgMjU1LCAxKSBzb2xpZDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiBtaW4oNHZoLCAxLjZ2dyk7XFxufVxcblxcbi5yYW5kb20tbW9kZSxcXG4ubWFudWFsLW1vZGUge1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIGJsdWU7XFxuICAgIGNvbG9yOiBibHVlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yYW5kb20tbW9kZTpob3ZlcixcXG4ubWFudWFsLW1vZGU6aG92ZXIge1xcbiAgICBjb2xvcjogcmdiKDEyMiwgMjMxLCA3Mik7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgcmdiKDEyMiwgMjMxLCA3Mik7XFxufVxcblxcbi50aW1lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiBtaW4oMnZoLCAwLjh2dyk7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxufVxcblxcbi50aW1lcj5zdmcge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubnVsbC1vcGFjaXR5IHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnBvcHVwLXdpbixcXG4ucG9wdXAtbG9zZSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIG1pbi1jb250ZW50KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwYWRkaW5nOiBtaW4oMXZoLCAxdncpO1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbn1cXG5cXG4udGV4dCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiBtaW4oMTB2aCwgMTB2dyk7XFxufVxcblxcbi53aW4sXFxuLmxvc2Uge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBtaW4tY29udGVudCk7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMjAwMDtcXG59XFxuXFxuLmdpZi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IG1pbigxMDB2aCwgMTAwdncpO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIHBhZGRpbmctYm90dG9tOiBtaW4oNTZ2aCwgMjIuNHZ3KTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1hc3BlY3QtcmF0aW86IDEuMDAwMDEvMSkge1xcblxcbiAgICAubWFpbiB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4tYXNwZWN0LXJhdGlvOiAxLzEpIHtcXG4gICAgLm1haW4ge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcXG4gICAgfVxcbn1cXG5cXG4uY3Jvc3Mge1xcbiAgICBib3JkZXI6IDFweCByZWQgc29saWRcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZ2FtZSB9IGZyb20gJy4uLy4uJztcbmltcG9ydCB7IFNlc3Npb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvc2Vzc2lvbic7XG5pbXBvcnQgeyByZW1vdmVIaWRkZW4sIHNldEhpZGRlbiB9IGZyb20gJy4uLy4uL3ZpZXdzL2FuaW1hdGlvbnMvY2hhbmdlVmlzaWJsZSc7XG5pbXBvcnQgeyB2aWV3U2hpcHlhcmQgfSBmcm9tICcuLi8uLi92aWV3cy9ub2Rlcy9zaGlweWFyZCc7XG5cbmV4cG9ydCBjb25zdCBzZXRMaXN0ZW5lcnNGb3JMaW5rcyA9ICgpID0+IHtcbiAgICBjb25zdCBtYW51YWxNb2RlTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYW51YWwtbW9kZScpO1xuICAgIGNvbnN0IHJhbmRvbU1vZGVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmRvbS1tb2RlJyk7XG4gICAgY29uc3Qgc2hpcHlhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcHlhcmQnKTtcblxuICAgIGNvbnN0IG9wZW5NYW51YWxNb2RlID0gbWFudWFsTW9kZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBTZXNzaW9uLm1hbnVhbE1vZGUgPSB0cnVlO1xuICAgICAgICBnYW1lLnBsYXllci5nZXRHYW1lYm9hcmQoKS5yZXNldCgpO1xuICAgICAgICB2aWV3U2hpcHlhcmQoZ2FtZS5wbGF5ZXIuZ2V0U2hpcHlhcmQoKSk7XG4gICAgICAgIHNldEhpZGRlbihnYW1lLmFpLmdldEdhbWVib2FyZCgpLmdldE5vZGUoKSk7XG4gICAgICAgIHJlbW92ZUhpZGRlbihzaGlweWFyZCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBvcGVuUmFuZG9tTW9kZSA9IHJhbmRvbU1vZGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgU2Vzc2lvbi5tYW51YWxNb2RlID0gZmFsc2U7XG4gICAgICAgIHJlbW92ZUhpZGRlbihnYW1lLmFpLmdldEdhbWVib2FyZCgpLmdldE5vZGUoKSk7XG4gICAgICAgIHNldEhpZGRlbihzaGlweWFyZCk7XG4gICAgICAgIGdhbWUucGxheWVyLmdldEdhbWVib2FyZCgpLnJhbmRvbUZpbGxpbmdPZlNoaXBzKCk7XG4gICAgfSk7XG59O1xuIiwiaW1wb3J0IHsgZ2FtZSB9IGZyb20gXCIuLi8uLlwiO1xuaW1wb3J0IHsgY2xpY2tFZmZlY3QgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VsZW1lbnRzL2F1ZGlvRWZmZWN0c1wiO1xuXG5leHBvcnQgY29uc3Qgc2V0TGlzdGVuZXJzRm9yUGxheUJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheScpO1xuICAgIGNvbnN0IGNsaWNrID0gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGNsaWNrRWZmZWN0LnBsYXkoKTtcbiAgICAgICAgZ2FtZS5wbGF5KCk7XG4gICAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IHNldExpc3RlbmVyc0ZvckV4aXRCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV4aXQnKTtcblxuICAgIGNvbnN0IGNsaWNrID0gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGNsaWNrRWZmZWN0LnBsYXkoKTtcbiAgICAgICAgZ2FtZS5lbmQoKTtcbiAgICB9KVxufVxuXG5leHBvcnQgY29uc3Qgc2V0TGlzdGVuZXJzRm9yQ2VsbHMgPSAoKSA9PiB7XG4gICAgY29uc3QgY2VsbHMgPSBnYW1lLmFpLmdldEdhbWVib2FyZCgpLmdldFVuc3RydWN0ZWRDb250YWluZXIoKTtcbiAgICBjZWxscy5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICBjb25zdCBub2RlID0gY2VsbC5nZXRDZWxsTm9kZSgpO1xuICAgICAgICBub2RlLnN0eWxlLnpJbmRleCA9IDEwMDA7XG4gICAgICAgIGNvbnN0IGNsaWNrID0gbm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgZ2FtZS5nYW1lSGFuZGxlci5jaGVja0NlbGwoY2VsbCk7XG4gICAgICAgIH0pXG4gICAgfSlcbn0iLCJpbXBvcnQgeyBnYW1lIH0gZnJvbSBcIi4uLy4uXCI7XG5pbXBvcnQgeyBoaWRkZW5Qb3B1cCB9IGZyb20gXCIuLi8uLi92aWV3cy9ub2Rlcy9wb3B1cHNcIjtcblxuZXhwb3J0IGNvbnN0IHNldExpc3RlbmVyc2ZvclBvcHVwcyA9ICgpID0+IHtcbiAgICBjb25zdCBwb3B1cHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXAnKTtcbiAgICBwb3B1cHMuZm9yRWFjaChwb3B1cCA9PiB7XG4gICAgICAgIGNvbnN0IGNsaWNrID0gcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGhpZGRlblBvcHVwKHBvcHVwKTtcbiAgICAgICAgICAgIGdhbWUuZW5kKCk7XG4gICAgICAgIH0pXG4gICAgfSk7XG59IiwiaW1wb3J0IHsgZ2FtZSB9IGZyb20gJy4uLy4uJztcbmltcG9ydCB7IFNlc3Npb24sIHJlc2V0U2Vzc2lvbiB9IGZyb20gJy4uLy4uL21vZGVscy9zZXNzaW9uJztcbmltcG9ydCB7IHZpZXdTaGlwIH0gZnJvbSAnLi4vLi4vdmlld3Mvbm9kZXMvc2hpcCc7XG5pbXBvcnQgeyBzaGlwRHJhZ0VuZCB9IGZyb20gJy4uL3NoaXAnO1xuXG5leHBvcnQgY29uc3Qgc2V0TGlzdGVuZXJzRm9yU2hpcHMgPSAoc2hpcHMpID0+IHtcbiAgICBjb25zdCBib3JkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLWJvYXJkJyk7XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICBjb25zdCBkZWNrcyA9IHNoaXAuZ2V0Qm9keSgpO1xuICAgICAgICBkZWNrcy5mb3JFYWNoKChkZWNrKSA9PiB7XG4gICAgICAgICAgICBkZWNrLmdldENlbGxOb2RlKCkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2dCkgPT4ge1xuICAgICAgICAgICAgICAgIFNlc3Npb24uaW5kZXggPSBkZWNrLmdldE51bWJlcigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNoaXAuZ2V0Q29udGFpbmVyKCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHNoaXAuZ2V0SGVhZCgpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgU2Vzc2lvbi5hY3RpdmVTaGlwID0gc2hpcDtcbiAgICAgICAgICAgICAgICBTZXNzaW9uLmN1cnJlbnRFbGVtZW50ID0gc2hpcC5nZXRIZWFkKCkuZ2V0Q2VsbE5vZGUoKTtcbiAgICAgICAgICAgICAgICBzaGlwLm9yaWVudGF0aW9uU3dpdGNoKCk7XG4gICAgICAgICAgICAgICAgbGV0IGlzVmlldyA9IHZpZXdTaGlwKHNoaXAsIHNoaXAuZ2V0SGVhZCgpKTtcblxuICAgICAgICAgICAgICAgIGlmIChpc1ZpZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hpcC5zZXRPcmllbnRhdGlvbigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNoaXAub3JpZW50YXRpb25Td2l0Y2goKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXNldFNlc3Npb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2hpcC5nZXRDb250YWluZXIoKS5hZGRFdmVudExpc3RlbmVyKGBkcmFnc3RhcnRgLCAoZXZ0KSA9PiB7XG4gICAgICAgICAgICBldnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoYHNlbGVjdGVkYCk7XG4gICAgICAgICAgICBTZXNzaW9uLmFjdGl2ZVNoaXAgPSBzaGlwO1xuICAgICAgICB9KTtcblxuICAgICAgICBzaGlwLmdldENvbnRhaW5lcigpLmFkZEV2ZW50TGlzdGVuZXIoYGRyYWdlbmRgLCAoZXZ0KSA9PiB7XG4gICAgICAgICAgICBldnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoYHNlbGVjdGVkYCk7XG4gICAgICAgICAgICBzaGlwRHJhZ0VuZCgpO1xuICAgICAgICAgICAgcmVzZXRTZXNzaW9uKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgYm9yZGVyLmFkZEV2ZW50TGlzdGVuZXIoYGRyYWdvdmVyYCwgKGV2dCkgPT4ge1xuICAgICAgICBTZXNzaW9uLmN1cnJlbnRFbGVtZW50ID0gZXZ0LnRhcmdldDtcbiAgICB9KTtcbn07XG4iLCJpbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9tb2RlbHMvZ2FtZUNvbmZpZyc7XG5pbXBvcnQgeyBTZXNzaW9uIH0gZnJvbSAnLi4vbW9kZWxzL3Nlc3Npb24nO1xuaW1wb3J0IHsgdmlld1NoaXAgfSBmcm9tICcuLi92aWV3cy9ub2Rlcy9zaGlwJztcblxuZXhwb3J0IGNvbnN0IHNoaXBEcmFnRW5kID0gKCkgPT4ge1xuICAgIGxldCBpc01vdmVhYmxlID0gZmFsc2U7XG4gICAgbGV0IGlzQWx0ZXJNb3ZhYmxlID0gZmFsc2U7XG4gICAgbGV0IGJvZHkgPSBTZXNzaW9uLmFjdGl2ZVNoaXAuZ2V0Qm9keSgpO1xuICAgIGlmIChTZXNzaW9uLmN1cnJlbnRFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGlzTW92ZWFibGUgPSBTZXNzaW9uLmN1cnJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhgbWFyaW5lLXNlY3RvcmApO1xuICAgICAgICBpc0FsdGVyTW92YWJsZSA9IFNlc3Npb24uY3VycmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGBkZWNrYCk7XG4gICAgfVxuXG4gICAgaWYgKCFpc01vdmVhYmxlICYmICFpc0FsdGVyTW92YWJsZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGlzTW92ZWFibGUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDb25maWcuR2FtZWJvYXJkLmhlaWdodDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IENvbmZpZy5HYW1lYm9hcmQud2lkdGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgU2Vzc2lvbi5hY3RpdmVTaGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2V0Qm9hcmQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmdldFN0cnVjdGVkQ29udGFpbmVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgIFtqXVtpXS5nZXRDZWxsTm9kZSgpID09PSBTZXNzaW9uLmN1cnJlbnRFbGVtZW50XG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhZGRTaGlwT25Cb2FyZChTZXNzaW9uLmluZGV4LCBqLCBpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzQWx0ZXJNb3ZhYmxlKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9keS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGJvZHlbaV0uZ2V0Q2VsbE5vZGUoKSA9PT0gU2Vzc2lvbi5jdXJyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIFNlc3Npb24uZG91YmxlSW5kZXggPSBTZXNzaW9uLmluZGV4IC0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoU2Vzc2lvbi5kb3VibGVJbmRleCAhPT0gJ3NoaXAnKSB7XG4gICAgICAgICAgICBsZXQgaGVhZCA9IFNlc3Npb24uYWN0aXZlU2hpcC5nZXRIZWFkKCkuZ2V0Q2VsbE5vZGUoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQ29uZmlnLkdhbWVib2FyZC5oZWlnaHQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgQ29uZmlnLkdhbWVib2FyZC53aWR0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIFNlc3Npb24uYWN0aXZlU2hpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRCb2FyZCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldFN0cnVjdGVkQ29udGFpbmVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbal1baV0uZ2V0Q2VsbE5vZGUoKSA9PT0gaGVhZFxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhZGRTaGlwT25Cb2FyZChTZXNzaW9uLmRvdWJsZUluZGV4LCBqLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmNvbnN0IGFkZFNoaXBPbkJvYXJkID0gKGluZGV4LCB5LCB4KSA9PiB7XG4gICAgbGV0IGRhdGEgPSBnZXREYXRhKGluZGV4LCB5LCB4KTtcbiAgICByZXR1cm4gdmlld1NoaXBPbkJvYXJkKGRhdGEpO1xufTtcblxuY29uc3QgZ2V0RGF0YSA9IChpbmRleCwgeCwgeSkgPT4ge1xuICAgIHJldHVybiBTZXNzaW9uLmFjdGl2ZVNoaXAuaXNIb3Jpem9udGFsKClcbiAgICAgICAgPyB7IHg6IHgsIHk6IHkgLSBpbmRleCB9XG4gICAgICAgIDogeyB4OiB4IC0gaW5kZXgsIHk6IHkgfTtcbn07XG5cbmNvbnN0IHZpZXdTaGlwT25Cb2FyZCA9IChkYXRhKSA9PiB7XG4gICAgcmV0dXJuIHZpZXdTaGlwKFxuICAgICAgICBTZXNzaW9uLmFjdGl2ZVNoaXAsXG4gICAgICAgIFNlc3Npb24uYWN0aXZlU2hpcC5nZXRCb2FyZCgpLmdldFN0cnVjdGVkQ29udGFpbmVyKClbZGF0YS54XVtkYXRhLnldLFxuICAgICk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IHJhbmRvbUludEZyb21JbnRlcnZhbCA9IChtaW4sIG1heCkgPT4ge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUNoaWxkcyA9IChub2RlKSA9PiB7XG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgd2hpbGUgKG5vZGUuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgbm9kZS5yZW1vdmVDaGlsZChub2RlLmxhc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgYWRkQ2xhc3NlcyA9IChub2RlLCAuLi5jbGFzc2VzKSA9PiB7XG4gICAgZm9yIChsZXQgY3VyQ2xhc3Mgb2YgY2xhc3Nlcykge1xuICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoY3VyQ2xhc3MpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNldEF0dHJpYnV0ZXMgPSAoZSwgYXRycykgPT4ge1xuICAgIGZvciAobGV0IGF0ciBvZiBhdHJzKSB7XG4gICAgICAgIGUuc2V0QXR0cmlidXRlKGF0ci5uYW1lLCBhdHIudmFsKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBhcHBlbmRDaGlsZHMgPSAobm9kZSwgLi4uY2hpbGRzKSA9PiB7XG4gICAgZm9yIChsZXQgY2hpbGQgb2YgY2hpbGRzKSB7XG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgIH1cbn0iLCJpbXBvcnQgJy4vdmlld3Mvc3R5bGVzL21haW4uY3NzJztcbmltcG9ydCB7IFByb2ZpbGUgfSBmcm9tICcuL21vZGVscy9wbGF5ZXInO1xuaW1wb3J0IHsgdmlld1Byb2ZpbGUgfSBmcm9tICcuL3ZpZXdzL25vZGVzL3Byb2ZpbGUnO1xuaW1wb3J0IHsgc2V0TGlzdGVuZXJzRm9yTGlua3MgfSBmcm9tICcuL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9mb3JMaW5rcyc7XG5pbXBvcnQgeyB2aWV3U2hpcHlhcmQgfSBmcm9tICcuL3ZpZXdzL25vZGVzL3NoaXB5YXJkJztcbmltcG9ydCB7IHNldExpc3RlbmVyc0ZvclNoaXBzIH0gZnJvbSAnLi9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yU2hpcHMnO1xuaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vbW9kZWxzL2dhbWUnO1xuXG5leHBvcnQgY29uc3QgZ2FtZSA9IEdhbWUoKTtcbmdhbWUuc3RhcnQoKTsiLCJjb25zdCBBbHBoYWJldCA9IChmaXJzdENoYXJDb2RlLCBsYXN0Q2hhckNvZGUpID0+IHtcbiAgICBjb25zdCBsb25nID0gbGFzdENoYXJDb2RlIC0gZmlyc3RDaGFyQ29kZSArIDE7XG4gICAgY29uc3QgY29kZXMgPSBBcnJheS5mcm9tKEFycmF5KGxvbmcpLmtleXMoKSwgKHgpID0+IHggKyBmaXJzdENoYXJDb2RlKTtcblxuICAgIGNvbnN0IGlzVGhpc0FscGhhYmV0ID0gKGNoYXJDb2RlKSA9PiB7XG4gICAgICAgIGlmIChjaGFyQ29kZSA+PSBmaXJzdENoYXJDb2RlICYmIGNoYXJDb2RlIDw9IGxhc3RDaGFyQ29kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBmaXJzdENoYXJDb2RlLCBsYXN0Q2hhckNvZGUsIGxvbmcsIGlzVGhpc0FscGhhYmV0LCBjb2RlcyB9O1xufTtcblxuZXhwb3J0IGNvbnN0IEFscGhhYmV0cyA9ICgoKSA9PiB7XG4gICAgY29uc3QgZW5nID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhbHBoYWJldCA9IEFscGhhYmV0KDk3LCAxMjIpO1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihhbHBoYWJldCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJ1cyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWxwaGFiZXQgPSBBbHBoYWJldCgxMDcyLCAxMTAzKTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYWxwaGFiZXQpO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBlbmcsIHJ1cyB9O1xufSkoKTtcbiIsImltcG9ydCB7IHJlbW92ZUNoaWxkcyB9IGZyb20gJy4uL2hlbHBlci9oZWxwZXInO1xuaW1wb3J0IHsgc2V0Tm9ybWFsT3BhY2l0eSB9IGZyb20gJy4uL3ZpZXdzL2FuaW1hdGlvbnMvY2hhbmdlVmlzaWJsZSc7XG5pbXBvcnQgeyBnZXROb2RlIH0gZnJvbSAnLi4vdmlld3Mvbm9kZXMvZmFjdG9yeSc7XG5cbmV4cG9ydCBjb25zdCBDZWxsID0gKHggPSAtMSwgeSA9IC0xLCBuYW1lID0gJ2NlbGwnKSA9PiB7XG4gICAgbGV0IGhpdCA9IGZhbHNlO1xuICAgIGxldCBwYXJlbnQgPSAnZnJlZSc7XG4gICAgbGV0IG5vZGUgPSBnZXROb2RlKG5hbWUsICdjZWxsJyk7XG4gICAgbGV0IGxpbmtlZERlY2sgPSAnZnJlZSc7XG5cbiAgICBjb25zdCBzZXRMaW5rZWREZWNrID0gKGRlY2spID0+IHtcbiAgICAgICAgbGlua2VkRGVjayA9IGRlY2s7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TGlua2VkRGVjayA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGxpbmtlZERlY2s7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0VGhlSGl0ID0gKCkgPT4ge1xuICAgICAgICBoaXQgPSB0cnVlO1xuICAgIH07XG5cbiAgICBjb25zdCBpc0hpdCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGhpdDtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0UGFyZW50ID0gKG5QYXJlbnQpID0+IHtcbiAgICAgICAgcGFyZW50ID0gblBhcmVudDtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UGFyZW50ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRDZWxsTm9kZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFhZID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4geyB4LCB5IH07XG4gICAgfTtcblxuICAgIGNvbnN0IHNldFhZID0gKG54LCBueSkgPT4ge1xuICAgICAgICB4ID0gbng7XG4gICAgICAgIHkgPSBueTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgICAgIGhpdCA9IGZhbHNlO1xuICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ21pc3MtaGl0Jyk7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnZGVzdHJveWVkJyk7XG4gICAgICAgIHJlbW92ZUNoaWxkcyhub2RlKTtcbiAgICAgICAgc2V0Tm9ybWFsT3BhY2l0eShub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRUaGVIaXQsXG4gICAgICAgIGlzSGl0LFxuICAgICAgICBzZXRQYXJlbnQsXG4gICAgICAgIGdldFBhcmVudCxcbiAgICAgICAgZ2V0Q2VsbE5vZGUsXG4gICAgICAgIGdldFhZLFxuICAgICAgICBzZXRYWSxcbiAgICAgICAgc2V0TGlua2VkRGVjayxcbiAgICAgICAgZ2V0TGlua2VkRGVjayxcbiAgICAgICAgcmVzZXRcbiAgICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IERlY2sgPSAobnVtYmVyKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gQ2VsbCgtMSwgLTEsICdkZWNrJyk7XG5cbiAgICBjb25zdCBnZXROdW1iZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBudW1iZXI7XG4gICAgfTtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3RvdHlwZSwgeyBnZXROdW1iZXIgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgTWFyaW5lU2VjdG9yID0gKHksIHgpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBDZWxsKHksIHgsICdtYXJpbmUtc2VjdG9yJyk7XG4gICAgbGV0IG9jY3VwYW50ID0gJ2ZyZWUnO1xuXG4gICAgY29uc3Qgb2NjdXB5ID0gKG5PY2N1cGFudCkgPT4ge1xuICAgICAgICBvY2N1cGFudCA9IG5PY2N1cGFudDtcbiAgICB9O1xuXG4gICAgY29uc3QgY2xlYXIgPSAoKSA9PiB7XG4gICAgICAgIG9jY3VwYW50ID0gJ2ZyZWUnO1xuICAgICAgICBwcm90b3R5cGUucmVzZXQoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaXNGcmVlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gb2NjdXBhbnQgPT09ICdmcmVlJztcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0T2NjdXBhbnQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBvY2N1cGFudDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvdG90eXBlLCB7IGlzRnJlZSwgY2xlYXIsIG9jY3VweSwgZ2V0T2NjdXBhbnQgfSk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IENlbGxIYW5kbGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGdldEJlZm9yZSA9ICh4LCB5LCBwYXJlbnQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbeV1bLS14XTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbeV1bKyt4XTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBnZXRBZnRlciA9ICh4LCB5LCBwYXJlbnQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbeV1bKyt4XTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbeV1bLS14XTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBnZXRPdmVyID0gKHgsIHksIHBhcmVudCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFstLXldW3hdO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFsrK3ldW3hdO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFVuZGVyID0gKHgsIHksIHBhcmVudCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFsrK3ldW3hdO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFstLXldW3hdO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldERpYWcxID0gKHgsIHksIHBhcmVudCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFstLXldWy0teF07XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50WysreV1bKyt4XTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBnZXREaWFnMiA9ICh4LCB5LCBwYXJlbnQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbLS15XVsrK3hdO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFsrK3ldWy0teF07XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0RGlhZzMgPSAoeCwgeSwgcGFyZW50KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50WysreV1bKyt4XTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRbLS15XVstLXhdO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldERpYWc0ID0gKHgsIHksIHBhcmVudCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFsrK3ldWy0teF07XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50Wy0teV1bKyt4XTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBnZXRDZWxsQXJvdW5kQXJlYSA9ICh4LCB5LCBwYXJlbnQpID0+IHtcbiAgICAgICAgbGV0IGNlbGxzID0gW107XG4gICAgICAgIGNlbGxzLnB1c2goZ2V0QmVmb3JlKHgsIHksIHBhcmVudCkpO1xuICAgICAgICBjZWxscy5wdXNoKGdldEFmdGVyKHgsIHksIHBhcmVudCkpO1xuICAgICAgICBjZWxscy5wdXNoKGdldE92ZXIoeCwgeSwgcGFyZW50KSk7XG4gICAgICAgIGNlbGxzLnB1c2goZ2V0VW5kZXIoeCwgeSwgcGFyZW50KSk7XG4gICAgICAgIGNlbGxzLnB1c2goZ2V0RGlhZzEoeCwgeSwgcGFyZW50KSk7XG4gICAgICAgIGNlbGxzLnB1c2goZ2V0RGlhZzIoeCwgeSwgcGFyZW50KSk7XG4gICAgICAgIGNlbGxzLnB1c2goZ2V0RGlhZzMoeCwgeSwgcGFyZW50KSk7XG4gICAgICAgIGNlbGxzLnB1c2goZ2V0RGlhZzQoeCwgeSwgcGFyZW50KSk7XG4gICAgICAgIGNlbGxzID0gY2VsbHMuZmlsdGVyKChjZWxsKSA9PiBjZWxsICE9PSB1bmRlZmluZWQpO1xuICAgICAgICByZXR1cm4gY2VsbHM7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldERpYWRzID0gKHgsIHksIHBhcmVudCkgPT4ge1xuICAgICAgICBsZXQgY2VsbHMgPSBbXTtcbiAgICAgICAgY2VsbHMucHVzaChnZXREaWFnMSh4LCB5LCBwYXJlbnQpKTtcbiAgICAgICAgY2VsbHMucHVzaChnZXREaWFnMih4LCB5LCBwYXJlbnQpKTtcbiAgICAgICAgY2VsbHMucHVzaChnZXREaWFnMyh4LCB5LCBwYXJlbnQpKTtcbiAgICAgICAgY2VsbHMucHVzaChnZXREaWFnNCh4LCB5LCBwYXJlbnQpKTtcbiAgICAgICAgY2VsbHMgPSBjZWxscy5maWx0ZXIoKGNlbGwpID0+IGNlbGwgIT09IHVuZGVmaW5lZCk7XG4gICAgICAgIHJldHVybiBjZWxscztcbiAgICB9XG5cbiAgICByZXR1cm4geyBnZXRDZWxsQXJvdW5kQXJlYSwgZ2V0RGlhZHMgfTtcbn07XG4iLCJleHBvcnQgY29uc3QgQ3Jvc3NBdHRyaWJ1dGVzID0gKCgpID0+IHtcbiAgICBjb25zdCBsaW5lID0gW1xuICAgICAgICB7IG5hbWU6ICdzdHJva2UnLCB2YWw6ICdyZWQnIH0sXG4gICAgICAgIHsgbmFtZTogJ3N0cm9rZS13aWR0aCcsIHZhbDogJ21pbigwLjV2aCAsbWF4KDAuMnZ3LDAuMnZoKSknIH0sXG4gICAgICAgIHsgbmFtZTogJ3N0cm9rZS1saW5lY2FwJywgdmFsOiAncm91bmQnIH0sXG4gICAgICAgIHsgbmFtZTogJ3N0cm9rZS1kYXNoYXJyYXknLCB2YWw6ICdtaW4oNXZoICxtYXgoMnZ3LCAydmgpKScgfSxcbiAgICAgICAgeyBuYW1lOiAnc3Ryb2tlLWRhc2hvZmZzZXQnLCB2YWw6ICdtaW4oNXZoICxtYXgoMnZ3LCAydmgpKScgfVxuICAgIF07XG4gICAgY29uc3QgbGVmdERpYWcgPSBbXG4gICAgICAgIHsgbmFtZTogJ3gxJywgdmFsOiAnbWluKDF2aCAsbWF4KDAuNHZ3LCAwLjR2aCkpJyB9LFxuICAgICAgICB7IG5hbWU6ICd5MScsIHZhbDogJ21pbigxdmggLG1heCgwLjR2dywgMC40dmgpKScgfSxcbiAgICAgICAgeyBuYW1lOiAneDInLCB2YWw6ICdtaW4oNHZoICxtYXgoMS42dncsIDEuNnZoKSknIH0sXG4gICAgICAgIHsgbmFtZTogJ3kyJywgdmFsOiAnbWluKDR2aCAsbWF4KDEuNnZ3LCAxLjZ2aCkpJyB9LFxuICAgIF07XG4gICAgY29uc3QgcmlnaHREaWFnID0gW1xuICAgICAgICB7IG5hbWU6ICd4MicsIHZhbDogJ21pbigxdmggLG1heCgwLjR2dywgMC40dmgpKScgfSxcbiAgICAgICAgeyBuYW1lOiAneTInLCB2YWw6ICdtaW4oNHZoICxtYXgoMS42dncsIDEuNnZoKSknIH0sXG4gICAgICAgIHsgbmFtZTogJ3gxJywgdmFsOiAnbWluKDR2aCAsbWF4KDEuNnZ3LCAxLjZ2aCkpJyB9LFxuICAgICAgICB7IG5hbWU6ICd5MScsIHZhbDogJ21pbigxdmggLG1heCgwLjR2dywgMC40dmgpKScgfSxcbiAgICBdO1xuICAgIHJldHVybiB7IGxpbmUsIGxlZnREaWFnLCByaWdodERpYWcgfTtcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBIb3Jpem9udGFsTGluZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgaG9yaXpvbnRhbCA9IFtcbiAgICAgICAgeyBuYW1lOiAnc3Ryb2tlJywgdmFsOiAncmVkJyB9LFxuICAgICAgICB7IG5hbWU6ICdzdHJva2Utd2lkdGgnLCB2YWw6ICdtaW4oM3ZoICwzdncpJyB9LFxuICAgICAgICB7IG5hbWU6ICdzdHJva2UtbGluZWNhcCcsIHZhbDogJ3JvdW5kJyB9LFxuICAgICAgICB7IG5hbWU6ICdzdHJva2UtZGFzaGFycmF5JywgdmFsOiAnMTAwdncnIH0sXG4gICAgICAgIHsgbmFtZTogJ3N0cm9rZS1kYXNob2Zmc2V0JywgdmFsOiAnMTAwdncnIH0sXG4gICAgICAgIHsgbmFtZTogJ3gxJywgdmFsOiAnMHZ3JyB9LFxuICAgICAgICB7IG5hbWU6ICd5MScsIHZhbDogJzB2dycgfSxcbiAgICAgICAgeyBuYW1lOiAneDInLCB2YWw6ICcxMDB2dycgfSxcbiAgICAgICAgeyBuYW1lOiAneTInLCB2YWw6ICcwdncnIH0sXG4gICAgXVxuICAgIHJldHVybiB7IGhvcml6b250YWwgfTtcbn0pKCk7IiwiaW1wb3J0IGNyb3NzQXVkaW8gZnJvbSAnLi4vLi4vdmlld3MvYXVkaW8vY3Jvc3MubXAzJztcbmltcG9ydCBuZXh0TW92ZSBmcm9tICcuLi8uLi92aWV3cy9hdWRpby9uZXh0TW92ZS5tcDMnO1xuaW1wb3J0IG1pc3NIaXQgZnJvbSAnLi4vLi4vdmlld3MvYXVkaW8vc2hvdC5tcDMnO1xuaW1wb3J0IGJvb21TaGlwIGZyb20gJy4uLy4uL3ZpZXdzL2F1ZGlvL2Jvb20ubXAzJztcbmltcG9ydCBjbGljayBmcm9tICcuLi8uLi92aWV3cy9hdWRpby9jbGlja1BsYXkubXAzJztcbmltcG9ydCB0aW1lciBmcm9tICcuLi8uLi92aWV3cy9hdWRpby90aW1lci5tcDMnO1xuaW1wb3J0IHdpblNvdW5kIGZyb20gJy4uLy4uL3ZpZXdzL2F1ZGlvL3dpbi5tcDMnO1xuaW1wb3J0IGxvc2VTb3VuZCBmcm9tICcuLi8uLi92aWV3cy9hdWRpby9sb3NlLm1wMyc7XG5cbmV4cG9ydCBjb25zdCBkcmF3Q3Jvc3MgPSAoKCkgPT4ge1xuICAgIGxldCBhdWRpbyA9IG5ldyBBdWRpbyhjcm9zc0F1ZGlvKVxuICAgIGF1ZGlvLnBsYXliYWNrUmF0ZSA9IDM7XG4gICAgYXVkaW8udm9sdW1lID0gMC41O1xuICAgIHJldHVybiBhdWRpbztcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBuZXh0TW92ZUVmZmVjdCA9ICgoKSA9PiB7XG4gICAgbGV0IGF1ZGlvID0gbmV3IEF1ZGlvKG5leHRNb3ZlKTtcbiAgICBhdWRpby5wbGF5YmFja1JhdGUgPSAyO1xuICAgIHJldHVybiBhdWRpbztcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBtaXNzRWZmZWN0ID0gKCgpID0+IHtcbiAgICBsZXQgYXVkaW8gPSBuZXcgQXVkaW8obWlzc0hpdCk7XG4gICAgYXVkaW8ucGxheWJhY2tSYXRlID0gMjtcbiAgICBhdWRpby52b2x1bWUgPSAwLjQ7XG4gICAgcmV0dXJuIGF1ZGlvO1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IGtpbGxTaGlwRWZmZWN0ID0gKCgpID0+IHtcbiAgICBsZXQgYXVkaW8gPSBuZXcgQXVkaW8oYm9vbVNoaXApO1xuICAgIGF1ZGlvLnZvbHVtZSA9IDAuMjtcbiAgICByZXR1cm4gYXVkaW87XG59KSgpO1xuXG5leHBvcnQgY29uc3QgY2xpY2tFZmZlY3QgPSAoKCkgPT4ge1xuICAgIGxldCBhdWRpbyA9IG5ldyBBdWRpbyhjbGljayk7XG4gICAgYXVkaW8udm9sdW1lID0gMTtcbiAgICByZXR1cm4gYXVkaW87XG59KSgpO1xuXG5leHBvcnQgY29uc3QgdGltZXJFZmZlY3QgPSAoKCkgPT4ge1xuICAgIGxldCBhdWRpbyA9IG5ldyBBdWRpbyh0aW1lcik7XG4gICAgYXVkaW8udm9sdW1lID0gMTtcbiAgICByZXR1cm4gYXVkaW87XG59KSgpO1xuXG5leHBvcnQgY29uc3Qgd2luID0gKCgpID0+IHtcbiAgICBsZXQgYXVkaW8gPSBuZXcgQXVkaW8od2luU291bmQpO1xuICAgIGF1ZGlvLnZvbHVtZSA9IDE7XG4gICAgcmV0dXJuIGF1ZGlvO1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IGxvc2UgPSAoKCkgPT4ge1xuICAgIGxldCBhdWRpbyA9IG5ldyBBdWRpbyhsb3NlU291bmQpO1xuICAgIGF1ZGlvLnZvbHVtZSA9IDE7XG4gICAgcmV0dXJuIGF1ZGlvO1xufSkoKTtcblxuLypleHBvcnQgY29uc3QgYWlDcm9zcyA9ICgoKSA9PiB7XG4gICAgbGV0IGF1ZGlvID0gbmV3IEF1ZGlvKCcuLi9hdWRpby90ZXJtaW5hdG9yQ3Jvc3MubXAzJyk7XG4gICAgYXVkaW8ucGxheWJhY2tSYXRlID0gMi4zO1xuICAgIHJldHVybiBhdWRpbztcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCB3aW5Sb3VuZCA9ICgoKSA9PiB7XG4gICAgbGV0IGF1ZGlvID0gbmV3IEF1ZGlvKCcuLi9hdWRpby93aW5Sb3VuZC5tcDMnKTtcbiAgICBhdWRpby52b2x1bWUgPSAwLjU7XG4gICAgcmV0dXJuIGF1ZGlvO1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IGRyYXcgPSAoKCkgPT4ge1xuICAgIGxldCBhdWRpbyA9IG5ldyBBdWRpbygnLi4vYXVkaW8vd293Lm1wMycpO1xuICAgIGF1ZGlvLnZvbHVtZSA9IDAuNTtcbiAgICByZXR1cm4gYXVkaW87XG59KSgpO1xuXG5leHBvcnQgY29uc3Qgd2luID0gKCgpID0+IHtcbiAgICBsZXQgYXVkaW8gPSBuZXcgQXVkaW8oJy4uL2F1ZGlvL3dpbi5tcDMnKTtcbiAgICByZXR1cm4gYXVkaW87XG59KSgpO1xuXG5leHBvcnQgY29uc3QgdGltZXIgPSAoKCkgPT4ge1xuICAgIGxldCBhdWRpbyA9IG5ldyBBdWRpbygnLi4vYXVkaW8vdGltZXIubXAzJyk7XG4gICAgcmV0dXJuIGF1ZGlvO1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IGxvc2UgPSAoKCkgPT4ge1xuICAgIGxldCBhdWRpbyA9IG5ldyBBdWRpbygnLi4vYXVkaW8vdGVybWluYXRvckVuZC5tcDMnKTtcbiAgICByZXR1cm4gYXVkaW87XG59KSgpOyovIiwiaW1wb3J0IHsgY3JlYXRlQ3Jvc3NTVkcsIHZpZXdDcm9zcyB9IGZyb20gXCIuLi8uLi92aWV3cy9ub2Rlcy9tYXJrZXJzXCI7XG5pbXBvcnQgeyBjcmVhdGVUaW1lclNWRywgdmlld1RpbWVyIH0gZnJvbSBcIi4uLy4uL3ZpZXdzL25vZGVzL3RpbWVyXCI7XG5cbmV4cG9ydCBjb25zdCBUZW1wbGF0ZSA9IChzdmcpID0+IHtcbiAgICBsZXQgYW5pbWF0aW9ucztcbiAgICBjb25zdCBnZXRTdmcgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzdmc7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgICAgIGFuaW1hdGlvbnMuZm9yRWFjaChhbmltYXRpb24gPT4ge1xuICAgICAgICAgICAgYW5pbWF0aW9uLmZpbmlzaCgpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHNldEFuaW1hdGlvbnMgPSAodmFsKSA9PiB7XG4gICAgICAgIGFuaW1hdGlvbnMgPSB2YWw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc2V0QW5pbWF0aW9ucywgZ2V0U3ZnLCBhbmltYXRpb25zLCByZXNldCB9O1xufVxuXG5leHBvcnQgY29uc3QgQ3Jvc3MgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gVGVtcGxhdGUoY3JlYXRlQ3Jvc3NTVkcoKSk7XG5cbiAgICBjb25zdCB2aWV3ID0gKCkgPT4ge1xuICAgICAgICBwcm90b3R5cGUuc2V0QW5pbWF0aW9ucyh2aWV3Q3Jvc3MocHJvdG90eXBlLmdldFN2ZygpKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvdG90eXBlLCB7IHZpZXcgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBUaW1lciA9ICgpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBUZW1wbGF0ZShjcmVhdGVUaW1lclNWRygpKTtcblxuICAgIGNvbnN0IHZpZXcgPSAoKSA9PiB7XG4gICAgICAgIHByb3RvdHlwZS5zZXRBbmltYXRpb25zKHZpZXdUaW1lcihwcm90b3R5cGUuZ2V0U3ZnKCkpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm90b3R5cGUsIHsgdmlldyB9KTtcbn0iLCJpbXBvcnQgeyBzZXRMaXN0ZW5lcnNGb3JMaW5rcyB9IGZyb20gXCIuLi9jb250cm9sbGVycy9saXN0ZW5lcnMvZm9yTGlua3NcIjtcbmltcG9ydCB7IHNldExpc3RlbmVyc0ZvckNlbGxzLCBzZXRMaXN0ZW5lcnNGb3JFeGl0QnV0dG9uLCBzZXRMaXN0ZW5lcnNGb3JQbGF5QnV0dG9uIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL2xpc3RlbmVycy9mb3JQbGF5XCI7XG5pbXBvcnQgeyBzZXRMaXN0ZW5lcnNmb3JQb3B1cHMgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvbGlzdGVuZXJzL2ZvclBvcHVwc1wiO1xuaW1wb3J0IHsgc2V0TGlzdGVuZXJzRm9yU2hpcHMgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvbGlzdGVuZXJzL2ZvclNoaXBzXCI7XG5pbXBvcnQgeyByZW1vdmVIaWRkZW4sIHJlbW92ZU51bGxPcGFjaXR5LCBzZXRIaWRkZW4sIHNldExvd09wYWNpdHkgfSBmcm9tIFwiLi4vdmlld3MvYW5pbWF0aW9ucy9jaGFuZ2VWaXNpYmxlXCI7XG5pbXBvcnQgeyB2aWV3QWNjdXJhdGVIaXQsIHZpZXdNaXNzSGl0IH0gZnJvbSBcIi4uL3ZpZXdzL25vZGVzL2hpdHNcIjtcbmltcG9ydCB7IHZpZXdMb3NlUG9wdXAsIHZpZXdXaW5Qb3B1cCB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9wb3B1cHNcIjtcbmltcG9ydCB7IHZpZXdQcm9maWxlIH0gZnJvbSBcIi4uL3ZpZXdzL25vZGVzL3Byb2ZpbGVcIjtcbmltcG9ydCB7IHZpZXdTaGlweWFyZCB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9zaGlweWFyZFwiO1xuaW1wb3J0IHsgaGlkZGVuSW50ZXJmYWNlQmVmb3JlU3RhcnRQbGF5LCBzZXRBaU1vdmVEZXNpZ24sIHNldEtpbGxlZFNoaXBEZXNpZ24sIHNldE1pbmlTaGlweWFyZERlc2lnbiwgc2V0UGxheWVyTW92ZURlc2lnbiwgdmlld0ludGVyZmFjZUFmdGVyRW5kR2FtZSB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy91aVwiO1xuaW1wb3J0IHsgQ2VsbEhhbmRsZXIgfSBmcm9tIFwiLi9jZWxsSGFuZGxlclwiO1xuaW1wb3J0IHsgZHJhd0Nyb3NzLCBraWxsU2hpcEVmZmVjdCwgbWlzc0VmZmVjdCwgbmV4dE1vdmVFZmZlY3QgfSBmcm9tIFwiLi9lbGVtZW50cy9hdWRpb0VmZmVjdHNcIjtcbmltcG9ydCB7IENyb3NzIH0gZnJvbSBcIi4vZWxlbWVudHMvdGVtcGxhdGVzXCI7XG5pbXBvcnQgeyBQcm9maWxlIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgeyBUaW1lTWFuaXB1bGF0b3JzIH0gZnJvbSBcIi4vdGltZU1hbmlwdWxhdG9yc1wiO1xuXG5leHBvcnQgY29uc3QgR2FtZSA9ICgpID0+IHtcbiAgICBsZXQgcGxheWVyID0gUHJvZmlsZSgxLCAnUGxheWVyJywgJ3BsYXllci1ib2FyZCcsICcuYWktbWluaS1zaGlweWFyZCcpO1xuICAgIGxldCBhaSA9IFByb2ZpbGUoMCwgJ0FJJywgJ2FpLWJvYXJkJywgJy5wbGF5ZXItbWluaS1zaGlweWFyZCcpO1xuICAgIGNvbnN0IHRpbWVNYW5pcHVsYXRvcnMgPSBUaW1lTWFuaXB1bGF0b3JzKCk7XG4gICAgY29uc3QgZ2FtZUhhbmRsZXIgPSBHYW1lSGFuZGxlcihhaSwgcGxheWVyLCB0aW1lTWFuaXB1bGF0b3JzKTtcblxuICAgIGNvbnN0IHZpZXdEZWZhdWxJbnRlcmZhY2VzID0gKCkgPT4ge1xuICAgICAgICB2aWV3UHJvZmlsZShwbGF5ZXIpO1xuICAgICAgICB2aWV3UHJvZmlsZShhaSk7XG4gICAgICAgIHZpZXdTaGlweWFyZChwbGF5ZXIuZ2V0U2hpcHlhcmQoKSk7XG4gICAgICAgIHZpZXdTaGlweWFyZChwbGF5ZXIuZ2V0TWluaVNoaXB5YXJkKCkpO1xuICAgICAgICB2aWV3U2hpcHlhcmQoYWkuZ2V0TWluaVNoaXB5YXJkKCkpO1xuICAgICAgICBzZXRNaW5pU2hpcHlhcmREZXNpZ24ocGxheWVyLmdldE1pbmlTaGlweWFyZCgpKVxuICAgICAgICBzZXRNaW5pU2hpcHlhcmREZXNpZ24oYWkuZ2V0TWluaVNoaXB5YXJkKCkpXG4gICAgfVxuXG4gICAgY29uc3Qgc2V0RGVmYXVsdExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgc2V0TGlzdGVuZXJzRm9yU2hpcHMocGxheWVyLmdldFNoaXB5YXJkKCkuZ2V0QWxsU2hpcHMoKSk7XG4gICAgICAgIHNldExpc3RlbmVyc0ZvckxpbmtzKCk7XG4gICAgICAgIHNldExpc3RlbmVyc0ZvclBsYXlCdXR0b24oKTtcbiAgICAgICAgc2V0TGlzdGVuZXJzRm9yRXhpdEJ1dHRvbigpO1xuICAgICAgICBzZXRMaXN0ZW5lcnNmb3JQb3B1cHMoKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRHYW1lUGxheUxpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgc2V0TGlzdGVuZXJzRm9yQ2VsbHMoKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdGFydCA9ICgpID0+IHtcbiAgICAgICAgc2V0RGVmYXVsdExpc3RlbmVycygpO1xuICAgICAgICB2aWV3RGVmYXVsSW50ZXJmYWNlcygpO1xuICAgICAgICBnYW1lSGFuZGxlci5maWxsQm9hcmRzVG9SYW5kb21TaGlwcygpO1xuICAgICAgICBhaS5nZXRHYW1lYm9hcmQoKS5oaWRkZW5TaGlwcygpO1xuICAgIH1cblxuICAgIGNvbnN0IHBsYXkgPSAoKSA9PiB7XG4gICAgICAgIGdhbWVIYW5kbGVyLnNldERlZmF1bHRTZXR0aW5ncygpO1xuICAgICAgICBzZXRHYW1lUGxheUxpc3RlbmVycygpO1xuICAgICAgICBoaWRkZW5JbnRlcmZhY2VCZWZvcmVTdGFydFBsYXkoKTtcbiAgICAgICAgcGxheUdhbWVTdGF0ZSgpO1xuICAgICAgICByZW1vdmVIaWRkZW4oYWkuZ2V0TWluaVNoaXB5YXJkKCkuZ2V0Tm9kZSgpKVxuICAgICAgICByZW1vdmVIaWRkZW4ocGxheWVyLmdldE1pbmlTaGlweWFyZCgpLmdldE5vZGUoKSlcbiAgICAgICAgZ2FtZUhhbmRsZXIucGxheWVyTW92ZSgpO1xuICAgICAgICB0aW1lTWFuaXB1bGF0b3JzLnNldFRpbWVPZlRoZU1vdmUoKTtcbiAgICAgICAgc2V0TWluaVNoaXB5YXJkRGVzaWduKHBsYXllci5nZXRNaW5pU2hpcHlhcmQoKSlcbiAgICAgICAgc2V0TWluaVNoaXB5YXJkRGVzaWduKGFpLmdldE1pbmlTaGlweWFyZCgpKVxuICAgIH1cblxuICAgIGNvbnN0IGVuZCA9ICgpID0+IHtcbiAgICAgICAgc2V0SGlkZGVuKGFpLmdldE1pbmlTaGlweWFyZCgpLmdldE5vZGUoKSlcbiAgICAgICAgc2V0SGlkZGVuKHBsYXllci5nZXRNaW5pU2hpcHlhcmQoKS5nZXROb2RlKCkpXG4gICAgICAgIGFpLmdldE1pbmlTaGlweWFyZCgpLnJlc2V0KClcbiAgICAgICAgcGxheWVyLmdldE1pbmlTaGlweWFyZCgpLnJlc2V0KClcbiAgICAgICAgdGltZU1hbmlwdWxhdG9ycy5yZXNldCgpO1xuICAgICAgICB2aWV3SW50ZXJmYWNlQWZ0ZXJFbmRHYW1lKCk7XG4gICAgICAgIGVuZEdhbWVTdGF0ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IHBsYXlHYW1lU3RhdGUgPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy54LWF4aXMnKS5jbGFzc0xpc3QuYWRkKCdjb3JyZWN0JylcbiAgICAgICAgcGxheWVyLmdldEdhbWVib2FyZCgpLmJsb2NrU2hpcHMoKTtcbiAgICB9XG5cbiAgICBjb25zdCBlbmRHYW1lU3RhdGUgPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy54LWF4aXMnKS5jbGFzc0xpc3QucmVtb3ZlKCdjb3JyZWN0JylcbiAgICAgICAgYWkuZ2V0R2FtZWJvYXJkKCkuYmxvY2soKTtcbiAgICAgICAgYWkuZ2V0R2FtZWJvYXJkKCkucmVzZXQoKTtcbiAgICAgICAgcGxheWVyLmdldEdhbWVib2FyZCgpLnVuYmxvY2tTaGlwcygpO1xuICAgICAgICBwbGF5ZXIuZ2V0R2FtZWJvYXJkKCkucmVzZXQoKTtcbiAgICAgICAgZ2FtZUhhbmRsZXIuZmlsbEJvYXJkc1RvUmFuZG9tU2hpcHMoKTtcbiAgICAgICAgYWkuZ2V0R2FtZWJvYXJkKCkuaGlkZGVuU2hpcHMoKTtcbiAgICAgICAgc2V0QWlNb3ZlRGVzaWduKGFpLCBwbGF5ZXIpXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc3RhcnQsIHBsYXksIGVuZCwgYWksIHBsYXllciwgZ2FtZUhhbmRsZXIgfVxufVxuXG5jb25zdCBHYW1lSGFuZGxlciA9IChhaSwgcGxheWVyLCB0aW1lTWFuaXB1bGF0b3JzKSA9PiB7XG4gICAgbGV0IG1vdmU7XG4gICAgbGV0IHBsYXllckNlbGxzID0gWy4uLnBsYXllci5nZXRHYW1lYm9hcmQoKS5nZXRVbnN0cnVjdGVkQ29udGFpbmVyKCldO1xuICAgIGxldCBhaUNlbGxzID0gWy4uLmFpLmdldEdhbWVib2FyZCgpLmdldFVuc3RydWN0ZWRDb250YWluZXIoKV07XG5cbiAgICBjb25zdCBzZXREZWZhdWx0U2V0dGluZ3MgPSAoKSA9PiB7XG4gICAgICAgIG1vdmUgPSAncGxheWVyJztcbiAgICAgICAgcGxheWVyQ2VsbHMgPSBbLi4ucGxheWVyLmdldEdhbWVib2FyZCgpLmdldFVuc3RydWN0ZWRDb250YWluZXIoKV07XG4gICAgICAgIGFpQ2VsbHMgPSBbLi4uYWkuZ2V0R2FtZWJvYXJkKCkuZ2V0VW5zdHJ1Y3RlZENvbnRhaW5lcigpXTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRBY3RpdmVQbGF5ZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBtb3ZlID09PSAnYWknID8gYWkgOiBwbGF5ZXI7XG4gICAgfVxuXG4gICAgY29uc3Qgc3dpdGNoTW92ZSA9ICgpID0+IHtcbiAgICAgICAgdGltZU1hbmlwdWxhdG9ycy5yZXNldCgpO1xuICAgICAgICBpZiAoaXNFbmRHYW1lKCkpIHtcbiAgICAgICAgICAgIG9wZW5Qb3B1cCgpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKG1vdmUgPT09ICdhaScpIHtcbiAgICAgICAgICAgIHRpbWVNYW5pcHVsYXRvcnMuc2V0VGltZU9mVGhlTW92ZSgpO1xuICAgICAgICAgICAgbW92ZSA9ICdwbGF5ZXInO1xuICAgICAgICAgICAgcGxheWVyTW92ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW92ZSA9ICdhaSc7XG4gICAgICAgICAgICBhaU1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGlzRW5kR2FtZSA9ICgpID0+IHtcbiAgICAgICAgbGV0IGlzRW5kID0gaXNQbGF5ZXJMb3NlKHBsYXllcikgfHwgaXNQbGF5ZXJMb3NlKGFpKTtcbiAgICAgICAgcmV0dXJuIGlzRW5kO1xuICAgIH1cblxuICAgIGNvbnN0IGlzUGxheWVyTG9zZSA9IChwbGF5ZXIpID0+IHtcbiAgICAgICAgbGV0IGlzTG9zZSA9IHRydWU7XG4gICAgICAgIGNvbnN0IHNoaXBzID0gcGxheWVyLmdldFNoaXB5YXJkKCkuZ2V0QWxsU2hpcHMoKTtcbiAgICAgICAgc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIGlmIChzaGlwLmlzTGl2ZSgpKSB7XG4gICAgICAgICAgICAgICAgaXNMb3NlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBpc0xvc2U7XG4gICAgfVxuXG4gICAgY29uc3QgcGxheWVyTW92ZSA9ICgpID0+IHtcbiAgICAgICAgYWkuZ2V0R2FtZWJvYXJkKCkudW5ibG9jaygpO1xuICAgICAgICBzZXRQbGF5ZXJNb3ZlRGVzaWduKGFpLCBwbGF5ZXIpO1xuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrQ2VsbCA9IChjZWxsKSA9PiB7XG4gICAgICAgIGlmIChhaUNlbGxzLmluY2x1ZGVzKGNlbGwpKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGFpQ2VsbHMuaW5kZXhPZihjZWxsKTtcbiAgICAgICAgICAgIGFpLmdldEdhbWVib2FyZCgpLmJsb2NrKCk7XG4gICAgICAgICAgICB0YWtlSGl0KGFpQ2VsbHMuc3BsaWNlKGluZGV4LCAxKVswXSk7XG4gICAgICAgICAgICB0aW1lTWFuaXB1bGF0b3JzLnNldFRpbWVCZXR3ZWVuTW92ZXMoNTAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFpTW92ZSA9ICgpID0+IHtcbiAgICAgICAgYWkuZ2V0R2FtZWJvYXJkKCkuYmxvY2soKTtcbiAgICAgICAgc2V0QWlNb3ZlRGVzaWduKGFpLCBwbGF5ZXIpO1xuICAgICAgICB0aW1lTWFuaXB1bGF0b3JzLnNldEFpU3BlZWRPZlRvdWdodChwbGF5ZXJDZWxscyk7XG4gICAgfVxuXG4gICAgY29uc3QgdGFrZUhpdCA9IChjZWxsKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBjZWxsLmdldE9jY3VwYW50KCk7XG4gICAgICAgIGNlbGwuc2V0VGhlSGl0KCk7XG4gICAgICAgIGlmIChzaGlwID09PSAnZnJlZScpIHtcbiAgICAgICAgICAgIHZpZXdNaXNzSGl0KGNlbGwpO1xuICAgICAgICAgICAgbWlzc0VmZmVjdC5wbGF5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWV3QWNjdXJhdGVIaXQoY2VsbCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tMaXZlU2hpcChzaGlwKSkge1xuICAgICAgICAgICAgICAgICAgICBoaXRBbGxEaWFncyhjZWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbW92ZSA9IG1vdmUgPT09ICdhaScgPyAncGxheWVyJyA6ICdhaSc7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2hlY2tMaXZlU2hpcCA9IChzaGlwKSA9PiB7XG4gICAgICAgIGlmICghc2hpcC5pc0xpdmUoKSkge1xuICAgICAgICAgICAga2lsbFNoaXBFZmZlY3QucGxheSgpO1xuICAgICAgICAgICAgc2hpcC5raWxsKCk7XG4gICAgICAgICAgICBsZXQgbWluaVNoaXAgPSBnZXRNaW5pU2hpcChzaGlwKTtcbiAgICAgICAgICAgIG1pbmlTaGlwLmtpbGwoKTtcbiAgICAgICAgICAgIGhpdEFsbEFyZWFBcm91bmRTaGlwKHNoaXApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNoaXAuaXNMaXZlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgaGl0QWxsQXJlYUFyb3VuZFNoaXAgPSAoc2hpcCkgPT4ge1xuICAgICAgICBjb25zdCBhcmVhID0gc2hpcC5nZXRXYXRlckFyZWFzKCkuZ2V0QXJlYUFyb3VuZFRoZVNoaXAoKTtcbiAgICAgICAgYXJlYS5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICAgICAgaWYgKCFjZWxsLmlzSGl0KCkpIHtcbiAgICAgICAgICAgICAgICBzZXRMb3dPcGFjaXR5KGNlbGwuZ2V0Q2VsbE5vZGUoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2aWV3TWlzc0hpdChjZWxsKTtcbiAgICAgICAgICAgIHJlbW92ZUNlbGwoY2VsbCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZUNlbGwgPSAoY2VsbCkgPT4ge1xuICAgICAgICBsZXQgY2VsbHMgPSBtb3ZlID09PSAnYWknID8gcGxheWVyQ2VsbHMgOiBhaUNlbGxzO1xuICAgICAgICBsZXQgaW5kZXggPSBjZWxscy5pbmRleE9mKGNlbGwpO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgY2VsbHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhpdEFsbERpYWdzID0gKGhpdENlbGwpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IENlbGxIYW5kbGVyKCk7XG4gICAgICAgIGNvbnN0IHggPSBoaXRDZWxsLmdldFhZKCkueDtcbiAgICAgICAgY29uc3QgeSA9IGhpdENlbGwuZ2V0WFkoKS55O1xuICAgICAgICBjb25zdCBvcHBvbmVudCA9IG1vdmUgPT09ICdhaScgPyBwbGF5ZXIgOiBhaTtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gb3Bwb25lbnQuZ2V0R2FtZWJvYXJkKCkuZ2V0U3RydWN0ZWRDb250YWluZXIoKTtcbiAgICAgICAgY29uc3QgY2VsbHMgPSBoYW5kbGVyLmdldERpYWRzKHgsIHksIHBhcmVudCk7XG4gICAgICAgIGNlbGxzLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgICAgICBpZiAoY2VsbCAhPT0gaGl0Q2VsbCkge1xuICAgICAgICAgICAgICAgIGlmICghY2VsbC5pc0hpdCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldExvd09wYWNpdHkoY2VsbC5nZXRDZWxsTm9kZSgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmlld01pc3NIaXQoY2VsbCk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2VsbChjZWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TWluaVNoaXAgPSAoc2hpcCkgPT4ge1xuICAgICAgICBjb25zdCB0eXBlID0gc2hpcC5nZXRUeXBlKCk7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVBsYXllciA9IGdldEFjdGl2ZVBsYXllcigpO1xuICAgICAgICBjb25zdCBzaGlwcyA9IGFjdGl2ZVBsYXllci5nZXRNaW5pU2hpcHlhcmQoKS5nZXRTaGlwc09mVHlwZSh0eXBlKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHNoaXBzW2ldLmlzTGl2ZSgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNoaXBzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZmlsbEJvYXJkc1RvUmFuZG9tU2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIGFpLmdldEdhbWVib2FyZCgpLnJhbmRvbUZpbGxpbmdPZlNoaXBzKCk7XG4gICAgICAgIHBsYXllci5nZXRHYW1lYm9hcmQoKS5yYW5kb21GaWxsaW5nT2ZTaGlwcygpO1xuICAgIH1cblxuICAgIGNvbnN0IG9wZW5Qb3B1cCA9ICgpID0+IHtcbiAgICAgICAgbW92ZSA9PT0gJ3BsYXllcicgPyB2aWV3TG9zZVBvcHVwKCkgOiB2aWV3V2luUG9wdXAoKVxuICAgIH1cblxuICAgIHJldHVybiB7IGNoZWNrQ2VsbCwgcGxheWVyTW92ZSwgc2V0RGVmYXVsdFNldHRpbmdzLCBzd2l0Y2hNb3ZlLCB0YWtlSGl0LCBpc0VuZEdhbWUsIGZpbGxCb2FyZHNUb1JhbmRvbVNoaXBzIH07XG59IiwiaW1wb3J0IHsgcGxheWVyMSB9IGZyb20gJy4uJztcbmltcG9ydCB7IHJhbmRvbUludEZyb21JbnRlcnZhbCB9IGZyb20gJy4uL2hlbHBlci9oZWxwZXInO1xuaW1wb3J0IHsgc2V0SGlkZGVuLCBzZXRMb3dPcGFjaXR5LCBzZXROdWxsT3BhY2l0eSB9IGZyb20gJy4uL3ZpZXdzL2FuaW1hdGlvbnMvY2hhbmdlVmlzaWJsZSc7XG5pbXBvcnQgeyB2aWV3U2hpcCwgdmlld1NoaXBPblJhbmRvbUNlbGwgfSBmcm9tICcuLi92aWV3cy9ub2Rlcy9zaGlwJztcbmltcG9ydCB7IE1hcmluZVNlY3RvciB9IGZyb20gJy4vY2VsbCc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuL2dhbWVDb25maWcnO1xuXG5leHBvcnQgY29uc3QgR2FtZWJvYXJkID0gKG5hbWUsIHBsYXllcikgPT4ge1xuICAgIGNvbnN0IHdpZHRoID0gQ29uZmlnLkdhbWVib2FyZC53aWR0aDtcbiAgICBjb25zdCBoZWlnaHQgPSBDb25maWcuR2FtZWJvYXJkLmhlaWdodDtcbiAgICBjb25zdCBjb250YWluZXJzID0gZmlsbEJvYXJkKHdpZHRoLCBoZWlnaHQpO1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfWApO1xuXG4gICAgY29uc3QgZ2V0U3RydWN0ZWRDb250YWluZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBjb250YWluZXJzLmdldFN0cnVjdGVkKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFVuc3RydWN0ZWRDb250YWluZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBjb250YWluZXJzLmdldFVuc3RydWN0ZWQoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0U2l6ZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgd2lkdGgsIGhlaWdodCB9O1xuICAgIH07XG5cbiAgICBjb25zdCBnZXROb2RlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UGxheWVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcGxheWVyO1xuICAgIH07XG5cbiAgICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICAgICAgY29udGFpbmVycy5nZXRVbnN0cnVjdGVkKCkuZm9yRWFjaCgoc2VjdG9yKSA9PiB7XG4gICAgICAgICAgICBzZWN0b3IuY2xlYXIoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHBsYXllci5nZXRTaGlweWFyZCgpLnJlc2V0KCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJhbmRvbUZpbGxpbmdPZlNoaXBzID0gKCkgPT4ge1xuICAgICAgICByZXNldCgpO1xuICAgICAgICBsZXQgc2hpcHMgPSBwbGF5ZXIuZ2V0U2hpcHlhcmQoKS5nZXRBbGxTaGlwcygpO1xuXG4gICAgICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIHNoaXAuc2V0UmFuZG9tT3JpZW50YXRpb24oKTtcbiAgICAgICAgICAgIHZpZXdTaGlwT25SYW5kb21DZWxsKHNoaXAsIFsuLi5nZXRVbnN0cnVjdGVkQ29udGFpbmVyKCldKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGJsb2NrU2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIG5vZGUucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAnKS5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKCdibG9jaycpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCB1bmJsb2NrU2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIG5vZGUucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAnKS5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgc2hpcC5jbGFzc0xpc3QucmVtb3ZlKCdibG9jaycpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBoaWRkZW5TaGlwcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpO1xuICAgICAgICBib2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcCcpLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgICAgICBzaGlwLnN0eWxlLmJvcmRlciA9ICcwcHggYmx1ZSBzb2xpZCc7XG4gICAgICAgIH0pO1xuICAgICAgICBib2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVjaycpLmZvckVhY2goZGVjayA9PiB7XG4gICAgICAgICAgICBzZXROdWxsT3BhY2l0eShkZWNrKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBibG9jayA9ICgpID0+IHtcbiAgICAgICAgbm9kZS5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKS5jbGFzc0xpc3QuYWRkKCdibG9jaycpO1xuICAgIH1cblxuICAgIGNvbnN0IHVuYmxvY2sgPSAoKSA9PiB7XG4gICAgICAgIG5vZGUucXVlcnlTZWxlY3RvcignLmJvYXJkJykuY2xhc3NMaXN0LnJlbW92ZSgnYmxvY2snKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICByYW5kb21GaWxsaW5nT2ZTaGlwcyxcbiAgICAgICAgcmVzZXQsXG4gICAgICAgIGdldFBsYXllcixcbiAgICAgICAgZ2V0U3RydWN0ZWRDb250YWluZXIsXG4gICAgICAgIGdldFVuc3RydWN0ZWRDb250YWluZXIsXG4gICAgICAgIGdldFNpemUsXG4gICAgICAgIGdldE5vZGUsXG4gICAgICAgIGJsb2NrU2hpcHMsXG4gICAgICAgIHVuYmxvY2tTaGlwcyxcbiAgICAgICAgaGlkZGVuU2hpcHMsXG4gICAgICAgIGJsb2NrLFxuICAgICAgICB1bmJsb2NrXG4gICAgfTtcbn07XG5cbmNvbnN0IGZpbGxCb2FyZCA9ICh3aWR0aCwgaGVpZ2h0KSA9PiB7XG4gICAgbGV0IHN0cnVjdGVkID0gW107XG4gICAgbGV0IHVuc3RydWN0ZWQgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgbGV0IGxpbmUgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB3aWR0aDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gTWFyaW5lU2VjdG9yKGosIGkpO1xuICAgICAgICAgICAgbGluZVtqXSA9IGNlbGw7XG4gICAgICAgICAgICB1bnN0cnVjdGVkLnB1c2goY2VsbCk7XG4gICAgICAgIH1cbiAgICAgICAgc3RydWN0ZWRbaV0gPSBsaW5lO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFN0cnVjdGVkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc3RydWN0ZWQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFVuc3RydWN0ZWQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB1bnN0cnVjdGVkO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBnZXRTdHJ1Y3RlZCwgZ2V0VW5zdHJ1Y3RlZCB9O1xufTtcbiIsImV4cG9ydCBjb25zdCBDb25maWcgPSAoKCkgPT4ge1xuICAgIGNvbnN0IEdhbWVib2FyZCA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gMTA7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IDEwO1xuICAgICAgICByZXR1cm4geyB3aWR0aCwgaGVpZ2h0IH07XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IEVsZW1lbnRzID0gKCgpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcFR5cGVzID0gWydmcmVnYXRzJywgJ2NhcmF2ZWxzJywgJ2RyYWtrYXJzJywgJ2JvYXRzJ107XG4gICAgICAgIGNvbnN0IG51bWJlck9mID0gKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZyZWdhdGVzID0gMTtcbiAgICAgICAgICAgIGNvbnN0IGNhcmF2ZWxzID0gMjtcbiAgICAgICAgICAgIGNvbnN0IGRyYWtrYXJzID0gMztcbiAgICAgICAgICAgIGNvbnN0IGJvYXRzID0gNDtcbiAgICAgICAgICAgIHJldHVybiB7IGZyZWdhdGVzLCBjYXJhdmVscywgZHJha2thcnMsIGJvYXRzIH07XG4gICAgICAgIH0pKCk7XG5cbiAgICAgICAgcmV0dXJuIHsgbnVtYmVyT2YsIHNoaXBUeXBlcyB9O1xuICAgIH0pKCk7XG5cbiAgICByZXR1cm4geyBHYW1lYm9hcmQsIEVsZW1lbnRzIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1lQm9hcmQnO1xuaW1wb3J0IHsgU2hpcHlhcmQgfSBmcm9tICcuL3NoaXB5YXJkJztcblxuY29uc3QgUGxheWVyID0gKGlkLCBuYW1lKSA9PiB7XG4gICAgY29uc3QgZ2V0SWQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfTtcblxuICAgIHJldHVybiB7IGdldElkLCBnZXROYW1lIH07XG59O1xuXG5leHBvcnQgY29uc3QgUHJvZmlsZSA9IChpZCwgbmFtZSwgbm9kZUlkLCBtaW5pU2hpcHlhcmRJZCkgPT4ge1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IFBsYXllcihpZCwgbmFtZSk7XG5cbiAgICBsZXQgZ2FtZWJvYXJkID0gR2FtZWJvYXJkKG5vZGVJZCwgcHJvdG90eXBlKTtcbiAgICBsZXQgc2hpcHlhcmQgPSBTaGlweWFyZChwcm90b3R5cGUpO1xuICAgIGxldCBtaW5pU2hpcHlhcmQgPSBTaGlweWFyZChwcm90b3R5cGUsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobWluaVNoaXB5YXJkSWQpKTtcblxuICAgIGNvbnN0IGdldEdhbWVib2FyZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGdhbWVib2FyZDtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0U2hpcHlhcmQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzaGlweWFyZDtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0TWluaVNoaXB5YXJkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbWluaVNoaXB5YXJkO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3RvdHlwZSwgeyBnZXRHYW1lYm9hcmQsIGdldFNoaXB5YXJkLCBnZXRNaW5pU2hpcHlhcmQgfSk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IFNlc3Npb24gPSAoKCkgPT4ge1xuICAgIGxldCBhY3RpdmVTaGlwID0gbnVsbDtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGxldCBkb3VibGVJbmRleCA9ICdzaGlwJztcbiAgICBsZXQgY3VycmVudEVsZW1lbnQgPSBudWxsO1xuICAgIGxldCBjaG9pc2VkQ2VsbCA9IG51bGw7XG4gICAgbGV0IG1hbnVhbE1vZGUgPSBmYWxzZTtcbiAgICByZXR1cm4geyBtYW51YWxNb2RlLCBhY3RpdmVTaGlwLCBpbmRleCwgZG91YmxlSW5kZXgsIGN1cnJlbnRFbGVtZW50LCBjaG9pc2VkQ2VsbCB9O1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IHJlc2V0U2Vzc2lvbiA9ICgpID0+IHtcbiAgICBTZXNzaW9uLmFjdGl2ZVNoaXAgPSBudWxsO1xuICAgIFNlc3Npb24uaW5kZXggPSAwO1xuICAgIFNlc3Npb24uZG91YmxlSW5kZXggPSAnc2hpcCc7XG4gICAgU2Vzc2lvbi5jdXJyZW50RWxlbWVudCA9IG51bGw7XG59O1xuIiwiaW1wb3J0IHsgcmFuZG9tSW50RnJvbUludGVydmFsLCByZW1vdmVDaGlsZHMgfSBmcm9tICcuLi9oZWxwZXIvaGVscGVyJztcbmltcG9ydCB7IHNldExvd09wYWNpdHkgfSBmcm9tICcuLi92aWV3cy9hbmltYXRpb25zL2NoYW5nZVZpc2libGUnO1xuaW1wb3J0IHsgZ2V0Tm9kZSB9IGZyb20gJy4uL3ZpZXdzL25vZGVzL2ZhY3RvcnknO1xuaW1wb3J0IHsgc2V0U3RhbmRhcnRIb3Jpem9udGFsU2hpcERlc2lnbiwgc2V0U3RhbmRhcnRWZXJ0aWNhbFNoaXBEZXNpZ24gfSBmcm9tICcuLi92aWV3cy9ub2Rlcy9zaGlwJztcbmltcG9ydCB7IERlY2sgfSBmcm9tICcuL2NlbGwnO1xuaW1wb3J0IHsgQ3Jvc3MgfSBmcm9tICcuL2VsZW1lbnRzL3RlbXBsYXRlcyc7XG5pbXBvcnQgeyBTaGlwV2F0ZXJBcmVhcyB9IGZyb20gJy4vd2F0ZXJBcmVhcyc7XG5cbmV4cG9ydCBjb25zdCBTaGlwID0gKGxlbmd0aCwgcGxheWVyLCB0eXBlKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZ2V0Tm9kZSgnc2hpcCcsICdob3Jpem9udGFsJyk7XG4gICAgbGV0IGJvZHkgPSBbXTtcbiAgICBsZXQgbGl2ZSA9IHRydWU7XG4gICAgbGV0IGhvcml6b250YWwgPSB0cnVlO1xuICAgIGxldCBoZWFkID0gbnVsbDtcbiAgICBsZXQgc2hpcCA9IHt9O1xuICAgIGxldCBzaGlwV2F0ZXJBcmVhcyA9IFNoaXBXYXRlckFyZWFzKHBsYXllciwgc2hpcCk7XG5cbiAgICBjb25zdCBzZXRZb3Vyc2VsZiA9ICh0aGlzU2hpcCkgPT4ge1xuICAgICAgICBzaGlwID0gdGhpc1NoaXA7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0WW91cnNlbGYgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzaGlwO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbGxDb250YWluZXIgPSAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBkZWNrID0gRGVjayhpKTtcbiAgICAgICAgICAgIGJvZHkucHVzaChkZWNrKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWNrLmdldENlbGxOb2RlKCkpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHNldE9yaWVudGF0aW9uID0gKCkgPT4ge1xuICAgICAgICBpZiAoY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnaG9yaXpvbnRhbCcpKSB7XG4gICAgICAgICAgICBzZXRWZXJ0aWNhbCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3ZlcnRpY2FsJykpIHtcbiAgICAgICAgICAgIHNldEhvcml6b250YWwoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCB0YWtlRG93bldhdGVyQXJlYXMgPSAoKSA9PiB7XG4gICAgICAgIHNoaXBXYXRlckFyZWFzLmNsZWFyQXJlYXMoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgbGF1bmNoU2hpcE9uV2F0ZXIgPSAobkhlYWQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCB3YXRlckFyZWFzID0gZ2V0V2F0ZXJBcmVhKG5IZWFkKTtcbiAgICAgICAgICAgIGxldCBhY2Vzc2liaWxpdHkgPSB3YXRlckFyZWFzLmNoZWNrQXJlYSgpO1xuICAgICAgICAgICAgaWYgKGFjZXNzaWJpbGl0eSkge1xuICAgICAgICAgICAgICAgIHRha2VEb3duV2F0ZXJBcmVhcygpO1xuICAgICAgICAgICAgICAgIHNoaXBXYXRlckFyZWFzID0gd2F0ZXJBcmVhcztcbiAgICAgICAgICAgICAgICBsaW5rU2hpcFdpdGhGaWVsZCgpO1xuICAgICAgICAgICAgICAgIHNoaXBXYXRlckFyZWFzLm9jY3VweUFyZWFzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWNlc3NpYmlsaXR5O1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGxpbmtTaGlwV2l0aEZpZWxkID0gKCkgPT4ge1xuICAgICAgICBsZXQgYXJlYSA9IHNoaXBXYXRlckFyZWFzLmdldEFyZWFVbmRlclRoZVNoaXAoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgeHkgPSBhcmVhW2ldLmdldFhZKCk7XG4gICAgICAgICAgICBib2R5W2ldLnNldFhZKHh5LngsIHh5LnkpO1xuICAgICAgICAgICAgYXJlYVtpXS5zZXRMaW5rZWREZWNrKGJvZHlbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0V2F0ZXJBcmVhID0gKGhlYWQpID0+IHtcbiAgICAgICAgbGV0IGJvYXJkID0gZ2V0Qm9hcmQoKS5nZXRTdHJ1Y3RlZENvbnRhaW5lcigpO1xuICAgICAgICBsZXQgYXJlYXMgPSBTaGlwV2F0ZXJBcmVhcyhwbGF5ZXIsIHNoaXApO1xuICAgICAgICBsZXQgeCA9IGhlYWQuZ2V0WFkoKS54O1xuICAgICAgICBsZXQgeSA9IGhlYWQuZ2V0WFkoKS55O1xuICAgICAgICBsZXQgbmVjZXNzYXJ5U2VjdG9ycyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBuZWNlc3NhcnlTZWN0b3JzLnB1c2goYm9hcmRbeV1beF0pO1xuICAgICAgICAgICAgaWYgKGhvcml6b250YWwpIHtcbiAgICAgICAgICAgICAgICB4Kys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhcmVhcy5zZXRBcmVhcyhuZWNlc3NhcnlTZWN0b3JzKTtcbiAgICAgICAgcmV0dXJuIGFyZWFzO1xuICAgIH07XG5cbiAgICBjb25zdCBpc0xpdmUgPSAoKSA9PiB7XG4gICAgICAgIGxpdmUgPSBmYWxzZTtcblxuICAgICAgICBib2R5LmZvckVhY2goKGRlY2spID0+IHtcbiAgICAgICAgICAgIGlmICghZGVjay5pc0hpdCgpKSB7XG4gICAgICAgICAgICAgICAgbGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBsaXZlO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRCb2R5ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYm9keTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0Q29udGFpbmVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRIZWFkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gaGVhZDtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0SGVhZCA9IChuSGVhZCkgPT4ge1xuICAgICAgICBoZWFkID0gbkhlYWQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGhvcml6b250YWw7XG4gICAgfTtcblxuICAgIGNvbnN0IG9yaWVudGF0aW9uU3dpdGNoID0gKCkgPT4ge1xuICAgICAgICBob3Jpem9udGFsID0gIWhvcml6b250YWw7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldFZlcnRpY2FsID0gKCkgPT4ge1xuICAgICAgICBzZXRTdGFuZGFydFZlcnRpY2FsU2hpcERlc2lnbihjb250YWluZXIsIGxlbmd0aCk7XG4gICAgICAgIGhvcml6b250YWwgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0SG9yaXpvbnRhbCA9ICgpID0+IHtcbiAgICAgICAgc2V0U3RhbmRhcnRIb3Jpem9udGFsU2hpcERlc2lnbihjb250YWluZXIsIGxlbmd0aCk7XG4gICAgICAgIGhvcml6b250YWwgPSB0cnVlO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXRSYW5kb21PcmllbnRhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgcmFuZG9tSW50RnJvbUludGVydmFsKDAsIDEpID09PSAxID8gc2V0SG9yaXpvbnRhbCgpIDogc2V0VmVydGljYWwoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwbGF5ZXIuZ2V0R2FtZWJvYXJkKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICAgICAgICBoZWFkID0gbnVsbDtcbiAgICAgICAgaWYgKCFjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdtaW5pLXNoaXAnKSkge1xuICAgICAgICAgICAgc2V0SG9yaXpvbnRhbCgpO1xuICAgICAgICB9XG4gICAgICAgIHJlc2V0Qm9keSgpO1xuICAgICAgICBzaGlwV2F0ZXJBcmVhcy5jbGVhckFyZWFzKCk7XG4gICAgICAgIHNoaXBXYXRlckFyZWFzID0gU2hpcFdhdGVyQXJlYXMocGxheWVyLCBzaGlwKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzZXRCb2R5ID0gKCkgPT4ge1xuICAgICAgICBjb250YWluZXIuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmJvcmRlciA9ICdtaW4oMC4xdmgsIDAuMXZ3KSByZ2JhKDAsIDAsIDI1NSwgMSkgc29saWQnO1xuICAgICAgICBib2R5LmZvckVhY2goZGVjayA9PiB7XG4gICAgICAgICAgICBkZWNrLnJlc2V0KCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VHlwZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuXG4gICAgY29uc3Qga2lsbCA9ICgpID0+IHtcbiAgICAgICAgYm9keS5mb3JFYWNoKGRlY2sgPT4ge1xuICAgICAgICAgICAgc2V0TG93T3BhY2l0eShkZWNrLmdldENlbGxOb2RlKCkpO1xuICAgICAgICAgICAgZGVjay5zZXRUaGVIaXQoKTtcbiAgICAgICAgfSlcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSAnMC4zJztcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmJvcmRlciA9ICdtaW4oMC4xdmgsIDAuMXZ3KSByZ2JhKDI1NSwgMCwgMCwgMSkgc29saWQnO1xuICAgICAgICBsaXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0V2F0ZXJBcmVhcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHNoaXBXYXRlckFyZWFzXG4gICAgfVxuXG4gICAgZmlsbENvbnRhaW5lcigpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0UmFuZG9tT3JpZW50YXRpb24sXG4gICAgICAgIHJlc2V0LFxuICAgICAgICBzZXRIb3Jpem9udGFsLFxuICAgICAgICBzZXRWZXJ0aWNhbCxcbiAgICAgICAgZ2V0Qm9hcmQsXG4gICAgICAgIHRha2VEb3duV2F0ZXJBcmVhcyxcbiAgICAgICAgbGF1bmNoU2hpcE9uV2F0ZXIsXG4gICAgICAgIG9yaWVudGF0aW9uU3dpdGNoLFxuICAgICAgICBzZXRPcmllbnRhdGlvbixcbiAgICAgICAgaXNMaXZlLFxuICAgICAgICBnZXRCb2R5LFxuICAgICAgICBnZXRDb250YWluZXIsXG4gICAgICAgIGdldEhlYWQsXG4gICAgICAgIHNldEhlYWQsXG4gICAgICAgIGlzSG9yaXpvbnRhbCxcbiAgICAgICAgc2V0WW91cnNlbGYsXG4gICAgICAgIGdldFlvdXJzZWxmLFxuICAgICAgICBnZXRUeXBlLFxuICAgICAgICBraWxsLFxuICAgICAgICBnZXRXYXRlckFyZWFzXG4gICAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBGcmVnYXQgPSAobWFya2VyKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gU2hpcCg0LCBtYXJrZXIsICdmcmVnYXRzJyk7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvdG90eXBlLCBtYXJrZXIpO1xufTtcblxuZXhwb3J0IGNvbnN0IENhcmF2ZWwgPSAobWFya2VyKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gU2hpcCgzLCBtYXJrZXIsICdjYXJhdmVscycpO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3RvdHlwZSk7XG59O1xuXG5leHBvcnQgY29uc3QgRHJha2thciA9IChtYXJrZXIpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBTaGlwKDIsIG1hcmtlciwgJ2RyYWtrYXJzJyk7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvdG90eXBlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBCb2F0ID0gKG1hcmtlcikgPT4ge1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IFNoaXAoMSwgbWFya2VyLCAnYm9hdHMnKTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm90b3R5cGUpO1xufTtcbiIsImltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vZ2FtZUNvbmZpZyc7XG5pbXBvcnQgeyBCb2F0LCBDYXJhdmVsLCBEcmFra2FyLCBGcmVnYXQgfSBmcm9tICcuL3NoaXAnO1xuXG5leHBvcnQgY29uc3QgU2hpcHlhcmQgPSAocGxheWVyLCBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXB5YXJkJykpID0+IHtcbiAgICBjb25zdCBmcmVnYXRzID0gRG9jayhDb25maWcuRWxlbWVudHMubnVtYmVyT2YuZnJlZ2F0ZXMsICdGcmVnYXQnLCBwbGF5ZXIpO1xuICAgIGNvbnN0IGNhcmF2ZWxzID0gRG9jayhDb25maWcuRWxlbWVudHMubnVtYmVyT2YuY2FyYXZlbHMsICdDYXJhdmVsJywgcGxheWVyKTtcbiAgICBjb25zdCBkcmFra2FycyA9IERvY2soQ29uZmlnLkVsZW1lbnRzLm51bWJlck9mLmRyYWtrYXJzLCAnRHJha2thcicsIHBsYXllcik7XG4gICAgY29uc3QgYm9hdHMgPSBEb2NrKENvbmZpZy5FbGVtZW50cy5udW1iZXJPZi5ib2F0cywgJ0JvYXQnLCBwbGF5ZXIpO1xuICAgIGNvbnN0IHNoaXBzID0gZnJlZ2F0c1xuICAgICAgICAuZ2V0U2hpcHMoKVxuICAgICAgICAuY29uY2F0KFxuICAgICAgICAgICAgY2FyYXZlbHNcbiAgICAgICAgICAgICAgICAuZ2V0U2hpcHMoKVxuICAgICAgICAgICAgICAgIC5jb25jYXQoZHJha2thcnMuZ2V0U2hpcHMoKS5jb25jYXQoYm9hdHMuZ2V0U2hpcHMoKSkpLFxuICAgICAgICApO1xuXG4gICAgY29uc3QgZ2V0U2hpcHNPZlR5cGUgPSAodHlwZSkgPT4ge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2ZyZWdhdHMnOlxuICAgICAgICAgICAgICAgIHJldHVybiBmcmVnYXRzLmdldFNoaXBzKCk7XG4gICAgICAgICAgICBjYXNlICdjYXJhdmVscyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhcmF2ZWxzLmdldFNoaXBzKCk7XG4gICAgICAgICAgICBjYXNlICdkcmFra2Fycyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRyYWtrYXJzLmdldFNoaXBzKCk7XG4gICAgICAgICAgICBjYXNlICdib2F0cyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJvYXRzLmdldFNoaXBzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0RG9ja1dpdGhGcmVnYXRzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZnJlZ2F0cztcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0RG9ja1dpdGhDYXJhdmVscyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNhcmF2ZWxzO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXREb2NrV2l0aERyYWtrYXJzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZHJha2thcnM7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldERvY2tXaXRoQm9hdHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBib2F0cztcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UGxheWVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcGxheWVyO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRBbGxTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHNoaXBzO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXROb2RlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBjb25zdCBpc0VtcHR5ID0gKCkgPT4ge1xuICAgICAgICBsZXQgbGF1bmNoZWRTaGlwcyA9IG5vZGUucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAnKTtcbiAgICAgICAgcmV0dXJuIGxhdW5jaGVkU2hpcHMubGVuZ3RoID09PSAwO1xuICAgIH07XG5cbiAgICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgc2hpcC5yZXNldCgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0U2hpcHNPZlR5cGUsXG4gICAgICAgIGlzRW1wdHksXG4gICAgICAgIHJlc2V0LFxuICAgICAgICBnZXRBbGxTaGlwcyxcbiAgICAgICAgZ2V0UGxheWVyLFxuICAgICAgICBnZXREb2NrV2l0aEZyZWdhdHMsXG4gICAgICAgIGdldERvY2tXaXRoQ2FyYXZlbHMsXG4gICAgICAgIGdldERvY2tXaXRoRHJha2thcnMsXG4gICAgICAgIGdldERvY2tXaXRoQm9hdHMsXG4gICAgICAgIGdldE5vZGVcbiAgICB9O1xufTtcblxuY29uc3QgRG9jayA9IChjb3VudCwgc2hpcEJsdWVQcmludCwgcGxheWVyKSA9PiB7XG4gICAgY29uc3Qgc2hpcHMgPSBbXTtcblxuICAgIGNvbnN0IGZpbGxEb2NrID0gKGNvdW50LCBzaGlwQmx1ZVByaW50KSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc2hpcCA9IGJ1aWxkU2hpcChzaGlwQmx1ZVByaW50KTtcbiAgICAgICAgICAgIHNoaXAuc2V0WW91cnNlbGYoc2hpcCk7XG4gICAgICAgICAgICBzaGlwcy5wdXNoKHNoaXApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGJ1aWxkU2hpcCA9IChibHVlUHJpbnQpID0+IHtcbiAgICAgICAgc3dpdGNoIChibHVlUHJpbnQpIHtcbiAgICAgICAgICAgIGNhc2UgJ0ZyZWdhdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEZyZWdhdChwbGF5ZXIpO1xuICAgICAgICAgICAgY2FzZSAnQ2FyYXZlbCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIENhcmF2ZWwocGxheWVyKTtcbiAgICAgICAgICAgIGNhc2UgJ0RyYWtrYXInOlxuICAgICAgICAgICAgICAgIHJldHVybiBEcmFra2FyKHBsYXllcik7XG4gICAgICAgICAgICBjYXNlICdCb2F0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gQm9hdChwbGF5ZXIpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU29ycnksIGlsbGVnYWwgc2hpcCBibHVlcHJpbnQnKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmaWxsRG9jayhjb3VudCwgc2hpcEJsdWVQcmludCk7XG5cbiAgICBjb25zdCBnZXRTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHNoaXBzO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBnZXRTaGlwcyB9O1xufTtcbiIsImltcG9ydCB7IGdhbWUgfSBmcm9tIFwiLi5cIjtcbmltcG9ydCB7IHJlbW92ZUNoaWxkcyB9IGZyb20gXCIuLi9oZWxwZXIvaGVscGVyXCI7XG5pbXBvcnQgeyBnZXRSYW5kb21DZWxsIH0gZnJvbSBcIi4uL3ZpZXdzL25vZGVzL3NoaXBcIjtcbmltcG9ydCB7IHRpbWVyRWZmZWN0IH0gZnJvbSBcIi4vZWxlbWVudHMvYXVkaW9FZmZlY3RzXCI7XG5pbXBvcnQgeyBUaW1lciB9IGZyb20gXCIuL2VsZW1lbnRzL3RlbXBsYXRlc1wiO1xuXG5cbmV4cG9ydCBjb25zdCBUaW1lTWFuaXB1bGF0b3JzID0gKCkgPT4ge1xuICAgIGxldCB0aW1lT2ZUaGVNb3ZlO1xuICAgIGxldCBhaVNwZWVkT2ZUb3VnaHQ7XG4gICAgbGV0IHRpbWVCZXR3ZWVuTW92ZXM7XG4gICAgbGV0IGFsYXJtO1xuICAgIGxldCB0aW1lciA9IFRpbWVyKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVyJykuYXBwZW5kQ2hpbGQodGltZXIuZ2V0U3ZnKCkpO1xuXG4gICAgY29uc3Qgc2V0QWlTcGVlZE9mVG91Z2h0ID0gKGNlbGxzKSA9PiB7XG4gICAgICAgIGFpU3BlZWRPZlRvdWdodCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZ2FtZS5nYW1lSGFuZGxlci50YWtlSGl0KGdldFJhbmRvbUNlbGwoY2VsbHMpKTtcbiAgICAgICAgICAgIHNldFRpbWVCZXR3ZWVuTW92ZXMoMTAwMCk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH1cblxuICAgIGNvbnN0IHNldFRpbWVCZXR3ZWVuTW92ZXMgPSAodGltZW91dCkgPT4ge1xuICAgICAgICB0aW1lQmV0d2Vlbk1vdmVzID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBnYW1lLmdhbWVIYW5kbGVyLnN3aXRjaE1vdmUoKTtcbiAgICAgICAgfSwgdGltZW91dCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0VGltZU9mVGhlTW92ZSA9ICgpID0+IHtcbiAgICAgICAgdGltZXIudmlldygpO1xuICAgICAgICB0aW1lT2ZUaGVNb3ZlID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgZ2FtZS5nYW1lSGFuZGxlci5zd2l0Y2hNb3ZlKCk7XG4gICAgICAgIH0sIDE1MDAwKTtcbiAgICAgICAgYWxhcm0gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRpbWVyRWZmZWN0LnBsYXkoKTtcbiAgICAgICAgfSwgMTAwMDApO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICAgICAgICB0aW1lci5yZXNldCgpO1xuICAgICAgICBjbGVhclRpbWVvdXQoYWlTcGVlZE9mVG91Z2h0KTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVCZXR3ZWVuTW92ZXMpO1xuICAgICAgICBjbGVhclRpbWVvdXQoYWxhcm0pO1xuICAgICAgICBjbGVhckludGVydmFsKHRpbWVPZlRoZU1vdmUpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHNldEFpU3BlZWRPZlRvdWdodCwgc2V0VGltZUJldHdlZW5Nb3Zlcywgc2V0VGltZU9mVGhlTW92ZSwgcmVzZXQgfVxufSIsImltcG9ydCB7IENlbGxIYW5kbGVyIH0gZnJvbSAnLi9jZWxsSGFuZGxlcic7XG5pbXBvcnQgeyBTZXNzaW9uIH0gZnJvbSAnLi9zZXNzaW9uJztcblxuZXhwb3J0IGNvbnN0IFNoaXBXYXRlckFyZWFzID0gKHBsYXllciwgc2hpcCkgPT4ge1xuICAgIGxldCB1bmRlclRoZVNoaXAgPSBbXTtcbiAgICBsZXQgYXJvdW5kVGhlU2hpcCA9IFtdO1xuXG4gICAgY29uc3QgZ2V0QXJlYVVuZGVyVGhlU2hpcCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHVuZGVyVGhlU2hpcDtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0QXJlYUFyb3VuZFRoZVNoaXAgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBhcm91bmRUaGVTaGlwO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXRBcmVhcyA9IChhcmVhKSA9PiB7XG4gICAgICAgIHVuZGVyVGhlU2hpcCA9IGFyZWE7XG4gICAgICAgIGFyb3VuZFRoZVNoaXAgPSBzZXRBcmVhQXJvdW5kVGhlU2hpcCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXRBcmVhQXJvdW5kVGhlU2hpcCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGhhbmRsZXIgPSBDZWxsSGFuZGxlcigpO1xuICAgICAgICBsZXQgYXJlYXMgPSBbXTtcbiAgICAgICAgbGV0IHBhcmVudCA9IHBsYXllci5nZXRHYW1lYm9hcmQoKS5nZXRTdHJ1Y3RlZENvbnRhaW5lcigpO1xuICAgICAgICB1bmRlclRoZVNoaXAuZm9yRWFjaCgoc2VjdG9yKSA9PiB7XG4gICAgICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSBzZWN0b3IuZ2V0WFkoKTtcbiAgICAgICAgICAgIGxldCBhcmVhID0gaGFuZGxlci5nZXRDZWxsQXJvdW5kQXJlYShcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlcy54LFxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzLnksXG4gICAgICAgICAgICAgICAgcGFyZW50LFxuICAgICAgICAgICAgICAgIHNoaXAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYXJlYXMgPSBhcmVhcy5jb25jYXQoYXJlYSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KGFyZWFzKSkuZmlsdGVyKFxuICAgICAgICAgICAgKHgpID0+ICF1bmRlclRoZVNoaXAuaW5jbHVkZXMoeCksXG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9jY3VweUFyZWFzID0gKCkgPT4ge1xuICAgICAgICB1bmRlclRoZVNoaXAuZm9yRWFjaCgoc2VjdG9yKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2VjdG9yLmlzRnJlZSgpKSB7XG4gICAgICAgICAgICAgICAgc2VjdG9yLm9jY3VweShzaGlwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNoZWNrQXJlYSA9ICgpID0+IHtcbiAgICAgICAgbGV0IGFjZXNzaWJpbGl0eSA9IHRydWU7XG4gICAgICAgIGxldCBhcmVhcyA9IHVuZGVyVGhlU2hpcC5jb25jYXQoYXJvdW5kVGhlU2hpcCk7XG5cbiAgICAgICAgYXJlYXMuZm9yRWFjaCgoc2VjdG9yKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXNlY3Rvci5pc0ZyZWUoKSAmJiBzZWN0b3IuZ2V0T2NjdXBhbnQoKSAhPT0gc2hpcCkge1xuICAgICAgICAgICAgICAgIGFjZXNzaWJpbGl0eSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYWNlc3NpYmlsaXR5O1xuICAgIH07XG5cbiAgICBjb25zdCBjbGVhckFyZWFzID0gKCkgPT4ge1xuICAgICAgICBsZXQgYXJlYXMgPSB1bmRlclRoZVNoaXAuY29uY2F0KGFyb3VuZFRoZVNoaXApO1xuICAgICAgICBhcmVhcy5mb3JFYWNoKChzZWN0b3IpID0+IHtcbiAgICAgICAgICAgIHNlY3Rvci5jbGVhcigpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2xlYXJBcmVhcyxcbiAgICAgICAgY2hlY2tBcmVhLFxuICAgICAgICBnZXRBcmVhVW5kZXJUaGVTaGlwLFxuICAgICAgICBnZXRBcmVhQXJvdW5kVGhlU2hpcCxcbiAgICAgICAgc2V0QXJlYXMsXG4gICAgICAgIG9jY3VweUFyZWFzLFxuICAgIH07XG59O1xuIiwiZXhwb3J0IGNvbnN0IEFuaW1hdGlvbnMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHRyYW5zZm9ybSA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHggPSAoZSwgeDAsIHgxLCBkdXIsIGZpbGwgPSAnbm9uZScpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBlLmFuaW1hdGUoW3sgbGVmdDogYCR7eDB9YCB9LCB7IGxlZnQ6IGAke3gxfWAgfV0sIHsgZHVyYXRpb246IGR1ciwgZmlsbDogZmlsbCB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHkgPSAoZSwgeTAsIHkxLCBkdXIsIGZpbGwgPSAnbm9uZScpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBlLmFuaW1hdGUoW3sgdG9wOiBgJHt5MH1gIH0sIHsgdG9wOiBgJHt5MX1gIH1dLCB7IGR1cmF0aW9uOiBkdXIsIGZpbGw6IGZpbGwgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByb3RhdGUgPSAoZSwgcm90YXRlMSwgcm90YXRlMiwgZHVyLCBmaWxsID0gJ25vbmUnKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZS5hbmltYXRlKFt7IHRyYW5zZm9ybTogYHJvdGF0ZSgke3JvdGF0ZTF9ZGVnKWAgfSwgeyB0cmFuc2Zvcm06IGByb3RhdGUoJHtyb3RhdGUyfWRlZylgIH1dLCB7IGR1cmF0aW9uOiBkdXIsIGZpbGw6IGZpbGwgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyB4LCB5LCByb3RhdGUgfTtcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IChlLCBjb2xvcjEsIGNvbG9yMiwgZHVyLCBmaWxsID0gJ25vbmUnKSA9PiB7XG4gICAgICAgIHJldHVybiBlLmFuaW1hdGUoW3sgYmFja2dyb3VuZDogY29sb3IxIH0sIHsgYmFja2dyb3VuZDogY29sb3IyIH1dLCB7IGR1cmF0aW9uOiBkdXIsIGZpbGw6IGZpbGwgfSk7XG4gICAgfVxuXG4gICAgY29uc3Qgb3BhY2l0eSA9IChlLCBvcGFjaXR5MSwgb3BhY2l0eTIsIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICByZXR1cm4gZS5hbmltYXRlKFt7IG9wYWNpdHk6IG9wYWNpdHkxIH0sIHsgb3BhY2l0eTogb3BhY2l0eTIgfV0sIHsgZHVyYXRpb246IGR1ciwgZmlsbDogZmlsbCB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBjdXN0b20gPSAoZSwgZHVyLCBmaWxsID0gJ25vbmUnLCAuLi5rZXlGcmFtZXMpID0+IHtcbiAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZSguLi5rZXlGcmFtZXMsIHsgZHVyYXRpb246IGR1ciwgZmlsbDogZmlsbCB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4geyB0cmFuc2Zvcm0sIGJhY2tncm91bmQsIG9wYWNpdHksIGN1c3RvbSB9O1xufSkoKTtcbiIsImV4cG9ydCBjb25zdCBzZXRIaWRkZW4gPSAobm9kZSkgPT4ge1xuICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlSGlkZGVuID0gKG5vZGUpID0+IHtcbiAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldExvd09wYWNpdHkgPSAobm9kZSkgPT4ge1xuICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnbG93LW9wYWNpdHknKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNldE5vcm1hbE9wYWNpdHkgPSAobm9kZSkgPT4ge1xuICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnbG93LW9wYWNpdHknKTtcbn1cblxuZXhwb3J0IGNvbnN0IHJlbW92ZU51bGxPcGFjaXR5ID0gKG5vZGUpID0+IHtcbiAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ251bGwtb3BhY2l0eScpO1xufVxuXG5leHBvcnQgY29uc3Qgc2V0TnVsbE9wYWNpdHkgPSAobm9kZSkgPT4ge1xuICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnbnVsbC1vcGFjaXR5Jyk7XG59IiwiaW1wb3J0IHsgQW5pbWF0aW9ucyB9IGZyb20gXCIuL2FuaW1hdGlvbnNcIjtcblxuZXhwb3J0IGNvbnN0IGRyYXdDcm9zcyA9IChlLCBkdXIsIGZpbGwsIC4uLmtleUZyYW1lcykgPT4ge1xuICAgIEFuaW1hdGlvbnMuY3VzdG9tKGUuZmlyc3RDaGlsZCwgZHVyLCBmaWxsLCAuLi5rZXlGcmFtZXMpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZXR1cm4gQW5pbWF0aW9ucy5jdXN0b20oZS5sYXN0Q2hpbGQsIGR1ciwgZmlsbCwgLi4ua2V5RnJhbWVzKTtcbiAgICB9LCBkdXIpO1xufVxuIiwiaW1wb3J0IHsgQW5pbWF0aW9ucyB9IGZyb20gXCIuL2FuaW1hdGlvbnNcIjtcblxuZXhwb3J0IGNvbnN0IGNvbG9yc1RpbWVyID0gKGUsIGR1ciwgZmlsbCwgLi4ua2V5RnJhbWVzKSA9PiB7XG4gICAgcmV0dXJuIEFuaW1hdGlvbnMuY3VzdG9tKGUsIGR1ciwgZmlsbCwgLi4ua2V5RnJhbWVzKTtcbn1cblxuZXhwb3J0IGNvbnN0IGRyYXdUaW1lciA9IChlLCBkdXIsIGZpbGwsIC4uLmtleUZyYW1lcykgPT4ge1xuICAgIHJldHVybiBBbmltYXRpb25zLmN1c3RvbShlLCBkdXIsIGZpbGwsIC4uLmtleUZyYW1lcyk7XG59XG4iLCJleHBvcnQgY29uc3Qgc2V0RHJhZ2dhYmxlID0gKG5vZGUpID0+IHtcbiAgICBub2RlLmRyYWdnYWJsZSA9IHRydWU7XG59O1xuIiwiaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2dhbWVDb25maWcnO1xuaW1wb3J0IHsgc2V0RHJhZ2dhYmxlIH0gZnJvbSAnLi9zZXREcmFnZ2FibGUnO1xuXG5leHBvcnQgY29uc3Qgc2V0RHJhZ2dhYmxlRm9yU2hpcHMgPSAoKSA9PiB7XG4gICAgQ29uZmlnLkVsZW1lbnRzLnNoaXBUeXBlcy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICAgIGZvclR5cGUodHlwZSk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBmb3JUeXBlID0gKHR5cGUpID0+IHtcbiAgICBjb25zdCBkb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dHlwZX1gKTtcbiAgICBjb25zdCBzaGlwcyA9IEFycmF5LmZyb20oZG9jay5jaGlsZHJlbik7XG5cbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgIHNldERyYWdnYWJsZShzaGlwKTtcbiAgICB9KTtcbn07XG4iLCJpbXBvcnQgeyBBbHBoYWJldHMgfSBmcm9tICcuLi8uLi9tb2RlbHMvYWxwaGFiZXRzJztcbmltcG9ydCB7IGdldE5vZGUgfSBmcm9tICcuL2ZhY3RvcnknO1xuXG5jb25zdCBhbHBoYWJldCA9IEFscGhhYmV0cy5ydXMoKS5jb2RlcztcblxuZXhwb3J0IGNvbnN0IHZpZXdBeGlzID0gKGJvYXJkKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGJvYXJkLmdldE5vZGUoKTtcbiAgICBjb25zdCB4QXhpcyA9IG5vZGUucXVlcnlTZWxlY3RvcignLngtYXhpcycpO1xuICAgIGNvbnN0IHlBeGlzID0gbm9kZS5xdWVyeVNlbGVjdG9yKCcueS1heGlzJyk7XG4gICAgY29uc3Qgc2l6ZSA9IGJvYXJkLmdldFNpemUoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZS53aWR0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBnZXROb2RlKCd4LWNlbGwnLCAnY2VsbCcpO1xuICAgICAgICBjb25zdCBsZXR0ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGFscGhhYmV0W2ldKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gbGV0dGVyO1xuICAgICAgICB4QXhpcy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemUuaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGdldE5vZGUoJ3ktY2VsbCcsICdjZWxsJyk7XG4gICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBpO1xuICAgICAgICB5QXhpcy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICB9XG59O1xuIiwiZXhwb3J0IGNvbnN0IGdldE5vZGUgPSAoLi4ubmFtZXMpID0+IHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgICBpZiAobmFtZSAhPT0gJycpIHtcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChuYW1lKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBub2RlO1xufTtcbiIsImltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uLy4uL21vZGVscy9nYW1lQ29uZmlnJztcblxuZXhwb3J0IGNvbnN0IHZpZXdCb2FyZCA9IChib2FyZCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGJvYXJkLmdldFVuc3RydWN0ZWRDb250YWluZXIoKTtcbiAgICBjb25zdCBib2FyZHdyID0gYm9hcmQuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpO1xuICAgIGNvbnRhaW5lci5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgIGJvYXJkd3IuYXBwZW5kQ2hpbGQoY2VsbC5nZXRDZWxsTm9kZSgpKTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IFN0eWxlUHJlc2V0cyA9ICgoKSA9PiB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAnLS1ib2FyZC13aWR0aCcsXG4gICAgICAgIENvbmZpZy5HYW1lYm9hcmQud2lkdGgsXG4gICAgKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgICctLWJvYXJkLWhlaWdodCcsXG4gICAgICAgIENvbmZpZy5HYW1lYm9hcmQuaGVpZ2h0LFxuICAgICk7XG59KSgpO1xuIiwiaW1wb3J0IHsgZHJhd0Nyb3NzLCBtaXNzRWZmZWN0IH0gZnJvbSBcIi4uLy4uL21vZGVscy9lbGVtZW50cy9hdWRpb0VmZmVjdHNcIjtcbmltcG9ydCB7IENyb3NzIH0gZnJvbSBcIi4uLy4uL21vZGVscy9lbGVtZW50cy90ZW1wbGF0ZXNcIjtcbmltcG9ydCB7IHJlbW92ZU51bGxPcGFjaXR5IH0gZnJvbSBcIi4uL2FuaW1hdGlvbnMvY2hhbmdlVmlzaWJsZVwiO1xuXG5leHBvcnQgY29uc3Qgdmlld01pc3NIaXQgPSAoY2VsbCkgPT4ge1xuICAgIGNlbGwuZ2V0Q2VsbE5vZGUoKS5jbGFzc0xpc3QuYWRkKCdtaXNzLWhpdCcpO1xufVxuXG5leHBvcnQgY29uc3Qgdmlld0FjY3VyYXRlSGl0ID0gKGNlbGwpID0+IHtcbiAgICBjb25zdCBkZWNrID0gY2VsbC5nZXRMaW5rZWREZWNrKCk7XG4gICAgcmVtb3ZlTnVsbE9wYWNpdHkoZGVjay5nZXRDZWxsTm9kZSgpKTtcbiAgICBkZWNrLnNldFRoZUhpdCgpO1xuICAgIGFwcGVuZENyb3NzU3ZnKGRlY2spO1xuICAgIGRyYXdDcm9zcy5wbGF5KCk7XG59XG5cbmV4cG9ydCBjb25zdCBhcHBlbmRDcm9zc1N2ZyA9IChkZWNrKSA9PiB7XG4gICAgbGV0IGNvcHlDcm9zcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcm9zcycpLmNsb25lTm9kZSh0cnVlKTtcbiAgICBjb3B5Q3Jvc3MuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgbGV0IGNyb3NzID0gQ3Jvc3MoKTtcbiAgICBkZWNrLmdldENlbGxOb2RlKCkuYXBwZW5kQ2hpbGQoY3Jvc3MuZ2V0U3ZnKCkpO1xuICAgIGNyb3NzLnZpZXcoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZGVjay5nZXRDZWxsTm9kZSgpLnJlbW92ZUNoaWxkKGNyb3NzLmdldFN2ZygpKTtcbiAgICAgICAgZGVjay5nZXRDZWxsTm9kZSgpLmFwcGVuZENoaWxkKGNvcHlDcm9zcyk7XG4gICAgfSwgNTAwKTtcbn0iLCJpbXBvcnQgeyBhcHBlbmRDaGlsZHMsIHNldEF0dHJpYnV0ZXMgfSBmcm9tIFwiLi4vLi4vaGVscGVyL2hlbHBlclwiO1xuaW1wb3J0IHsgQ3Jvc3NBdHRyaWJ1dGVzIH0gZnJvbSBcIi4uLy4uL21vZGVscy9lbGVtZW50cy9hdHRyaWJ1dGVzXCI7XG5pbXBvcnQgeyBkcmF3Q3Jvc3MgfSBmcm9tIFwiLi4vYW5pbWF0aW9ucy9tYXJrZXJzXCI7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDcm9zc1NWRyA9ICgpID0+IHtcbiAgICBsZXQgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICBsZXQgbGVmdExpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ2xpbmUnKTtcbiAgICBsZXQgcmlnaHRMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdsaW5lJyk7XG4gICAgYXBwZW5kQ2hpbGRzKHN2ZywgbGVmdExpbmUsIHJpZ2h0TGluZSk7XG4gICAgc2V0QXR0cmlidXRlcyhsZWZ0TGluZSwgQ3Jvc3NBdHRyaWJ1dGVzLmxpbmUuY29uY2F0KENyb3NzQXR0cmlidXRlcy5sZWZ0RGlhZykpO1xuICAgIHNldEF0dHJpYnV0ZXMocmlnaHRMaW5lLCBDcm9zc0F0dHJpYnV0ZXMubGluZS5jb25jYXQoQ3Jvc3NBdHRyaWJ1dGVzLnJpZ2h0RGlhZykpO1xuICAgIHJldHVybiBzdmc7XG59XG5cbmV4cG9ydCBjb25zdCB2aWV3Q3Jvc3MgPSAoc3ZnKSA9PiB7XG4gICAgY29uc3QgYW5pbWF0aW9ucyA9IFtcbiAgICAgICAgZHJhd0Nyb3NzKHN2ZywgMjAwLCAnZm9yd2FyZHMnLCBbeyBzdHJva2VEYXNob2Zmc2V0OiAnbWluKDV2aCAsMnZ3KScgfSwgeyBzdHJva2VEYXNob2Zmc2V0OiAnbWluKDB2aCAsMHZ3KScgfV0pXG4gICAgXVxuICAgIHJldHVybiBhbmltYXRpb25zO1xufSIsImltcG9ydCB7IGxvc2UsIHdpbiB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZWxlbWVudHMvYXVkaW9FZmZlY3RzXCI7XG5cbmV4cG9ydCBjb25zdCB2aWV3V2luUG9wdXAgPSAoKSA9PiB7XG4gICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtd2luJyk7XG4gICAgcG9wdXAuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgcG9wdXAuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICB3aW4ucGxheSgpO1xufVxuXG5leHBvcnQgY29uc3Qgdmlld0xvc2VQb3B1cCA9ICgpID0+IHtcbiAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1sb3NlJyk7XG4gICAgcG9wdXAuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgcG9wdXAuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICBsb3NlLnBsYXkoKTtcbn1cblxuZXhwb3J0IGNvbnN0IGhpZGRlblBvcHVwID0gKHBvcHVwKSA9PiB7XG4gICAgcG9wdXAuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgcG9wdXAuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIHdpbi5wYXVzZSgpO1xuICAgIGxvc2UucGF1c2UoKTtcbn0iLCJpbXBvcnQgeyB2aWV3QXhpcyB9IGZyb20gJy4vYXhpcyc7XG5pbXBvcnQgeyB2aWV3Qm9hcmQgfSBmcm9tICcuL2dhbWVib2FyZCc7XG5cbmV4cG9ydCBjb25zdCB2aWV3UHJvZmlsZSA9IChwcm9maWxlKSA9PiB7XG4gICAgdmlld0JvYXJkKHByb2ZpbGUuZ2V0R2FtZWJvYXJkKCkpO1xuICAgIHZpZXdBeGlzKHByb2ZpbGUuZ2V0R2FtZWJvYXJkKCkpO1xufTtcbiIsImltcG9ydCB7IGdhbWUgfSBmcm9tICcuLi8uLic7XG5pbXBvcnQgeyByYW5kb21JbnRGcm9tSW50ZXJ2YWwgfSBmcm9tICcuLi8uLi9oZWxwZXIvaGVscGVyJztcbmltcG9ydCB7IFNlc3Npb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvc2Vzc2lvbic7XG5pbXBvcnQgeyByZW1vdmVIaWRkZW4sIHNldEhpZGRlbiB9IGZyb20gJy4uL2FuaW1hdGlvbnMvY2hhbmdlVmlzaWJsZSc7XG5cbmV4cG9ydCBjb25zdCB2aWV3U2hpcCA9IChzaGlwLCBoZWFkKSA9PiB7XG4gICAgbGV0IGlzVmlldyA9IHNoaXAubGF1bmNoU2hpcE9uV2F0ZXIoaGVhZCk7XG4gICAgaWYgKGlzVmlldykge1xuICAgICAgICBzaGlwLnNldEhlYWQoaGVhZCk7XG4gICAgICAgIGhlYWQuZ2V0Q2VsbE5vZGUoKS5hcHBlbmRDaGlsZChzaGlwLmdldENvbnRhaW5lcigpKTtcbiAgICAgICAgY2hlY2tTaGlweWFyZCgpO1xuICAgIH1cbiAgICByZXR1cm4gaXNWaWV3O1xufTtcblxuY29uc3QgY2hlY2tTaGlweWFyZCA9ICgpID0+IHtcbiAgICBpZiAoU2Vzc2lvbi5tYW51YWxNb2RlKSB7XG4gICAgICAgIGlmIChnYW1lLnBsYXllci5nZXRTaGlweWFyZCgpLmlzRW1wdHkoKSkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2xvc2VNYW51YWxNZW51KCk7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuY29uc3QgY2xvc2VNYW51YWxNZW51ID0gKCkgPT4ge1xuICAgIGNvbnN0IHNoaXB5YXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXB5YXJkJyk7XG4gICAgcmVtb3ZlSGlkZGVuKGdhbWUuYWkuZ2V0R2FtZWJvYXJkKCkuZ2V0Tm9kZSgpKTtcbiAgICBzZXRIaWRkZW4oc2hpcHlhcmQpO1xufTtcblxuZXhwb3J0IGNvbnN0IHZpZXdTaGlwT25SYW5kb21DZWxsID0gKHNoaXAsIGNlbGxzKSA9PiB7XG4gICAgbGV0IGNlbGwgPSBnZXRSYW5kb21DZWxsKGNlbGxzKTtcbiAgICBsZXQgaXNWaWV3ID0gdmlld1NoaXAoc2hpcCwgY2VsbCk7XG4gICAgcmV0dXJuIGlzVmlldyA/IHRydWUgOiB2aWV3U2hpcE9uUmFuZG9tQ2VsbChzaGlwLCBjZWxscyk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UmFuZG9tQ2VsbCA9IChjZWxscykgPT4ge1xuICAgIGxldCBpbmRleCA9IHJhbmRvbUludEZyb21JbnRlcnZhbCgwLCBjZWxscy5sZW5ndGggLSAxKTtcbiAgICByZXR1cm4gY2VsbHMuc3BsaWNlKGluZGV4LCAxKVswXTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRTdGFuZGFydEhvcml6b250YWxTaGlwRGVzaWduID0gKGNvbnRhaW5lciwgbGVuZ3RoKSA9PiB7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3ZlcnRpY2FsJyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hvcml6b250YWwnKTtcbiAgICBjb250YWluZXIuc3R5bGUud2lkdGggPSBgbWluKCR7bGVuZ3RoICogNX12aCwke2xlbmd0aCAqIDJ9dncpYDtcbiAgICBjb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gYG1pbig1dmgsMnZ3KWA7XG4gICAgY29udGFpbmVyLnN0eWxlLm1pbkhlaWdodCA9IGAydmhgO1xuICAgIGNvbnRhaW5lci5zdHlsZS5taW5XaWR0aCA9IGAke2xlbmd0aCAqIDJ9dmhgO1xufVxuXG5leHBvcnQgY29uc3Qgc2V0U3RhbmRhcnRWZXJ0aWNhbFNoaXBEZXNpZ24gPSAoY29udGFpbmVyLCBsZW5ndGgpID0+IHtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaG9yaXpvbnRhbCcpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd2ZXJ0aWNhbCcpO1xuICAgIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBgbWluKCR7bGVuZ3RoICogNX12aCwke2xlbmd0aCAqIDJ9dncpYDtcbiAgICBjb250YWluZXIuc3R5bGUud2lkdGggPSBgbWluKDV2aCwydncpYDtcbiAgICBjb250YWluZXIuc3R5bGUubWluSGVpZ2h0ID0gYCR7bGVuZ3RoICogMn12aGA7XG4gICAgY29udGFpbmVyLnN0eWxlLm1pbldpZHRoID0gYDJ2aGA7XG59IiwiaW1wb3J0IHsgZ2FtZSB9IGZyb20gJy4uLy4uJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uLy4uL21vZGVscy9nYW1lQ29uZmlnJztcbmltcG9ydCB7IHNldERyYWdnYWJsZUZvclNoaXBzIH0gZnJvbSAnLi4vZHJhZ0FuZERyb3Avc2hpcHMnO1xuXG5leHBvcnQgY29uc3Qgdmlld1NoaXB5YXJkID0gKHNoaXB5YXJkKSA9PiB7XG4gICAgZmlsbFNoaXB5YXJkTm9kZShzaGlweWFyZCk7XG4gICAgc2V0RHJhZ2dhYmxlRm9yU2hpcHMoKTtcbn07XG5cbmNvbnN0IGZpbGxTaGlweWFyZE5vZGUgPSAoc2hpcHlhcmQpID0+IHtcbiAgICBDb25maWcuRWxlbWVudHMuc2hpcFR5cGVzLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgYWRkVHlwZSh0eXBlLCBzaGlweWFyZCk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBhZGRUeXBlID0gKHR5cGUsIHNoaXB5YXJkKSA9PiB7XG4gICAgY29uc3QgZG9jayA9IHNoaXB5YXJkLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKGAuJHt0eXBlfWApO1xuICAgIGNvbnN0IHNoaXBzID0gc2hpcHlhcmQuZ2V0U2hpcHNPZlR5cGUodHlwZSk7XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICBkb2NrLmFwcGVuZENoaWxkKHNoaXAuZ2V0Q29udGFpbmVyKCkpO1xuICAgIH0pO1xufTtcbiIsImltcG9ydCB7IGFwcGVuZENoaWxkcywgc2V0QXR0cmlidXRlcyB9IGZyb20gXCIuLi8uLi9oZWxwZXIvaGVscGVyXCI7XG5pbXBvcnQgeyBIb3Jpem9udGFsTGluZSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZWxlbWVudHMvYXR0cmlidXRlc1wiO1xuaW1wb3J0IHsgY29sb3JzVGltZXIsIGRyYXdUaW1lciB9IGZyb20gXCIuLi9hbmltYXRpb25zL3RpbWVyXCI7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVUaW1lclNWRyA9ICgpID0+IHtcbiAgICBsZXQgdGltZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgIGxldCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdsaW5lJyk7XG4gICAgc2V0QXR0cmlidXRlcyhsaW5lLCBIb3Jpem9udGFsTGluZS5ob3Jpem9udGFsKTtcbiAgICBhcHBlbmRDaGlsZHModGltZXIsIGxpbmUpO1xuICAgIHJldHVybiB0aW1lcjtcbn1cblxuZXhwb3J0IGNvbnN0IHZpZXdUaW1lciA9IChzdmcpID0+IHtcbiAgICBjb25zdCBhbmltYXRpb25zID0gW1xuICAgICAgICBjb2xvcnNUaW1lcihzdmcubGFzdENoaWxkLCAxNTAwMCwgJ25vbmUnLCBbeyBzdHJva2U6ICdncmVlbicgfSwgeyBzdHJva2U6ICdvcmFuZ2UnIH0sIHsgc3Ryb2tlOiAncmVkJyB9XSksXG4gICAgICAgIGRyYXdUaW1lcihzdmcubGFzdENoaWxkLCAxNTAwMCwgJ25vbmUnLCBbeyBzdHJva2VEYXNob2Zmc2V0OiAnOTl2dycgfSwgeyBzdHJva2VEYXNob2Zmc2V0OiAnMHZ3JyB9XSlcbiAgICBdXG4gICAgcmV0dXJuIGFuaW1hdGlvbnM7XG59OyIsImltcG9ydCB7IGdhbWUgfSBmcm9tIFwiLi4vLi5cIjtcbmltcG9ydCB7IHJlbW92ZUhpZGRlbiwgc2V0SGlkZGVuLCBzZXRMb3dPcGFjaXR5LCBzZXROb3JtYWxPcGFjaXR5IH0gZnJvbSBcIi4uL2FuaW1hdGlvbnMvY2hhbmdlVmlzaWJsZVwiO1xuXG5leHBvcnQgY29uc3QgaGlkZGVuSW50ZXJmYWNlQmVmb3JlU3RhcnRQbGF5ID0gKCkgPT4ge1xuICAgIHNldEhpZGRlbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheScpKVxuICAgIHNldEhpZGRlbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJykpXG4gICAgc2V0SGlkZGVuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXBzJykpXG4gICAgcmVtb3ZlSGlkZGVuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leGl0JykpXG59XG5cbmV4cG9ydCBjb25zdCB2aWV3SW50ZXJmYWNlQWZ0ZXJFbmRHYW1lID0gKCkgPT4ge1xuICAgIHJlbW92ZUhpZGRlbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheScpKVxuICAgIHJlbW92ZUhpZGRlbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJykpXG4gICAgcmVtb3ZlSGlkZGVuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXBzJykpXG4gICAgc2V0SGlkZGVuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leGl0JykpXG59XG5cbmV4cG9ydCBjb25zdCBzZXRQbGF5ZXJNb3ZlRGVzaWduID0gKGFpLCBwbGF5ZXIpID0+IHtcbiAgICBzZXROb3JtYWxPcGFjaXR5KGFpLmdldEdhbWVib2FyZCgpLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcueC1heGlzJykpXG4gICAgc2V0Tm9ybWFsT3BhY2l0eShhaS5nZXRHYW1lYm9hcmQoKS5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLnktYXhpcycpKVxuICAgIHNldE5vcm1hbE9wYWNpdHkoYWkuZ2V0R2FtZWJvYXJkKCkuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpKVxuICAgIHNldExvd09wYWNpdHkocGxheWVyLmdldEdhbWVib2FyZCgpLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcueC1heGlzJykpXG4gICAgc2V0TG93T3BhY2l0eShwbGF5ZXIuZ2V0R2FtZWJvYXJkKCkuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy55LWF4aXMnKSlcbiAgICBzZXRMb3dPcGFjaXR5KHBsYXllci5nZXRHYW1lYm9hcmQoKS5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLmJvYXJkJykpXG59XG5cbmV4cG9ydCBjb25zdCBzZXRBaU1vdmVEZXNpZ24gPSAoYWksIHBsYXllcikgPT4ge1xuICAgIHNldE5vcm1hbE9wYWNpdHkocGxheWVyLmdldEdhbWVib2FyZCgpLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcueC1heGlzJykpXG4gICAgc2V0Tm9ybWFsT3BhY2l0eShwbGF5ZXIuZ2V0R2FtZWJvYXJkKCkuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy55LWF4aXMnKSlcbiAgICBzZXROb3JtYWxPcGFjaXR5KHBsYXllci5nZXRHYW1lYm9hcmQoKS5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLmJvYXJkJykpXG4gICAgc2V0TG93T3BhY2l0eShhaS5nZXRHYW1lYm9hcmQoKS5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLngtYXhpcycpKVxuICAgIHNldExvd09wYWNpdHkoYWkuZ2V0R2FtZWJvYXJkKCkuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy55LWF4aXMnKSlcbiAgICBzZXRMb3dPcGFjaXR5KGFpLmdldEdhbWVib2FyZCgpLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKSlcbn1cblxuZXhwb3J0IGNvbnN0IHNldE1pbmlTaGlweWFyZERlc2lnbiA9IChzaGlweWFyZCkgPT4ge1xuICAgIGNvbnN0IGRlY2tzID0gc2hpcHlhcmQuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWNrJyk7XG4gICAgY29uc3Qgc2hpcHMgPSBzaGlweWFyZC5nZXROb2RlKCkucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAnKTtcbiAgICBzaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoJ21pbmktc2hpcCcpXG4gICAgfSlcbiAgICBkZWNrcy5mb3JFYWNoKGRlY2sgPT4ge1xuICAgICAgICBkZWNrLmNsYXNzTGlzdC5hZGQoJ21pbmktY2VsbCcpXG4gICAgfSlcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=